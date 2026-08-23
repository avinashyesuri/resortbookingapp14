// import mongoose from "mongoose";

// const DBConnection = async()=>{
//     try{
//         await mongoose.connect(process.env.MONGO_URI)
//         console.log("database connected hurrah")
//     }catch(error){
//         console.log(error)

//     }
// }
// export default DBConnection;

// import mongoose from "mongoose";
// import dns from 'dns';
// // Change DNS
// dns.setServers(["1.1.1.1", "8.8.8.8"]);
// const DBConnection = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Database connected hurrah");
//     } catch (error) {
//         console.error("Database connection failed:", error);
//         throw error;
//     }
// };

// export default DBConnection;

import mongoose from "mongoose";

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected hurrah");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error;
    }
};

export default DBConnection;