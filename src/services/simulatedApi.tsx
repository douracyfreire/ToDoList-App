export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const mockData = {
  tasks: [
    {id: "1", text: "Tarefa 1", completed: false},
    {id: "2", text: "Tarefa 2", completed: true},
    {id: "3", text: "Tarefa 3", completed: false},
  ],
};

export async function login(username: string, password: string) {
  if(username !== "admin"){
    throw new Error("USERNAME_INVALID");
  }
  if(password !== "password"){
    throw new Error("PASSWORD_INVALID");
  }
  return { token: "fake-jwt-token" };
}

export async function getTasks(){
  return mockData.tasks;
}

export async function createTask(task: string) {
  const newTask = {id: Date.now().toString(), text: task, completed: false};
  mockData.tasks.push(newTask);
  return newTask;
}

export async function updateTask(id: string, updates: { text: string; completed: boolean }) {
  const taskIndex = mockData.tasks.findIndex((t) => t.id === id);
  if (taskIndex > -1) {
    mockData.tasks[taskIndex] = {
      ...mockData.tasks[taskIndex],
      ...updates,
    };
    return mockData.tasks[taskIndex];
  }
  throw new Error("Tarefa não encontrada!");
}

export async function deleteTask(id: string) {
  const taskId = mockData.tasks.findIndex((t) => t.id === id);
  if(taskId > -1){
    const [deletedTask] = mockData.tasks.splice(taskId, 1);
    return deletedTask;
  }
  throw new Error("Tarefa não encontrada!");
}