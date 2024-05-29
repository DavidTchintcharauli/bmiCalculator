function calculateBMI() {
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    let resultDiv = document.getElementById('result')
    let heightError = document.getElementById('height-error')
    let weightError = document.getElementById('weight-error')

    let isValid = true

    heightError.textContent = ''
    weightError.textContent = ''
    resultDiv.style.opacity = 0

    if (height < 50 || height > 220) {
        heightError.textContent = 'Height must be between 50 cm and 220 cm'
        isValid = false
    }

    if (weight < 20 || weight > 250) {
        weightError.textContent = 'weight must be between 20 kg and 250 kg'
        isValid = false
    }

    if (isValid) {
        let heightInMeters = height / 100
        let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2)

        let category = ''
        let colorClass = ''
        if (bmi < 18.5) {
            category = 'Underweight'
            colorClass = 'underweight'
        } else if (bmi >= 18.5 && bmi < 24.9){
            category = 'Normal weight'
            colorClass = 'normal'
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight'
            colorClass = 'overweight'
        } else {
            category = 'Obesity'
            colorClass = 'obesity'
        }

        resultDiv.innerHTML = `Your BMI is ${bmi} (${category})`
        resultDiv.className = 'result ' + colorClass
        resultDiv.style.opacity = 1
    }
}