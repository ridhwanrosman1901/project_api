import React, { useState } from 'react';
import userData from './Data';

function App() {
  const [user, setUser] = useState(userData);

  return (
    <div>
      <h2>Getting Data from User</h2> <br/>
      <ol class="list-group list-group-flush">
        {/* map to iterate over arrays */}
        {user.map(user => (
          //key attribute identify data that changed
          <li key={user.id} class="list-group-item">
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Country: {user.country}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
