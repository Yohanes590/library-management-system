const reloadPage = ()=>{
    window.location.reload()
}
const dashboard = document.getElementById("dashboard");
const browed =document.getElementById("browed");
const add = document.getElementById("add_books");
const show_book_data = document.getElementById("show_book_data");
const share = document.getElementById("shared");
const browed_anl = document.getElementById("browed_anl");
const loading =    document.getElementById("loading")


const dashOpen = ()=>{
    setTimeout(() => {
        dashboard.style.display="block"
        browed.style.display="none"
        add.style.display="none"
        show_book_data.style.display="none"
        share.style.display="none"
        browed_anl.style.display="none"
        loading.style.display="none"
}, 600);
    loading.style.display="flex"

}

function added(){
    setTimeout(() => {
        dashboard.style.display="none"
        browed.style.display="none"
        add.style.display="block"
        show_book_data.style.display="none"
        share.style.display="none"
        browed_anl.style.display="none"
        loading.style.display="none"
}, 600);
    loading.style.display="flex"
}

const bro = ()=>{
    setTimeout(() => {
        dashboard.style.display="none"
        browed.style.display="block"
        add.style.display="none"
        show_book_data.style.display="none"
        share.style.display="none"
        browed_anl.style.display="none"
        loading.style.display="none"
}, 600);
    loading.style.display="flex"
}

function show(){
    setTimeout(() => {
        dashboard.style.display="none"
        browed.style.display="none"
        add.style.display="none"
        show_book_data.style.display="block"
        share.style.display="none"
        browed_anl.style.display="none"
        loading.style.display="none"
}, 600);
    loading.style.display="flex"
}

const shared_book = ()=>{
    setTimeout(() => {
        dashboard.style.display="none"
        browed.style.display="none"
        add.style.display="none"
        show_book_data.style.display="none"
        share.style.display="block"
        browed_anl.style.display="none"
        loading.style.display="none"
}, 600);
    loading.style.display="flex"
}


function browed_chart(){
    setTimeout(() => {
        dashboard.style.display="none"
        browed.style.display="none"
        add.style.display="none"
        show_book_data.style.display="none"
        share.style.display="none"
        browed_anl.style.display="block"
        loading.style.display="none"
}, 600);
    loading.style.display="flex"
}

var data_input = ()=>{
   let  input =  document.getElementById("date").value;
   const empty =""

    if(input == empty){
        alert("Insert Date Please")
    }else{
        alert("Submited Success Fully"+input)
    }

}

//find data

