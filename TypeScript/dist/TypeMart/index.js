"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'beanie';
// Find the product object that has the name === to productName
const product = products_1.default.find((product) => product.name === productName);
console.log(product);
if ((product === null || product === void 0 ? void 0 : product.preOrder) === 'true') {
    console.log(`We will notify you when your ${product === null || product === void 0 ? void 0 : product.name} has shipped!\n`);
}
let shipping, taxPercent, taxTotal, total;
let shippingAddress = '42 Bring a Towel Way, Ultimate Question, Answer';
if (Number(product === null || product === void 0 ? void 0 : product.price) < 25) {
    shipping = 5;
    console.log(shipping);
}
else {
    shipping = 0;
    console.log(`Shipping is free for your ${product === null || product === void 0 ? void 0 : product.name}\n`);
}
if (shippingAddress.includes('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product === null || product === void 0 ? void 0 : product.price) * taxPercent;
total = taxTotal + shipping + Number(product === null || product === void 0 ? void 0 : product.price);
console.log(`Receipt\nProduct: ${productName}\nShipping Address: ${shippingAddress}\nSubtotal: ${product === null || product === void 0 ? void 0 : product.price}`);
console.log(`Tax: ${taxTotal}\nShipping: ${shipping}\nTotal: ${total}`);
//# sourceMappingURL=index.js.map