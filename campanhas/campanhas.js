const MODO_TESTE = false;

function hoje() {
  return new Date();
}

/* ===================== CAMPANHAS ===================== */
const campanhas = [

  /* 🌿 CAMPANHA FIXA (EVERGREEN) */
  {
    id: "cuidados-naturais",
    alwaysOn: true,
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#22c55e,#059669);">
          <h3>🌿 Cuidados naturais contra pulgas</h3>
          <p>Descubra plantas que ajudam a manter o ambiente livre de parasitas.</p>
          <a href="artigos/dicas-da-simone.html" class="btn">
            🌱 Saber mais
          </a>
        </div>
      </div>
    `
  },

  /* ☀️ VERÃO */
  {
    id: "verao",
    start: "2026-01-01",
    end: "2026-02-28",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#ec4899,#ef4444);">
          <h3>☀️ Banho refrescante de verão</h3>
          <p>Cuidados especiais para os dias mais quentes.</p>
          <a href="#" class="btn">📅 Agendar agora</a>
        </div>
      </div>
    `
  },

  /* 🏡 SÃO SEBASTIÃO */
  {
    id: "sao-sebastiao",
    start: "2026-01-10",
    end: "2026-01-20",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#2563eb,#06b6d4);">
          <h3>🏡 Hospedagem no feriadão</h3>
          <p>De 17 a 20 de janeiro · Vagas limitadas</p>
          <a href="#" class="btn">📅 Reservar</a>
        </div>
      </div>
    `
  },

  /* 🎭 CARNAVAL */
  {
    id: "carnaval",
    start: "2026-02-07",
    end: "2026-02-18",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#9333ea,#ec4899);">
          <h3>🎭 Carnaval Seguro para Pets</h3>
          <p>Seu pet tranquilo enquanto você aproveita o feriado.</p>
          <a href="#" class="btn">🐾 Saber mais</a>
        </div>
      </div>
    `
  }
];


function campanhaAtiva(c) {
  if (c.alwaysOn) return true;
  if (!c.start || !c.end) return false;

  const agora = hoje();
  const inicio = new Date(c.start + "T00:00:00");
  const fim = new Date(c.end + "T23:59:59");
  return agora >= inicio && agora <= fim;
}

const container = document.getElementById("swiperSlides");
let total = 0;

campanhas.forEach(c => {
  if (campanhaAtiva(c)) {
    container.insertAdjacentHTML("beforeend", c.html);
    total++;
  }
});

if (total > 0) {
  document.getElementById("campanhas-wrapper").style.display = "block";

  new Swiper(".mySwiper", {
    loop: total > 1,
    autoplay: { delay: 5000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}