import React, { useState } from 'react';
import styles from './form.module.css';


export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid'
  }

  return errors;
};

export default function Form() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [errors, setError] = useState({});

  function handleOnChange(e) {
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
    // esto es mas claro, prevData es el parametro que trae por defecto el setData, y es el valor de la data que tiene actualmente el estado... esto es porque es una funcion DECLARATIVA y no IMPOERATIVA (le decimos que hacer y no como)
    // setData ((prevData) => {
    //   return {
    //     ...prevData,
    //     [e.target.name]: e.target.value
    //   }
    // })
    const { name, value } = e.target; // destructuramos los datos de e.target.name y e.target.value y los redefinimos con los nombres name y value. O sea: e.target.name = name y e.target.value = value
    setInput({
      ...input,      // esta linea lo que dice es que va a tomar el valor previo de data.username y data.password y lo va a concatenar con la siguiente linea
      [name]: value
    }) // [name] es una propiedad dinámica de ES6: no se sabe que propiedad va a alojarse entre esos corchetes, pero esa propiedad es la que vas a cambiar por el value del input
  }

  return (
    <form >
      <div clasName = {styles.form}>
        <label style={{color:"white"}}>Username:</label>
        <input
          type="text"
          name="username"
          placeholder='Username'
          className={errors.username ? styles.danger : styles.form}
          onChange={handleOnChange}
          value={input.username}
        />
        {errors.username && (
          <p className={styles.danger}>
            {errors.username}
          </p>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder='Password'
          className={errors.password ? styles.danger : styles.form}
          onChange={handleOnChange}
          value={input.password}
        />
        {errors.password && (
          <p className= {styles.danger}>
            {errors.password}
          </p>
        )}
      </div>
    </form>
  )
}
