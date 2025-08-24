// ======== HERO (Planeta aleatorio) ======== //
async function cargarPlaneta() {
  try {
    const res = await fetch("https://dragonball-api.com/api/planets?limit=20");
    const data = await res.json();

    // Escoger un planeta aleatorio
    const random = Math.floor(Math.random() * data.items.length);
    const planeta = data.items[random];

    // Mostrar en el hero
    document.getElementById("planet-name").textContent = planeta.name;
    document.getElementById("planet-description").textContent = planeta.description || "Un planeta del universo Dragon Ball.";
    document.querySelector(".hero").style.backgroundImage = `url(${planeta.image})`;

  } catch (error) {
    console.error("Error cargando planeta:", error);
  }
}

// ======== CARRUSEL DE PERSONAJES ======== //
const carousel = document.getElementById("carousel");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

async function cargarPersonajes() {
  try {
    const res = await fetch("https://dragonball-api.com/api/characters?limit=33");
    const data = await res.json();

data.items.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-image">
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="card-info">
      <h3>${p.name}</h3>
      <p>Ki: ${p.ki}</p>
    </div>
  `;
  carousel.appendChild(card);
});

  } catch (error) {
    console.error("Error cargando personajes:", error);
  }
}

// Funciones del carrusel
next.addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});

cargarPlaneta();
cargarPersonajes();
