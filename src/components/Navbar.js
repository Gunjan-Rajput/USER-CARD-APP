import React from 'react';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">User Card App</div>
      <button onClick={onGetUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;