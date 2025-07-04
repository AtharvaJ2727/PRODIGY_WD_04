document.addEventListener('DOMContentLoaded', function() {
    const techBtn = document.querySelector('.tech-btn');
    const softBtn = document.querySelector('.soft-btn');
    const techSkills = document.getElementById('technicalSkills');
    const softSkills = document.getElementById('softSkills');
    
    // Show technical skills by default
    techSkills.classList.add('active');
    softSkills.classList.remove('active');
    
    techBtn.addEventListener('click', function() {
        techSkills.classList.add('active');
        softSkills.classList.remove('active');
        techBtn.style.backgroundColor = 'black';
        softBtn.style.backgroundColor = 'transparent';
        techBtn.style.color = '#00F0FF';
        softBtn.style.color = '#B0B0B0';
    });
    
    softBtn.addEventListener('click', function() {
        softSkills.classList.add('active');
        techSkills.classList.remove('active');
        softBtn.style.backgroundColor = 'black';
        techBtn.style.backgroundColor = 'transparent';
        softBtn.style.color = '#00FF7F';
        techBtn.style.color = '#BB0B0';
    });
    
    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const percent = bar.parentElement.nextElementSibling.textContent;
            bar.style.width = percent;
        });
    }
    
    // Animate bars on page load
    setTimeout(animateProgressBars, 500);
    
    // Animate bars when section becomes active
    techBtn.addEventListener('click', animateProgressBars);
    softBtn.addEventListener('click', animateProgressBars);
});