import React from "react";
import Modal from "react-modal";
import { Stack, Button } from "@mui/material";

Modal.setAppElement("#root");
function InfoModal(props) {
  return (
    <div>
      <Modal
        isOpen
        onRequestClose={() => props.close()}
        style={{
          overlay: {
            backgroundColor: 'grey',
          },
          content: {
            color: 'black',
            height: '70%',
            width: '50%',
            position: 'absolute',
            left:'25%',
            top:'15%'
          },
        }}
      >
        <h1>{props.id}</h1>
        {/* Need to implement a getSecurityDetailsById in the backend */}
        <h2>Name: </h2>
        <h2>Quantity: </h2>
        <h2>Price: </h2>
        <h2>Maturity Date: </h2>
        <Stack spacing={2} direction='row'>
        <Button variant='contained' onClick={() => props.close()}>Close</Button>
        <Button variant='contained' onClick={() => props.close()}>Review</Button>
        </Stack>
      </Modal>
    </div>
  );
}

export default InfoModal;