async function loadData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  //   const data = await response.json();
  const data = await response.text();
  console.log(data);
}

loadData();
// debugger;
