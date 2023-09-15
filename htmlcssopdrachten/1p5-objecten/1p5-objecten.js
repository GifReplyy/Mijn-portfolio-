document.getElementById("person-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Voorkom dat het formulier wordt verzonden en de pagina wordt vernieuwd
  
    // Haal de ingevulde waarden uit het formulier
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var hobbies = document.getElementById("hobbies").value.split(",").map(hobby => hobby.trim());
  
    // Maak het persoon-object met de ingevulde waarden
    var persoon = {
      naam: name,
      leeftijd: age,
      hobbies: hobbies
    };
  
    // Toon de ingevulde informatie op de pagina
    document.getElementById("person-details").innerHTML = `
      Naam: ${persoon.naam}<br>
      Leeftijd: ${persoon.leeftijd}<br>
      Hobby's: ${persoon.hobbies.join(", ")}
    `;
  });
  