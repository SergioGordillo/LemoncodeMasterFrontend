var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decryptLetter(letter) {
    return letter !== " " ? plain[cipher.indexOf(letter)] : " ";
}

function decrypt(secret) {
    return secret.split("").map(decryptLetter).join("");
}

// var secret =
//     "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// // Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
// var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
// var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// function dictionary(plain, cipher) {
//     let dictionary = {}

//     for (let i = 0; i < plain.length; i++) {
//         dictionary[cipher[i]] = plain[i];
//     }

//     dictionary[" "] = " ";
//     return dictionary;
// }



// function decrypt(plain, cipher, secret) {

//     let dic = dictionary(plain, cipher); // {"a" : "q"}

//     let decypher = ""; // "sdasdadads"

//     for (let i = 0; i < secret.length; i++) {
//         decypher += dic[`${secret[i]}`];
//     }

//     return decypher;
// }

// console.log(decrypt(plain, cipher, secret));