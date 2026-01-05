/* ================= SCRIPT DATAS COMEMORATIVAS ================= */
document.addEventListener("DOMContentLoaded", () => {

  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1;

  function iniciarEfeito(emoji, quantidade) {
    for (let i = 0; i < quantidade; i++) {
      const item = document.createElement("div");
      item.className = emoji === "❄" ? "snowflake" : "effect-item";
      item.textContent = emoji;
      item.style.left = Math.random() * 100 + "vw";
      item.style.fontSize = Math.random() * 14 + 12 + "px";
      item.style.animationDuration = Math.random() * 5 + 6 + "s";
      document.body.appendChild(item);
    }
  }
if ((mes === 12 && dia >= 24 && dia <= 25)) {
    iniciarEfeito("❄", 50);
  }
  if ((mes === 12 && dia === 31) || (mes === 1 && dia === 1)) {
    iniciarEfeito("🎉", 45);
  }

 // if (dia === 31 && mes === 3) iniciarEfeito("🥚", 40);
 // if (dia === 31 && mes === 10) iniciarEfeito("🎃", 40);

});

/* ================= POPUP DATAS COMEMORATIVAS ================= */
document.addEventListener("DOMContentLoaded", () => {

  const eventos = [
    {
      id: "natal",
      inicio: "12-24",
      fim: "12-25",
      icon: "🎄",
      title: "Feliz Natal!",
      message: "Que este Natal seja repleto de amor, cuidado e momentos especiais ao lado de quem você ama — incluindo seus pets 🐾❤️"
    },
    {
      id: "ano-novo",
      inicio: "12-31",
      fim: "01-01",
      icon: "🎆",
      title: "Feliz Ano Novo!",
      message: "Que o novo ano traga saúde, alegria e muitos momentos felizes com seu pet 🐾✨"
    },
    {
      id: "pascoa",
      inicio: "03-25",
      fim: "04-01",
      icon: "🐣",
      title: "Feliz Páscoa!",
      message: "Desejo uma Páscoa cheia de carinho, renovação e cuidado com quem faz sua vida mais feliz 🐾💛"
    },
    {
      id: "halloween",
      inicio: "10-31",
      fim: "10-31",
      icon: "🎃",
      title: "Feliz Halloween!",
      message: "Um Halloween cheio de diversão, cuidado e segurança para você e seu pet 🐾🎃"
    },
/* === Datas comemorativas de pets === */
    {
      id: "dia-gato",
      inicio: "02-17",
      fim: "02-17",
      icon: "🐱",
      title: "Dia Mundial do Gato",
      message: "Hoje celebramos nossos amigos felinos! Que seu gato receba muito carinho e cuidado 🐱❤️"
    },
    {
      id: "dia-cachorro",
      inicio: "08-26",
      fim: "08-26",
      icon: "🐶",
      title: "Dia Internacional do Cachorro",
      message: "Um dia especial para homenagear nossos fiéis companheiros de quatro patas 🐶💙"
    },
    {
      id: "dia-animais",
      inicio: "10-04",
      fim: "10-04",
      icon: "🐾",
      title: "Dia Mundial dos Animais",
      message: "Celebrando todos os animais que tornam nossas vidas mais felizes e completas 🐾🌍"
    },
    {
      id: "dia-amigo-animal",
      inicio: "09-23",
      fim: "09-23",
      icon: "❤️🐾",
      title: "Dia do Amigo do Animal",
      message: "Uma data para celebrar a amizade, o cuidado e o amor que nos unem aos pets ❤️🐾"
    },
    {
      id: "dia-nacional-animais",
      inicio: "03-14",
      fim: "03-14",
      icon: "🇧🇷🐾",
      title: "Dia Nacional dos Animais",
      message: "No Dia Nacional dos Animais, minha sugestão é simples: espalhe carinho e proteja quem nos dá amor incondicional 🐾🇧🇷"
    }
  ];

  const hoje = new Date();
  const hojeMMDD =
    String(hoje.getMonth() + 1).padStart(2, '0') + "-" +
    String(hoje.getDate()).padStart(2, '0');

  const popup = document.getElementById("popupSazonal");
  if (!popup) return;

  eventos.forEach(evento => {
    const visto = localStorage.getItem("popup_" + evento.id);

    if (!visto && dentroDoPeriodo(hojeMMDD, evento.inicio, evento.fim)) {
      abrirPopup(evento);
    }
  });

  function abrirPopup(evento) {
    document.getElementById("popupIcon").textContent = evento.icon;
    document.getElementById("popupTitle").textContent = evento.title;
    document.getElementById("popupMessage").textContent = evento.message;

    popup.classList.remove("hidden");
    popup.dataset.eventoId = evento.id;
  }

});

function fecharPopup() {
  const popup = document.getElementById("popupSazonal");
  if (!popup) return;

  const eventoId = popup.dataset.eventoId;
  localStorage.setItem("popup_" + eventoId, "true");
  popup.classList.add("hidden");
}

function dentroDoPeriodo(hoje, inicio, fim) {
  if (inicio <= fim) {
    return hoje >= inicio && hoje <= fim;
  }
  return hoje >= inicio || hoje <= fim;
}

