//global variable to hold selected plan and price

document.addEventListener("DOMContentLoaded", function() {
    let selectedPlan = "";
    let selectedPrice = 0;

    //function to select a plan

    window.selectPlan = function(planName, price) {
        selectedPlan = planName;
        selectedPrice = price;

    //display the selected plan details

        document.getElementById("plan-details").style.display = "block";
        document.getElementById("selected-plan-title").textContent = `${planName} Plan - £${price} per month`;

    };

    document.getElementById("calculate-btn").addEventListener("click", function() {
        const duration = parseInt(document.getElementById("duration").value);
    
        if (isNaN(duration) || duration <= 0) {
            alert("Please enter a valid number of months.");
            return;
        }
    
        const totalCost = selectedPrice * duration;
        document.getElementById("total-cost").textContent = 
        `Total Cost for ${duration} months: £${totalCost}`;
    });

    document.getElementById("signup-btn").onclick = function(){
        document.getElementById("signup-modal").style.display = "block";
    };

    document.querySelector(".close").onclick = function() {
        document.getElementById("signup-modal").style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === document.getElementById("signup-modal")) {
        document.getElementById("signup-modal").style.display = "none";
        }
    };


    document.getElementById("signup-form").onsubmit = function(event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;

        if (validateEmail(email)) {
            alert(`Thanks, ${name}, for signing up!`);
            document.getElementById("signup-modal").style.display = "none";
            document.getElementById("signup-form").reset();
        } else {
            alert("Please enter a valid email.");
        }
    };

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

});