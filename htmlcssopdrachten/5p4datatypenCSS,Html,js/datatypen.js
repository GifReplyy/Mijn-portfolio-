let huidigePagina = 0;
let naam = '';
let leeftijd = '';
let gewicht = '';
let isGetrouwd = false;

const formulier = document.querySelector('#formulier');
const resultaat = document.querySelector('#resultaat');
const voortgangsBalk = document.querySelector('.voortgangs-balk');

function updateProgressBalk() {
    const paginas = document.querySelectorAll('.pagina');
    const totaalPagina = paginas.length - 1;
    const voortgangsPercentage = (huidigePagina / totaalPagina) * 100;
    voortgangsBalk.style.width = `${voortgangsPercentage}%`;
}

function toonPagina(paginaIndex) {
    const paginas = document.querySelectorAll('.pagina');
    const huidigePaginaElement = paginas[huidigePagina];
    huidigePaginaElement.classList.remove('actief');
    huidigePagina = paginaIndex;
    const nieuwePaginaElement = paginas[huidigePagina];
    nieuwePaginaElement.classList.add('actief');
    updateProgressBalk();
}

const volgendeKnoppen = document.querySelectorAll('.volgende');
volgendeKnoppen.forEach((knop) => {
    knop.addEventListener('click', () => {
    if (huidigePagina === 0) {
        naam = document.querySelector('#naam').value;
    } else if (huidigePagina === 1) {
        leeftijd = document.querySelector('#leeftijd').value;
    } else if (huidigePagina === 2) {
        gewicht = document.querySelector('#gewicht').value;
    } else if (huidigePagina === 3) {
        isGetrouwd = document.querySelector('#is-getrouwd').checked;
        formulier.style.display = 'none';
        resultaat.innerHTML = `
        <h2>Resultaat</h2>
        <p>Naam: ${naam}</p>
        <p>Leeftijd: ${leeftijd}</p>
        <p>Gewicht: ${gewicht}</p>
        <p>Getrouwd: ${isGetrouwd ? 'Ja' : 'Nee'}</p>
        `;
    }

    if (huidigePagina < 3) {
        toonPagina(huidigePagina + 1);
    }
    });
});