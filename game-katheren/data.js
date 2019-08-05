lines = [
["God","Who is in charge of the universe?"],
["Jesus","Who is the star of the New Testament?"],
["Adam","Who was the first person created?"],
["Moses","______ led the Israelites out of Egypt."],
["rib", "Eve was made from Adam's ___"],
["Elijah","______ was taken up to heaven in a chariot of fire."],
["Jonah","_____ tried to go to Tarshish to run away from God."],
["Daniel","_____ was thrown into the lion's den."],
["Luke","____ was a doctor in the New Testament"],
["Saul","Paul's name was ____ before his conversion"],
["rainbow","What was the sign of the promise to Noah never to flood the earth again?"],
["Genesis","The first book in the Bible is _______"],

// don't mess with anything below this line
];





questions=[];

for (var i=0; i<lines.length; i++)
{
   parts = lines[i];
   questions.push({"q": parts[1], "a": parts[0]});
}
