import React from 'react'
import Navbar from '../Government/Navbar'
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
      <button className="bg-green-500 h-16 w-96 flex mx-auto text-black" onClick={handleSubmit}><span className="my-auto mx-auto">Update Status</span></button>
      <div className="requests grid grid-cols-3 gap-4 ">
      { requests.map((request, index) => (
      <div className="card m-5 shadow-2xl border rounded-xl"> 
        <p className="font-bold text-3xl">{request.title}</p>
        <img className="h-40" src={request.image} alt="Img" />
        <div>{request.category}</div>
        <button className="w-2/3 mx-auto mb-10 flex"><span className="mx-auto">Manual Verify</span></button>
      </div>
      ))}
    </div>
      {/* <button onClick={handleSubmit}>Update Status</button> */}
    </>

  )
}
