async function change_myselect(sel) {
  const dbParam = JSON.stringify({ table: sel, limit: 20 });
  const response = await fetch("json_demo_html_table.php", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: "x=" + dbParam,
  });
  const data = await response.json();
}

change_myselect("customers");
