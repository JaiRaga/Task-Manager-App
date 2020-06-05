import React, { Fragment, useState, useEffect } from "react";
import { updateTask, loadTask } from "../../actions/task";
import { useDispatch } from "react-redux";
import UpdateTask from "./UpdateTask";

const Task = ({ description, completed: done, taskId }) => {
  let [complete, setComplete] = useState(done);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(complete);
    if (complete) {
      dispatch(updateTask(null, complete, taskId));
    }
  }, [complete]);

  return (
    <Fragment>
      <h5 onClick={() => setModalIsOpen(true)}>{description}</h5>
      <UpdateTask
        id={taskId}
        description={description}
        modalIsOpen={modalIsOpen}
      />
      <button onClick={() => setComplete(true)}>
        {complete ? "Completed" : "Pending"}
      </button>
    </Fragment>
  );
};

export default Task;
