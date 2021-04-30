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
 authorCity=prompt("author born in syria");
  author_City(authorCity);
 authorUnvirsitys=prompt("author's unviersity was standford university");
  author_unvirsity(authorUnvirsitys);
authorStatus1=prompt("author is married ");
 author_Status(authorStatus1);
graduationYears=prompt("author graduate in 2015 ");
 graduation(graduationYears);
 ageNumbers=prompt("how was the author age ? you 4 attempts to guess")
 author_Age(ageNumbers);

  movies(top10s);

function authorName_Age(userName)
{
  if(userName.toLowerCase()=="hasan")
{alert("ohh we have the same name !!")
alert("hello "+ userName +"\n you're going to answer next 5 qusetions with yes or no (y or n)");
authorAge=prompt("Author age was 25");
  if(authorAge.toLowerCase()=="no" || authorAge.toLowerCase()=="n")
{
    alert('Correct');
     totalCorrectAnswers++
  
}
  else if(authorAge.toLowerCase()=="yes"|| authorAge.toLowerCase()=="n")
{
    alert("Wrong");

}

}
else
{
    alert("hello "+ userName +" you going to answer next 5 qusetions with yes or no");
   authorName=prompt("author name was omar");
   if(authorName.toLowerCase()=="no" || authorName.toLowerCase()=="n")
{
    alert(' correct');
    totalCorrectAnswers++;
  
}
else if (authorName.toLowerCase() =="yes"|| authorName.toLowerCase() =="y")
{
    alert("wrong");
 
}

}

}





function author_City(authorBornCity){

  if(authorBornCity.toLowerCase()=="yes" || authorBornCity.toLowerCase()=="y")
{
    alert("correct")
    totalCorrectAnswers++;
 
}
else if(authorBornCity.toLowerCase()=="no" || authorBornCity.toLowerCase()=="n")
{
    alert("Wrong");
  
}

}



function author_unvirsity(authorUnvirsity){

  if(authorUnvirsity.toLowerCase()=="yes" || authorUnvirsity.toLowerCase()=="y")
{
    alert("wrong")
 
}
else if(authorUnvirsity.toLowerCase()=="no" || authorUnvirsity.toLowerCase()=="n")
{
    alert("correct");
    totalCorrectAnswers++;
 
} 

}



function author_Status(authorStatus)
{

  if(authorStatus.toLowerCase()=="yes" || authorStatus.toLowerCase()=="y")
{
    alert("wrong")
    
  
}
else if(authorStatus.toLowerCase()=="no" || authorStatus.toLowerCase()=="n")
{
    alert("correct");
    totalCorrectAnswers++;
  
}

}



function graduation(graduationYear)
{

  if(graduationYear.toLowerCase()=="yes" || graduationYear.toLowerCase()=="y")
{
    alert("wrong")
  
}
else if(graduationYear.toLowerCase()=="no" || graduationYear.toLowerCase()=="n")
{
    alert("correct");
    totalCorrectAnswers++;
   
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
correctAnswer++;
 
break;
}
else{
alert(favMovie+" is a wrong answer")
alert(5-gussing+" attempts left to guess");

}
gussing++;

favMovie=prompt(quesition);

}
totalCorrectAnswers+=correctAnswer;


if(gussing>2)
{

alert(" you have completed all your attemps , hard luck")
}
else
alert("Good Job you have gussed one of the movies correctly ,"+
" \n the correct movies were :"+
"\n -Godfather"+
"\n -Godfellas"+
"\n -Casino")
   }
 

                      



alert("good job "+userName1+"\n your total correct points is "+totalCorrectAnswers+" \n hope we can see you in another game bye!!")






