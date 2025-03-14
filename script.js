async function calculateAdvancedNetSalary() {
  let grossSalary = parseFloat(document.getElementById("grossSalary").value) || 0;
  let extraDeductions = parseFloat(document.getElementById("extraDeductions").value) || 0;
  let bonus = parseFloat(document.getElementById("bonus").value) || 0;

  let finalSalary = grossSalary + bonus - extraDeductions;

  let response = await fetch("https://kalkulator-backend.onrender.com/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ salary: finalSalary })
  });

  let data = await response.json();
  document.getElementById("advancedResult").innerText = "Zaawansowane wynagrodzenie netto: " + data.netSalary + " zł";
}
