"use strict";
let userName1=prompt("lets starts with your name");
let authorName;
let authorAge;
let authorCity;
let authorUnvirsitys;
let authorStatus1;
let graduationYears;
let ageNumbers;
let totalCorrectAnswers=0;
let top10s=['godfather','casino','goodfellas','django unchained','inception','irish men',
'the men from uncle','man of steel','dark night rises','shawshank redemption'];
let favMovie;

let quesition="which of the next movies were the author's favorite \n,"+
"(you have to guess 1 movie each attemp) \n"+
  "-Godfather \n"+
  "-fast and furious \n"+
  "-Titanic \n"+
  "-Goodfellas \n"+
  "-me before you \n"+
  "-city of angals \n"+
  "-justice leag \n"+
  "-Casino"
  authorName_Age(userName1);

 ageNumbers=prompt("how was the author age ? you 4 attempts to guess")
  author_Age(ageNumbers);
 authorCity=prompt("author born in syria");
  author_City(authorCity);
 authorUnvirsitys=prompt("author's unviersity was standford university");
  author_unvirsity(authorUnvirsitys);
authorStatus1=prompt("author is married ");
 author_Status(authorStatus1);
graduationYears=prompt("author graduate in 2015 ");
 graduation(graduationYears);

 movies(top10s);

function authorName_Age(userName)
{
  if(userName.toLowerCase()=="hasan")
{alert("ohh we have the same name !!")
alert("hello "+ userName +" you going to answer next 5 qusetions with yes or no");
authorAge=prompt("Author age was 25");
  if(authorAge.toLowerCase()=="no")
{
    alert('Correct');
     totalCorrectAnswers++
   // console.log("Age answered correct")
}
  else if(authorAge.toLowerCase()=="yes")
{
    alert("Wrong");
   // console.log("Age answered wrong")
}

}
else
{
    alert("hello "+ userName +" you going to answer next 5 qusetions with yes or no");
   authorName=prompt("author name was omar");
   if(authorName.toLowerCase()=="no")
{
    alert(' correct');
    totalCorrectAnswers++;
   // console.log("Name answered correct")
}
else if (authorName.toLowerCase() =="yes")
{
    alert("wrong");
  //  console.log("Name answered wrong")
}

}

}





function author_City(authorBornCity){

  if(authorBornCity.toLowerCase()=="yes")
{
    alert("correct")
    totalCorrectAnswers++;
   // console.log("City of Born answered correct")
}
else if(authorBornCity.toLowerCase()=="no")
{
    alert("Wrong");
   // console.log("City of Born answered Wrong")
}

}



function author_unvirsity(authorUnvirsity){

  if(authorUnvirsity.toLowerCase()=="yes")
{
    alert("wrong")
  //  console.log("Unvirsity answered wrong")
}
else if(authorUnvirsity.toLowerCase()=="no")
{
    alert("correct");
    totalCorrectAnswers++;
  //  console.log("Unvirsity answered correct")
} 

}



function author_Status(authorStatus)
{

  if(authorStatus.toLowerCase()=="yes")
{
    alert("wrong")
    
    //console.log("Social status answered wrong")
}
else if(authorStatus.toLowerCase()=="no")
{
    alert("correct");
    totalCorrectAnswers++;
   // console.log("Social status answered correct")
}

}



function graduation(graduationYear)
{

  if(graduationYear.toLowerCase()=="yes")
{
    alert("wrong")
   // console.log("Graduation year answered wrong")
}
else if(graduationYear.toLowerCase()=="no")
{
    alert("correct");
    totalCorrectAnswers++;
   // console.log("Graduation year answered correct")
}

}




function author_Age(ageNumber){

  let attemp=0;
while(attemp < 3 && ageNumber!=23)
{
  if (ageNumber>=20 && ageNumber<=25) 
  alert("too close")
   else if (ageNumber>25 && ageNumber<30) 
     alert("too far")
      else 
   alert("too far")
   ageNumber=prompt(3-attemp + "  attemps left , \n try again");
   attemp++;
}
 if (ageNumber!=23)
 alert("hard luck it was 23")
 else
 {
  totalCorrectAnswers++;
 alert("correct what agreat memory!!")
 }

}

 


 

   function movies(top10)
   {
   

    favMovie=prompt(quesition);
    let answerState=false;
    let correctAnswer=0;
    let gussing=0;
    let indexNo=-1;

while(gussing < 5  && correctAnswer !=2)
{
for(var j = 0 ; j<top10.length;j++)
{
if(favMovie.toLowerCase()==top10[j])
{              
answerState=true;
indexNo=j;
break;
}
else{
answerState=false

}

}
if(answerState)
{
alert(top10[j]+" is a correct answer");
console.log(j)
correctAnswer++;
alert(3-correctAnswer+" left to guess")
}
else{
alert(favMovie+" is a wrong answer")
alert(5-gussing+" attempts left to guess");

}
gussing++;

favMovie=prompt(quesition);

}
totalCorrectAnswers+=correctAnswer+1;


if(gussing>2)
{

alert(" you have completed all your attemps , hard luck")
}
else
alert("Good Job you have gussed all the movies correctly")
   }
 

                      



alert("good job "+userName1+"\n your total correct points is "+totalCorrectAnswers+" \n hope we can see you in another game bye!!")






