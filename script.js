let names=['Akhila','Fouziya','Haripriya','Harsha','Chandrika','Basha','Bhulekhya','Satyanarayana','sai varma','santhosh','mounika','shambhavi','sirisha','swetha','vishnu kumar sir'];
let choice=['Truth','Dare'];
let truth=['What iss a secret you have never told anyone?','Have you ever cheated in an exam?','What is your worst habit?','What is the strangest dream you have had?','What is your biggest regret?','What is the worst grade you received for a class in school/college?','If you suddenly had a million dollars, how would you spend it?','Who is the best teacher you have ever had and why?other than vishnu sir because we all know he is best','What is the most embarrassing thing you have posted on social media?','If you could only eat one meal for the rest of your life, what would it be?','What is the last text message you sent your best friend?','Have you ever stolen anything?','What is the weirdest thing you have ever done in public?','What is the biggest fight you have ever been in with a friend?','what is embarrassing situation in class?','how will you spend your first salary','how many school friends are still in touch with you?','what may be your best friends replay when you say i hate you to them?','want change will you make to your college if you get a chance to chage?','right now do you think your are being best version of self?','What was the last thing you ate?','Do you have any unusual talents?','Do you have any phobias?','Have you ever used someone else\'s password?','Do you message people during your classes?','Are you a hard-working student?','What is the most annoying thing to you','Who is most important to you?'];
let dare=['Show the most crazy photo or video of yours on your phone','post the most embarrassing photo on your phone','Close your eyes until your next turn.','tell a joke','sing a song','speak loudly','Prank call a friend or family member.','For the next 10 minutes, every time someone asks you something, respond quickly','Say a few honest things about everyone else in the group.','Find the spiciest thing in your house and eat a whole spoonful.','drink 1 liter of water right now','speak in kannada','tell a story','act like vishnu sir','ask someone in this group to say sorry to you','Eat a snack without using your hands','Try and make the group laugh as quickly as possible','act like someone who in the meet','introduce yourself','introduce someone else in the meet','Post \'I love English!\' on social media.','Say the English alphabet backwards','Show the last photo you took with your phone.','Say the months of the year backwards',''];
let n=document.getElementById("name");
let choic=document.getElementById("c");
let truthq=document.getElementById("a");
let dareq=document.getElementById("b");
function t(){
    let rn=Math.floor(Math.random()*names.length);
    let rn1=Math.floor(Math.random()*choice.length);
    let rn2=Math.floor(Math.random()*truth.length);
    let rn3=Math.floor(Math.random()*dare.length);
    n.textContent=names[rn];
    choic.textContent=choice[rn1];
    if(choice[rn1]=='Truth'){
        truthq.textContent=truth[rn2];
        dareq.textContent='';
    }
    else{
        truthq.textContent='';
        dareq.textContent=dare[rn3];
    };
};