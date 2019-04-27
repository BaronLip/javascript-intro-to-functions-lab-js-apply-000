const whisper = function whisper(string) {
  return console.log(string.toLowerCase())
}



const shout = function shout(string) {
  return console.log(string.toUpperCase())
}


console.log(whisper("HELLO"));


console.log(shout("hello"))


const sayHiToGrandma = function logSayHiToGrandma(string) {
  if (string.toLowerCase === lowercase ) {
    return "I can't hear you!"
  } else if (string.toUpperCase === uppercase) {
    return "YES INDEED"
  } else {
    return "I love you, too."
  }
}

// 4) Log sayHiToGrandma(string) returns "I can't hear you!" if "string" is lowercase.
// 5) sayHiToGrandma(string) returns "YES INDEED" if "string is uppercase"
// 6) sayHiToGrandma(string) returns "I love you, too." if "string" is "I love you, Grandma."