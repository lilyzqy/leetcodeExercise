const reverseString = (s) => {
  let l = s.length;
  console.log(l);
  //do swipe s.length / 2 times
  for(let i = 0; i < Math.floor(l / 2); i++){
    console.log(i, s[i], s[l - 1 - i]);
    [s[i], s[l - 1 - i]] = [s[l - 1 - i],s[i]];
    console.log(i, s[i], s[l - 1 - i]);
  }

  return s;
 };

console.log(reverseString(["H", "e", "l", "l", "o"]));
let a = "A man, a plan, a cananal: Panama";
let b = a.split("");
console.log(reverseString(b));
