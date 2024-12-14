const mongoose = require("mongoose")

const brrowed_books = mongoose.Schema(
    {
        student_name:{
            type:String,
            required:true
        },
        student_last_name:{
            type:String,
            required:true
        },
        student_grade:{
            type:String,
            required:true,
        },
        student_section:{
            type:String,
            required:true,
        },
        phone_no:{
            type:Number,
            required:true
        },
        Book_name:{
            type:String,
            required:true,
        },
        Book_grade:{
            type:Number,
            required:true,
        },
        quantitiy:{
            type:Number,
            required:true
        },
        date:{
            type:String,
            required:true,
        },
        book_status:{
            type:String,
            required:true,
        },
        give_back_data:{
            type:String,
            require:true,
        }
    }
)

const brrowed_data = mongoose.model("Brrowed Data", brrowed_books)
module.exports = brrowed_data;