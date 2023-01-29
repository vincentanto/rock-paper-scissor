
let count=0;
let score=[0,0,0];
let nr=["-","-","-","-"];
var str1 = "",
str2 = "";
var user = 0,
comp = 0;
let n=null;
const images=['https://tse2.mm.bing.net/th?id=OIP.pOJmusTrUfnb1wLup79jhgHaGV&pid=Api&P=0','https://www.pinclipart.com/picdir/big/536-5360310_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png','https://www.pngjoy.com/pngl/816/9660182_rock-paper-scissors-mickey-mouse-hand-drawing-transparent.png'];
//High Score Table Function
function disp(){
document.getElementById("p1").innerHTML=nr[0];
document.getElementById("p2").innerHTML=nr[1];
document.getElementById("p3").innerHTML=nr[2];

}

disp();
//Table Sorting Function
function sortA(count,n){
    
    for(let i=0;i<3;i++){
        if(count>=score[i]){
            if(i==2){
                score[i]=count;
                nr[2]=n+" "+count;
            
            }else if(i==0){
                score[2]=score[1];
                score[1]=score[0];
                score[0]=count;
                nr[2]=nr[1];
                nr[1]=nr[0];
                nr[0]=n+" "+count;
            }
            else{
                score[2]=score[1];
                score[1]=count;
                nr[2]=nr[1];
                nr[1]=n+" "+count;
            }
            break;
        }
    }
}

//Enable Disable Funnctions
function disable(){
    document.getElementById("btn1").disabled=true;
    document.getElementById("btn2").disabled=true;
    document.getElementById("btn3").disabled=true;
}
function enable(){
    document.getElementById("btn1").disabled=false;
    document.getElementById("btn2").disabled=false;
    document.getElementById("btn3").disabled=false;
}
function stpenable(){
    document.getElementById("stp").disabled=false;
}

function stpdisable(){
    document.getElementById("stp").disabled=true;
}

//Name Valuating Function
function name1(){
    stpdisable();
    n=document.getElementById("un").value;
if(n.length<3){
alert(' name should be > 3 ')
   document.getElementById("un").style.color="red";
}else{
      enable();
    document.getElementById("un").style.color="black";
}
}
//Function to stop the  game
function stopgames(){
    
    sortA(count,n);
    disp();
    user=0;
    comp=0;
    count=0;
    disable();
    document.getElementById("pts").innerHTML = 0;
    document.getElementById('computer').src = 'https://cdn-icons-png.flaticon.com/512/6356/6356630.png';
    document.getElementById("un").value ='';
    stpdisable();
}


//Main function
function play(option) {

//Players choice
str1 = option;
//Computers choice
let num = Math.floor(Math.random() * 3);
switch (num) {
  case 0:
    str2 = "Rock";
    break;
  case 1:
    str2 = "Paper";
    break;
  case 2:
    str2 = "Scissors";
    break;
}
//Display the choices

document.getElementById('computer').src = images[num];
//Validate the choices
if (str1 == str2) {
  document.getElementById("result").innerHTML = "TIE";
  document.getElementById("result").style.color = "blue";
} 
else if (str1 == "Rock" && str2 == "Scissors" )
 {
  document.getElementById("result").innerHTML = "You Win";
  document.getElementById("result").style.color = "green";
  user++;
} 
else if (str1 == "Paper" && str2 == "Rock") 
{
  document.getElementById("result").innerHTML = "You Win";
  document.getElementById("result").style.color = "green";
  user++;
} 
else if (str1 == "Scissors" && str2 == "Paper")
 {
  document.getElementById("result").innerHTML = "You Win";
  document.getElementById("result").style.color = "green";
  user++;
} 
else 
{
  document.getElementById("result").innerHTML = "You Lose";
  document.getElementById("result").style.color = "red";
  comp++;
}
//Display the score
document.getElementById("yourScore").innerHTML = user;
document.getElementById("computerScore").innerHTML = comp;
if (user == 5) {
  document.getElementById("result").innerHTML = "You Win the Game";
  document.getElementById("result").style.color = "green";
 count++;
  user = 0;
  comp = 0;
  document.getElementById("pts").innerHTML = count;
  stpenable();
}
if (comp == 5) {
  document.getElementById("result").innerHTML = "You Lose the Game";
  document.getElementById("result").style.color = "red";
  user = 0;
  comp = 0;
  stpenable();
}

}


