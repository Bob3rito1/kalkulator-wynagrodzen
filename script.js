async function calculateNetSalary() {
  let grossSalary = document.getElementById("grossSalary").value;
  
  let response = await fetch("https://kalkulator-backend.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ salary: grossSalary })
  });

  let data = await response.json();
  document.getElementById("result").innerText = "Wynagrodzenie netto: " + data.netSalary + " zł";
}
