// Write a function, which takes a non-negative integer (seconds) as
//input and returns the time in a human - readable format(HH: MM: SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  let hours = Math.trunc(seconds / 3600);
  let minutes = Math.trunc((seconds % 3600) / 60);
  let secs = seconds % 60;
  return `${toFormat(hours)}:${toFormat(minutes)}:${toFormat(secs)}`;
}

function toFormat(number) {
  if (number < 10) {
    return `0${number}`;
  } else return number;
}

console.log(humanReadable(238423))