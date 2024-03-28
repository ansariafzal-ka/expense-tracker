const searchField = document.getElementById('searchField');
const expenseRows = document.querySelectorAll('tbody tr');

searchField.addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase().trim();
    expenseRows.forEach(function(row) {
        const category = row.querySelector('td:first-child').textContent.toLowerCase().trim();

        if (category.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});