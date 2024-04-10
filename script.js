function showSection(sectionName) {
    var foodSection = document.getElementById('matMeny');
    var drinkSection = document.getElementById('drikkeMeny');

    if (sectionName === 'drikke') {
        foodSection.style.display = 'none';
        drinkSection.style.display = 'block';
    } else if (sectionName === 'mat') {
        foodSection.style.display = 'block';
        drinkSection.style.display = 'none';
    }

}

document.addEventListener('DOMContentLoaded', function() {
    showSection('drikke'); // Show the drink section by default
});
