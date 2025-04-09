import { FC } from 'react';
import { TableProps } from '@/app/types/dashboard';

export const Table: FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[800px]">
        <thead>
          <tr className="text-blue-900">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`text-${column.align || 'left'} py-2 font-medium`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className={`border-b py-2 text-${column.align || 'left'} text-gray-400`}
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 