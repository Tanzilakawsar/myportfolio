
    document.addEventListener('DOMContentLoaded', function () {
        const hireMeButton = document.getElementById('hireMe');
        const getResumeButton = document.getElementById('getResume');
        const portfolioToggleButton = document.getElementById('portfolioToggle');

        portfolioToggleButton.addEventListener('click', function () {
            // Toggle the active class on the buttons
            hireMeButton.classList.toggle('active');
            getResumeButton.classList.toggle('active');
            portfolioToggleButton.classList.toggle('active');
        });
    });

