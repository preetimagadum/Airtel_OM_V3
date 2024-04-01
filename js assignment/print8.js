/*8. Write a program Factors of 24 using while loop
(Factors of 24 are 1, ,3, 4, 6, 12, 24)*/


var num=24
for(i=1; i<=num; i++){
    if(num%i==0){
        console.log(i)
    }
}