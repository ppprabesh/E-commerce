"use client"

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Card, CardContent } from '@/components/ui/card'

type Item = {
  id: number
  name: string
  price: number
  category: string
  stock: number
}

const data: Item[] = [
  {
    id: 1,
    name: "Product A",
    price: 29.99,
    category: "Electronics",
    stock: 50
  },
  {
    id: 2,
    name: "Product B",
    price: 19.99,
    category: "Books",
    stock: 100
  },
]

const columnHelper = createColumnHelper<Item>()

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    cell: info => `$${info.getValue()}`,
  }),
  columnHelper.accessor('category', {
    header: 'Category',
  }),
  columnHelper.accessor('stock', {
    header: 'Stock',
  }),
]

export default function ItemTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th 
                      key={header.id}
                      className="p-2 text-left border-b font-medium"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map(cell => (
                    <td 
                      key={cell.id}
                      className="p-2 border-b"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}