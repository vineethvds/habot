import React from 'react'

export default function Input({ type, name, children }) {
  let label = name.toLowerCase().replaceAll(' ', '-');
  let className = 'block w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:outline-2 focus:outline-[#C179BA] focus:ring-[#C179BA] py-2 px-3'
  
  return (
    <>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {name}
      </label>

      {children ? (
        children
      ) : type == 'textarea' ? (
        <textarea id={`textarea${label}`} name={label} rows="4" className={className} placeholder={`Enter ${name}`}></textarea>
      ) : (
        <input
          type={type}
          name={label}
          id={label}
          autoComplete="true"
          className={className}
          placeholder={`Enter ${name}`}
        />
      )}
    </>
  );
};

