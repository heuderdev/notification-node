function obterHoraFormatada() {
  const agora = new Date();
  const hora = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  return `${hora}:${minutos}`;
}

module.exports = { obterHoraFormatada };
