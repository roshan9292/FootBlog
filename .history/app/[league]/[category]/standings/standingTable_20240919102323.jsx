
'use client';
import React from "react";
import { StandColumns } from "./standingColumns";
import { useTable,useSortBy } from "react-table";


export const  BasicTable=({tableData})=>{
  const {getTableProps,
        getTableBodyProps,
        footerGroups,
        headerGroups,
        rows,
        prepareRow,
  } =useTable({
    columns:StandColumns,
    data:tableData
  },useSortBy)
  // const standingTable =useTable({
  //   columns:StandColumns,
  //   data:tableData,
  // },useSortBy)
  // const{getTableProps,getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  // }=standingTable
return(
  <table {...getTableProps()}>
    <thead>
      {
        headerGroups.map(headerGroup=>(
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map((column)=>(
               <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                
                </th>
              ))
            }
          </tr>
       ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {
        rows.map(row=>{
          prepareRow(row)
          return(
            <tr {...row.getRowProps()}>
              {
                row.cells.map((cell)=>{
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
          </tr>
          )
        })
      }
    </tbody>
  </table>
)}