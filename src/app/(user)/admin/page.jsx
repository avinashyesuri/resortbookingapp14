// import { auth } from '@/app/auth'
// import React from 'react'
// import { redirect } from 'next/dist/server/api-utils'
// import Link from 'next/link'



// const AdminPage = async() => {
//     const session = await auth()
//     if (!session){
//         redirect('/login')
//     }

//   return (
//     <>
//         {session ?(
//             <>
//                 <h1>This is AdminPage</h1>
//             </>
//         ): "Not authorized "
        
//         }
//         <Link href="/login">
//             Login
//         </Link>
//     </>
//   )
// }

// export default AdminPage


import AddProductForm from '@/app/component/AddProductForm'
import AdminNavbar from '@/app/component/AdminNavbar'
import React from 'react'



const AdminPage = () => {

  return (
    <div>

      <AdminNavbar />
      <AddProductForm/>
    </div>
  )
}

export default AdminPage