async function calculateNetSalary() {
  let grossSalary = document.getElementById("grossSalary").value;
  let contractType = document.getElementById("contractType").value;
  let currency = document.getElementById("currency").value;

  if (!grossSalary) {
      alert("Podaj kwotę brutto!");
      return;
  }

  let response = await fetch("https://kalkulator-backend.onrender.com/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ salary: grossSalary, contractType: contractType, currency: currency })
  });

  let data = await response.json();
  let resultText = `Wynagrodzenie netto: ${data.netSalary} ${currency}`;
  
  document.getElementById("result").innerText = resultText;

  // Dodaj wynik do historii
  let historyList = document.getElementById("historyList");
  let listItem = document.createElement("li");
  listItem.textContent = resultText;
  historyList.appendChild(listItem);
}

// Funkcja czyszczenia historii
function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
  document.getElementById("result").innerText = "";
}
