import React from 'react';
import { Can } from '../config/Can';

const TableComponent = () => {
  const data = [
    {
      id: 1,
      firstName: 'John',
      email: 'john@example.com',
    },
    {
      id: 2,
      firstName: 'Jane',
      email: 'jane@example.com',
    },
    {
      id: 3,
      firstName: 'John',
      email: 'john@example.com',
    },
    {
      id: 4,
      firstName: 'Jane',
      email: 'jane@example.com',
    },
  ];
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto'>
        <div className='p-1.5 w-full inline-block align-middle'>
          <div className='overflow-hidden border rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                  >
                    ID
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                  >
                    Email
                  </th>
                  <Can I='update' this='Table'>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase '
                    >
                      Edit
                    </th>
                  </Can>
                  <Can I='delete' this='Table'>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase '
                    >
                      Delete
                    </th>
                  </Can>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {data.map((row) => {
                  return (
                    <tr>
                      <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
                        {row.id}
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        {row.firstName}
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        {row.email}
                      </td>
                      <Can I='update' this='Table'>
                        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
                          <button
                            className='text-green-500 hover:text-green-700'
                            href=''
                          >
                            Edit
                          </button>
                        </td>
                      </Can>
                      <Can I='delete' this='Table'>
                        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
                          <button
                            className='text-red-500 hover:text-red-700'
                            href='#'
                          >
                            Delete
                          </button>
                        </td>
                      </Can>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
