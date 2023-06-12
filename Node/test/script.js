const getUsers = async () => {
  const users = await fetch("/req4");
  const data = await users.json();

  const table = document.getElementById("table");
  let html = "";
  for (id in data) {
    html += `<tr><td>${data[id].name}</td><td>${data[id].email}</td></tr>`;
  }
  table.innerHTML = html;
};

window.onload = () => {
  const button = document.getElementById("btn");
  button.addEventListener("click", getUsers);
};

// 5번 못풀었습니다..
