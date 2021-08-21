// choosing component
function productCost(product, price) {
    const productInput = document.getElementById(product + '-cost')

    productInput.innerText = price;
    calculationOfTotal();
}

function getValue(product) {
    const priceString = document.getElementById(product + '-cost');
    const productPrice = parseInt(priceString.innerText);
    return productPrice;
}
// value calculation
function calculationOfTotal() {
    const memoryPrice = getValue('memory');
    const StoragePrice = getValue('storage');
    const delivaryCharge = getValue('delivary');

    const totalPrice = memoryPrice + StoragePrice + delivaryCharge;
    const bestPrice = document.getElementById('total-cost');
    const footerTotalPrice = document.getElementById('footer-total-cost')
    const BestPriceTOBuy = 1299 + totalPrice;
    bestPrice.innerText = BestPriceTOBuy;
    footerTotalPrice.innerText = BestPriceTOBuy;

}
// memory
document.getElementById('memory-8GB').addEventListener('click', function () {
    productCost('memory', 0);
})
document.getElementById('memory-16GB').addEventListener('click', function () {
    productCost('memory', 180);
})
// memory

//storage
document.getElementById('storage-256GB').addEventListener('click', function () {
    productCost('storage', 0);
})
document.getElementById('storage-512GB').addEventListener('click', function () {
    productCost('storage', 100);
})
document.getElementById('storage-1TB').addEventListener('click', function () {
    productCost('storage', 180);
})
// chose your delivary option
document.getElementById('delivaryon25Augest').addEventListener('click', function () {
    productCost('delivary', 0);
})
document.getElementById('delivaryon21Augest').addEventListener('click', function () {
    productCost('delivary', 20);
})
// promocode section
document.getElementById('promo-code').addEventListener('click', function () {
    var promoCode = document.getElementById('input-value');

    const bestPrice = document.getElementById('total-cost');
    const footerTotalPrice = document.getElementById('footer-total-cost');
    const totalCost = parseFloat(bestPrice.innerText);




    if (promoCode.value === 'stevekaku') {
        const discount = (totalCost * 20) / 100;
        const afterUsingPromoCode = totalCost - discount;
        bestPrice.innerText = afterUsingPromoCode;
        footerTotalPrice.innerText = afterUsingPromoCode;
        document.getElementById('input-value').value = '';
    }
    else {
        console.log("PromoCode is not current");
        promoCode.value = '';

    }

    console.log(promoCode.value)



})
