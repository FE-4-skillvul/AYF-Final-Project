import React from "react";
import Card from "react-bootstrap/Card";

function Topics() {
  return (
    <div>
      <div className="container text-center">
        <h3 className="mt-5 mb-3">Topics</h3>
        <div className="row justify-content-center ">

          <div className="col-lg-3 col-md-12 d-flex justify-content-center text-center mb-3">
            <Card style={{ height: "10rem", width:"15rem" }} className="card rounded-08 shadow border-0 p-2">
              <Card.Body>
                <Card.Title>
                  <img
                    style={{ height: "50px" }}
                    src="/../../images/politics.png"
                    alt=""
                  />
                  <p className="mt-3">Politics</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-12 d-flex justify-content-center text-center mb-3">
            <Card style={{ height: "10rem", width:"15rem" }} className="card rounded-08 shadow border-0 p-2">
              <Card.Body>
                <Card.Title>
                  <img
                    style={{ height: "50px" }}
                    src="/../../images/anxiety.png"
                    alt=""
                  />
                  <p className="mt-2">Mental Health</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-12 d-flex justify-content-center text-center mb-3">
            <Card style={{ height: "10rem", width:"15rem" }} className="card rounded-08 shadow border-0 p-2">
              <Card.Body>
                <Card.Title>
                  <img
                    style={{ height: "50px" }}
                    src="/../../images/delivery-box.png"
                    alt=""
                  />
                  <p className="mt-3">Other</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Topics;
