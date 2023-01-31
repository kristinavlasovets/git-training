import {useEffect, useState} from 'react';
import Form from './components/Form';

function App() {
	const [users, setUsers] = useState([]);

	async function fetchData(url) {
		let response = await fetch(url);
		let result = await response.json();
		setUsers(result);
	}

	useEffect(() => {
		fetchData('https://jsonplaceholder.typicode.com/users');
	}, []);

	console.log(users);
	console.log('sec)');
	return (
		<div className="App">
			{' '}
			<Form />
			{users.map((user) => (
				<h1 key={user.id}>{user.username}</h1>
			))}
		</div>
	);
}

export default App;
