import {
  ADD_TASK,
  GET_TASK,
  GET_TASKS,
  UPDATE_TASK,
  DELETE_TASK
} from "../actions/types";

const initialState = {
  task: null,
  tasks: [],
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        task: payload,
        tasks: [payload, ...state.tasks],
        loading: false
      };
    case GET_TASK:
      return {
        ...state,
        task: payload,
        loading: false
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: payload,
        loading: false
      };
    case UPDATE_TASK:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((task) =>
          task._id === payload._id ? { ...task, ...payload } : task
        )
      };
    case DELETE_TASK:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter((task) => task._id !== payload.id)
      };
    default:
      return state;
  }
};
