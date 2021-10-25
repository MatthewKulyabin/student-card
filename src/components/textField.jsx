import React from 'react';

const TextField = ({ label, name, value, error, onChange }) => {
  const getInputClasses = () => {
    return 'form-control is-' + (error ? 'invalid' : 'valid');
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        className={getInputClasses()}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && (
        <div className="text-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;
