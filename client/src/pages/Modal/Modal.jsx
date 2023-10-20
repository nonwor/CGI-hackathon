import React from "react";
import "./Modal.css";
import { useState } from "react";

export default function Modal() {
  const [value1, setValue1] = useState(5); // IT
  const [value2, setValue2] = useState(5); // CYBER
  const [value3, setValue3] = useState(5); // DATA
  const [value4, setValue4] = useState(5); // SWE
  const [value5, setValue5] = useState(5); // IT
  const [value6, setValue6] = useState(5); // CYBER
  const [value7, setValue7] = useState(5); // SWE
  const [value8, setValue8] = useState(5); // DATA

  const submitValue = (e) => {
    e.preventDefault();
    let sumIT = +value1 + +value5;
    let sumCyber = +value2 + +value6;
    let sumSWE = +value4 + +value7;
    let sumData = +value3 + +value8;
    const biggestNum = Math.max(sumIT, sumCyber, sumSWE, sumData);
    // find the biggest number and see which course it correlates to
    return (
      <>
        {biggestNum === sumIT ? (
          <div>Display IT Course</div>
        ) : biggestNum === sumCyber ? (
          <div>Display Cyber Course</div>
        ) : biggestNum === sumSWE ? (
          <div>Display SWE Course</div>
        ) : biggestNum === sumData ? (
          <div>Display Data Course</div>
        ) : (
          <div>An error occured, please try again</div>
        )}
      </>
    );
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
          <input type="submit" value="Submit" className="questionsubmit" />
        </div>
      </form>
    </div>
  );
}