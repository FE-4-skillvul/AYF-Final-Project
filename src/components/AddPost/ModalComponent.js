import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getCategory } from "../../actions/userAction";

const notify = () =>
  toast.success("Threads Added.", {
    duration: 4000,
    position: "bottom-left",
  });

const ModalComponent = ({ show, HideHandler }) => {
  const { addPostResult, getCategoryResult } = useSelector(
    (state) => state.UserReducer
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("");
  const [category, setCategory] = useState([]);
  const [publish] = useState(false);
  const createdAt = Date.now();
  const uid = localStorage.getItem("USERNAME");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title: title,
        createdAt,
        content: content,
        category: theme,
        author: uid,
      })
    );
  };

  useEffect(() => {
    if (addPostResult) {
      dispatch(HideHandler);
      setTitle("");
      setContent("");
    }
  }, [addPostResult, dispatch]);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  useEffect(() => {
    if (getCategoryResult) {
      setCategory(getCategoryResult.data);
    }
  }, [getCategoryResult]);

  return (
    <div className="mt-5">
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={HideHandler}
        size="lg"
      >
        <div>
          <div className="main-popup sm-2">
            <div onClick={HideHandler} className="close float-end">
              &times;
            </div>
            <div className="title">
              <h3>POST YOUR THREADS</h3>
            </div>
            <form id="form" onSubmit={(e) => handleSubmit(e)}>
              <input
                className="input-title"
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masukkan judul artikel"
                required
                maxLength={100}
              ></input>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                required
              >
                {category.map((x, index) => {
                  return (
                    <option key={index} value={x._id} defaultValue>
                      {x.category}
                    </option>
                  );
                })}
              </select>
              <textarea
                className="input-articles"
                name="content"
                id="content"
                cols="30"
                rows="10"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Masukkan artikel disini"
                maxLength={350}
              ></textarea>
              <div className="text-end">
                <button
                  onClick={notify}
                  type="submit"
                  id="submit"
                  className="btn btn-dark"
                >
                  <i className="fa-solid fa-plus">Add </i>
                  <Toaster />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
