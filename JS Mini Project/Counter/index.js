
const minus_btn=document.getElementById("minus-btn")
const count=document.querySelector(".count")
const changeby=document.getElementById("changeBy")

minus_btn.addEventListener("click",()=>{
    //alert("123")
    console.log("minus btn clicked")
    const countValue=parseInt(count.innerHTML)
    console.log(countValue)
    const changebyValue=parseInt(changeby.value)
    console.log(changebyValue)
    count.innerText = countValue - changebyValue

})

function plus_btn(){
    console.log("plus bth clicked")
    const countValue=parseInt(count.innerHTML)
    console.log(countValue)
    const changebyValue=parseInt(changeby.value)
    console.log(changebyValue)
    count.innerText = countValue + changebyValue
}

function resetbtn(){
    count.innerHTML=0
}
