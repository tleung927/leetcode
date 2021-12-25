/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (isPalindrome(s)) return s;
    let max = '';
    let count = 1;

    while (count < s.length - 1) {
        let i = 0;
        while (1 === 1) {
            let newSub = s.substr(i, s.length - count);
            if (isPalindrome(newSub)) {
                return newSub
            }
            if (s.length === newSub.length + i) {
                break;
            }
            i++;
        }
        count++
    }
    return max;
};

var isPalindrome = function (s) {

    s = s.trim().replace(/[^A-Za-z0-9]/g, '')
    let sA = s.split('');
    if (sA.length === 1 || s === '') return true;
    for (let i = 0, j = sA.length - 1; j > 0; i++, j--) {
        if (i === j) return true;
        if (sA[i].toLowerCase() !== sA[j].toLowerCase()) return false;
    }
    return true;
};

console.log(longestPalindrome("xdxtfdaarvvznrptwicdldmrmwbdrmyppvamdvofujthfcmkcugvodmlvubgvodectwzparprifwgwfvddlrfdnrpspirtyvxqvbqiglugbmzoyzcfkvbjdrdqqxxzutebgoacczuhopvzjfrnfsylgfgkbmbjqqyggtdjcvjbvpspkjcezanajjzabfidndfdpkuamwvxrbpxzoivlnkwdxedtfnmvicmzebwktpktokibeycbpqzejddwnvimmbzupyxwmrgdbmcujadfexcchdkfvkxsdwkuwuxzhpnjgmqbmidcwywjgcsbydixyxcclcbrzjvrmlrzgmbviifllouykovscaufvxovwmmgubshtoizbwtcpqzwchtkmkjfneuybfglywfrorhmfdgvjdsmegtoytsivnuaceszpfsxgddbweckgziahkslykgdkztmpapnoyawqtyrdcuzaxcohohapektyfbfhrsdnjbgjvwvqpcikdnlkdogsinkfpymkkdburnbksnqfjgjlacqpfqlhsjhhoccdkrjipqwzsxmpjughaqchzlrqkogkryqkuuxhzchovebzgeekuflcgvxugnxcvugqlstmnljlvxonkybmzjmnsvvwfztcplgikptnppbzeygbmdsyimsntveojwsejmastiovbctdkdlfvpyzihhxishtveflnmamlnzqroxknrrkkfpveyzvvasdznykygrpbfkbinrrvheekeumlvlgalqelspvpiydqkwduckimyhpzsxlcpkbvgwmwnasdxuupdhcmxjoushcvcnjyrmuemuydyywpvzhkxsqszaqhnbhjwsokkpployomoawtr"))