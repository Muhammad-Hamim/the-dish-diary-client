import React from 'react';

const Chef = ({ chef }) => {
  const { name, id } = chef;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Chef;