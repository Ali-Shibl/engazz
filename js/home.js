    
    
 (function() {
  
  // 🟢 Bar Chart
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Requests",
        data: [12, 19, 8, 15, 22, 17],
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      }]
    },
    options: { responsive: true }
  });

  // 🔵 Line Chart
  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Users",
        data: [5, 9, 14, 20, 25, 30],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.3,
        fill: true
      }]
    },
    options: { responsive: true }
  });

  // 🟠 Doughnut Chart
  new Chart(document.getElementById("doughnutChart"), {
    type: "doughnut",
    data: {
      labels: ["Technical", "Medical", "Business"],
      datasets: [{
        data: [35, 25, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)"
        ]
      }]
    },
    
  options: { 
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2  // جرب 2 أو 3 لتصغير الرسم
  }
  });

  // 🟣 Pie Chart
  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: ["Completed", "Pending", "Cancelled"],
      datasets: [{
        data: [65, 25, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)"
        ]
      }]
    },
  options: { 
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2  // جرب 2 أو 3 لتصغير الرسم
  }
  });

 })();
    



