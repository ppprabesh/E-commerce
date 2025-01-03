import { Nav, NavLink } from "../../components/Nav";

export const dynamic = "force-dynamic"
// this is so that the Admin page isnt cached and we get the upto date data as possible


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
  <Nav>
  <NavLink href="/admin">Dashboard</NavLink>
  <NavLink href="/admin/products">Product</NavLink>
  <NavLink href="/admin/users">Customers</NavLink>
  <NavLink href="/admin/order">Sales</NavLink>
  </Nav>
   <div className="container my-6">{children}</div>
  </>
  )
}
