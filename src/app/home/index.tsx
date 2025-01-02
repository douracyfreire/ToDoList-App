import React, { useState } from "react";
import { useRouter } from "expo-router";
import Styles from "./styles";
import Icons from "@/assets/icons";
import ActionInput from "@/components/actioninput";
import TaskFilter from "@/components/taskfilter";
import EmptyState from "@/components/emptystate";
import Button from "@/components/button";
import Task from "@/components/task";
import { FlatList } from "react-native";
import Modal from "@/components/modal";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function HomeScreen() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalType, setModalType] = useState<"new" | "details" | "edit" | null>(null);
  const [activeFilter, setActiveFilter] = useState<"created" | "completed">("created");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedTasks, setSearchedTasks] = useState<Task[] | null>(null);

  function handleAddTask() {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: newTask.trim(), completed: false }]);
      setNewTask("");
      setModalType(null);
    }
  }

  function handleToggleTask(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setSelectedTask(null);
    setModalType(null);
  }

  function handleEditTask() {
    if (selectedTask && newTask.trim()) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === selectedTask.id ? { ...task, text: newTask.trim() } : task
        )
      );
      setNewTask("");
      setSelectedTask(null);
      setModalType(null);
    }
  }

  function handleSearchTask(){
    if(searchQuery.trim()){
      const results = tasks.filter((task) => task.text.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
      setSearchedTasks(results);
    }
    else{
      setSearchedTasks(null);
    }
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
        />

        <Styles.TasksContent>
          <TaskFilter
            totalCreated={tasks.length}
            totalCompleted={tasks.filter((task) => task.completed).length}
            activeFilter={activeFilter}
            onFilterChange={(filter) => setActiveFilter(filter)}
          />

          <Styles.TaskItems showsVerticalScrollIndicator={false}>
            <FlatList
              data={filteredTasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Task
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
        </Styles.TasksContent>
      </Styles.Main>

      <Styles.AddTask>
        <Button
          title="Criar"
          icon={<Icons.PlusCircle />}
          onPress={() => setModalType("new")}
        />
      </Styles.AddTask>

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