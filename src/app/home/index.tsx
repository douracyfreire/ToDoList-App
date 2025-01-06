import React, { useState, useEffect } from "react";
import { FlatList, Keyboard } from "react-native";
import { useRouter } from "expo-router";
import Styles from "./styles";
import Icons from "@/assets/icons";
import ActionInput from "@/components/actioninput";
import TaskFilter from "@/components/taskfilter";
import EmptyState from "@/components/emptystate";
import Button from "@/components/button";
import TaskItem from "@/components/task";
import Modal from "@/components/modal";
import AlertModal from "@/components/alertmodal";
import Loading from "@/components/loading";
import { getTasks, createTask, updateTask, deleteTask } from "@/services/taskServices";
import { Task } from "@/services/simulatedApi";

export default function HomeScreen() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalType, setModalType] = useState<"new" | "details" | "edit" | null>(null);
  const [activeFilter, setActiveFilter] = useState<"created" | "completed">("created");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedTasks, setSearchedTasks] = useState<Task[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      setIsLoading(true);
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
      setError(null);
    } catch {
      setError("Erro ao receber dados da API.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleAddTask() {
    if (newTask.trim()) {
      const createdTask = await createTask(newTask.trim());
      setTasks((prev) => [...prev, createdTask]);
      setNewTask("");
      setModalType(null);
    }
  }

  async function handleToggleTask(id: string) {
    try {
      const taskToUpdate = tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        const updatedTask = await updateTask(id, {
          text: taskToUpdate.text,
          completed: !taskToUpdate.completed,
        });

        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.id === id ? updatedTask : task))
        );

        if (searchedTasks) {
          setSearchedTasks((prevSearchedTasks) =>
            prevSearchedTasks
              ? prevSearchedTasks.map((task) =>
                  task.id === id ? updatedTask : task
                )
              : null
          );
        }
      }
    } catch {
      setError("Erro ao atualizar tarefa.");
    }
  }

  async function handleDeleteTask(id: string) {
    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setSelectedTask(null);
    setModalType(null);
  }

  async function handleEditTask() {
    if (selectedTask && newTask.trim()) {
      const updatedTask = await updateTask(selectedTask.id, {
        text: newTask.trim(),
        completed: selectedTask.completed,
      });
      setTasks((prev) =>
        prev.map((task) => (task.id === selectedTask.id ? updatedTask : task))
      );
      setNewTask("");
      setSelectedTask(null);
      setModalType(null);
    }
  }

  function handleSearchTask() {
    if (searchQuery.trim()) {
      const results = tasks.filter((task) =>
        task.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchedTasks(results);
    } else {
      setSearchedTasks(null);
    }
    Keyboard.dismiss();
  }

  const filteredTasks =
    searchedTasks ?? (activeFilter === "created" ? tasks : tasks.filter((task) => task.completed));

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Logout onPress={() => router.replace("/")}>
          <Icons.Exit />
        </Styles.Logout>
        <Icons.Logo />
      </Styles.Header>

      <Styles.Main>
        <ActionInput
          placeholder="Pesquisar tarefa"
          value={searchQuery}
          onChangeText={setSearchQuery}
          buttonIcon={<Icons.Search />}
          onButtonPress={handleSearchTask}
          onSubmitEditing={handleSearchTask}
          returnKeyType="search"
        />

        <Styles.TasksContent>
          <TaskFilter
            totalCreated={tasks.length}
            totalCompleted={tasks.filter((task) => task.completed).length}
            activeFilter={activeFilter}
            onFilterChange={(filter) => setActiveFilter(filter)}
          />

          {isLoading ? (
            <Styles.LoadingContainer>
              <Loading />
            </Styles.LoadingContainer>
          ) : (
            <Styles.TaskItems showsVerticalScrollIndicator={false}>
              <FlatList
                data={filteredTasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TaskItem
                    text={item.text}
                    completed={item.completed}
                    onToggle={() => handleToggleTask(item.id)}
                    onDelete={() => {
                      setSelectedTask(item);
                      setModalType("details");
                    }}
                  />
                )}
                ListEmptyComponent={
                  <EmptyState
                    title="Você ainda não tem tarefas cadastradas"
                    subtitle="Crie tarefas e organize seus itens a fazer"
                  />
                }
                scrollEnabled={false}
              />
            </Styles.TaskItems>
          )}
        </Styles.TasksContent>
      </Styles.Main>

      <Styles.AddTask>
        <Button
          title="Criar"
          icon={<Icons.PlusCircle />}
          onPress={() => setModalType("new")}
        />
      </Styles.AddTask>

      <AlertModal
        visible={!!error}
        title="ERRO"
        message={error || ""}
        buttonLabel="Tentar novamente"
        onButtonPress={() => {
          setError(null);
          fetchTasks();
        }}
      />

      <Modal
        visible={modalType === "new"}
        title="Nova tarefa"
        onClose={() => setModalType(null)}
      >
        <ActionInput
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChangeText={setNewTask}
          buttonIcon={<Icons.PlusCircle />}
          onButtonPress={handleAddTask}
          disabledButton={!newTask.trim()}
        />
      </Modal>

      <Modal
        visible={modalType === "details" && selectedTask !== null}
        title={`Tarefa: ${selectedTask?.id}`}
        onClose={() => setModalType(null)}
      >
        <Styles.TaskDetails>{selectedTask?.text}</Styles.TaskDetails>
        <Styles.ButtonRow>
          <Styles.ButtonItem>
            <Button
              title="Editar"
              onPress={() => {
                setNewTask(selectedTask!.text);
                setModalType("edit");
              }}
            />
          </Styles.ButtonItem>
          <Styles.ButtonItem>
            <Button title="Remover" onPress={() => handleDeleteTask(selectedTask!.id)} />
          </Styles.ButtonItem>
        </Styles.ButtonRow>
      </Modal>

      <Modal
        visible={modalType === "edit" && selectedTask !== null}
        title="Editar tarefa"
        onClose={() => setModalType(null)}
      >
        <ActionInput
          placeholder="Edite sua tarefa"
          value={newTask}
          onChangeText={setNewTask}
          buttonIcon={<Icons.PlusCircle />}
          onButtonPress={handleEditTask}
          disabledButton={!newTask.trim()}
        />
      </Modal>
    </Styles.Container>
  );
}