function biggerHalf(arr) {
    const copy = [...arr];

    return copy.sort((a, b) => a - b)
        .slice((-1) * (Math.ceil(copy.length / 2)))
    
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);