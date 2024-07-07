let btn=document.querySelector("button");
let inp=document.querySelector("input");
let list=document.querySelector("ul");
btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    list.appendChild(item);
    inp.value="";
    console.log(item);
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
});

// let res=document.querySelectorAll(".delete");
// for(reslut of res){
//     res.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
list.addEventListener("click",function(event){
        if(event.target.nodeName=="BUTTON"){
            let listitem=event.target.parentElement;
            listitem.remove();
            console.log("deleted");
        }
})