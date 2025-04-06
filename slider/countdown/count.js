function startCountdown() {
    let count = parseInt($("#numberInput").val()); // Get value from input
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    const timerid = setInterval(function () {
        $("#countdownDisplay").text(count);
        console.log("Counting down:", count);

        if (count === 0) {
            clearInterval(timerid);
        }
        count--;
    }, 1000);
}
