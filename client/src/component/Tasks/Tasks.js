import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  return (
    <Fragment>
      {tasks.map((task) => (
        <Task
          key={task._id}
          description={task.description}
          completed={task.completed}
          taskId={task._id}
        />
      ))}
    </Fragment>
  );
};

export default Tasks;