const findData = ()=>{
    const firstName = document.getElementById("firstName").value;
    const secondName = document.getElementById("secondName").value;
    fetch(`/find-student/${firstName.toLowerCase()}/${secondName.toLowerCase()}`,
    {
        method:"post"
    }
)
.then(data => data.json())
.then(res => {
    if(res.length == 0 ){
     window.alert("user not found")
    }else{
      for(var index_geter in res){
     const filtred_data = res.filter(item => item.book_status === "not-give")

     const giveback = document.getElementById("give_back_date");
     const data_output = document.getElementById("Data_output");
     giveback.style.display="flex"
     data_output.style.display="flex"


     const append_out = document.createElement("div")
     data_output.innerHTML = `
         <div class="flex_data">
                 <label>Student Name</label>
                 <p>${res[index_geter].student_name}</p><br>
                 <label>Last Name</label>
                 <p>${res[index_geter].student_last_name}</p>
             </div>
     
             <div class="flex_data">
                 <label> Stundet Grade </label>
                 <p>${res[index_geter].student_grade}</p><br>
                 <label>Sectione</label>
                 <p>${res[index_geter].student_section}</p>
             </div>
     
     
             <div class="flex_data">
                 <label>Book Name </label>
                 <p>${res[index_geter].Book_name}</p><br>
                 <label>Book-Grade</label>
                 <p>${res[index_geter].Book_grade}</p>
             </div>
     
     
             <div class="flex_data">
                 <label>Quantitiy </label>
                 <p>${res[index_geter].quantitiy}</p><br>
                 <label>Date</label>
                 <p>${res[index_geter].date}</p>
             </div>
    
                      <div class="flex_data">
                 <label>Phone Number </label>
                 <p>${res[index_geter].phone_no}</p><br>
             </div>
    
             </div>
                   `
                    giveback.innerHTML = `
                    
                    <div class="give_back_data">
                    <label>Status</label>
                    <p>${res[index_geter].book_status}</p>
                    <label>Give Back Date</label>
                    <p>${res[index_geter].give_back_data}</p>
                    </div>
    
                    <div class="editing">
                        
                        <select id="book_status_replace" onclick="change_status()">
                            <option> -- Select Status -- </option>
                            <option value="give-Back">give-Back</option>
                            <option value="not-give">not-give</option>
                        </select><br>
    
                        <input type="text" oninput="changeing_date()" id="backing_date_value" placeholder="Give Back Date">
    
                        <button id="detail" onclick="editable('${res[index_geter].student_name}', '${res[index_geter].student_last_name}',
                        '${res[index_geter].student_grade}' , '${res[index_geter].student_section}' , '${res[index_geter].Book_name}' , ${res[index_geter].Book_grade},
                        '${res[index_geter].quantitiy}' , '${res[index_geter].date}' , '${res[index_geter].book_status}', '${res[index_geter].give_back_data}',${res[index_geter].phone_no}  ,'${res[index_geter]._id} '
                        
                        )">Update - System</button>
                 
                    </div>

     `

     document.getElementById("Data_output").append(append_out)



     }
    }
})

}
const dashboard_fetch = ()=>{
    fetch("/book-data-api",
        {
            method:"post"
        }
    ).then(data => data.json())
    .then(res => {


          for(var index_no in res){

            const tr = document.createElement("tr")
            tr.innerHTML = `
            <tr>
    <td>${res[index_no].book_name}</td>
    <td>${res[index_no].book_grade}</td>
    <td>${res[index_no].date}</td>
    <td>${res[index_no].quantitiy}</td>
    <td>${res[index_no].type}</td>
    <td>${res[index_no].price}</td>
    <td><button onclick="show()" id="detail">Details</button></td>
</tr>  
            `
     document.getElementById("table_data_input").appendChild(tr)

          }



        
        document.getElementById("total_books").innerText = res.length
       const rec =  document.getElementById("recent").innerText = res.length - 1;
       if(rec < 0 ){
       const rec =  document.getElementById("recent").innerText = "-";
       }else{
       const rec =  document.getElementById("recent").innerText = res.length - 1;
       }
    })

    fetch("brrowed-api",{
        method:"post"
    }).then(res => res.json())
    .then(data => {
        const local_data_filter = data.filter(item => item.book_status !== "give-Back")
        document.getElementById("broowed_books").innerText = local_data_filter.length
    })
}
dashboard_fetch()

const removeItem = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById("id").value=id;
            document.getElementById("deleted").submit()
            setTimeout(()=>{
          window.location.reload()
            },100)
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });

}

function showing_book_data (){
    
    fetch("/book-data-api" ,{
        method:"post"
    }).then(res=>res.json())
    .then(data => {
       for(var index_db in data){
        const tr = document.createElement("tr")
        tr.innerHTML=`
        
                <td>${data[index_db].book_name}</td>
                <td>${data[index_db].book_grade}</td>
                <td>${data[index_db].type}</td>
                <td>${data[index_db].price}</td>
                <td>${data[index_db].date}</td>
                <td>${data[index_db].quantitiy}</td>
                <td><button id="delete2" onclick="removeItem('${data[index_db]._id}')">Delete <span class="material-symbols-outlined">delete</span></button></td>

        `

        document.getElementById("append_data").appendChild(tr)
       }
    })

}

showing_book_data()


