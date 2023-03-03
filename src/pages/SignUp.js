import React, { useState } from 'react';

function SignUp() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [photo, setphoto] = useState('');
  const [username, setusername] = useState('');

  const submitHandeller = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/signup';
    const data = {
      user: {
        name,
        email,
        password,
        username,
        photo,
      },
    };
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={submitHandeller}>
      <label htmlFor="name">
        name
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </label>

      <label htmlFor="email">
        email
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password">
        password
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </label>

      <label htmlFor="photo">
        photo
        <input
          type="file"
          name="photo"
          onChange={(e) => {
            setphoto(e.target.value);
          }}
        />
      </label>

      <label htmlFor="username">
        username
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </label>

      <button type="submit">
        Sign up
      </button>
    </form>
  );
}

export default SignUp;
