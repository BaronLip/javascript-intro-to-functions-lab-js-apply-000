const logShout = function shout(string) {
  return string.toUpperCase()
}

1) whisper(string) receives one argument and returns it in all lowercase:
function whisper(string) {
  return string.toLowerCase
}


// 2) Log shout
console.log(logShout("I'm shouting"))


// 3) Log whisper
console.log(whisper("Hello"))


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