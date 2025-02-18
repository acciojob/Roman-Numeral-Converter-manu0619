function convertToRoman(num) {
    const obj = [
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40], 
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1]
    ];
    
    let res = "";

    for (let [roman, value] of obj) {
        while (num >= value) {
            res += roman;
            num -= value;
        }
    }
    
    return res;
}



// do not edit below this line
module.exports = convertToRoman
