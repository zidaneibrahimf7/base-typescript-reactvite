import { Skeleton } from "@/components/ui/skeleton"
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
import { Pagination } from "@/components/custom/Datatable/pagination"
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnDef,
  TableOptions,
  TableState,
  SortingState
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


type TableRowLoadingProps = {
  columns: ColumnDef<any, any>[];
};

function TableRowLoading({ columns }: TableRowLoadingProps) {
  const loadingRowIndexes = Array.from({ length: 3 }).map((i) => i)

  return <>
    {loadingRowIndexes.map((index) => (
      <TableRow key={"loading-" + index}>
        {columns.map((ind) => (
          <TableCell key={"loading-" + index + "-" + ind}>
            <Skeleton className="h-4 w-[70%]" />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
}

type DataTableProps<TData extends object> = {
  className?: string;
  columns: ColumnDef<TData, any>[];
  data: {list: TData[]; total: number} | null;
  isLoading: boolean;
  error?: string;
  sorting?: SortingState; // Replace `any` with the sorting state type if known
  onSortingChange?: (updater: any) => void; // Replace `any` with sorting state type
  pagination?: { pageIndex: number; pageSize: number };
  onPaginationChange?: (updater: any) => void; // Replace `any` with pagination state type
  rowEachPage?: number;
  showSizeSelector?: boolean;
  showPageJumper?: boolean;
};

export function DataTable<TData extends object>({
  className = 'p-3',
  columns,
  data,
  isLoading,
//   error,
  sorting,
  onSortingChange,
  pagination,
  onPaginationChange,
  rowEachPage,
  showSizeSelector = true,
  showPageJumper = true
}: DataTableProps<TData>) {
     const initialState: Partial<TableState> = {};
     if (pagination) initialState["pagination"] = pagination;
     if (sorting) initialState["sorting"] = sorting;

  const table = useReactTable<TData>({
     columns,
     manualPagination: true,
     rowCount: data?.total,
     data: data?.list || [],
     enableSortingRemoval: false,
     getCoreRowModel: getCoreRowModel(),
     getSortedRowModel: getSortedRowModel(),
     getPaginationRowModel: getPaginationRowModel(),
     onSortingChange,
     onPaginationChange,
     state: initialState
  })

  return (
    <div className={className}>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} style={{ minWidth: header.getSize() }}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none flex items-center gap-1'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                              ? 'Sort descending'
                              : 'Clear sort'
                            : undefined
                        }
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <FiChevronUp />,
                          desc: <FiChevronDown />,
                        }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRowLoading columns={columns} />
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && (
        <Pagination
          table={table}
          rowEachPage={rowEachPage}
          showSizeSelector={showSizeSelector}
          showPageJumper={showPageJumper}
        />
      )}
    </div>
  );
}

// export function DataTableBasic({
//   className,
//   columns,
//   data,
//   isLoading,
//   error,
//   rowEachPage,
//   showSizeSelector = true,
//   showPageJumper = true
// }) {
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: rowEachPage || 10
//   })

//   const initialState = {
//     pagination
//   }

//   const table = useReactTable({
//     columns,
//     manualPagination: false,
//     data: data?.content?.results || [],
//     enableSortingRemoval: false,
//     // autoResetPageIndex: false,
//     // autoResetSortBy: false,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onPaginationChange: setPagination,
//     state: initialState
//   })

//   return (
//     <div className={className}>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : <div
//                           className={
//                             header.column.getCanSort()
//                               ? 'cursor-pointer select-none flex items-center gap-1'
//                               : ''
//                           }
//                           onClick={header.column.getToggleSortingHandler()}
//                           title={
//                             header.column.getCanSort()
//                               ? header.column.getNextSortingOrder() === 'asc'
//                                 ? 'Sort ascending'
//                                 : header.column.getNextSortingOrder() === 'desc'
//                                   ? 'Sort descending'
//                                   : 'Clear sort'
//                               : undefined
//                           }
//                         >
//                           {flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                           {{
//                             asc: <FiChevronUp />,
//                             desc: <FiChevronDown />,
//                           }[header.column.getIsSorted()] ?? null}
//                         </div>
//                       }
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {isLoading
//               ? <TableRowLoading columns={columns} />
//               : table.getRowModel().rows?.length ? (
//                 table.getRowModel().rows.map((row) => (
//                   <TableRow
//                     key={row.id}
//                     data-state={row.getIsSelected() && "selected"}
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell key={cell.id}>
//                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={columns.length} className="h-24 text-center">
//                     No results.
//                   </TableCell>
//                 </TableRow>
//               )}
//           </TableBody>
//         </Table>
//       </div>
//       <Pagination 
//         table={table} 
//         rowEachPage={rowEachPage} 
//         showSizeSelector={showSizeSelector}
//         showPageJumper={showPageJumper}
//       />
//     </div>
//   )
// }