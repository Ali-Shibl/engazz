    
    
 (function() {
   getctx()
 })();
    
   
    function getctx() {
       const ctx = document.getElementById("statsChart");

    new Chart(ctx, {
      type: "bar", // يمكنك تغييرها إلى "pie" أو "doughnut"
      data: {
        labels: ["Doctors", "Students", "Training Requests", "Satisfaction Rate"],
        datasets: [{
          label: "Statistics",
          data: [250, 1200, 450, 98],
          backgroundColor: [
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(255, 99, 132, 0.7)"
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)"
          ],
          borderWidth: 2,
          borderRadius: 10
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#333",
            titleColor: "#fff",
            bodyColor: "#fff",
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 200 }
          }
        }
      }
    });   
    }


