# Week 7 Practical — Basic Arithmetic Calculator (HTML, CSS & JavaScript)

CA 1.3 Continuous Assessment for the *Information Technology Systems* unit.

## What this project does

A basic arithmetic calculator. The user enters **two numbers** and clicks one of
**four buttons** — add (+), subtract (−), multiply (×) or divide (÷) — and the
calculation result is shown on the page. It also validates the input and shows a
friendly error message instead of crashing.

## Files in this repository

| File          | Purpose                                                                 |
|---------------|-------------------------------------------------------------------------|
| `index.html`  | The structure of the page: two number inputs, four buttons, result area |
| `style.css`   | The styling: page background, card, input boxes, buttons and result box |
| `script.js`    | The logic: reads the inputs, validates them, does the maths, shows output |
| `README.md`    | This file — explains how the calculator was built                        |

## How I built it (the steps I took)

1. **HTML structure first.** I started with `index.html` and defined the page
   skeleton: a `<h1>` heading, a `<div class="calculator">` card, two
   `<input type="number">` fields (with `<label>`s for `num1` and `num2`), four
   `<button>` elements (`addBtn`, `subtractBtn`, `multiplyBtn`, `divideBtn`) and a
   `<p id="result">` paragraph where the answer appears. I linked `style.css` in
   the `<head>` and `script.js` just before `</body>`.

2. **Then CSS.** In `style.css` I set a light blue page background, centred a
   white rounded card with a shadow, styled the labels and number inputs, made the
   four buttons blue with a hover effect, and gave the result area a highlighted
   background.

3. **Then the JavaScript logic.** In `script.js` I wrote one reusable function
   `calculate(operation)` that:
   - reads both inputs and turns them into numbers with `parseFloat(...)`;
   - uses `isNaN(...)` to **validate** that both fields contain real numbers, and
     shows `"Please enter a valid number in both fields."` if not;
   - uses an `if / else if` chain to choose between add, subtract, multiply and
     divide;
   - has an extra **divide-by-zero check** (`if (num2 === 0)`) so division by zero
     shows `"Error: cannot divide by zero."`;
   - prints the working out and the answer into `#result`.

   I then used `addEventListener("click", ...)` on each of the four buttons so
   the right operation runs when that button is clicked.

4. **Tested it.** I opened `index.html` in a browser and tried normal sums
   (10 + 5 = 15, 10 − 5 = 5, 10 × 5 = 50, 10 ÷ 5 = 2), empty fields, and dividing
   by zero — all behaved as expected.

5. **Committed and pushed** the work to this GitHub repository with a descriptive
   commit message.

## How to view it

1. Clone this repository.
2. Open `index.html` in any web browser (no server needed).
3. Type two numbers, then click one of the four operation buttons.

## Things I learned

- Separating a web page into structure (HTML), style (CSS) and behaviour (JS).
- `getElementById` to find elements and `addEventListener` to respond to clicks.
- Using `parseFloat` and `isNaN` for input validation.
- Using `if / else` to branch on which button was clicked, and guarding edge cases
  such as dividing by zero.
