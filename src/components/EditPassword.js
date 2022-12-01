import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { changePass } from "../actions/userAction";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
function EditPass() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { changePassResult } = useSelector(
    (state) => state.UserReducer
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      changePass({
        password: password,
      })
    );
  };

  useEffect(() => {
    if (changePassResult) {
      dispatch(handleClose);
      setPassword("");
    }
  }, [changePassResult, dispatch]);
  

  return (
    <>
      <Button
        variant="light"
        size="sm"
        style={{ height: "35px" }}
        onClick={handleShow}
        className="Position"
      >
        <CreateOutlinedIcon/>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="form-edit-profile"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Update Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter New Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your password with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="success" type="submit">
                Save Changes
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditPass;
