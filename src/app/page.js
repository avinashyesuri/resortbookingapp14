// import React from 'react'
// import { auth } from './auth'
// import DBConnection from './utils/config/db'
// import { redirect } from 'next/dist/server/api-utils'
// import AdminPage from './(user)/admin/page'
// import UserNavigation from './component/userNavigation'


// const HomePage = async() => {
//   await DBConnection()
//   const session = await auth()

//   if(!session){
//     redirect('/login')
//   }

//   console.log("role check:", session.role)
//   console.log("username check:", session.username)
//   const useerName = session.username


//   return (
    
//     <div>
//       {session.role === 'admin' && (
//         <>
//         <div style={{textTransform:'uppercase'}}>
//           <UserNavigation userName = {userName}/>
//            welcome resort booking section
//         </div>
//         </>
//       )}
//       {session.role === 'user' && (
//         <AdminPage/>
//       )}
//     </div>

   
//   )
// }

// export default HomePage


import React from 'react'
import UserNavigation from './component/userNavigation'


const HomePage = async() => {

  
  return (

    <div style={{textTransform:'uppercase'}}>
      <UserNavigation/>
      welcome resort booking section
    </div>
  )
}

export default HomePage