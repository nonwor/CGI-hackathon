import React, { useState, useContext } from "react";
import { PrimaryContext } from "../../components/context/PrimaryContext";
import axios from "axios";
import "./Questions.css";

import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export default function Questions() {
  const [value1, setValue1] = useState(5); // IT
  const [value2, setValue2] = useState(5); // CYBER
  const [value3, setValue3] = useState(5); // DATA
  const [value4, setValue4] = useState(5); // SWE
  const [value5, setValue5] = useState(5); // IT
  const [value6, setValue6] = useState(5); // CYBER
  const [value7, setValue7] = useState(5); // SWE
  const [value8, setValue8] = useState(5); // DATA
  const [sumVal, setSumVal] = useState([0, 0, 0, 0]);
  const [disabled, setDisabled] = useState(false);
  const [recCourse, setRecCourse] = useState("");

  let [showModal, setShowModal] = useState(false);

  const { userResponsesForm, setUserResponsesForm } =
    useContext(PrimaryContext);

  const biggestNum = Math.max(...sumVal);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const submitResponses = async () => {
    if (
      userResponsesForm.name.length < 1 ||
      userResponsesForm.email.length < 5
    ) {
      window.alert("you need to complete the other questionare");
    } else {
      // setUserResponsesForm({
      //   ...userResponsesForm,
      //   recommendedCourse: recCourse
      // })

      const userResponsesWithRec = {
        ...userResponsesForm,
        recommendedCourse: recCourse,
      };

      console.log(userResponsesWithRec);
      const response = axios({
        method: "POST",
        url: "http://localhost:3000/userResponses",
        data: userResponsesWithRec,
      });

      console.log(response.data);
      setUserResponsesForm({});
    }
  };

  const ModalContent = ({ image, course, link }) => {
    setRecCourse(course);
    return (
      <div className="modalcourse">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2 className="recCourse">
            We think the best course to sign up for would be {course}
          </h2>
          <img src={image} alt={course} className="courseImg" />
          <button onClick={submitResponses} className="questionsubmit">
            Submit form
          </button>
          <p className="courseCheck">
            Check our course{" "}
            <a href={link} className="link" target="_blank" rel="noreferrer">
              HERE
            </a>
          </p>
        </div>
      </div>
    );
  };

  const updateSumVal = () => {
    setSumVal([
      +value1 + +value5,
      +value2 + +value6,
      +value4 + +value7,
      +value3 + +value8,
    ]);
  };

  const submitValue = (e) => {
    e.preventDefault();

    // IT, CYBER, SWE, DATA

    updateSumVal();

    setDisabled(true);

    // find the biggest number and see which course it correlates to

    openModal();
  };

  return (
    <div className="modal">
      <h1 className="header">Questions</h1>
      <h2>
        Rate the questions from 1-10 with 1 being not really interested and 10
        being extremely interested
      </h2>
      <form onSubmit={submitValue}>
        <div className="questions">
          <div className="question1">
            <li>Do you enjoy working on hands-on products?</li>
            <Box sx={{ width: "60%" }}>
              <Slider
                value={value1}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setValue1(e.target.value);
                }}
              />
            </Box>
          </div>
          <hr />
          <div className="question2">
            <li>How important is privacy to you?</li>
            <Box sx={{ width: "60%" }}>
              <Slider
                value={value2}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setValue2(e.target.value);
                }}
              />
            </Box>
          </div>
          <hr />
          <div className="question3">
            <li>
              How frequently do you explore alternative or potentially simpler
              approaches after resolving a problem?
            </li>
            <Box sx={{ width: "60%" }}>
              <Slider
                value={value3}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setValue3(e.target.value);
                }}
              />
            </Box>
          </div>
          <hr />
          <div className="question4">
            <li>
              Do you handle and respond to feedback and constructive criticism
              well?
            </li>
            <Box sx={{ width: "60%" }}>
              <Slider
                value={value4}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setValue4(e.target.value);
                }}
              />
            </Box>
          </div>
          <hr />
          <div className="question5">
            <li>
              If you possess exceptional skill in a particular subject, how
              confident are you in your ability to convey that knowledge to
              someone entirely new to the topic?
            </li>
            <Box sx={{ width: "60%" }}>
              <Slider
                value={value5}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setValue5(e.target.value);
                }}
              />
            </Box>
          </div>
          <hr />
          <div className="question6">
            <li>
              How interested are you in exploring ethical hacking and privacy
              regulations?
            </li>
            <Box sx={{ width: "60%" }}>
              <Slider
                value={value6}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setValue6(e.target.value);
                }}
              />
            </Box>
          </div>
          <hr />
          <div className="question7">
            <li>
              How determined would you be to find a solution if you encountered
              a problem that seemed unsolvable?
            </li>
            <Box sx={{ width: "60%" }}>
              <Slider
                value={value7}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setValue7(e.target.value);
                }}
              />
            </Box>
          </div>
          <hr />
          <div className="question8">
            <li>Do you enjoy organizing and maintaining things?</li>
            <Box sx={{ width: "60%" }}>
              <Slider
                value={value8}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setValue8(e.target.value);
                }}
              />
            </Box>
          </div>

          <input
            type="submit"
            value="Submit"
            className="questionsubmit"
            disabled={disabled}
          />
        </div>
      </form>

      {biggestNum === sumVal[0] && showModal ? (
        <ModalContent
          image="/src/assets/it.jpg"
          course="IT"
          link="https://perscholas.org/courses/it-support/it-support-atlanta/"
        />
      ) : biggestNum === sumVal[1] && showModal ? (
        <ModalContent
          image="/src/assets/csec.jpg"
          course="Cyber Security"
          link="https://perscholas.org/courses/cybersecurity/cybersecurity-atlanta/"
        />
      ) : biggestNum === sumVal[2] && showModal ? (
        <ModalContent
          image="/src/assets/swe.jpg"
          course="Software Engineering"
          link="https://perscholas.org/courses/software-engineer/software-engineer-atlanta/"
        />
      ) : biggestNum === sumVal[3] && showModal ? (
        <ModalContent
          image="/src/assets/dataengineer.jpg"
          course="Data Engineering"
          link="https://perscholas.org/courses/data-analytics-powered-by-cgi/tennessee/"
        />
      ) : (
        <></>
      )}
    </div>
  );
}
