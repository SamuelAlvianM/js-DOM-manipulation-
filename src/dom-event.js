document.addEventListener('DOMContentLoaded', function() {
    // Einstein Formula
    const contentElement = document.getElementById('formula');
    const buttonElement = document.getElementById('changeContentBtn');

    buttonElement.addEventListener('click', function() {
        contentElement.innerHTML = "Einstein's formula: <strong>E = mc²</strong> (Energy equals mass times the speed of light squared)";
    });



    // RANDOM QUOTE
    let quoteVisible = false;
    document.getElementById('quoteButton').addEventListener('click', function() {
        const quotes = [
            "Life is like riding a bicycle. To keep your balance, you must keep moving.",
            "Imagination is more important than knowledge.",
            "A person who never made a mistake never tried anything new.",
            "The important thing is not to stop questioning. Curiosity has its own reason for existing."
        ];

        quote.style.color = 'yellow';
        quote.style.backgroundColor = 'green';
        quote.style.borderRadius = '50px';


        const quoteElement = document.getElementById('quote');

        if(quoteVisible) {
            quoteElement.textContent = '';
            quoteButton.textContent = 'Show Another Quote !!'
            quoteVisible = false;
        } else {
                    
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            quoteElement.textContent = quote;
            quoteButton.textContent = 'Close Quote !!'
            quoteVisible = true;
        }
    });
    

    // BMI
document.getElementById('calculateBmiBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmiResultElement = document.getElementById('bmiResult');

    // Input validation
    if (isNaN(weight) || weight <= 0) {
        bmiResultElement.textContent = 'Please enter a valid weight.';
        return; // Exit the function if weight is not valid
    }
    if (isNaN(height) || height <= 0) {
        bmiResultElement.textContent = 'Please enter a valid height.';
        return; // Exit the function if height is not valid
    }

    // Calculate BMI
    const heightInCm = height / 100;
    const bmi = weight / (heightInCm * heightInCm);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    bmiResultElement.textContent = `Your BMI is ${bmi.toFixed(2)}. Category: ${category}`;

});


// chaining function
        function fetchBalloon() {
            return new Promise((resolve, reject) => {

                const success = Math.random() > 0.2; 
                setTimeout(() => {
                    if (success) {
                        resolve("A balloon has been fetched!");
                    } else {
                        reject("Still Loading... Press Again");
                    }
                }, 100); 
            });
        }

        function animateBalloons() {
            const balloons = document.querySelectorAll('.balloon');
            balloons.forEach(balloon => {
                let x, y;
                do {
                    x = Math.random() * (window.innerWidth - 100);
                    y = Math.random() * (window.innerHeight - 50);
                } while (x < 0 || y < 0); //ini loop
        
                balloon.style.transition = 'left 0.5s, top 0.5s';
                balloon.style.left = x + 'px';
                balloon.style.top = y + 'px';
            });
        }

        async function getBalloon() {
            const fetchedElement = document.getElementById('fetched');
            const errorElement = document.getElementById('error');
            fetchedElement.textContent = '';
            errorElement.textContent = ''; 

            try {
                const message = await fetchBalloon();
                fetchedElement.textContent = message; 
                animateBalloons(); 
            } catch (error) {
                errorElement.textContent = `Error: ${error}`;
            } finally {
                console.log("Fetch attempt completed."); 
            }
        }

        document.getElementById('fetchButton').addEventListener('click', getBalloon);



});

