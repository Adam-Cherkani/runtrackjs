function tri(numbers, order) {
   
    if (order === 'asc') {
        return numbers.sort((a, z) => a - z);
    }
    else if (order === 'desc') {
        return numbers.sort((a, z) => z - a);
    }
    else {
        return console.error('undefined');
    }
}

console.log(tri([65,1,78,49,55], "asc"));
console.log(tri([65,1,78,49,55], "desc"));

