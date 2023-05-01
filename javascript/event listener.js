
    /*
    function eo4(element){ 
    //alert("強迫點擊");
    element.innerText="下一頁";
    element.style.color="blue";
    */

    var TWno1=document.getElementById("TWno1");
    TWno1.addEventListener("click",function(){
        //alert("強迫點擊");
        this.innerHTML="下一頁";
        this.style.color="red";
    })

    var img=document.getElementById("new");
        img.addEventListener("mouseover",function(){
        this.src="MLB.jpg";
    })

    var ing=document.getElementById("new");
        img.addEventListener("mouseout",function(){
            this.src="hi.jpg";
    })