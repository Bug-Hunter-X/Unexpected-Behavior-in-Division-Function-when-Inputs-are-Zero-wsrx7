# Unexpected Behavior in Division Function when Inputs are Zero

This repository demonstrates a common JavaScript error related to division by zero.  The function `myFunc` is intended to divide two numbers. However, it contains a flaw in its handling of zero input values. 

## Bug Description:

The function incorrectly handles the case where both input parameters are zero. This leads to unexpected results or errors.

## Solution:

The provided solution addresses this issue by explicitly checking for both inputs being zero and handling it appropriately. 

## How to reproduce the bug:

1. Clone this repository.
2. Open `bug.js` in a JavaScript environment.
3. Call `myFunc(0, 0);`  Observe the error or incorrect result.

## How to run the solution:

1. Open `bugSolution.js` in a JavaScript environment.
2. Call `myFunc(0, 0);` or other inputs. Observe the correct result.