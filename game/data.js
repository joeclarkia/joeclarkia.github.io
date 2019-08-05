lines = [
// Add lines here

"Abraham~Who was Isaac's father?",  
"Jesus~Who is the star of the New Testament?",
"east~What direction did the wise men come from?",
"Bethlehem~Where was Jesus born?",
"Mary~Who was Jesus' mother?",
"Saul~What was the apostle Paul's original name?",
"Joseph~Who was sold as a slave and taken to Egypt?",
"love~1 Corinthians 13 is known as the _____ chapter.",
"Jesus~The book of Revelation says that it is the Revelation of _____.",
"life~Jesus said, <p class=\"quote qred\">I am the way, the truth, and the ____.",
"Ezekiel~In the book of _______ this line is repeated over and over: then they will know that I am the Lord.",
"overcome~In John 16:33, Jesus said, <p class=\"quote qred\">I have told you all this so that you may have peace in me. Here on earth you will have many trials and sorrows. But take heart, because I have ________ the world.",
"you~Jesus asked, 'Who do ___ say that I am?'",
"understanding~Proverbs 3:5-6 says, <p class=quote>Trust in the LORD with all your heart and lean not on your own _____________; in all your ways submit to him, and he will make your paths straight.",
"feet~How beautiful are the ____ of those who bring good news! - Romans 10:15",
"glory~Psalm 19:1 says, <p class=quote>The heavens declare the _____ of God; the skies proclaim the work of his hands.",
"New Jerusalem~Revelation 21 says this: <p class=quote>I saw the Holy City, the _____________, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband. And I heard a loud voice from the throne saying, \"Look! God's dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God. He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.\"",
"ow ow ow~What does the seal say?",
"a la de da de da~What does Ember say?",
"rest~In Matthew 11:28, Jesus said <p class=\"quote qred\">Come to me, all you who are weary and burdened, and I will give you ____.",
"heart~Deuteronomy 6:4-5 says, <p class=quote>Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your _____ and with all your soul and with all your strength.",
"love~1 Corinthians 13:13 says, <p class=quote>And now these three remain: faith, hope and ____. But the greatest of these is ____.",
"Red Sea~When the Israelites left Egypt they crossed the ___ ___.",
"Promised Land~In the time of Moses, the land we call Israel was referred to as the _______ ____.",
"Hebrews~In Egypt the Israelites were called _______.",
"archangels~Michael and Gabriel are called __________.",
"messenger~The word angel means _________.",
"Babylon~In the year 586 BC the Jews were sent into exile to _______.",
"Asherah~Many times in the Old Testament God told the Israelites to destroy the poles used to worship _______.",
"Nebuchadnezzar~______________ was forced to eat grass like a cow for seven years when he refused to acknowledge God.",
"66~There are __ books in the entire Bible.",
"39~There are __ books in the Old Testament.",
"27~There are __ books in the New Testament.",
"Psalms~The longest book in the Bible is ______.",
"Hosea~_____ was told by God to marry a prostitute.",
"Judah~For a couple centuries Israel was a divided kingdom composed of Israel and its neighbor _____.",
"Solomon~_______ was the wisest man who ever lived.",
"Malachi~The book of _______ talks about robbing God.",
"gospels~The first four books of the New Testament are known as the _______.",
"Pentecost~The church of Jesus as we know it today started on the Day of _________.",
"perish~God is not willing that any should ______.",
"12~How many apostles were there?",
"12~How many tribes of Israel were there?",
"Philistines~During the time of David one of the enemies of Israel was the P__________.",
"Judges~During the time of the book of ______, there was no king and 'everyone did as he saw fit'",
"Joshua~This book of the Bible describes how the Israelites conquered the Promised Land.",
"Elijah~The prophet of God who was taken up into heaven by a chariot of fire was ______."





/*
sleep/slumber

rest
unclean animals

Revelation - harp
Money...
First world
Ethical
Are people angels?
Guardian angels
Glory of animals...
tribulation...?
*/



// don't mess with anything below this line
];





questions=[];

for (var i=0; i<lines.length; i++)
{
   parts = lines[i].split('~');
   questions.push({"q": parts[1], "a": parts[0]});
}
