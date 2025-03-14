async function calculateNetSalary() {
  let grossSalary = document.getElementById("grossSalary").value;
  if (!grossSalary) {
      alert("Proszę wpisać kwotę brutto!");
      return;
  }

  let response = await fetch("https://kalkulator-backend.onrender.com/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ salary: grossSalary })
  });

  let data = await response.json();
  let netSalary = data.netSalary;
  
  document.getElementById("result").innerText = `Wynagrodzenie netto: ${netSalary} zł`;

  // Zapisz wynik w historii
  saveToHistory(grossSalary, netSalary);
}

// Funkcja zapisywania do historii
function saveToHistory(gross, net) {
  let historyList = document.getElementById("historyList");
  let listItem = document.createElement("li");
  listItem.textContent = `Brutto: ${gross} zł → Netto: ${net} zł`;
  historyList.appendChild(listItem);

  // Zapisz do localStorage (dzięki temu historia zostaje po odświeżeniu)
  let history = JSON.parse(localStorage.getItem("salaryHistory")) || [];
  history.push({ gross, net });
  localStorage.setItem("salaryHistory", JSON.stringify(history));
}

// Funkcja czyszczenia historii
function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
  localStorage.removeItem("salaryHistory");
}

// Przywróć historię po załadowaniu strony
window.onload = function() {
  let history = JSON.parse(localStorage.getItem("salaryHistory")) || [];
  history.forEach(item => saveToHistory(item.gross, item.net));
};
