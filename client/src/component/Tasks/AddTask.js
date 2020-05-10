import React, { Fragment, useState } from "react";
import { addTask } from "../../actions/task";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(description));
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          name='description'
          value={description}
          placeholder='Enter a task'
          onChange={(e) => onChange(e)}
        />
        <input type='submit' value='Add' />
      </form>
    </Fragment>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default AddTask;
