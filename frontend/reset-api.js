const resetFunction = ()=>{
    fetch("/show-fav-food",{
        method:"post"
    }).then(data=>data.json())
    .then(res=>{
        console.log(res)
    })
}

resetFunction()