import './Report.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Report() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  // const [form, setForm] = useState(initialState);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    latitude,
    longitude,
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success: position object contains the coordinates
          const { latitude, longitude } = position.coords;
          // console.log("Latitude:", latitude);
          setLatitude(latitude);

          // console.log("Longitude:", longitude);
          setLongitude(longitude);
        },
        (error) => {
          // Error: handle the error or show an error message to the user
          console.log(error);
        }
      );
    } else {
      // Geolocation API is not supported
      console.log('Geolocation is not supported');
    }
  }, []);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
  } 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="outer-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="header-container">
            <h1 className="header">Report</h1>
          </div>
          <hr />
          <div className="internal-form-container">
            <div>
              <label htmlFor="title">Title: </label>
            </div>
            <div>
              <input onChange={handleChange} type="text" id="title" required />
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="description">Description: </label>
            </div>
            <div>
              <textarea
                onChange={handleChange}
                name="description"
                id="description"
                cols="20"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="category">Choose category: </label>
            </div>
            <div>
              <select
                value={formData.category}
                onChange={handleChange}
                name="category"
                id="category"
              >
                <option value="">Select</option>
                <option value="fire">Fire Department</option>
                <option value="police">Police Department</option>
                <option value="ambulance">Ambulance</option>
                <option value="ndrf">NDRF</option>
              </select>
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="fileUpload">Upload File: </label>
            </div>
            <div className="fileUpload">
              <input type="file" id="file" name="file" accept="image/*" />
            </div>
          </div>
          <div className="internal-form-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Report;
