import React, { Fragment, useState } from "react";
import Modal from "react-modal";

const UpdateTask = ({ taskId, description, modalIsOpen }) => {
  const [modalISOpen, setModalIsOpen] = useState(false);
  return (
    <Fragment>
      <Modal isOpen={modalIsOpen}>
        <input type='text' />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </Fragment>
  );
};

export default UpdateTask;
