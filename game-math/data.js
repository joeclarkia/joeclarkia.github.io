lines = [
[ "0", "0 + _ = 0"],

[ "1", "1 + _ = 1"],
[ "0", "0 + _ = 1"],

[ "0", "2 + _ = 2"],
[ "1", "1 + _ = 2"],
[ "2", "0 + _ = 2"],

[ "0", "3 + _ = 3"],
[ "1", "2 + _ = 3"],
[ "2", "1 + _ = 3"],
[ "3", "0 + _ = 3"],

[ "0", "4 + _ = 4"],
[ "1", "3 + _ = 4"],
[ "2", "2 + _ = 4"],
[ "3", "1 + _ = 4"],
[ "4", "0 + _ = 4"],

[ "0", "5 + _ = 5"],
[ "1", "4 + _ = 5"],
[ "2", "3 + _ = 5"],
[ "3", "2 + _ = 5"],
[ "4", "1 + _ = 5"],
[ "5", "0 + _ = 5"],

[ "0", "6 + _ = 6"],
[ "1", "5 + _ = 6"],
[ "2", "4 + _ = 6"],
[ "3", "3 + _ = 6"],
[ "4", "2 + _ = 6"],
[ "5", "1 + _ = 6"],
[ "6", "0 + _ = 6"],

[ "0", "7 + _ = 7"],
[ "1", "6 + _ = 7"],
[ "2", "5 + _ = 7"],
[ "3", "4 + _ = 7"],
[ "4", "3 + _ = 7"],
[ "5", "2 + _ = 7"],
[ "6", "1 + _ = 7"],
[ "7", "0 + _ = 7"],

[ "0", "8 + _ = 8"],
[ "1", "7 + _ = 8"],
[ "2", "6 + _ = 8"],
[ "3", "5 + _ = 8"],
[ "4", "4 + _ = 8"],
[ "5", "3 + _ = 8"],
[ "6", "2 + _ = 8"],
[ "7", "1 + _ = 8"],
[ "8", "0 + _ = 8"],



["a", "Do you like playing this game? <p>a) Yes<br>b) No<br>"],

// don't mess with anything below this line
];





questions=[];

for (var i=0; i<lines.length; i++)
{
   parts = lines[i];
   questions.push({"q": parts[1], "a": parts[0]});
}