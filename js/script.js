// Subjects list
const subjects = [
    "DBMS","Machine Learning" , "Shell Scripting using Bash", "CBNST",
    "Operating System", "Data Structures", "Algorithms", "Cybersecurity",
    "Computer Networks", "Web Development", "Android Development",
    "Java Full Stack", "Python", "C", "C++", "C#", "Java", "SQL", "Bash",
    "ZSH", "Flask", "React", "Node"
];

// Generate subject cards
const cardContainer = document.querySelector('.card-container');

subjects.forEach(subject => {
    const card = document.createElement('div');
    card.className = 'card';
    const imageName = subject.toLowerCase().replace(/ /g, '-') + '.jpg';
    card.innerHTML = `
        <img src="assets/images/${imageName}" alt="${subject}">
        <h2>${subject}</h2>
    `;
    card.addEventListener('click', () => {
        const pageName = subject.toLowerCase().replace(/ /g, '-') + '.html';
        window.location.href = `subjects/${pageName}`;
    });
    cardContainer.appendChild(card);
});
