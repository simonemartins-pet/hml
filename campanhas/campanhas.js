function iniciarCampanhas() {

  /* 🔐 Garantias */
  const container = document.getElementById("swiperSlides");
  const wrapper = document.getElementById("campanhas-wrapper");

  if (!container || !wrapper) {
    console.error("Campanhas: HTML não encontrado no DOM");
    return;
  }

  /* ===================== CAMPANHAS ===================== */
  const campanhas = [
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
          <a href="https://wa.me/5521972045256" class="btn">📅 Agendar agora</a>
        </div>
      </div>
    `
  },

  /* 🏡 SÃO SEBASTIÃO */
  {
    id: "sao-sebastiao",
    start: "2026-01-05",
    end: "2026-01-20",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#2563eb,#06b6d4);">
          <h3>🏡 Hospedagem no feriadão</h3>
          <p>De 17 a 20 de janeiro · Vagas limitadas</p>
          <a href="https://wa.me/5521972045256" class="btn">📅 Reservar</a>
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
          <a href="https://wa.me/5521972045256" class="btn">🐾 Saber mais</a>
        </div>
      </div>
    `
  },
  /* 🏖️ FÉRIAS DE JULHO */
  {
    id: "ferias-julho",
    start: "2026-07-01",
    end: "2026-07-31",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#06b6d4,#2563eb);">
          <h3>🏖️ Férias sem Estresse</h3>
          <p>Apoio para famílias que viajam e deixam os pets em casa.</p>
          <a href="https://wa.me/5521972045256" class="btn">📅 Garantir vaga</a>
        </div>
      </div>
    `
  },

  /* 🇧🇷 INDEPENDÊNCIA */
  {
    id: "independencia",
    start: "2026-09-01",
    end: "2026-09-07",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#22c55e,#16a34a);">
          <h3>🇧🇷 Feriadão com Tranquilidade</h3>
          <p>Hospedagem e cuidados durante o feriado prolongado.</p>
          <a href="https://wa.me/5521972045256" class="btn">📅 Reserve já</a>
        </div>
      </div>
    `
  },

  /* 🎃 HALLOWEEN */
  {
    id: "halloween",
    start: "2026-10-20",
    end: "2026-10-31",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#000000,#9333ea);">
          <h3>🎃 Halloween sem sustos</h3>
          <p>Proteção contra barulhos e visitas, mantendo os pets calmos.</p>
          <a href="https://wa.me/5521972045256" class="btn">🐾 Saber mais</a>
        </div>
      </div>
    `
  },

  /* 🎄 NATAL E ANO NOVO */
  {
    id: "natal",
    start: "2026-12-15",
    end: "2026-12-31",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#22c55e,#16a34a);">
          <h3>🎄 Fim de Ano com Carinho</h3>
          <p>Enquanto você celebra, eu cuido do seu pet com amor e segurança.</p>
          <a href="https://wa.me/5521972045256" class="btn">📅 Reserve já</a>
        </div>
      </div>
    `
  },
    /* 🐣 PÁSCOA */
  {
    id: "pascoa",
    start: "2026-03-30",
    end: "2026-04-05",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#facc15,#f59e0b);">
          <h3>🐣 Páscoa sem preocupações</h3>
          <p>Viagens em família? Seu pet fica seguro e feliz comigo.</p>
          <a href="https://wa.me/5521972045256" class="btn">📅 Garantir vaga</a>
        </div>
      </div>
    `
  },

  /* 🌸 DIA DAS MÃES */
  {
    id: "dia-das-maes",
    start: "2026-05-01",
    end: "2026-05-10",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#ec4899,#f472b6);">
          <h3>🌸 Dia das Mães</h3>
          <p>Um presente especial: tempo livre sabendo que seu pet está bem cuidado.</p>
          <a href="https://wa.me/5521972045256" class="btn">🎁 Agendar cuidados</a>
        </div>
      </div>
    `
  },
  /* 🎉 FESTAS JUNINAS */
  {
    id: "festas-juninas",
    start: "2026-06-01",
    end: "2026-06-30",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#f97316,#ea580c);">
          <h3>🎉 Arraiá Pet Seguro</h3>
          <p>Proteção contra fogos e barulho, garantindo o bem-estar dos animais.</p>
          <a href="agenda/juninas.html" class="btn">🐾 Reserve já</a>
        </div>
      </div>
    `
  },
  /* 🇧🇷 TIRADENTES */
  {
    id: "tiradentes",
    start: "2026-04-15",
    end: "2026-04-21",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#22c55e,#16a34a);">
          <h3>🇧🇷 Feriado de Tiradentes</h3>
          <p>Viagem no feriado? Seu pet fica seguro e feliz comigo.</p>
          <a href="agenda/tiradentes.html" class="btn">📅 Garantir vaga</a>
        </div>
      </div>
    `
  },

  /* 💼 DIA DO TRABALHADOR */
  {
    id: "dia-trabalhador",
    start: "2026-04-25",
    end: "2026-05-03",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#f59e0b,#d97706);">
          <h3>💼 Dia do Trabalhador</h3>
          <p>Aproveite o descanso merecido sem preocupações, seu pet terá companhia e atenção.</p>
          <a href="https://wa.me/5521972045256" class="btn">📅 Agendar agora</a>
        </div>
      </div>
    `
  },

  /* 🙏 PADROEIRA DO BRASIL */
  {
    id: "padroeira",
    start: "2026-10-01",
    end: "2026-10-12",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#ec4899,#f472b6);">
          <h3>🙏 Feriado da Padroeira</h3>
          <p>Enquanto você celebra, eu garanto o bem-estar do seu pet.</p>
          <a href="https://wa.me/5521972045256" class="btn">🐾 Reserve já</a>
        </div>
      </div>
    `
  },

  /* 🕊️ FINADOS */
  {
    id: "finados",
    start: "2026-10-25",
    end: "2026-11-02",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#6b7280,#374151);">
          <h3>🕊️ Feriado de Finados</h3>
          <p>Momentos de reflexão e descanso, com a certeza de que seu pet está bem cuidado.</p>
          <a href="https://wa.me/5521972045256" class="btn">📅 Agendar cuidados especiais</a>
        </div>
      </div>
    `
  },

  /* ✊🏾 CONSCIÊNCIA NEGRA */
  {
    id: "consciencia-negra",
    start: "2026-11-13",
    end: "2026-11-22",
    html: `
      <div class="swiper-slide">
        <div style="background: linear-gradient(135deg,#111827,#6d28d9);">
          <h3>✊🏾 Consciência Negra</h3>
          <p>Aproveite o feriado prolongado sabendo que seu pet terá atenção dedicada.</p>
          <a href="https://wa.me/5521972045256" class="btn">🐾 Reserve já</a>
        </div>
      </div>
    `
  }
];

  function hoje() {
    return new Date();
  }

  function campanhaAtiva(c) {
    if (c.alwaysOn) return true;
    if (!c.start || !c.end) return false;

    const agora = hoje();
    const inicio = new Date(c.start + "T00:00:00");
    const fim = new Date(c.end + "T23:59:59");
    return agora >= inicio && agora <= fim;
  }

  let total = 0;

  campanhas.forEach(c => {
    if (campanhaAtiva(c)) {
      container.insertAdjacentHTML("beforeend", c.html);
      total++;
    }
  });

  if (total === 0) return;

  wrapper.style.display = "block";

  if (typeof Swiper === "undefined") {
    console.error("Swiper não carregado");
    return;
  }

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