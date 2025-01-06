import { 
  login as simulatedLogin, 
  getTasks as simulatedGetTasks, 
  createTask as simulatedCreateTask, 
  updateTask as simulatedUpdateTask, 
  deleteTask as simulatedDeleteTask,
} from "./simulatedApi";

export async function login(username: string, password: string) {
  return simulatedLogin(username, password);
}

export async function getTasks() {
  return simulatedGetTasks();
}

export async function createTask(task: string) {
  return simulatedCreateTask(task);
}

export async function updateTask(id: string, updates: { text: string; completed: boolean }) {
  return simulatedUpdateTask(id, updates);
}

export async function deleteTask(id: string) {
  return simulatedDeleteTask(id);
}