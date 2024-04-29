document.addEventListener('DOMContentLoaded', function() {
    console.log('----------------------')
    const id = 1;
    fetch('http://localhost:8084?id=' + id)
    .then(response => response.json()) 
    .then(data => {
        console.log("API response - ",data);
        // Manipulate the DOM to display fetched data
        const nameElements = document.querySelectorAll('.my-name');
        nameElements.forEach(element => {
            element.innerHTML = data.name;
        });
        const descriptionElements = document.querySelectorAll('.my-about');
        descriptionElements.forEach(element => {
            element.innerHTML = data.about;
        });
        const birthDateElements = document.querySelectorAll('.my-birthDate');
        birthDateElements.forEach(element => {
            element.innerHTML = data.birthDate;
        });
        const currentPositionElements = document.querySelectorAll('.my-current-position');
        currentPositionElements.forEach(element => {
            element.innerHTML = data.currentPosition;
        });        
        const phoneElements = document.querySelectorAll('.my-phone');
        phoneElements.forEach(element => {
            element.innerHTML = data.contactDTO.phone;
        });
        const addressElements = document.querySelectorAll('.my-address');
        addressElements.forEach(element => {
            element.innerHTML = data.contactDTO.address;
        });
        const degreeElements = document.querySelectorAll('.my-degree');
        degreeElements.forEach(element => {
            element.innerHTML = data.degree;
        });
        const emailElements = document.querySelectorAll('.my-email');
        emailElements.forEach(element => {
            element.innerHTML = data.contactDTO.email;
        });

        data.skillsDTOS.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('progress');
            
            const skillSpan = document.createElement('span');
            skillSpan.classList.add('skill');
            skillSpan.innerHTML = `${skill.technology} <i class="val">${skill.proficiency}</i>`;
            
            const progressBarWrap = document.createElement('div');
            progressBarWrap.classList.add('progress-bar-wrap');
            
            const progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');
            progressBar.setAttribute('role', 'progressbar');
            progressBar.setAttribute('aria-valuenow', skill.proficiency);
            progressBar.setAttribute('aria-valuemin', '0');
            progressBar.setAttribute('aria-valuemax', '100');
            progressBar.style.width = `${skill.proficiency}%`;
            
            progressBarWrap.appendChild(progressBar);
            skillDiv.appendChild(skillSpan);
            skillDiv.appendChild(progressBarWrap);
            skillsContainer.appendChild(skillDiv);
        });

        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});
