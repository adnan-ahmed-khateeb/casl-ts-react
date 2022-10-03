import React, { useContext } from 'react';
import { Can } from '../config/Can';

const Table:React.FC = () => {

  return (
    <section className='bg-white py-20 lg:py-[120px]'>
      <Can I='read' a='Table' >
        <h1>Hello</h1>
      </Can>
    </section>
  );
};

export default Table;
