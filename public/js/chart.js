const barChart = document.getElementById('barChart');
const lineChart = document.getElementById('lineChart')

const fetchExpenses = async () =>{
  try{
    const response = await fetch("http://localhost:5000/expenses/api/data")
    const expenseData = await response.json()

    const items = expenseData.map(expense => expense.item);
    const amounts = expenseData.map(expense => expense.amount)
    const createdAt = expenseData.map(expense => new Date(expense.createdAt).toLocaleDateString())

    new Chart(barChart, {
      type: 'bar',
      data: {
        labels: items,
        datasets: [{
          label: 'Item',
          data: amounts,
          borderWidth: 0,
          backgroundColor : "rgba(0, 0, 0, 1)"
        }]
      },
      options: {
        scales: {
          y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Amount'
              }
          }
        }
      }
    });

    new Chart(lineChart, {
      type: 'line',
      data: {
        labels: createdAt,
        datasets: [{
          label: 'Date',
          data: amounts,
          borderWidth: 3,
          backgroundColor : "rgba(0, 0, 0, 1)"
        }]
      },
      options: {
        scales: {
          y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Amount'
              }
          }
        }
      }
    });

  }catch(error){
    console.log(error)
  }
}

fetchExpenses();
