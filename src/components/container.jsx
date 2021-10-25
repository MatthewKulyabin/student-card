import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">{children}</div>
      </div>
    </div>
  );
};

export default Container;
