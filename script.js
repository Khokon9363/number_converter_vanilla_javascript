// parseFloat(num, base) used for convert number any to decimal
// num.toString(base) used for convert number decimal to any
// toUpperCase used for capitalized the converted values. Also convert my Hex when I type and when I receive the result
// It will be more interesting , If i add regex in switch

let d = document.getElementById("d"),
    b = document.getElementById("b"),
    o = document.getElementById("o"),
    h = document.getElementById("h");

    function calculate(val, base, which) {
        if (val.length === 0) {
            d.value = null,
            b.value = null,
            o.value = null,
            h.value = null;
            return;
        } 
        let inputtedVal = parseFloat(val, base); // decimal value

        // results
        switch(which) {
            case 'b':
                d.value = inputtedVal.toString(10).toUpperCase();
                o.value = inputtedVal.toString(8).toUpperCase();
                h.value = inputtedVal.toString(16).toUpperCase();
            break;

            case 'o':
                d.value = inputtedVal.toString(10).toUpperCase();
                b.value = inputtedVal.toString(2).toUpperCase();
                h.value = inputtedVal.toString(16).toUpperCase();
            break;

            case 'h':
                d.value = inputtedVal.toString(10).toUpperCase();
                b.value = inputtedVal.toString(2).toUpperCase();
                o.value = inputtedVal.toString(8).toUpperCase();
            break;

            default:
                b.value = inputtedVal.toString(2).toUpperCase();
                o.value = inputtedVal.toString(8).toUpperCase();
                h.value = inputtedVal.toString(16).toUpperCase();
        }
    }