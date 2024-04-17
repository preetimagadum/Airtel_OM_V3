//Write a program to read 5 numbers and print only the even numbers
let num=['2','6','7','5','8']
let even=[]
for(i=0; i<=num.length; i++){
    if(num[i]%2==0)
    even.push(num[i]);
    console.log(`print an even numbres:${even}`);
}
