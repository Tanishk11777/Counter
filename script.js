async function fetchWordFrequencies() {
    const url = document.getElementById("urlInput").value;
    if (!url) {
        alert("Please enter a valid URL.");
        return;
    }

    const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
    });

    if (response.ok) {
        const data = await response.json();
        const tableBody = document.getElementById("resultTable").querySelector("tbody");
        tableBody.innerHTML = "";

        data.forEach(({ word, frequency }) => {
            const row = `<tr><td>${word}</td><td>${frequency}</td></tr>`;
            tableBody.innerHTML += row;
        }
    );

        document.getElementById("resultTable").style.display = "table";
    } else {
        alert("Failed to fetch word frequencies. Please try again.");
    }
}
