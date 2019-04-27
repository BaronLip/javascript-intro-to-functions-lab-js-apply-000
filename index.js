// 1) whisper(string) receives one argument and returns it in all lowercase:

function logWhisper(string) {
  return console.log(string.toLowerCase())
}


// 2) logShout(string) calls console.log() its one argument in all caps:

const logShout = function shout(string) {
  return console.log(string.toUpperCase())
}


// 3) logWhisper(string) calls console.log() its one argument in all lowercase:

console.log(whisper("Hello"));


// 4) Log sayHiToGrandma(string) returns "I can't hear you!" if "string" is lowercase.

const sayHiToGrandma = function sayHiToGrandma(string) {
  if (string.toLowerCase === lowercase ) {
    return "I can't hear you!"
  } else if (string.toUpperCase === uppercase) {
    return "YES INDEED"
  } else {
    return "I love you, too."
  }
}


// 5) sayHiToGrandma(string) returns "YES INDEED" if "string is uppercase"


// 6) sayHiToGrandma(string) returns "I love you, too." if "string" is "I love you, Grandma."