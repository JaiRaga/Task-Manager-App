import axios from "axios";
import {
  ADD_TASK,
  GET_TASK,
  GET_TASKS,
  UPDATE_TASK,
  DELETE_TASK
} from "./types";

// Get all Tasks
export const loadTask = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/tasks");

    dispatch({
      type: GET_TASKS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Get individual Task
export const getTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/${id}`);

    dispatch({
      type: GET_TASK,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Add Task
export const addTask = (description) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ description });

  try {
    const res = await axios.post("/api/tasks", body, config);

    dispatch({
      type: ADD_TASK,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Update Task
export const updateTask = (description, completed = false, taskId) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  let body = null;

  if (description) {
    body = JSON.stringify({ description, completed });
  } else {
    body = JSON.stringify({ completed });
  }

  try {
    const res = await axios.patch(`/api/tasks/${taskId}`, body, config);

    dispatch({
      type: UPDATE_TASK,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Task
export const deleteTask = (taskId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/tasks/${taskId}`);

    dispatch({
      type: DELETE_TASK,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
