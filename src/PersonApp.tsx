
import React, { useEffect, useState } from "react";
import { Person} from "./Person";
import  { PersonForm  } from "./PersonForm";
import "./person.css";

export default function PersonApp() {
  const [persons, setPersons] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:3000/persons")
      .then((response) => response.json())
      .then((data) => setPersons(data))
      .catch((error) => console.log(error));
  };

  const onAdd = async (id:any, name:any, surname:any, userType:any, createdDate:any, city:any, address:any ) => {
    await fetch("http://localhost:3000/persons", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        name: name,
        surname: surname,
        userType: userType,
        createdDate: createdDate,
        city: city,
        address: address
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPersons((persons):any => [...persons, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id:any, name:any, surname:any, userType:any, createdDate:any, city:any, address:any) => {
    await fetch(`http://localhost:3000/persons${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id:id,
        name: name,
        surname: surname,
        userType: userType,
        createdDate: createdDate,
        city:city,
        address: address
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then(() => {
       
        const updatePersons = persons.map((person) => {
          if (person["id"] === id) {

            id=person["id"];
            name=person["name"];
            surname=person["surname"];
            userType=person["userType"];
            createdDate=person["createdDate"];
            city=person["city"];
            address=person["address"];
          }

          return person;

        });

        setPersons(() => updatePersons);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id:any) => {
    await fetch(`http://localhost:3000/persons/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setPersons(
            persons.filter((person) => {
              return person["id"] !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main_content">
      <PersonForm onAdd={onAdd} />
      {persons.map((person) => (
        <table>
        <Person
          id={person["id"]}
          key={person["id"]}
          name={person["name"]}
          surname={person["surname"]}
          userType={person["userType"]}
          createdDate={person["createdDate"]}
          city={person["city"]}
          address={person["address"]}

          onEdit={onEdit}
          onDelete={onDelete}
        />
        </table>)
      )
      };
      </div>
  )
}  