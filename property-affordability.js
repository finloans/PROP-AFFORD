function calculateAffordability() {
    // Get input values
    const annualIncome = parseFloat(document.getElementById("annualIncome").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value);
    const loanTenure = parseFloat(document.getElementById("loanTenure").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);

    // Check for valid input
    if (isNaN(annualIncome) || isNaN(downPayment) || isNaN(loanTenure) || isNaN(interestRate)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Calculate EMI (monthly installment)
    const monthlyInterestRate = (interestRate / 100) / 12;
    const loanAmount = annualIncome * 4; // Max loan based on income (4x rule)
    const emi = (loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), loanTenure * 12)) /
                (Math.pow((1 + monthlyInterestRate), loanTenure * 12) - 1);

    // Calculate total property affordability (loan + down payment)
    const totalAffordability = downPayment + loanAmount;

    // Update the result on the page
    document.getElementById("affordableAmount").innerText = totalAffordability.toFixed(2);
}
