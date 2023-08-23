
// function for card title
function cardTitel(titel) {

    //get card titel 
    const cardTitel = document.getElementById(titel);
    const cardTitelText = cardTitel.innerText;
    return cardTitelText;
};

// function for card price;
function cardPrice(price) {
    const cardPriceElement = document.getElementById(price);
    const cardPriceText = cardPriceElement.innerText;
    const cardPrice = parseFloat(cardPriceText);
    return cardPrice;

};

// get previous total price, discount and total price
function previousTotalTDT(previousTDT) {
    const previousTotalElement = document.getElementById(previousTDT);
    const previousTotalText = previousTotalElement.innerText;
    const previousTotal = parseFloat(previousTotalText);
    return previousTotal;
};

// /////////////////////FUNCTION/////////////////////

// card 1 title and price
function getCardTitelAndPrice1() {

    // set titel
    const titel = cardTitel('card-titel-1');
    const prdctList = document.getElementById('prdct-list');
    const li = document.createElement('li');
    li.innerText = titel
    prdctList.appendChild(li);

    // set price
    const price = cardPrice('card-price-1');
    const previousTP = previousTotalTDT('previous-total-price');

    // calculate the total price
    const newTP = previousTP + price;

    // set the new total price
    const previousTPx = document.getElementById('previous-total-price');
    previousTPx.innerText = newTP

    // set total
    const previousTotal = previousTotalTDT('previous-total');

    // calculate total
    const newTotal = previousTotal + price;

    // set the new total
    const previousT = document.getElementById('previous-total');
    previousT.innerText = newTotal;

};

// card 2
function getCardTitelAndPrice2() {

    // set titel
    const titel = cardTitel('card-titel-2');
    const prdctList = document.getElementById('prdct-list');
    const li = document.createElement('li');
    li.innerText = titel
    prdctList.appendChild(li);

    // set price
    const price = cardPrice('card-price-2');
    const previousTP = previousTotalTDT('previous-total-price');

    // calculate the total price
    const newTP = previousTP + price;

    // set the new total price
    const previousTPx = document.getElementById('previous-total-price');
    previousTPx.innerText = newTP

    // set total
    const previousTotal = previousTotalTDT('previous-total');

    // calculate total
    const newTotal = previousTotal + price;

    // set the new total
    const previousT = document.getElementById('previous-total');
    previousT.innerText = newTotal;

};

// card 3
function getCardTitelAndPrice3() {

    // set titel
    const titel = cardTitel('card-titel-3');
    const prdctList = document.getElementById('prdct-list');
    const li = document.createElement('li');
    li.innerText = titel
    prdctList.appendChild(li);

    // set price
    const price = cardPrice('card-price-3');
    const previousTP = previousTotalTDT('previous-total-price');

    // calculate the total price
    const newTP = previousTP + price;

    // set the new total price
    const previousTPx = document.getElementById('previous-total-price');
    previousTPx.innerText = newTP

    // set total
    const previousTotal = previousTotalTDT('previous-total');

    // calculate total
    const newTotal = previousTotal + price;

    // set the new total
    const previousT = document.getElementById('previous-total');
    previousT.innerText = newTotal;

};

// card 4
function getCardTitelAndPrice4() {

    // set titel
    const titel = cardTitel('card-titel-4');
    const prdctList = document.getElementById('prdct-list');
    const li = document.createElement('li');
    li.innerText = titel
    prdctList.appendChild(li);

    // set price
    const price = cardPrice('card-price-4');
    const previousTP = previousTotalTDT('previous-total-price');

    // calculate the total price
    const newTP = previousTP + price;

    // set the new total price
    const previousTPx = document.getElementById('previous-total-price');
    previousTPx.innerText = newTP

    // set total
    const previousTotal = previousTotalTDT('previous-total');

    // calculate total
    const newTotal = previousTotal + price;

    // set the new total
    const previousT = document.getElementById('previous-total');
    previousT.innerText = newTotal;

};

