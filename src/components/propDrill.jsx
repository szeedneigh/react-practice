import { useState } from 'react';

const PropDrill = () => {
  const [user, setUser] = useState({ name: 'Sidney John Sarcia', age: 96 });

  return (
    <div>
      <h1>Prop Component</h1>
      {/* Passing user data as props down the tree */}
      <LevelOne user={user} setUser={setUser} />
    </div>
  );
};

const LevelOne = ({ user, setUser }) => {
  return (
    <div>
      <h2>Level One</h2>
      <LevelTwo user={user} setUser={setUser} />
    </div>
  );
};

const LevelTwo = ({ user, setuser }) => {
  return (
    <div>
      <h3>Level Two</h3>
      <LevelThree user={user} setUser={setuser} />
    </div>
  );
};

const LevelThree = ({ user, setUser }) => {
  return (
    <div>
      <h4>Level Three</h4>
      <UserProfile user={user} setUser={setUser} />
    </div>
  );
};

const UserProfile = ({user, setUser}) => {
  const updateUser = () => {
    setUser({name: 'Elon Musk', age: 45})
  };

  return (
    <div>
      <h5>User Profile</h5>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default PropDrill;