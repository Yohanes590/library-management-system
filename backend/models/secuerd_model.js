const mongoose = require("mongoose")
const username_password = mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        forgotten:{
            type:String,
            required:true,
        }
    }
)

const privacy_data = mongoose.model("Security-Collection" , username_password)
module.exports = privacy_data