const editable = (fir_name,sec_name, std_grade , std_sec , book_name , book_grade , quantitiy , date,status ,give_back_data ,phone_no ,id)=>{


    document.getElementById("student_first_name").value = fir_name
    document.getElementById("student_last_name").value = sec_name
    document.getElementById("student_grade").value = std_grade
    document.getElementById("student_section").value = std_sec
    document.getElementById("phone_no_id").value = phone_no
    document.getElementById("id_book_name").value = book_name
    document.getElementById("id_book_grade").value = book_grade
    document.getElementById("id_quantitiy").value = quantitiy
    document.getElementById("dated").value = date
    document.getElementById("gived_date").value;
    document.getElementById("ided").value = id;
    if(!document.getElementById("backing_date_value").value){
        alert("Please Insert The Date Value")
    }else{
        submit_data()
    }
}

const change_status = ()=>{
    const back_status = document.getElementById("book_status_replace").value;
    document.getElementById("book_status").value = back_status
    }

const submit_data = ()=>{
    document.getElementById("replacing_form").submit();
}

function changeing_date(){
    const change_date = document.getElementById("backing_date_value").value;
   document.getElementById("gived_date").value =change_date ;
}


const analitics_fetch = ()=>{
    fetch("/brrowed-api" ,{
        method:"post"
    }).then(res=>res.json())
    .then(data=>{
        for(var index_get_number in data){
            const filtred_data = data.filter(item => item.book_status !== "not-give")
            let string = filtred_data[index_get_number];
            const tr_element = document.createElement("tr")
            tr_element.innerHTML = `
            
                    <td>${string.student_name + "\n"+ string.student_last_name}</td>
                    <td>${string.student_grade}</td>
                    <td>${string.Book_name}</td>
                    <td>${string.date}</td>
                    <td>${string.give_back_data}</td>
            
            `

             document.getElementById("appen_analitics_date").appendChild(tr_element)
        }
    })
}
analitics_fetch()

let AddingBookData = ()=>{
   const book_name_valid = document.getElementById("book_name_validation").value;
   const book_grade_valid =document.getElementById("book_grade_validation").value;
   const book_price_valid = document.getElementById("book_price_validation").value;
   const quantitiy_valid = document.getElementById("book_quantitiy_validation").value;
   const date_valid =   document.getElementById("adding_book_validation").value;
   const empty_sting = ""
        if(book_name_valid == empty_sting){
            window.alert("Please Insert Book Name !")
        }else{
            if(book_grade_valid == empty_sting){
                window.alert("Please Insert Book Grade")
            }else{
                if(book_price_valid == empty_sting){
                    window.alert("Please Insert Book Price")
                }else{
                    if(quantitiy_valid == empty_sting){
                        window.alert("Please Insert Quantitiy")
                    }else{
                        if(date_valid == empty_sting){
                            window.alert("Please Insert Date")
                        }else{
                            document.getElementById("adding_book_form").submit()
                        }
                    }
                }
            }
        }

}

function logout_close(){
    if(confirm("Are You Sure To Logout")){
        history.replaceState(null, '', '/');
        window.location.reload()
    }else{
        alert("Process Cancel")
    }
}

const submite_privacy = ()=>{
    const user_name = document.getElementById("username").value;
    const newKey = document.getElementById("new-passkey").value;
    const confirmKey = document.getElementById("confirm-passkey").value;
    const forgot = document.getElementById("fav-question").value;
    const empty_key_value = ""
    if (user_name == empty_key_value) {
        window.alert("Insert user name please");
    } else if (newKey == empty_key_value) {
        window.alert("Insert new password");
    } else if (confirmKey == empty_key_value) {
        window.alert("Confirm the password please");
    } else if (newKey != confirmKey) {
        window.alert("Different Password. Please correct.");
    } else if(forgot == empty_key_value) {
            window.alert("Please Insert Your Fav- Food Or Some Thing Else")
    }else{
        document.getElementById("replace_privacy").submit()
    }
    
}
