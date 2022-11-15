import React, {useState, useEffect} from "react";
import axios from "axios";
import Post from "./Post";
//import "./navbar.css";

export default function Pagination(){
    const [persons, setPersons]= useState([]);
    const [loading, setLoading]= useState(false);
    const [currentPage, setCurrentPage]= useState(1);
    const [postPerPage]= useState(5);
    const [totalPosts, setTotalPosts]= useState(0);

   useEffect(()=> {
    const loadPerson= async ()=>{
        setLoading(true);
        const response= await axios.get("http://localhost:3000/persons");
        setPersons(response.data);
        setTotalPosts(response.data.length);
        setLoading(false);
    };
    loadPerson();
   }, []);

    const indexOfLastPost= currentPage * postPerPage;
    const indexOfFirstPost= indexOfLastPost - postPerPage;
    const currentPosts=persons.slice(indexOfFirstPost, indexOfLastPost);
    const paginate= (pageNum:any)=> setCurrentPage(pageNum);
    
    const prevPage=()=> setCurrentPage(currentPage -1);
    const nextPage=()=> setCurrentPage(currentPage +1);

    const showPagination=()=>{
        return(
            <Post
            postPerPage={postPerPage}
            totalPosts={totalPosts}
            currentPage={currentPage}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
            />  
        );
    };
   return(
    <>
    <ul className="list-group">
    {!loading 
    ? currentPosts.map(person=>(
        <li key={person['id']} className="list-group-item" style={{border: "1px solid purple"}}>{person['id']}  {person['name']} {person['surname']} {person['userType']} {person['createdDate']}  {person['city']}  {person['address']} </li>
    
    )):"Loading..."}
    </ul>
    <div>{showPagination()}</div>
    </>
   );
   };