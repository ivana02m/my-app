import React from "react";

export default function Post(props:any){
    const {
    postPerPage,
    totalPosts,
    currentPage,
    paginate,
    prevPage,
    nextPage
    }=props;
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
           <div className="pagination justify-content-center"style={{display: "flex"}} >
           {currentPage !==1 && (
            <li>
                <button 
                style={{cursor: "pointer"}}
                //type="primary"
                onClick={()=> prevPage()}
                >
                Previous
                </button>
            </li>
           )}
           {
            pageNumbers.map((num)=>(
                <li className="page-item" key={num}>
                 <a
                 onClick={()=> paginate(num)}
                 className="page-link"
                 style={{cursor: "pointer"}}
                 >
                {num}
                 </a>
                </li>
        ))}
        {pageNumbers.length !== currentPage &&(
            <li>
                 <button 
                style={{cursor: "pointer"}}
                //type="primary"
                onClick={()=> nextPage()}
                >
                Next
                </button>
            </li>
        )}
            </div> 
        </nav>
    );
};