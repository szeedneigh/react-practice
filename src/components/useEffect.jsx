import { useState, useEffect} from "react";

function UseEffect() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(user => (
            <li key={user.id}>NAME: {user.name}<br></br>
            EMAIL: {user.email}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default UseEffect