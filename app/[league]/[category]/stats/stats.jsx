'use client';
import { StatColumns } from "./StatColumns";
import { useTable } from "react-table";
import "@/app/[league]/[category]/standings/standingTable.css"
export default function Stats({statData}){
 let scorers = statData.scorers;

 const statTable =useTable({
  columns:StatColumns,
  data:scorers
})
const{getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow}=statTable
return(
<table {...getTableProps()}>
  {scorers.length > 0 ? <><thead>
    {
      headerGroups.map(headerGroup=>(
        <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
          {
            headerGroup.headers.map((column)=>(
             <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
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
          <tr key={row.id}{...row.getRowProps()}>
            {
              row.cells.map((cell)=>{
                return <td key={cell.id} {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
        </tr>
        )
      })
    }
  </tbody></> :<div className="text-center border-gray-900">NO DATA</div>}
  
</table>
)
}