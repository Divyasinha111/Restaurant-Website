import React from "react";
import "./Contact.css";
import { ContactInfo } from "../components/ContactInfo";
import { Form } from "react-bootstrap";
import { Reviews } from "../components/Reviews";
import Swal from "sweetalert2";

function Contact() {
  function handelsubmit(e) {
    e.preventDefault();
    console.log("handle  submit");
    
    Swal.fire({
      position: "top-middle",
      icon: "success",
      title: "Your form has been submitted",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div className="contact-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Contact us</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Form  onSubmit={handelsubmit}>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="first-name">First Name</Form.Label>
                  <Form.Control type="text" id="first-name" required/>
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="last-name">Last Name</Form.Label>
                  <Form.Control type="text" id="last-name" required/>
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="email-address">Email Address</Form.Label>
                  <Form.Control type="email" id="email-address" required/>
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
                  <Form.Control type="tel" id="phone-number" required/>
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="date">Date</Form.Label>
                  <Form.Control type="date" id="date" required/>
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="guests-number">
                    Number Of Guests
                  </Form.Label>
                  <Form.Control type="number" id="guests-number" required/>
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="comments">Comments</Form.Label>
                <Form.Control type="textarea" id="comments" />
              </Form.Group>

              <button
                type="submit"
                className="btn btn-success btn-lg"
               
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <Reviews />
      </div>
    </div>
  );
}

export default Contact;
