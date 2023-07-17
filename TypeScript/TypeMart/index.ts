import products from './products';

const productName: string = 'beanie';
// Find the product object that has the name === to productName
const product = products.find((product) => product.name === productName);
console.log(product);

if (product?.preOrder === 'true') {
	console.log(`We will notify you when your ${product?.name} has shipped!\n`);
}

let shipping: number, taxPercent: number, taxTotal: number, total: number;
let shippingAddress = '42 Bring a Towel Way, Ultimate Question, Answer';

if (Number(product?.price) < 25) {
	shipping = 5;
	console.log(shipping);
} else {
	shipping = 0;
	console.log(`Shipping is free for your ${product?.name}\n`);
}

if (shippingAddress.includes('New York')) {
	taxPercent = 0.1;
} else {
	taxPercent = 0.05;
}

taxTotal = Number(product?.price) * taxPercent;
total = taxTotal + shipping + Number(product?.price);
console.log(
	`Receipt\nProduct: ${productName}\nShipping Address: ${shippingAddress}\nSubtotal: ${product?.price}`
);
console.log(`Tax: ${taxTotal}\nShipping: ${shipping}\nTotal: ${total}`);
