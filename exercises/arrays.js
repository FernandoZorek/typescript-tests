"use strict";
// Exercise
// Define the API interface: https://api.origamid.dev/json/cursos.json and show the data on the screen.
// There are only two levels of courses, Beginner (beginner) and Advanced (advanced). If it's for beginners, color the title blue, for advanced people, color it red.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    for (const curso of cursos) {
        const color = curso.nivel === 'iniciante' ? 'blue' : 'red';
        document.body.innerHTML += `
          <div>
            <h2 style="color: ${color};">${curso.nome}</h2>
            <p>Hour: ${curso.horas}</p>
            <p>Classroom: ${curso.aulas}</p>
            <p>Type: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
            <p>Tags: ${curso.tags.join(', ')}</p>
            <p>Id Classroom: ${curso.idAulas.join(' | ')}</p>
          </div>
        `;
    }
    ;
}
