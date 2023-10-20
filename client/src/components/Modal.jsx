import React from "react";
import "./Modal.css";

export default function Modal() {
  return (
    <div className="modal">
      <h1 className="header">Questions</h1>
      <div className="questions">
        <div className="question1">
          <li>Do you enjoy working on hands-on products?</li>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider1"
          ></input>
        </div>
        <div className="question2">
          <li>How important is privacy to you?</li>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider2"
          ></input>
        </div>
        <div className="question3">
          <li>
            How frequently do you explore alternative or potentially simpler
            approaches after resolving a problem?
          </li>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider3"
          ></input>
        </div>
        <div className="question4">
          <li>
            Do you handle and respond to feedback and constructive criticism
            well?
          </li>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider4"
          ></input>
        </div>
        <div className="question5">
          <li>
            If you possess exceptional skill in a particular subject, how
            confident are you in your ability to convey that knowledge to
            someone entirely new to the topic?
          </li>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider5"
          ></input>
        </div>
        <div className="question6">
          <li>
            How interested are you in exploring ethical hacking and privacy
            regulations?
          </li>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider6"
          ></input>
        </div>
        <div className="question7">
          <li>
            How frequently do you explore alternative or potentially simpler
            approaches after resolving a problem?
          </li>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider7"
          ></input>
        </div>
        <div className="question8">
          <li>Do you enjoy organizing and maintaining things?</li>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider8"
          ></input>
        </div>
      </div>
    </div>
  );
}
