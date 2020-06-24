1. In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.
You may assume:
there will be no punctuation besides full stops and spaces
all but the last full stop will be followed by a space and at least one word

PREP
Parameters:string paragraph
Return:paragraph with each capitalise the first letter of the first word of each sentence
Example:input:"hello. my name is inigo montoya. you killed my father. prepare to die."
output:"Hello. My name is inigo montoya. You killed my father. Prepare to die."


function fix(paragraph){
var arr=[];
var ar=paragraph.split('. ');
for (var i=0; i<ar.length; ++i)
{
  if (ar[i]=='')
    continue;
  var a=ar[i][0].toUpperCase();
  for (var j=1; j<ar[i].length; ++j)
    a+=ar[i][j];
  arr.push(a);
}
return arr.join('. ');
}
