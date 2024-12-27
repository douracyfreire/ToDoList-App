import React, { useState } from "react";
import { useRouter } from "expo-router";
import Styles from "./styles";
import Icons from "@/assets/icons";
import ActionInput from "@/components/actioninput";
import TaskFilter from "@/components/taskfilter";
import EmptyState from "@/components/emptystate";
import Button from "@/components/button";

interface Task{
  id: string;
  text: string;
  completed: boolean;
}

export default function HomeScreen(){
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalType, setModalType] = useState<"new" | "details" | "edit" | null>(null);
  const [activeFilter, setActiveFilter] = useState<"created" | "completed">("created");


 return(
  <Styles.Container>
    <Styles.Header>
      <Styles.Logout onPress={() => router.replace('/')}>
        <Icons.Exit />
      </Styles.Logout>

      <Icons.Logo />
    </Styles.Header>

    <Styles.Main>
      <ActionInput
        placeholder="Pesquisar tarefa"
        value=""
        onChangeText={() => {}}
        buttonIcon={<Icons.Search />}
        onButtonPress={() => {}}
      />

      <Styles.TasksContent>
        <TaskFilter 
          totalCreated={tasks.length}
          totalCompleted={tasks.filter((task) => task.completed).length}
          activeFilter={activeFilter}
          onFilterChange={(filter) => setActiveFilter(filter)}
        />

        <EmptyState 
          title="Você ainda não tem tarefas cadastradas"
          subtitle="Crie tarefas e organize seus itens a fazer"
        />
      </Styles.TasksContent>
    </Styles.Main>

    <Styles.AddTask>
      <Button 
        title="Criar"
        icon={<Icons.PlusCircle />}
        onPress={() => setModalType("new")}
      />
    </Styles.AddTask>
  </Styles.Container>
 );
}