// card 5
function getCardTitelAndPrice5() {

    // set titel
    const titel = cardTitel('card-titel-5');
    const prdctList = document.getElementById('prdct-list');
    const li = document.createElement('li');
    li.innerText = titel
    prdctList.appendChild(li);

    // set price
    const price = cardPrice('card-price-5');
    const previousTP = previousTotalTDT('previous-total-price');

    // calculate the total price
    const newTP = previousTP + price;

    // set the new total price
    const previousTPx = document.getElementById('previous-total-price');
    previousTPx.innerText = newTP

    // set total
    const previousTotal = previousTotalTDT('previous-total');

    // calculate total
    const newTotal = previousTotal + price;

    // set the new total
    const previousT = document.getElementById('previous-total');
    previousT.innerText = newTotal;

};

// card 6
function getCardTitelAndPrice6() {

    // set titel
    const titel = cardTitel('card-titel-6');
    const prdctList = document.getElementById('prdct-list');
    const li = document.createElement('li');
    li.innerText = titel
    prdctList.appendChild(li);

    // set price
    const price = cardPrice('card-price-6');
    const previousTP = previousTotalTDT('previous-total-price');

    // calculate the total price
    const newTP = previousTP + price;

    // set the new total price
    const previousTPx = document.getElementById('previous-total-price');
    previousTPx.innerText = newTP

    // set total
    const previousTotal = previousTotalTDT('previous-total');

    // calculate total
    const newTotal = previousTotal + price;


    // set the new total
    const previousT = document.getElementById('previous-total');
    previousT.innerText = newTotal;


    console.log(newTotal);
};


    // get the total price
    const totalPriceElement = document.getElementById('previous-total-price');
    const totalPriceText = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceText);

    // get the discount
    const discountElemnt = document.getElementById('discount');
    const discountText = discountElemnt.innerText;
    const discount = parseFloat(discountText);

    const discountPercentage = 20;

    // cupon inpu value
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value;
    couponInput.value = '';

    // get the apply button
    const applyBtn = document.getElementById('apply');

// cupon
document.getElementById('apply').addEventListener('click', function () {

    // get the total price
    const totalPriceElement = document.getElementById('previous-total-price');
    const totalPriceText = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceText);

    // get the discount
    const discountElemnt = document.getElementById('discount');
    const discountText = discountElemnt.innerText;
    const discount = parseFloat(discountText);

    const discountPercentage = 20;

    // cupon inpu value
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value;
    couponInput.value = '';

    // get the apply button
    const applyBtn = document.getElementById('apply');

    if (couponCode == 'SELL200' && totalPrice > '200') {
        const newD = (totalPrice * discountPercentage / 100);

        // Discount total
        const discountTotalElemnt = document.getElementById('discount');
        const dicountTotalText = discountTotalElemnt.innerText;
        const discountTotal = parseFloat(dicountTotalText);

        // calculate the total after discount
        const newTotal = newD;
        discountTotalElemnt.innerText = newTotal;

        // new total 
        const totalElement = document.getElementById('previous-total');
        const totalText = totalElement.innerText;
        const total = parseFloat(totalText);

        // calculate the new total
        const newTotl = total - newD;

        // set the new total 
        totalElement.innerText = newTotl;

        // disabled the apply button after one discount 
        applyBtn.setAttribute('disabled', 'true');
    } else {
        alert('To avail the discount, the purchase must be above TK 200 and the coupon code must be input correctly');
    }
});

// make purchase

// document.getElementById('purchase-btn').addEventListener('click', function(){

//     // get total price
//     const totalPrice = previousTotalTDT('previous-total-price');
//     console.log(totalPrice);

//     if(totalPrice > '0'){
//         const purchaseBtn = document.getElementById('purchase-btn');
//         purchaseBtn.removeAttribute('disabled');
//         console.log('Button enabled');
//     }else{
//         console.log('Button remains disabled');
//     }

// })
