// import { Can } from '@casl/react';
import { Can } from '../config/Can';
import axios from 'axios';
import React, { useState } from 'react';

const initialFormState = {
  name: '',
  role: '',
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState(initialFormState);
  const { name, role } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      axios.post('http://localhost:8080/users', {
        name: name,
        role: role,
      });
    } catch (error) {
      console.log('error:', error);
    }

    setFormData(initialFormState);
  };
  return (
    <Can I='read' a='Form'>
      <form className='form' onSubmit={onSubmit}>
        <div className='mb-6'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your name
          </label>
          <input
            type='text'
            id='name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='role'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your role
          </label>
          <input
            type='text'
            id='role'
            onChange={onChange}
            value={role}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <Can I='create' a='User'>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </Can>
      </form>
    </Can>
  );
};

export default Form;
