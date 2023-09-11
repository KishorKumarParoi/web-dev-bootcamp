let text;
function modifier(strings, ...values) {
  console.log(strings);
  console.log(values);
  let i = 1;
  text = strings.reduce((prev, curr) => {
    return (
      prev +
      curr +
      (values.length ? (i === 1 ? (i--, "Mr. ") : "") + values.shift() : "")
    );
    i--;
  }, "");
}

const person1 = "Kishor";
const sector1 = "Blockchain";
const sector2 = "AI";

modifier`Hello ${person1}, be best in ${sector1} and ${sector2} fields.`;
console.log(text);

debugger;
