import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Table } from "@tanstack/react-table";

type PaginationProps = {
  table: Table<any>; // Replace `any` with a specific type for rows if available
  rowEachPage?: number;
  showSizeSelector?: boolean;
  showPageJumper?: boolean;
};

export function Pagination({
  table,
  rowEachPage = 0,
  showSizeSelector = true,
  showPageJumper = true,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between mt-6 mb-2">
      <div className={cn("text-sm md:text-[12px]")}>
        Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
        {table.getRowCount().toLocaleString()} Rows
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </Button>
        <div className={cn("md:block hidden")}>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
        </div>

        {showPageJumper ? (
          <div className={cn("md:block hidden")}>
            <span className="flex items-center gap-1">
              | Go to page:
              <Input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="w-16"
              />
            </span>
          </div>
        ) : null}

        {showSizeSelector ? (
          <Select
            value={String(table.getState().pagination.pageSize)}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Select rows/page" />
            </SelectTrigger>
            <SelectContent>
              {[
                rowEachPage * 1,
                rowEachPage * 2,
                rowEachPage * 3,
                rowEachPage * 4,
                rowEachPage * 5,
              ].map((pageSize) => (
                <SelectItem key={pageSize} value={String(pageSize)}>
                  Show {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : null}
      </div>
    </div>
  );
}
