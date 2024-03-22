                // id
// let a=document.getElementById("one");
// console.log(a)




                    //  class-step/1

// let b=document.getElementsByClassName("two")[0];
// console.log(b.innerText);
// let c=document.getElementsByClassName("two")[0];
// console.log(c.innerHTML);


        //  step/2
// let l=document.getElementsByClassName("two");
// // console.log(l)
//  for(let i=0; i<l.length;i++){
//     console.log(l[i].innerHTML)
//  }




    //   selected / query-selector 
   //  class mate (.) and id mate (#)

// let s=document.querySelector(".three").innerHTML;
// console.log(s)
// let s=document.querySelectorAll(".three").innerHTML;             //undefined
// console.log(s);




                        // button click-likes
// let likes=0;
// let a=document.getElementById("count")
// function abc(){
//     likes++;
//     a.innerText=likes
// }
                        // likes-and-dislikes
let likes=0;
let a=document.getElementById("count")
function abc(){
    likes++;
    a.innerText=likes
}
function xyz(){
     if(likes<0){
        a.innerText=0;
     }
     else{
        likes--;
        a.innerText=likes
     }
}