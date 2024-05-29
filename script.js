function calculateBMI() {
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    let resultDiv = document.getElementById('result')

    if (height > 0 && weight > 0) {
        let heightInMeters = height / 100
        let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2)

        let category = ''
        if (bmi < 18.5) {
            category = 'Underweight'
        } else if (bmi >= 18.5 && bmi < 24.9){
            category = 'Normal weight'
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight'
        } else {
            category = 'Obesity'
        }

        resultDiv.innerHTML = `Your BMI is ${bmi} (${category})`
        resultDiv.style.opacity = 1
    } else {
        resultDiv.innerHTML = 'Pleasure Enter valid height and weight'
        resultDiv.style.opacity = 1
    }
}