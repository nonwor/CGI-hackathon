import React from "react";
import { useState } from "react";


export default function Questions2() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question1: false,
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
      };
    
      return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Question 1:</label>
              <div>
                <input
                  type="checkbox"
                  id="question1"
                  name="question1"
                  checked={formData.question1}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="question1" className="text-gray-700">Yes</label>
              </div>
            </div>
    
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      );
    
}