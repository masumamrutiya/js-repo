    //  html ma class add karva
// document.getElementsByClassName("two")[0].classlist.add("one")


        //   set attribute
// document.getElementById("am").setAttribute("class","kush masum")


     // <!-- * * * *onclick* * * * -->
            //  method-1

//    let a= document.getElementsByTagName("p")[1];
//     function abc(){
//         // console.log("hello")                console ma print thay
//         a.innerText="my name masum amrutiya"
//     }

                //  method-2

    //  document.getElementById("btn").onclick=abc;
    //  function abc(){
    //     console.log("hello")
    //  }

    // <!-- method-3 -->

    let a=document.getElementById("btn");
    a.addEventListener("click",abc);
    function abc(){
        console.log("hello js")
        console.log("hello js")
        
    }