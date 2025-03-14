async function calculateNetSalary() {
  let grossSalary = document.getElementById("grossSalary").value;

  let response = await fetch("https://kalkulator-backend.onrender.com/calculate", {  // <-- POPRAWIONE!
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ salary: parseFloat(grossSalary) })  // Zamieniamy na liczbę
  });

  let data = await response.json();
  document.getElementById("result").innerText = "Wynagrodzenie netto: " + data.netSalary + " zł";
}
