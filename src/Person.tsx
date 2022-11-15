
import React, { useState } from "react";
import "./person.css";

export const Person = ({ id, name, surname, userType, createdDate, city, address, onEdit, onDelete }:any) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt:any) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.surname.value, evt.target.userType.value, evt.target.createdDate.value, evt.target.city.value, evt.target.address.value,);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="name" name="name" defaultValue={name} />
          <input placeholder="surname" name="surname" defaultValue={surname} />
          <input placeholder="userType" name="userType" defaultValue={userType} />
          <input placeholder="createdDate" name="createdDate" defaultValue={createdDate} />
          <input placeholder="city" name="city" defaultValue={city} />
          <input placeholder="address" name="address" defaultValue={address} />

          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div>
        <div className="main_">
          <table className="m">
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
          <tbody key={id}>
            <tr>
             <td>{id}</td> 
             <td>{name}</td> 
             <td>{surname}</td> 
             <td>{userType}</td>
             <td>{createdDate}</td>
             <td>{address}</td>
             <td>{city}</td> 
              <button className="ed" onClick={handleEdit}>Edit</button>
              <button className="del"onClick={handleDelete} >Delete</button> 
             </tr>   
           </tbody>
          </table>
        </div>
        </div>
      )}
    </div>
  );
};