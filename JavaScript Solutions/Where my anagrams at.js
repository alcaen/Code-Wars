function anagrams(word, words) {
    array = []

    const arr = {};

    function sum(obj) {
        return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
    }

    word.split('').forEach(letter => {
        if (arr[letter] != 1) {
            arr[letter] = 1;
        } else {
            arr[letter] += 1;
        }
    });
    var json_arr = Object.assign({}, arr);
    words.forEach(element => {
        if (element.length === word.length) {
            element.split('').forEach(l => {
                if (l in json_arr && json_arr[l] != 0) {
                    json_arr[l]--;
                }
            });
        }
        if (sum(json_arr) === 0) {
            array.push(element);
        }
        json_arr = Object.assign({}, arr);
    });
    return array
}