var relativeSortArray = function (arr1, arr2) {
    const counts = new Array(1001).fill(0);
    for(const n of arr1) {
        counts[n]++;
    }
    const res = [];
    for(const n of arr2) {
        while(counts[n] > 0) {
            res.push(n);
            counts[n]--;
        }
    }
    for(let i = 0; i < counts.length; i++) {
        while(counts[i] > 0) {
            res.push(i);
            counts[i]--;
        }
    }
    return res;
};