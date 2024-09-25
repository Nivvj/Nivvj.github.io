document.addEventListener('DOMContentLoaded', () => {
    const profileName = document.querySelector('nav .profile h1');
    profileName.addEventListener('mouseover', () => {
        profileName.textContent = `Portfolio d'une étudiante passionnée par son domaine`;
    }); 

    profileName.addEventListener('mouseout', () => {
        profileName.textContent = 'Nivetha VIJAYATHARAN';
    });

    const projectLinks = document.querySelectorAll('.projects_section .project a');
    projectLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'white';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#2874A6';
        });
    });
});
