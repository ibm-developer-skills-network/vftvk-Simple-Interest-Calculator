function compute() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;

    // Calculate interest
    const interest = (principal * rate * years) / 100;

    // Display the result
    document.getElementById("result").textContent = interest;
}
