import React from 'react';
import { Can } from '../config/Can';
import NoAccess from './NoAccess';
import TableComponent from './TableComponent';

const Table: React.FC = () => {
  return (
    <section className='bg-white py-20 lg:py-[120px]'>
      <Can I='read' a='Table' passThrough>
        {/* passThrough: renders children in spite of what ability.can returns. 
        This is useful for creating custom components based on Can.  */}
        {(allowed) => (allowed ? <TableComponent /> : <NoAccess />)}
        {/*  */}
      </Can>
    </section>
  );
};

export default Table;
