

async function makeapiCall(url){
try {
   let res = await fetch(url);
    let data = await res.json();

    return data ; 
}catch(err){
    console.log("err :" ,err)
}  
}

//logical code for fect url ......

function appendCall(data,parent){

    data.forEach((e)=>{
        let div = document.createElement("div");
div.addEventListener("click",()=>{
localStorage.setItem("clicked",JSON.stringify(e))
    window.location.href = "selected.html"
    // we are setting and redirecting user to selected page ...
})
        let img = document.createElement("img");
        img.src = e.urls.small

        let p = document.createElement("p");
        p.innerHTML = e.user.username

        div.append(img,p)

        parent.append(div)
       })

}






export { makeapiCall , appendCall } 