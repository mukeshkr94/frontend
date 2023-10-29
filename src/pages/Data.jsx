import React, { useState,useEffect } from "react";
import Sidenav from "../components/Sidenav";
import { Box, Divider } from "@mui/material";
const dummyData = [
  {month:'June',
  saleAmount:5000
  },
  {month:'July',
  saleAmount:3000
  },
  {month:'August',
  saleAmount:8000
  },
  {month:'September',
  saleAmount:12000
  }
]
const Data = () => {
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:'2rem'}}>
        <h4>Data Table</h4>
        <Divider sx={{ marginBottom: "3rem" }} />
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Month</th>
              <th>Sale Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index)=>(
                <tr key={index}>
                <td>{index+1}.</td>
                <td>{item.month}</td>
                <td>{item.saleAmount}</td>
              </tr>
              ))
            }
            
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default Data;
