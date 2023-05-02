document.write("<h1>早安大家</h1>");

//基本資料型態&變數

//字串
"小熙" //單引號,雙引號,米字鍵 都可使用

//數字  
25
30
70

//布林值
//true真
//false假



//變數名稱只能是數字或英文
//變數名稱開頭不能是數字
var waht="阿猴";
var age= 23;
var boy=true;

document.write(waht);
document.write("<br/>");
 var waht = "阿熙"; //做更改之後,在做一次document.write
document.write(waht);
document.write("<br/>");

document.write(age);
document.write(23);
document.write("<br/>");
document.write(boy);
document.write(true);
document.write("<br/>");
document.write("有一個傳人");
document.write("<br/>");
document.write("叫"+ waht); // +入變數名稱讓一樣名稱一樣
document.write("<br/>");
document.write("我不入地獄誰入地獄");
document.write("<br/>");
document.write("感謝觀看");
document.write("<br/>");


//如何使用字串&字串用法


var waht ="he CSH" + "who are you";
document.write(waht.charAt(0));
document.write("<br/>");

//如何使用數字&數字的用法

var digit =2;
document.write(Math.round(Math.random(29)*4));
document.write("<br/>");


//製作計算機
 
 var my = prompt("輸入您的名稱");
 var yo = prompt("輸入您的年紀");
 document.write("he,good morning"+ my);
 document.write("my now  " + yo);
 


 var no1 = prompt("輸入您的數字1"); // 7
var no2 = prompt("輸入您的數字2"); //8
no1 =parseFloat(no1);
no2 =parseFloat(no2); // no1和no2數字相加
document.write(no1 + no2); //相加結果
document.write("<br/>");


// 陣列array介紹

//資料顯示較少可這樣操作
var A1 =33;
var A2 =56;
var A3 =77;
document.write(A1,A2,A3);



var A =[60,49,56,98,67]; //假設資料數量較多這樣輸入會比較快
A[0] = 44; //把0的數字做更改
document.write(A[0]); //顯示60,只有(A)的話會顯示全部
document.write("<br/>");

var k =["黑","白","綠","橘","黃"]; //英文也一樣
document.write(k);
document.write("<br/>");

var l =[true,22,"你好"];
document.write(l.length); //回傳數量3
document.write("<br/>");


//函式 function

function hello(waht,age){
    document.write("你好" +waht +"請問" + age + "歲");
    }

    hello("小小","30");
    document.write("<br>");
    

     
     function add(num1,num2){
     document.write(num1+num2);
     }
     add(4,8); //顯示12
     
    
     
   function add(num1,num2){
    return num1+num2;
   }
   document.write(add(4,4)); //顯示8

   

   
   function add(num1,num2){
    document.write(num1+num2);
    document.write("<br/>");
    return 20;
   }
   value = add(4,5);
   document.write(value); // 顯示9,20
   
   //if判斷
   var myboy =true;
   if(myboy){
    document.write("少吃多動");
    document.write("<br>");
   }
   

   
   var CIA =true;
   if(CIA){
    document.write("減肥加油");
    document.write("<br>");
   }
   else{
    document.write("堅持理念");
    document.write("<br>");
   }
   

   
   var waht =99;
   if(waht==99){
    document.write("人生解鎖");
    document.write("<br>");
   }
   else if(waht>=100)
   

   
   var now = 100;
   if(now==100){
    document.write("my now 1000$$");
   }
   else if(now>=80){
    document.write("my now 500$$");
   }
   else if(now>=60){
    document.write("my now 100$$");
   }
   else{
    document.write("my now 300$$");
    document.write("<br>");
   }
    

   
   var gg = 80;
   var bog =true;
   if(gg==80&&bog){
    document.write("早起鳥兒有蟲吃");
   }
    else{
        document.write("早起鳥兒有蟲吃");
    }
    

    
    var score =90;
    var rainy =true;
    

    if(score==100 || !rainy){
        document.write("早餐吃了嗎");
    }
    else{
        document.write("報告老師我吃了");
    }
    

    
    function max_num(num1,num2,num3){
        if(num1>=num2&&num1>=num3){
            return num1;
        }
        else if(num2>=num1&&num2>=num3){
            return num2;
        }
        else{
            return num3;
        }
    }
    document.write(max_num(2,3,5)); //傳最大值
    

    //物件object
    // Key value
    // 鍵    值

    
    var JJ = {
        boy:"小熙",
        age:23,
        is_male:true,
        print_boy:function(){
            document.write(this.boy);
        }
    };

    JJ.print_boy();
    document.write("<br/>");
    

    //真實世界物件 object
    
    
    var POV={
        title:"那些年我們一起追的女孩",
        maker:"群星瑞智",
        duration:110,
        actors:[
            {
                name:"柯震東",
                age:31,
                is_male:true
            },
            {
                name:"陳妍希",
                age:39,
                is_male:true
            }
        ]
    };
    document.write(POV.actors[0].age);
    


    //while 迴圈
    
   
    var L =1;

    while(L<=3){
        document.write(L);
        document.write("<br/>");
        L=L+1;
    }
    

    //js 密碼檢驗程式
