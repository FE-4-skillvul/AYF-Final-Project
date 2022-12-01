import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { changePass, changeThread, getListUser, getUname } from "../actions/userAction";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useParams } from "react-router-dom";
function EditThreads() {
  const { getListUserResult, getUnameResult } = useSelector((state) => state.UserReducer);
  const [show, setShow] = useState(false);
  const [threads, setThreads] = useState([]);
  const [userData, setUserData] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { changePassResult, changeThreadResult } = useSelector((state) => state.UserReducer);
  const filterThreads = threads.filter((x)=> x._id === id)

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  useEffect(() => {
    if (getListUserResult) {
      setThreads(getListUserResult.data);
    }
  }, [getListUserResult]);

  useEffect(() => {
    dispatch(getUname());
  }, [dispatch]);

  useEffect(() => {
    if (getUnameResult) {
     setUserData (getUnameResult.data) 
    }
  }, [getUnameResult, dispatch]);

  
  useEffect(() => {
    if (getListUserResult) {
      setTitle(filterThreads.map((e)=> e.title).toString());
      setContent(filterThreads.map((e)=> e.content).toString());
    }
  }, [getListUserResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      changeThread({
        title: title,
        content: content,
        user: userData._id
      }, id)
    );
  };
  
  useEffect(() => {
    if (changeThreadResult) {
      dispatch(handleClose);
    }
  }, [changeThreadResult, dispatch]);

  useEffect(() => {
    if (changePassResult) {
      dispatch(handleClose);
      setPassword("");
    }
  }, [changePassResult, dispatch]);
 console.log(title);
  return (
    <>
      <Button
        variant="light"
        size="sm"
        style={{ height: "35px" }}
        onClick={handleShow}
        className="Position"
      >
        Edit Threads
      </Button>
      <div>
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
         
          
                <div onKeyDown={e => e.stopPropagation()}
                      onClick={e => e.stopPropagation()}
                      onFocus={e => e.stopPropagation()}
                      onMouseOver={e => e.stopPropagation()}>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="form-edit-profile"
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Update Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter New Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <Form.Label className="mt-3">Update Content</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter New Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      Save Changes
                    </Button>
                  </form>
                </div>
            
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
}

export default EditThreads;
