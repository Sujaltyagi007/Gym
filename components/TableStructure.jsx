"use client";
import React, { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  IconChevronsRight,
  IconChevronRight,
  IconChevronLeft,
  IconChevronsLeft,
} from "@tabler/icons-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { X, Plus, Filter, Delete } from "lucide-react";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Trash2 } from "lucide-react";
import useDebounce from "./DebounceSearch";
import { toast } from "sonner";

/* -------------------- Header Component -------------------- */
function TableStructureHeader({ table }) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              className={"bg-muted"}
              style={{
                width: header.column.id === "select" ? "60px" : "",
              }}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
}

/* -------------------- Body Component -------------------- */
function TableStructureBody({ table, columns, loading }) {
  return (
    <TableBody>
      {loading ? (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-48 w-full">
            <div className="flex justify-center items-center">
              <style>{`
                @keyframes bounce-ball {
                  0% {
                    top: 30px;
                    height: 5px;
                    border-radius: 60px 60px 20px 20px;
                    transform: scaleX(2);
                  }
                  35% {
                    height: 15px;
                    border-radius: 50%;
                    transform: scaleX(1);
                  }
                  100% {
                    top: 0;
                  }
                }
                .animate-bounce-ball {
                  animation: bounce-ball 500ms alternate infinite ease;
                }
              `}</style>
              <div className="flex items-end space-x-2">
                <div className="relative h-9.25 w-3.75">
                  <div className="absolute top-0 w-3.75 h-3.75 bg-primary rounded-full animate-bounce-ball origin-center" />
                </div>
                <div className="text-primary text-base tracking-wide">
                  LOADING
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      ) : table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-48 w-full">
            <div className="flex flex-col gap-3 justify-center items-center">
              <span className="p-4 bg-muted rounded-full">
                <X className="size-5" />
              </span>
              No results.
            </div>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}

/* -------------------- Footer Component -------------------- */

function TableStructureFooter({ table }) {
  return (
    <div className="flex items-center justify-around bg-muted px-4 py-2 rounded-b-lg">
      <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex w-full items-center gap-8 lg:w-fit">
        <div className="hidden items-center gap-2 lg:flex">
          <Label htmlFor="rows-per-page" className="text-sm font-medium">
            Rows per page
          </Label>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger size="sm" className="w-20" id="rows-per-page">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-fit items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <IconChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <IconChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <IconChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden size-8 lg:flex"
            size="icon"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <IconChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Main Table Component -------------------- */
export default function TableStructure({
  data,
  setData,
  columns,
  className,
  loading,
}) {
  const [filteredData, setFilteredData] = useState(data || []);
  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 200);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  async function ExportEntries(selectedIds) {
    const filtered = data.filter((item) => selectedIds.includes(item.id));
    if (!Array.isArray(filtered) || filtered.length === 0) {
      console.error("Invalid JSON data");
      return;
    }
    const headers = Object.keys(filtered[0]);
    const rows = filtered.map((obj) =>
      headers
        .map((header) => {
          let value = obj[header] ?? "";
          value =
            typeof value === "string"
              ? `"${value.replace(/"/g, '""')}"`
              : value;
          return value;
        })
        .join(",")
    );
    const csvContent = [headers.join(","), ...rows].join("\n");
    const filename = `Vijay-Windows-Blinks-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setOpen(false);
  }

  async function DeleteEntries(selectedIds) {
    try {
      const response = await fetch("/api/query", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedIds),
      });
      if (response.ok) {
        const { data: deletedIds, message } = await response.json();
        setData((prev) => prev.filter((item) => !deletedIds.includes(item.id)));
        toast.success(message || "Entries deleted successfully!");
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    );

    setFilteredData(filtered);
    setPagination((prev) => ({
      ...prev,
      pageIndex: 0,
    }));
  }, [debouncedSearchTerm, data]);

  const table = useReactTable({
    data: filteredData,
    columns,
    enableRowSelection: true,
    getRowId: (row) => row.id.toString(),
    state: {
      rowSelection,
      columnVisibility,
      sorting,
      columnFilters,
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
  });

  const BulkActionBtn =
    table.getSelectedRowModel().rows.length > 0 ? (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto cursor-pointer">
              <Trash2 className="w-4 h-4 md:block hidden " />
              {table.getSelectedRowModel().rows.length >= 2
                ? "Bulk Actions"
                : " Action"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Button
                  variant="ghost"
                  className="w-full text-left p-0"
                  onClick={() => {
                    setOpen(true);
                    setDialogData("Delete");
                  }}
                >
                  Delete
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  onClick={() => {
                    setOpen(true);
                    setDialogData("Export");
                  }}
                  variant="ghost"
                  className="w-full text-left p-0"
                >
                  Export
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogTitle>{`Confirm  ${
              dialogData == "Delete" ? "Deletion" : "Export"
            } `}</DialogTitle>
            <DialogDescription>
              {dialogData == "Delete"
                ? "Are you sure you want to delete the selected items? This action cannot be undone."
                : "Are you sure you want to export the selected items?"}
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={() => {
                  const selectedIds = table
                    .getSelectedRowModel()
                    .rows.map((row) => row.original.id);
                  if (dialogData == "Delete") {
                    DeleteEntries(selectedIds);
                  } else if (dialogData == "Export") {
                    ExportEntries(selectedIds);
                  }
                }}
                className={
                  dialogData == "Delete" ? "bg-red-600" : "bg-green-600"
                }
              >
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    ) : (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return (
    <div
      className={`shadow shadow-primary/50 rounded-lg py-4 px-2 ${className} `}
    >
      <div className="w-full mb-4">
        <div className="flex px-2 items-center">
          <Input
            placeholder="Search..."
            type="text"
            id="search"
            value={searchTerm}
            className="w-[40%] md:flex hidden"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {BulkActionBtn}
        </div>
        <Input
          placeholder="Search..."
          type="text"
          id="search-mobile"
          value={searchTerm}
          className="w-[95%] md:hidden flex mt-4 mx-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Table className="rounded-t-lg overflow-hidden">
        <TableStructureHeader table={table} />
        <TableStructureBody table={table} columns={columns} loading={loading} />
      </Table>

      <TableStructureFooter table={table} />
    </div>
  );
}
