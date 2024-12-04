document.addEventListener('DOMContentLoaded', function() {

// Données de l'exemple
const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'];
const data = {
    labels: labels,
    datasets: [{
        label: 'Statistiques mensuelles',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56]
    }]
};

// Options du graphique
const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Récupérer le contexte du canvas
const ctx = document.getElementById('myChart').getContext('2d');
// console.log(ctx);

// Initialiser le graphique
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
});