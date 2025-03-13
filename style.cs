/* Resetowanie domyślnych stylów */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
}

/* Stylowanie strony */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
}

/* Pudełko z kalkulatorem */
.container {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    width: 90%;
}

/* Tytuł */
h2 {
    font-size: 22px;
    color: #333;
}

/* Opis */
p {
    font-size: 16px;
    color: #555;
    margin-top: 10px;
}

/* Pole do wpisania kwoty */
input {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border: 2px solid #4facfe;
    border-radius: 8px;
    font-size: 16px;
    text-align: center;
}

/* Przycisk obliczania */
button {
    width: 100%;
    background: #4facfe;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    margin-top: 15px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #007bff;
}

/* Wynik */
#result {
    font-size: 20px;
    font-weight: bold;
    color: #222;
    margin-top: 20px;
}
