function isEven(num) {
    if(num < 0 || !Number.isInteger(num))
        return "Invalid value";

    if(num === 0)
        return true;

    if(num === 1)
        return false;

    else
        return isEven(num - 2)
}