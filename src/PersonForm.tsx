import React from "react";
import "./person.css";

export const PersonForm = ({ onAdd }:any) => {
  const handleOnSubmit = (evt:any) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.surname.value, evt.target.userType.value, evt.target.createdDate.value, evt.target.city.value, evt.target.address.value, );
    evt.target.name.value = "";
    evt.target.surname.value = "";
    evt.target.userType.value = "";
    evt.target.createdDate.value = "";
    evt.target.city.value = "";
    evt.target.address.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Person</h3>
      <input placeholder="name" name="name"/>
      <input placeholder="surname" name="surname"/>
      <input placeholder="userType" name="userType"/>
      <input placeholder="createdDate" name="createdDate"/>
      <input placeholder="city" name="city"/>
      <input placeholder="address" name="address"/>
      <button className="ad" onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
