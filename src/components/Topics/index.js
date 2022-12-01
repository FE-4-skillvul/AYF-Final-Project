import React from "react";
import Card from "react-bootstrap/Card";
import { Link, Outlet } from "react-router-dom";

function Topics() {
  return (
    <div>
      <div className="container text-center">
        <h3 className="mt-5 mb-3">Topics</h3>
        <div className="row justify-content-center ">

          
          <div className="col-lg-3 col-md-12 d-flex justify-content-center text-center mb-3">
           <Link to='politics' style={{textDecoration:'none', color:"black"}}>
            <Card style={{ height: "10rem", width:"15rem" }} className="card rounded-08 shadow border-0 p-2">
              <Card.Body>
                <Card.Title>
                  <img
                    style={{ height: "50px" }}
                    src="/../../images/social-care.png"
                    alt=""
                  />
                  <p className="mt-3">Social</p>
                </Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-12 d-flex justify-content-center text-center mb-3">
          <Link to='mental' style={{textDecoration:'none', color:"black"}}>
            <Card style={{ height: "10rem", width:"15rem" }} className="card rounded-08 shadow border-0 p-2">
              <Card.Body>
                <Card.Title>
                  <img
                    style={{ height: "50px" }}
                    src="/../../images/anxiety.png"
                    alt=""
                  />
                  <p className="mt-3">Mental Health</p>
                </Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-12 d-flex justify-content-center text-center mb-3">
          <Link to='other' style={{textDecoration:'none', color:"black"}}>
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
            </Link>
          </div>
        <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Topics;
