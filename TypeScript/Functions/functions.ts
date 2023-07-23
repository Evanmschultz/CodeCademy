/* Parameters that are optional can be written as `parameter?: type` where
the question mark informs TypeScript that the parameter is optional.  Also
you could declare a default value and TypeScript will infer the type from 
the default */
/*function proclaim(status = 'not ready...', repeat = 1) {
	for (let i = 0; i < repeat; i += 1) {
		console.log(`I'm ${status}`);
	}
}*/

proclaim();
proclaim('ready?');
proclaim('ready!', 3);

/* Documentation comment examples */

/**
 * Logs a string of a salad based on user inputs
 *
 * @param fruit1 - The first input string
 * @param fruit2 - The second input string
 * @returns void because it only logs the salad string
 */
function makeFruitSalad(fruit1: string, fruit2: string): void {
	let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
	console.log(salad);
}

/**
 * Logs a string with user input repeated
 *
 * @param status - User input string
 * @param repeat - User input number
 * @returns void, only logs the string
 */
function proclaim(status = 'not ready...', repeat = 1): void {
	for (let i = 0; i < repeat; i += 1) {
		console.log(`I'm ${status}`);
	}
}

/* Fix all the 7 errors in this TypeScript */

function useMagnifyingGlass(): void {
	console.log('I will use my magnifying glass.');
}

function determineCulprit() {
	return Math.floor(Math.random() * 2 + 1);
}

function doSleuthing(
	numberOfClues: number,
	clue1: string,
	clue2: string,
	suspect1: string,
	suspect2: string
): any {
	console.log('I am a famous detective and I will solve the crime.');
	useMagnifyingGlass();

	console.log('Now I consider the first clue: ', clue1);
	console.log('Now I consider the second clue: ', clue1);

	let culpritNumber: number = determineCulprit();
	console.log(
		'Now, I will return to you the culprit. There but for the grace of God go we.'
	);
	if (culpritNumber == 1) {
		return suspect1;
	}
	if (culpritNumber == 2) {
		return suspect2;
	}

	return "I couldn't figure out who drank the priceless milk. :( :(";
}

let answer = 3;

answer = doSleuthing(
	2,
	'The parrot heard everything!',
	'All the doors and windows were shut from the INSIDE.',
	'Burglar Bob',
	'Saint Sam'
);

console.log('The culprit was none other than ', answer, '!');

/* Console log smiley face */

// create the image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData();

// draw head
drawRectangle(0, 0, 20, 8);
// eyes
drawDot(7, 2);
drawDot(12, 2);
// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// output what we drew to the console
outputImage();

/**
 * Updates imageData at the appropriate index in row-major
 * linear array (A 1 dimensional array used to map 2 dimensional
 * coordinates. Meaning, the first row is stored first, then each
 * subsequent row.)
 * @param y - The vertical position within
 * the image.
 * @param length - The length of the horizontal line
 * @return - void
 */
function drawDot(x: number, y: number): void {
	if (isPointInImage(x, y)) {
		imageData[y * imageWidth + x] = true;
	}
}

/**
 * Sets each x position of the line at the same y position to
 * true by calling drawDot()
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 * @param length - The length of the horizontal line
 * @return - void
 */
function drawHorizontalLine(x: number, y: number, length: number): void {
	for (let i = 0; i < length; i++) {
		drawDot(x + i, y);
	}
}

/**
 * Sets each y position of the vertical line at the same x
 * position to true by calling drawDot()
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 * @param length - The length of the horizontal line
 * @return - void
 */
function drawVerticalLine(x: number, y: number, length: number): void {
	for (let i = 0; i < length; i++) {
		drawDot(x, y + i);
	}
}

/**
 * Sets outer boundary of rectangle in the image data by
 * by calling drawHorizontalLine and Vertical line respectively.
 * @param x - The starting horizontal position within the image.
 * @param y - The starting vertical position within the image.
 * @param width - The width of the rectangle
 * @param height - The height of the rectangle
 * @return - void
 */
function drawRectangle(x: number, y: number, width: number, height: number) {
	// top
	drawHorizontalLine(x, y, width);
	// bottom
	drawHorizontalLine(x, y + height - 1, width);
	// left
	drawVerticalLine(x, y, height);
	// right
	drawVerticalLine(x + width - 1, y, height);
}

/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 * @return - void
 */
function isPointInImage(x: number, y: number): boolean {
	return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 * @return - void
 */
function outputImage(onChar = 'X', offChar = ' ') {
	let text = '';

	for (let i = 0; i < imageData.length; i++) {
		if (i > 0 && i % imageWidth === 0) {
			text += '\n'; // new line
		}

		text += imageData[i] ? onChar : offChar;
	}

	console.log(text);
}

/**
 * Creates an array of booleans where a pixel
 * is "on" when the value is `true` and "off"
 * when the value is `false`.
 *
 * The pixel values are stored in rows
 * (row-major order) where the index of a
 * pixel in the array can be found via:
 *
 *     index = y * imageWidth + x
 *
 * `x` is the horizontal position in the image
 * and `y` is the vertical position from the top
 * left corner.
 *
 * @return - boolean[]
 */
function createImageData(): boolean[] {
	// create array of size `length` containing `false` values
	const length = imageWidth * imageHeight;
	return new Array(length).fill(false);
}
