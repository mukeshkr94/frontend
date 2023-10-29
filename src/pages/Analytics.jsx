import React,{useState,useEffect} from "react";
import Sidenav from "../components/Sidenav";
import { Box, Divider} from "@mui/material";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts'
const Analytics = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    getData();
  },[])
  const getData = async()=>{
    let result = await fetch('http://localhost:5000/data');
        result = await result.json();
        setData(result)
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:'2rem' }}>
        <h4>Bar Chart</h4>
        <Divider sx={{marginBottom:'3rem'}} />
       <ResponsiveContainer width='70%' aspect={3} >
        <BarChart data={data} width={400} height={600}>
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip/>
          <Bar dataKey='saleAmount' fill="#a03cff"/>
        </BarChart>
       </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Analytics;
