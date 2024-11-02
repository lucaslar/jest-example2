function plus(a, b) {
    return a + b;
}

// export function
export function oddNumbersOnly(arr) {
    return arr.filter((n) => n % 2);
}

export { plus }; // alternative way for exporting
