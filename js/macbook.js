// button variable diclar section 
const memory8GbPrice=document.getElementById('memory-8Gb');
const memory16GbPrice=document.getElementById('memory-16Gb');
const ssd256gbPrice=document.getElementById('ssd-256gb');
const ssd512gbPrice=document.getElementById('ssd-512gb');
const ssd1TbPrice=document.getElementById('ssd-1tb');
const freeDelivery=document.getElementById('free-delivery');
const chargesDelivery=document.getElementById('charges-delivery');
const bestPrice=document.getElementById('best-price');
// memory extra cost update section 
let memoryCost=document.getElementById('memory-cost');
// storage extra cost update section 
let storageCost=document.getElementById('storage-cost');
// delivery extra cost udpade section 
let deliveryCost=document.getElementById('delivery-cost');
const totalPrice=document.getElementById('total-price');
const submitInput=document.getElementById('submit-input');
const promocode="stevekaku";
// total cost caclution funcation
function totalCost() {
    const totalCostNumber=(parseInt(bestPrice.innerText)+parseInt(memoryCost.innerText)+parseInt(storageCost.innerText)+parseInt(deliveryCost.innerText));
    totalPrice.innerText=totalCostNumber;
    const totalPrice2=document.getElementById('total-price2');
     // bonus marks works function 
   if (submitInput.value==promocode) {
    const total=totalCostNumber*20/100;
    totalPrice2.innerText=totalCostNumber-total;
   }else{
    totalPrice2.innerText=totalCostNumber;
   }
   submitInput.value="";
}
// function convert(name,price) {
//     const product=document.getElementById(name+"-cost");
//     const convertPrice=parseInt(price)
//     product.innerText=convertPrice;
// }
// memory update event part 
memory8GbPrice.addEventListener('click',function() {
    // convert("memory",0);
    memoryCost.innerText=0;
    totalCost()
})
memory16GbPrice.addEventListener('click',function() {
    // convert("memory",20);
    memoryCost.innerText=180;
    totalCost()
})
// SSD Update event part 
ssd256gbPrice.addEventListener('click',function() {
    // convert("storage",0);
    storageCost.innerText=0;
    totalCost()
})
ssd512gbPrice.addEventListener('click',function() {
    // convert("storage",100);
    storageCost.innerText=100;
    totalCost()
})
ssd1TbPrice.addEventListener('click',function() {
    // convert("storage",180);
    storageCost.innerText=180;
    totalCost()
})
// delivery cost update event part 
freeDelivery.addEventListener('click',function() {
    // convert("delivery",0);
    deliveryCost.innerText=0;
    totalCost()
})
chargesDelivery.addEventListener('click',function() {
    // convert("delivery",20);
    deliveryCost.innerText=20;
    totalCost()  
})
// // bonus marks works event handle 
document.getElementById('submit-btn').addEventListener('click',function () {
   totalCost();
})