import { type Column, type ColumnDef } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { ProcessingInfo } from "../../types/processinginfo.types";

const HeaderButton = ({
  text,
  column,
  className,
}: {
  text: string;
  column: Column<ProcessingInfo>;
  className?: string;
}) => (
  <Button
    variant="ghost"
    size="sm"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    className={cn("p-0", className)}
  >
    {text}
    {column.getIsSorted() === "asc" ? (
      <ArrowUpIcon className="ml-2 size-4" />
    ) : column.getIsSorted() === "desc" ? (
      <ArrowDownIcon className="ml-2 size-4" />
    ) : null}
  </Button>
);

export const columns: ColumnDef<ProcessingInfo>[] = [
  {
    accessorKey: "transmissionReference",
    header: ({ column }) => (
      <HeaderButton text="Geschäftsfall" column={column} />
    ),
  },
  {
    accessorKey: "documentReference",
    header: ({ column }) => (
      <HeaderButton text="Dokumentenreferenz" column={column} />
    ),
  },
  {
    accessorKey: "documentDefinitionName",
    header: ({ column }) => <HeaderButton text="Dokument" column={column} />,
  },
  {
    accessorKey: "productName",
    header: ({ column }) => <HeaderButton text="Produkt" column={column} />,
  },
  {
    accessorKey: "createdDate",
    header: ({ column }) => <HeaderButton text="Datum" column={column} />,
  },
  {
    accessorKey: "createdTime",
    header: ({ column }) => <HeaderButton text="Uhrzeit" column={column} />,
  },
  {
    accessorKey: "type",
    header: ({ column }) => <HeaderButton text="Typ" column={column} />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <HeaderButton text="Status" column={column} />,
  },
];
