import React from 'react';

// import { Container } from './styles';

import { ListItems } from './data';

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>{ListItems}</ul>
    </>
  );
}

export default Dashboard;
