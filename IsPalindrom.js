function isPalindrom(str){
    str = str.toLowerCase();
    var charactersArr = str.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
   
    var lettersArr = [];
    charactersArr.forEach(element => {
       if(validCharacters.indexOf(element)>-1) lettersArr.push(element);
    });
   
    if(lettersArr.join('')===lettersArr.reverse().join('')) return true;
    else return false; 
   }
 
isPalindrom("ana")