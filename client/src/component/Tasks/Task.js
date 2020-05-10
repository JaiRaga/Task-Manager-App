import React, { Fragment, useState, useEffect } from "react";
import { updateTask } from "../../actions/task";
import { useDispatch } from "react-redux";
import { loadTask } from "../../actions/task";

const Task = ({ description, completed: done, taskId }) => {
  const [complete, setComplete] = useState(done);
  const dispatch = useDispatch();
  let completed = done ? "Completed" : "Pending";

  useEffect(() => {
    completed = done ? "Completed" : "Pending";
  });

  const onComplete = () => {
    setComplete(!done);
    dispatch(updateTask(null, complete, taskId));
  };

  return (
    <Fragment>
      <h5>{description}</h5>
      <button onClick={onComplete}>{completed}</button>
    </Fragment>
  );
};

export default Task;
