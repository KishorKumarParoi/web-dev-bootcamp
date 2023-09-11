let text;
function modifier(strings, ...values) {
  console.log(strings);
  console.log(values);
}

const person1 = "Kishor";
const sector1 = "Blockchain";
const sector2 = "AI";

modifier`Hello ${person1}, be best in ${sector1} and ${sector2} fields.`;

debugger;
