let clicks = 0;

function accionBoton() {
  const mensajes = [
    "🚀 ¡Vas aprendiendo rápido!",
    "🔥 Esto ya es programación real",
    "💡 Sigue practicando, vas bien",
    "😎 Ya sabes HTML, CSS y JS básico",
    "📱 Pronto harás tu propia app"
  ];

  // Contador
  clicks++;
  document.getElementById("contador").textContent = "Clicks: " + clicks;

  // Animación rápida al número
  const contador = document.getElementById("contador");
  contador.style.transform = "scale(1.2)";
  setTimeout(() => {
    contador.style.transform = "scale(1)";
  }, 150);

  // Mensaje aleatorio
  const random = Math.floor(Math.random() * mensajes.length);
  document.getElementById("mensaje").textContent = mensajes[random];
}
