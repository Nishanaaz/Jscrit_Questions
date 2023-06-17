//String questions
// Write a program that takes a string input from the user and :-
// print out the length of the string.
// let string=prompt("Enter a string");
// let Length=string.length;
// console.log(Length);




//3-Write a program that takes a string input from the user and capitalizes the first letter of every word in the string (e.g. "hello world" becomes "Hello World").
// let s1=prompt("Enter a string");

/*let s1="my name is nisha";
let split_str=s1.split(' ');
for (let i=0; i<split_str.length; i++){   
    split_str[i]=split_str[i].charAt(0).toUpperCase()+split_str[i].substring(1,);
}

console.log(split_str.join(' '));
*/



// 4-Use of splice--
/*let str2=["array","array1","array2","array3","array4"];
console.log(str2.splice(1,2,"arr1","arr2","arr3"))
console.log(str2)*/


//5-Sort an array:
// let str3="Nisha";
// let sortedstr3=str3.split(' ').sort().join(' ');
// console.log(sortedstr3);


//Sorting without Function:
/*
let str2="nisha";
let str3=str2.split(' ');
for(let i=0;i<str3.length;i++){
  for(let j=i+1;j<str3.length;j++){
    if (str3[i]>str3[j]){
      let c=str3[i];
      str3[i]=str3[j];
      str3[j]=c;
    }
  }
}
console.log(str3.join(' '));
*/


//5- Write a program that takes a string input from the user and removes all punctuation characters from the string.
// const s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
// let wdoutpunct=""
// let punct="[.,\/#!$%\^&\*;:{}=\-_`~()]''?";
// for (let i=0;i<s.length;i++){
//   if (punct.indexOf(s[i])===-1){
//     wdoutpunct+=s[i]
//   } 
  
// }
// trim=wdoutpunct.replace(/\s/g, ' ');
// console.log(trim);




//6-Write a function that takes in two parameters, name and age, and uses a template literal to output a message like this: "My name is __ and I am __ years old."
let name=prompt("Enter your name here: ");
let age=prompt("Enter your age here");
let sentence=`My name is ${name} and I am ${age} years old.`
console.log(sentence);

