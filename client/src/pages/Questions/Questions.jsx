import React, {useState, useContext} from "react";
import { PrimaryContext } from "../../components/context/PrimaryContext";
import axios from 'axios';
import "./Questions.css";


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

  const {userResponsesForm, setUserResponsesForm} = useContext(PrimaryContext);

  const biggestNum = Math.max(...sumVal);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const submitResponses = async () => {
 
    if (userResponsesForm.name.length < 1 || userResponsesForm.email.length < 5) {
      window.alert('you need to complete the other questionare')
    } else {
      // setUserResponsesForm({
      //   ...userResponsesForm,
      //   recommendedCourse: recCourse
      // })

      const userResponsesWithRec = {
        ...userResponsesForm,
        recommendedCourse: recCourse
      }

      console.log(userResponsesWithRec)
      const response = axios({
        method: 'POST',
        url: 'http://localhost:3000/userResponses',
        data: userResponsesWithRec
      })
  
      console.log(response.data)
      setUserResponsesForm({})
    }

  }

  const ModalContent = ({ image, course, link }) => {
    setRecCourse(course)
    return (
      <div className="modalcourse">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>We think the best course to sign up for would be {course}</h2>
          <img src={image} alt={course} className="courseImg" />
          <button onClick={submitResponses}>Submit form</button>
          <p>
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
            <input
              type="range"
              min="1"
              max="10"
              className="slider1"
              value={value1}
              onChange={(e) => {
                setValue1(e.target.value);
              }}
            ></input>
            <span className="range-slider-value">{value1}</span>
          </div>
          <hr />
          <div className="question2">
            <li>How important is privacy to you?</li>
            <input
              type="range"
              min="1"
              max="10"
              className="slider2"
              value={value2}
              onChange={(e) => {
                setValue2(e.target.value);
              }}
            ></input>
            <span className="range-slider-value">{value2}</span>
          </div>
          <hr />
          <div className="question3">
            <li>
              How frequently do you explore alternative or potentially simpler
              approaches after resolving a problem?
            </li>
            <input
              type="range"
              min="1"
              max="10"
              className="slider3"
              value={value3}
              onChange={(e) => {
                setValue3(e.target.value);
              }}
            ></input>
            <span className="range-slider-value">{value3}</span>
          </div>
          <hr />
          <div className="question4">
            <li>
              Do you handle and respond to feedback and constructive criticism
              well?
            </li>
            <input
              type="range"
              min="1"
              max="10"
              className="slider4"
              value={value4}
              onChange={(e) => {
                setValue4(e.target.value);
              }}
            ></input>
            <span className="range-slider-value">{value4}</span>
          </div>
          <hr />
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
              className="slider5"
              value={value5}
              onChange={(e) => {
                setValue5(e.target.value);
              }}
            ></input>
            <span className="range-slider-value">{value5}</span>
          </div>
          <hr />
          <div className="question6">
            <li>
              How interested are you in exploring ethical hacking and privacy
              regulations?
            </li>
            <input
              type="range"
              min="1"
              max="10"
              className="slider6"
              value={value6}
              onChange={(e) => {
                setValue6(e.target.value);
              }}
            ></input>
            <span className="range-slider-value">{value6}</span>
          </div>
          <hr />
          <div className="question7">
            <li>
              How determined would you be to find a solution if you encountered
              a problem that seemed unsolvable?
            </li>
            <input
              type="range"
              min="1"
              max="10"
              className="slider7"
              value={value7}
              onChange={(e) => {
                setValue7(e.target.value);
              }}
            ></input>
            <span className="range-slider-value">{value7}</span>
          </div>
          <hr />
          <div className="question8">
            <li>Do you enjoy organizing and maintaining things?</li>
            <input
              type="range"
              min="1"
              max="10"
              className="slider8"
              value={value8}
              onChange={(e) => {
                setValue8(e.target.value);
              }}
            ></input>
            <span className="range-slider-value">{value8}</span>
          </div>
          <hr />
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
