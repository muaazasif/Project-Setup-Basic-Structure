// 1. Define the Data
const userData = [
    { name: "Sidra_Siddiqui_completed_multisheet", rate: "alpha" },
    { name: "aymannadeem", rate: "alpha" },
    { name: "neha_completed_multisheet", rate: "alpha" },
    { name: "humaira_zeeshan_completed_multisheet", rate: "beta" },
    { name: "maheenzehra", rate: "beta" },
    { name: "unsakamran", rate: "beta" },
    { name: "TOOBA_SAJID_completed_multisheet", rate: "beta" },
    { name: "Syeda_Areeba_completed_multisheet", rate: "beta" },
    { name: "maheenshoaib", rate: "beta" },
    { name: "LAIBA SHAHZAD", rate: "alpha" },
    { name: "Farwa_completed_multisheet", rate: "beta" },
    { name: "Kanwal_jamil_completed_multisheet", rate: "beta" }
];

// 2. Define the Mark Mapping
const marksMapping = {
    alpha: { score: 10, emoji: "🌟", class: "rate-alpha", badgeClass: "marks-alpha" },
    beta:  { score: 9,  emoji: "👍", class: "rate-beta", badgeClass: "marks-beta" }
};

// 3. Get the Table Body Element
const tableBody = document.getElementById('user-table-body');

// 4. Function to generate the table rows
function displayUserData() {
    // Clear existing content (like the loading spinner)
    tableBody.innerHTML = '';

    // Check if there's data
    if (userData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">😕 No user data available.</td></tr>';
        return;
    }

    // Loop through the data and create table rows
    userData.forEach((user, index) => {
        const rateKey = user.rate.toLowerCase(); // Ensure lowercase for matching
        const rateInfo = marksMapping[rateKey] || { score: 'N/A', emoji: '❓', class: '', badgeClass: '' }; // Default if rate not found

        const row = document.createElement('tr');

        row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${user.name}</td>
            <td class="${rateInfo.class}">${user.rate.charAt(0).toUpperCase() + user.rate.slice(1)} ${rateInfo.emoji}</td>
            <td><span class="badge ${rateInfo.badgeClass} marks-badge">${rateInfo.score}</span></td>
        `;

        tableBody.appendChild(row);
    });
}

// 5. Call the function when the page loads
// Use DOMContentLoaded to ensure the HTML is ready before running the script
document.addEventListener('DOMContentLoaded', displayUserData);