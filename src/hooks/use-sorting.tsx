import { useState } from "react";


export default function useSorting (defaultSorting: string){
  const [sorting, setSorting] = useState([
    { id: defaultSorting.split("-").join(""), desc: defaultSorting.includes("-") ? true : false },
  ])

  const { id, desc } = sorting[0]

  return {
    sorting,
    onSortingChange: setSorting,
    sortKey: id,
    // sortOrder: desc ? -1 : 1
    sortOrder: desc ? 'desc' : 'asc'
  }
}