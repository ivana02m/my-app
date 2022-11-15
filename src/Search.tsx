import axios from "axios";
import React, { useState, useEffect } from 'react';
import "./person.css";

function Search(){
  const [data,setData ]=useState([]);
  const [value,setValue ]=useState("");

  useEffect(()=>{
    loadUsersData();
  },[] );
   
    const loadUsersData= async()=>{
      return await axios.get("http://localhost:3000/persons")
      .then((response)=>setData(response.data))
      .catch((err)=>console.log(err));
      
    };
    console.log("data", data);

    const handleSearch=async(e:any)=>{
    e.preventDefault();
    return await axios.get(`http://localhost:3000/persons?q=${value}`)
    .then((response)=>{
     setData(response.data);
     setValue("");
    })
    .catch((err)=>console.log(err));
     };
   return(
    <div>
      <div>
      
      <form style={{ 
         margin:"auto" ,
         padding:"15px",
         maxWidth:"400px",
         alignContent:"center",  
         }}
         className="main_content_ss"
         onSubmit={handleSearch}
         >  
            <input
            type="text"
            className="main_content_ss"
            placeholder="search..."
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            />
        <button className="main_content_ss" type="submit" >Search</button>
        </form>   
        </div>
        <div>
           <div>
              <div>
                <table className="main_content">
                  <thead>
                      <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>surname</th>
                        <th>user type</th>
                        <th>created date</th>
                        <th>city</th>
                        <th>address</th>
                      </tr>
                  </thead>
                  {data.length === 0 ? (
                    <tbody>
                    <tr>
                     <td>No Data Found</td>
                    </tr>
                    </tbody>
                  ):(
                    data.map((item,id)=>(
                      <tbody key={id}>
                      <tr> 
                       <td>{item["id"]}</td>
                       <td>{item["name"]}</td>
                       <td>{item["surname"]}</td>
                       <td>{item["userType"]}</td>
                       <td>{item["createdDate"]}</td>
                       <td>{item["city"]}</td>
                       <td>{item["address"]}</td>
                      </tr>
                      </tbody>
                    ))
                  )}
                </table>
              </div>
          </div>
       </div>
    </div>        
)
};
export default Search;