
'use client';
import React from "react";
import { StandColumns } from "./standingColumns";
import { useTable,useSortBy } from "react-table";
import "./standingTable.css"
export default function BasicTable({tableData}){


  const standingTable =({
    columns:StandColumns,
    data:tableData
  })=>{
  const{getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow}=useTable({
      columns:StandColumns,data:tableData,
    },useSortBy);
  }
return(
  <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup=>(
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column)=>(
               <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
               <span>
                {column.isSorted ? (column.isSortedDesc ?'D':'A'):''}
               </span>
               </th>
              ))}
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