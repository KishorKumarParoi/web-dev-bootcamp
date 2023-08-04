// ? find count of ipsum and first index of ipsum

let sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Eget duis at \
tellus at.Mauris in aliquam sem fringilla ut morbi tincidunt.Integer feugiat scelerisque \
 varius morbi enim nunc faucibus a pellentesque.Mauris sit amet massa vitae tortor condimentum \
 lacinia quis vel.Ultrices tincidunt arcu non sodales neque sodales ut etiam.Augue eget arcu dictum \
 varius duis at consectetur.Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.A \
 iaculis at erat pellentesque adipiscing.Arcu bibendum at varius vel pharetra vel turpis nunc eget. \
 Habitant morbi tristique senectus et netus.A scelerisque purus semper eget duis at tellus.Mauris \
  pellentesque pulvinar pellentesque habitant morbi tristique senectus.Massa massa ultricies mi \
  quis hendrerit dolor magna eget.Aliquet lectus proin nibh nisl.Turpis cursus in hac habitasse.Turpis \
  egestas pretium aenean pharetra magna.";

console.log(sentence.indexOf("ipsum"));
// let arr = Array.from(sentence);
// console.log(arr.join(''));
// console.log(arr.length);

// console.log(arr.indexOf("r"));

let countIpsum = 0;
let length = sentence.length;

let str = "";
let arr = [];

for (let i = 0; i < length; ++i) {
    if (sentence[i] == " ") {
        arr.push(str);
        if (str == "ipsum") {
            ++countIpsum;
        }

        str = "";
        continue;
    }

    str += sentence[i];
}

console.log(arr);
console.log(countIpsum);