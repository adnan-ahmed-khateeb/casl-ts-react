import { useAbility } from '@casl/react';
import React, { useContext } from 'react';
import { AbilityContext, Can } from '../config/Can';
import NoAccess from './NoAccess';
import TableComponent from './TableComponent';

const Table: React.FC = () => {
  const ability = useAbility(AbilityContext);
  return (
    <section className='bg-white py-20 lg:py-[120px]'>
      <Can I='read' a='Table' ability={ability} passThrough>
        {/* passThrough: renders children inspite of what ability.can returns. 
        This is useful for creating custom components based on Can.  */}
        {(allowed) => (allowed ? <TableComponent /> : <NoAccess />)}
        {/*  */}
      </Can>
    </section>
  );
};

export default Table;
