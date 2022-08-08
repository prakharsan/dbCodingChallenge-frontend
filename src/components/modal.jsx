import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function InfoModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'grey',
          },
          content: {
            color: 'black',
            height: '50%',
            width: '50%',
            position: 'absolute',
            left:'25%',
            top:'25%'
          },
        }}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default InfoModal;