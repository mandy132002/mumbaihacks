import React from 'react'
import Navbar from '../Citizen/Navbar'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function GovernmentHome() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5002/complaints/getComplaints');
      const fetchedRequests = response.data.complaints;
      //console.log(fetchedRequests);
      setRequests(fetchedRequests);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      
      const response = await axios.post('http://127.0.0.1:5000/cluster', requests);
      // console.log(requests)
      const clusters = response.data;
      console.log(clusters);
      // Handle the returned clusters data as desired
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  return (
    <>
      <Navbar/>
      <button onClick={handleSubmit}>Update Status</button>
      
      <div className="requests">
      { requests.map((request, index) => (
      <div className="card"> 
        <div>{request.title}</div>
        <img width = "150" src={request.image} alt="Img" />
        <div>{request.category}</div>
        <button>Manual Verify</button>
      </div>
      ))}
    </div>
      {/* <button onClick={handleSubmit}>Update Status</button> */}
    </>

  )
}
