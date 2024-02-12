function reverseWords(string){
    var wordsArr = string.split(' ');
    var reversedWordsArr = [];

    wordsArr.forEach(element => {
        var reversedWords = '';
        for (let i = element.length-1;i>=0;i--) {
            reversedWords += element[i];
        }
        reversedWordsArr.push(reversedWords);
    });
    return reversedWordsArr.join(' ');
}

reverseWords('asdd jhkkdf lion')