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
//            <calenderComponent/>
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
import CalenderComponent from './component/CalenderComponent'


const HomePage = async() => {

  
  return (

    <div style={{textTransform:'uppercase'}}>
      <UserNavigation/>
      <CalenderComponent/>
      <div>
        <h1>  welcome resort booking section</h1>
      </div>
    
    </div>
  )
}

export default HomePage