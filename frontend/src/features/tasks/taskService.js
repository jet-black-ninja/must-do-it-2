import axios from 'axios'

const API_URL = 'https://must-do-it-fs.vercel.app/api/tasks/'

// Create new task
const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  
  const response = await axios.post(API_URL, taskData, config)

  return response.data;
}

// Get user tasks
const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config);
  return response.data;
}

// Delete user task
const deleteTask = async (taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + taskId, config)

  return response.data
}

const taskService = {
  createTask,
  getTasks,
  deleteTask,
}

export default taskService