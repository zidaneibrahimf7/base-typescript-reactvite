import { useState } from "react";

export default function usePagination(rowEachPage: number) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: rowEachPage || 10
  })

  const { pageIndex, pageSize } = pagination;
  
  return {
    // offset: pageIndex > 0 ? pageSize * pageIndex : pageIndex,
    offset: pageIndex === 0 ? 1 : pageIndex + 1,
    limit: pageSize,
    onPaginationChange: setPagination,
    pagination
  }
}