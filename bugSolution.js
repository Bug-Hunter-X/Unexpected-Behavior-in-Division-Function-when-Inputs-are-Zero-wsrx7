function myFunc(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Handle both zeros
  } else if (a === 0 || b === 0) {
    return 0; //Handle single zero
  } else {
    return a / b;
  }
}