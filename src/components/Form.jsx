import React, {useState} from 'react';

function Form() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  async function postUsers(url, data) {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    let result = await response.json();
    console.log(result);
  }

  console.log(name);
  console.log(username);

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        value={username}
      />
      <button
        onClick={() =>
          postUsers('https://jsonplaceholder.typicode.com/posts', {
            title: name,
            body: username,
          })
        }
      >
        Post user
      </button>
    </div>
  );
}

export default Form;
