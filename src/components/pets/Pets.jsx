import React, { useState, useEffect } from "react";
import { findPets } from "../../services/PetServices";
import styles from "./Pets.module.scss";

export const Pets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
    findPets()
            .then(({data}) => {
            setPets(data);
            console.log('This is data', data);
            // console.log('Hi');
            });
    }, []);
  return (
    <>
      <h1>Dogs</h1>
        { pets.map((pet, i) => 
        <div className={styles.pets} key={i}>
            <div>ID: {pet.id}</div>
            <div>Name: {pet.name} </div>
            <div>Age: {pet.age}</div>
        </div>) 
        }
    </>
  )
};
