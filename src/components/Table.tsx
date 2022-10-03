import React from 'react';
import { Can } from '../config/Can';

const Table: React.FC = () => {
  return (
    <section className='bg-white py-20 lg:py-[120px]'>
      <Can I='read' a='Table' passThrough>
        {/* passThrough: renders children in spite of what ability.can returns. 
        This is useful for creating custom components based on Can.  */}
        {(allowed) =>
          allowed ? (
            <h1 className='m-auto text-3xl w-fit'>
              Some info only the admin can see{' '}
            </h1>
          ) : (
            <h1 className='m-auto text-3xl w-fit'>
              You dont have the permissions to read this section
            </h1>
          )
        }
        {/*  */}
      </Can>
    </section>
  );
};

export default Table;
