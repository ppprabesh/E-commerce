"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { formatCurrency } from "@/lib/formatters"
import { useState } from "react"


export function ProductForm() {

   const [pricePaid, setPricePaid] = useState<number>(0)

  return <>
  <form  className="space-y-8">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" type="text" required/>
    </div>
    <div className="space-y-2">
      <Label htmlFor="pricePaid">Price</Label>
      <Input id="pricePaid" name="pricePaid" type="number" required 
      value={pricePaid}
      onChange={(e) => setPricePaid(Number(e.target.value))} />
      <div className="text-muted-foreground">
        {formatCurrency(pricePaid || 0)}
      </div>
    </div>
  </form>
  </>
}