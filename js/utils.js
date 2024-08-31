function lerp(start, end, p){
    return start * (1 - p) + end * p;
}

export {
    lerp
}