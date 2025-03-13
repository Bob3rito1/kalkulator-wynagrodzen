from flask import Flask, request, jsonify
from flask_cors import CORS  # Umożliwia frontendowi komunikację z backendem

app = Flask(__name__)
CORS(app)

def calculate_net_salary(gross_salary):
    tax = gross_salary * 0.19
    social_security = gross_salary * 0.1371
    health_insurance = gross_salary * 0.09
    net_salary = gross_salary - (tax + social_security + health_insurance)
    return round(net_salary, 2)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    gross_salary = float(data['salary'])
    net_salary = calculate_net_salary(gross_salary)
    return jsonify({'netSalary': net_salary})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=10000)