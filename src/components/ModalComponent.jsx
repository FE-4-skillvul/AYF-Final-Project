import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="Position">
        Edit Profile
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form className="form-edit-profile" onSubmit="#">
              <div className="form-left">
                <img
                  className="user-profile"
                  src="../img/user-profile.png"
                  alt=""
                />{" "}
                <br /> <br />
                <input type="file" name="" id="" />
              </div>
              <div className="form-right">
                <label>Email</label>
                <br />
                <input type="email" name="" id="" />
                <br />
                <label>Username</label>
                <br />
                <input type="text" name="" id="" />
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="" id="" />
                <br />
              </div>
            </form>
          </div>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
