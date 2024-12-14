const mongoose = require("mongoose")

const adding_book_data = mongoose.Schema(
    {
        book_name:{
            type:String,
            required:true
        },
        book_grade:{
            type:Number,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        quantitiy:{
            type:Number,
            require:true
        },
        type:{
            type:String,
            required:true,
        },  
        date:{
            type:String,
            required:true
        }

    }
)

const all_book_data = mongoose.model("Book Data" , adding_book_data)
module.exports= all_book_data;