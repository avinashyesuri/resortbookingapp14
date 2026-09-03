const {default:Mongoose, default: mongoose } = require("mongoose");
const bookingSchema = new Mongoose.Schema({
    startdate:{
        type:String,
        required:true 
    },
    endtdate:{
        type:String,
        required:true 
    },

    price :{
        type:String,
        required:true 
    },
    offer :{
        type:String,
    },
        image:{
        type:String,
        required:true 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }
})

const BookingModel = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)
export default BookingModel
