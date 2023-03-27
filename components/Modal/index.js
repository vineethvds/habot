import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { Children, useState } from 'react';
import style from '../../pages/job-review/JobReview.module.css';

const ModalComponent = (props) => {
  const { children } = props;
  return (
    <div>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <div>
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              <h5 className={style.modalTitle} id='exampleModalLabel'>
                {props.title}
              </h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
