let switchElement;
let pricingElement;
let pageViewsElement;
let pricingViewsElements;
let currentPricing;

const pageViews = [{
    views: '10K',
    price: 8
}, {
    views: '50K',
    price: 12
}, {
    views: '100K',
    price: 16
}, {
    views: '500K',
    price: 24
}, {
    views: '1M',
    price: 36
}];

function init() {
    getDOMElements();
    calculatePricing(3);
} 

function getDOMElements() {
    switchElement = document.getElementById('switch');
    pricingElement = document.getElementById('pricing');
    pageViewsElement = document.getElementById('pageViews');
    pricingViewsElements = document.getElementsByClassName('pricingViews');

    console.log(pricingViewsElements);
}

function calculatePricing() {
    const rangeValue = pricingElement.value;
    const hasYearlyDiscount = switchElement.checked;
    let discount = .100;
    currentPricing = pageViews[rangeValue - 1];


    if (hasYearlyDiscount) {
        discount -= .025;
    }

    pageViewsElement.innerHTML = currentPricing.views;

    for (let item of pricingViewsElements) {
        item.innerHTML = (currentPricing.price * discount * 10).toFixed(2);
    }
}

init();

