import React from "react";
import { useState } from "react";

export default function Questions2() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add logic to handle form submission
        // send data to db
        //exit the modal
        window.location.reload();
      };
    
      return (
        <div className="modal">
          <h1 className="header">Welcome</h1>
          <h2>
            Tell us about yourself!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="questions">
              <div className="question1">
                <li>Name:</li>
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value={formData.name}
                  onChange={handleChange}
                  className="border rounded w-full py-2 px-3"
                  required
                />
                {/* <span className="range-slider-value">{value1}</span> */}
              </div>
              <hr />
              <div className="question2">
                <li>Email:</li>
                <input
                  type="text"
                  id="email"
                  name='email'
                  onChange={handleChange}
                  className="border rounded w-full py-2 px-3"
                  required
                  // value={value2}
                  // onChange={(e) => {
                  //   setValue2(e.target.value);
                  // }}
                ></input>
                {/* <span className="range-slider-value">{value2}</span> */}
              </div>
              <hr />
              <div className="question3">
                <li>
                  Are you 18 years or older?
                </li>
                <input
                    type="radio"
                    id="question1True"
                    name="question1"
                    value='true'
                    checked={formData.question1 === 'true'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="question1True" className="text-gray-700">True</label>

                <input
                  type="radio"
                  id="question1False"
                  name="question1"
                  value='false'
                  checked={formData.question1 === 'false'}
                  onChange={handleChange}
                  className="ml-4 mr-2"
                />
                <label htmlFor="question1False" className="text-gray-700">False</label>
                {/* <span className="range-slider-value">{value3}</span> */}
              </div>
              <hr />

              <div className="question4">
                <li>
                  Do you have a High School diploma/equivalent or higher?
                </li>
                <input
                    type="radio"
                    id="question2True"
                    name="question2"
                    value="true"
                    checked={formData.question2 === 'true'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="question2True" className="text-gray-700">True</label>

                <input
                  type="radio"
                  id="question2False"
                  name="question2"
                  value="false"
                  checked={formData.question2 === 'false'}
                  onChange={handleChange}
                  className="ml-4 mr-2"
                />
                <label htmlFor="question2False" className="text-gray-700">False</label>
                {/* <span className="range-slider-value">{value3}</span> */}
              </div>
              <hr />

              <div className="question5">
                <li>
                Are you authorized to work in the U.S.?
                </li>
                <input
                    type="radio"
                    id="question3True"
                    name="question3"
                    value="true"
                    checked={formData.question3 === 'true'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="question3True" className="text-gray-700">True</label>

                <input
                  type="radio"
                  id="question3False"
                  name="question3"
                  value="false"
                  checked={formData.question3 === 'false'}
                  onChange={handleChange}
                  className="ml-4 mr-2"
                />
                <label htmlFor="question3False" className="text-gray-700">False</label>
                {/* <span className="range-slider-value">{value3}</span> */}
              </div>
              <hr />

              <div className="question7">
                <li>
                Do you have a passion for technology?
                </li>
                <input
                    type="radio"
                    id="question4True"
                    name="question4"
                    value="true"
                    checked={formData.question4 === 'true'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="question4True" className="text-gray-700">True</label>

                <input
                  type="radio"
                  id="question4False"
                  name="question4"
                  value="false"
                  checked={formData.question4 === 'false'}
                  onChange={handleChange}
                  className="ml-4 mr-2"
                />
                <label htmlFor="question4False" className="text-gray-700">False</label>
                {/* <span className="range-slider-value">{value3}</span> */}
              </div>
              <hr />

              <div className="question6">
                <li>
	                Can you commit to full-time training (typically Monday-Friday 9am-4pm, 40 hours per week) plus study time (an additional 20+ hours per week)?
                </li>
                <input
                    type="radio"
                    id="question5True"
                    name="question5"
                    value="true"
                    checked={formData.question5 === 'true'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="question5True" className="text-gray-700">True</label>

                <input
                  type="radio"
                  id="question5False"
                  name="question5"
                  value="false"
                  checked={formData.question5 === 'false'}
                  onChange={handleChange}
                  className="ml-4 mr-2"
                />
                <label htmlFor="question5False" className="text-gray-700">False</label>
                {/* <span className="range-slider-value">{value3}</span> */}
              </div>
              <hr />
              
              <input
                type="submit"
                value="Submit"
                className="questionsubmit"
                // handlesubmit={() => {
                //   // console.log(sumVal);
                // }}
              />
            </div>
          </form>

        </div>
      );
    
}