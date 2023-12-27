const strFuntion = (strArg) => {
        let strResul = '';
    if (strArg.length >= 3) {
        let strChar = strArg.split('');
        let size = strChar.length - 1;
        strChar.push(strChar[size - 2], strChar[size - 1], strChar[size])
        strChar.unshift(strChar[size - 2], strChar[size - 1], strChar[size])
        strResul = strChar.join('');
        console.log(strResul)
        
    } else {
        console.log("La cadena es muy corta");
    }
}
strFuntion("Jorge")