/*
    var Password= 123456;
    var input;
    var entry_count=0;
    var entry_limit=4;
    var out_of_limit=false; 

    while(password!=input&&out_of_limit){
        entry_count++;
        if(entry_count<=!entry_limit){
        input=prompt("請輸入密碼");
    }
    else{
        out_of_limit=true;
    }
}    

if(out_of_limit){
    alert("超出輸入次數");
}
else{
    alert("登入成功");
}
*/

//for 迴圈
/*
var LA =0;
while(LA<10){
    document.write(LA);
    document.write("<br/>");
    LA++;
}
*/

var MRT =["小熙","小黃","小名"];
for(var LA = 0; LA<MRT.length; LA++){
    document.write(MRT[LA]);
    document.write("<br/>");
}

//JS製作問答

var questions=[
    {
        prompt:"你的個人性質:\n(A)熱情(B)活潑(C)熱心(D)安靜",
        answer:"A"
    },
    {
        prompt:"今天的心情如何:\n(A)開心(B)難過(C)忐忑(D)低落",
        answer:"C"
    },
    {
        prompt:"今天的天氣如何:\n(A)爆雨(B)炎熱(C)涼風(D)霧氣",
        answer:"C"
    },
]
var me =0;
for(var L=0; L<questions.length;L++){
    var input=prompt(questions[L].prompt);
    if(input==questions[L].answer){
        me++;
        alert("答對了!");
    }
    else{
        alert("答錯了");
    }
}
alert("總共答對了"+me+"題!");

//2維陣列,巢狀迴圈

var CCC =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];             //2維陣列

//document.write(Number[2][2]);

for(var S=0; S<4; S++){
    for(var Y=0; Y<3; Y++){
        document.write("Y;"+Y+",S:"+S);
        document.write("<br/>");
    }
}                     //巢狀迴圈


for(var Z=0; Z<CCC.length; Z++){
    for(var Q=0; Q<CCC[Z].length; Q++){
        document.write(CCC[Z][Q]);
    }
    document.write("<br/>");  //2維陣列+巢狀迴圈
}

//class

class apple{
    constructor(number,year,is_waterproof){
        this.number=number;
        this.year=year;
        this.is_waterproof=is_waterproof;
    }
    apple_age(){
        return 2015 -this.year;
    }
}

var apple1 = new apple("123",2017,false);
var apple2=  new apple("456",2018,false);
document.write(apple1.number);
document.write(apple2.year);

/*
var apple1={
    number:"123",
    year:2019,
    is_waterproof:false,
    apple_age:function(){
        return 2020 - this.year;
    }
}

var apple2={
    number:"456",
    year:2020,
    is_waterproof:false,
    apple_age:function(){
        return 2021 - this.year;
    }
}

var apple3={
    number:"789",
    year:2021,
    is_waterproof:false,
    apple_age:function(){
        return 2022 -this.year;
    }
}
*/
