import { apiDummyJson } from "@/app/ApiList/dummyJson"
import { DataTable } from "@/components/custom/Datatable/dataTable"
import usePagination from "@/hooks/use-pagination"
import useSorting from "@/hooks/use-sorting"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react/jsx-runtime"

export default function ProductListDummyJson(){
     const rowEachPage = 10
     const {sortKey, sorting, onSortingChange} = useSorting('products')
     const {limit, onPaginationChange, pagination} = usePagination(rowEachPage)
     const {data, isLoading} = useQuery({
          queryKey: ['get-all-carts', limit],
          queryFn: async () => {
               const result = await apiDummyJson({dest: 'carts', queryParams: {limit: limit, sortBy: sortKey}}) 
               let response = {
                         list: result?.carts || [],
                         total: result?.total || 0,
                         limit: result?.limit || 10
               }

               return response
          }
     })

     const columns = [
          {
               header: 'Products',
               accessorKey: 'products',
               cell: (props: any) => {
                    const dataProducts = props.getValue();

                    // Pastikan 'dataProducts' adalah array sebelum mapping
                    if (Array.isArray(dataProducts)) {
                         return (
                              <div>
                                   {dataProducts.map((product: any, index: number) => {
                                        console.log(product)
                                        return (
                                             <div key={index}>
                                                  {/* Misalnya, jika setiap objek memiliki properti 'name', tampilkan di sini */}
                                                  {product.title}
                                             </div>
                                        )
                                   })}
                              </div>
                         );
                    }

                    return "No products available"; // Jika bukan array
               }
          },
          {
               header: 'Total Products',
               accessorKey: 'totalProducts'
          }
     ]
     return (
          <>
               Productss
               <DataTable 
                    data={data ?? { list: [], total: 0 }}
                    columns={columns}
                    sorting={sorting}
                    onSortingChange={onSortingChange}
                    pagination={pagination}
                    onPaginationChange={onPaginationChange}
                    rowEachPage={rowEachPage}
                    isLoading={isLoading}
                    showPageJumper={false}
                    showSizeSelector={true}
               />
          </>
     )
}