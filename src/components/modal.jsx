import React, { useState } from "react";
import Modal from "react-modal";
import { Stack, Button } from "@mui/material";

Modal.setAppElement("#root");
function InfoModal(props) {
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
            height: '70%',
            width: '50%',
            position: 'absolute',
            left:'25%',
            top:'15%'
          },
        }}
      >
        <h1>{props.name}</h1>
        <hr/>
        <h3>ISIN: {props.isin}</h3>
        <h3>CUSIP: {props.cusip}</h3>
        <h3>Issuer: {props.issuer}</h3>
        <h3>Maturity Date: {props.maturityDate.toString()}</h3>
        <h3>Coupon: {props.coupon}</h3>
        <h3>Type: {props.type}</h3>
        <h3>Face Value: {props.faceValue}</h3>
        <h3>Status: {props.status}</h3>
        <Stack spacing={2} direction='row'>
        <Button variant='contained' onClick={() => setModalIsOpen(false)}>Close</Button>
        <Button variant='contained' onClick={() => setModalIsOpen(false)}>Review</Button>
        </Stack>
      </Modal>
    </div>
  );
}

export default InfoModal;