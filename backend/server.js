const express = require("express");
const mongoose = require("mongoose");
const app = express();
const all_book_data = require("./models/adding_book");
const brrowed_books = require("./models/browed-book");
const { readFileSync } = require("fs");
const login = readFileSync("../frontend/index.html", "utf-8"); 
const dashboard = readFileSync("../frontend/home.html", "utf-8"); 
const username_password = require("./models/secuerd_model")
const success_page = readFileSync('../frontend/success.html', "utf-8");
const something = readFileSync("../frontend/Error-Page.html", "utf-8");
const foro_for = readFileSync("../frontend/404.html", "utf-8");
const forgote = readFileSync("../frontend/forgot.html","utf-8")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../frontend"));
app.use(express.static("../"));

app.get("/", (req, res) => {
    res.end(login);  
});

app.post("/admin-dashboard",async (req, res) => {
try {
    const DB_Data= await username_password.find({})
    const username_from_frontend = req.body.username;
    const password_form_frontend = req.body.password;
    const db_username = DB_Data[0].username;
    const db_password = DB_Data[0].password;
    if(username_from_frontend != db_username){
        res.end("wrong username or password")
    }else if(password_form_frontend != db_password){
        res.end("wrong username or password")
    }else{ 
        res.end(dashboard)
    }
} catch (error) {
    res.end(something)
}
});

// Adding Books
app.post('/adding-books', async (req, res) => {
    try {
        await all_book_data.create(req.body);
        res.end(success_page);
    } catch (error) {
        res.end(something);
    }
});
 
// Browed Books
const already_borrowed = readFileSync("../frontend/brrowed_again.html","utf-8")
app.post('/brrowed-books', async (req, res) => {
    try {

        const j_data = await brrowed_books.find({})
        const filtred_data = j_data.filter(item => item.book_status == "not-give")
        const f_name = req.body.student_name
        const l_name = req.body.student_last_name
        const cheack = filtred_data.find(item => item.student_name ==f_name && item.student_last_name == l_name)
        if(cheack){
        res.end(already_borrowed)
        }else{
            await brrowed_books.create(req.body);
            res.end(success_page);
        }
       

    } catch (error) {
        res.end(something);
    }
});


// Book - API
app.post('/book-data-api', async (req, res) => {
    try {
        const book_api_data = await all_book_data.find({});
        res.json(book_api_data);
    } catch (error) {
        res.end(something);
    }
});

// Browed API
app.post('/brrowed-api', async (req, res) => {
    try {
        const brrowed_api = await brrowed_books.find({});
        res.json(brrowed_api);
    } catch {
        res.end(something);
    }
});

// Replacing data
app.post('/give-back', async (req, res) => {
    try {
        const id = req.body.id.trim();
        const browed_replaced_data = await brrowed_books.replaceOne(
            { _id: new mongoose.Types.ObjectId(id) },
            {
                student_name: req.body.student_name,
                student_last_name: req.body.student_last_name,
                student_grade: req.body.student_grade,
                student_section: req.body.student_section,
                Book_name: req.body.Book_name,
                Book_grade: req.body.Book_grade,
                quantitiy: req.body.quantitiy,
                date: req.body.date,
                phone_no: req.body.phone_no,
                book_status: req.body.book_status,
                give_back_data: req.body.give_back_data,
            }
        );
        res.end(success_page);
    } catch (error) {
        res.end(something);
    }
});


// Find - Browed
app.post('/find-student/:name/:lastname', async (req, res) => {
    const { name, lastname } = req.params;
    const find_student = await brrowed_books.find({ student_name: name, student_last_name: lastname });
    res.json(find_student);
});


// Delete Book
app.post("/delet-book", async (req, res) => {
  try {
    await all_book_data.findByIdAndDelete(req.body.id);
    res.end(success_page);
  } catch (error) {
    res.end(something)
  }
});

//privacy Setting
const privacy_page = readFileSync('../frontend/exec-prv/priva.html','utf-8')
app.use(express.static("../frontend/exec-prv"))
app.get('/privacy-security' , (req,res)=>{
    res.end(privacy_page)
})

//replacing prv data 

app.post("/replacing-private-data", async(req,res)=>{
    await username_password.replaceOne({_id:"6744b287d79ccab2cbe326af"},{
        username:req.body.username,
        password:req.body.password,
        forgotten:req.body.forgotten
    })
    res.end(success_page)   
})


//forgoten section

app.get('/password-reset',(req,res)=>{
    res.end(forgote)
})

app.post("/show-fav-food",async(req,res)=>{
    const fav_food= await username_password.find()
    res.json(fav_food)
})


app.all("*", (req, res) => {
    res.end(foro_for);
});

require("dotenv").config()

mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("Connected DataBase");
    })
    .catch((error) => {
        console.log({ error: error.message });
    });

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`App Start On Port ${port}`);
});