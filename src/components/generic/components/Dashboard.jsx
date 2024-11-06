import React, {useState, useEffect} from 'react';
import axiosInstance from '../../utils/axiosInstance';

const Dashboard = () => {
  const [userAppeals, setUserAppeals] = useState([])
  useEffect(() => {
  axiosInstance
    .get("/appeals/user_appeals")
    .then((response) => {
      console.log("response:", response);
      setUserAppeals()
    })
    .catch((error) => {
      console.log("error:", error);
    });
}, []);
  return (
    <div>
      <div>Dashboard</div>
      <h1>My Appeals</h1>

    </div>
  )
}

export default Dashboard