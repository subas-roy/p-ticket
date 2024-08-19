const allBtn = document.getElementsByClassName('select-seat');

let count = 0;
let leftSeat = document.getElementById("hasSeat").innerText;
let total = 0;
let grandTotal = 0;
let  btnList = [];
for(const btn of allBtn){
  btn.addEventListener("click", function(e){
    btnList.push(btn.id)
    count += 1;
    leftSeat -= 1;
    console.log(btnList)
    
    const seat = e.target.id.toUpperCase();

    const seatContainer = document.getElementById("seat-container");

    const singleSeatContainer = document.createElement("div");
    singleSeatContainer.classList.add("flex", "justify-between", "py-2");

    const p = document.createElement("p");
    p.innerText = seat;
    const p1 = document.createElement("p");
    p1.innerText = "Economoy";
    const p2 = document.createElement("p");
    p2.innerText = 550;

    singleSeatContainer.appendChild(p);
    singleSeatContainer.appendChild(p1);
    singleSeatContainer.appendChild(p2);
    seatContainer.appendChild(singleSeatContainer);

    total += 550;
 
    grandTotal += 550;

    setInnertextById('hasSeat', leftSeat);
    setInnertextById('selectedSeat', count);
    setInnertextById('total', total);
    setInnertextById('grand-total', total);
    e.target.classList.add("bg-[#1DD100]", "text-white");
    removeAttributeById("next", "disabled");
    
    if(total === 2200){
      removeAttributeById("apply", "disabled");
      removeAttributeById("userCoupon", "disabled");
      document.getElementById("all-seats-container").style.pointerEvents = "none";
    }
  })
}

function setInnertextById(id, value){
  document.getElementById(id).innerText = value;
}

function removeAttributeById(id, att){
  document.getElementById(id).removeAttribute(att)
}

function setAttributeById(id, att){
  document.getElementById(id).setAttribute(att)
}

let couponSubTotal = 0
let couponTotal = 0
document.getElementById("couponForm").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent the form from submitting the traditional way
  let userCoupon = document.getElementById("userCoupon").value;
  if (userCoupon === "NEW15") {
    couponSubTotal = (total * 15) / 100;
    couponTotal = grandTotal - couponSubTotal;
    document.getElementById("grand-total").innerText = couponTotal;
    document.getElementById("couponText").innerText = "Coupon total: ";
    document.getElementById("couponAmount").innerText = couponSubTotal
  }
  else if (userCoupon === "Couple20") {
    couponSubTotal = (total * 20) / 100;
    couponTotal = grandTotal - couponSubTotal;
    document.getElementById("couponText").innerText = "Coupon total: ";
    document.getElementById("couponAmount").innerText = couponSubTotal
  }
  else {
    document.getElementById("invalidCoupon").innerText = "Please Enter Correct Coupon!";
  }
});

document.getElementById("passengerInfoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let passengerName = document.getElementById("passengerName");
  let passengerPhone = document.getElementById("passengerPhone");
  let next = document.getElementById("next");  
});

