var flip = function (s) {
    let arr = s.split('');
    let count = 0;
    while (arr.join('').includes('01')) {
        for (let i = 0; i < arr.length; i++) {
            while(arr[i] === 1 && arr[i+1] === 1){
                i++;
                continue;
            }
            if (arr[i] + arr[i + 1] === '01') {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                count++;
            }
        }
    }
    return arr.join('');
};


console.log(JSON.stringify(flip("1111010110101")));