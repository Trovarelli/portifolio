export function calcularTempoExperiencia(dataInicio: Date, hoje = new Date()): string {
  let totalMeses =
    (hoje.getFullYear() - dataInicio.getFullYear()) * 12 +
    (hoje.getMonth() - dataInicio.getMonth());

  if (hoje.getDate() < dataInicio.getDate()) totalMeses -= 1;

  const anos = Math.floor(totalMeses / 12);
  const mesesDesdeAniversario = totalMeses % 12;

  const aniversarioExato =
    mesesDesdeAniversario === 0 &&
    hoje.getMonth() === dataInicio.getMonth() &&
    hoje.getDate() === dataInicio.getDate();

  if (aniversarioExato) {
    return `${anos} ${anos === 1 ? "ano" : "anos"}`;
  }

  const faltaMeses = mesesDesdeAniversario === 0 ? 12 : 12 - mesesDesdeAniversario;

  if (faltaMeses >= 7) {
    return `mais de ${anos} ${anos === 1 ? "ano" : "anos"}`;
  }
  return `quase ${anos + 1} ${anos + 1 === 1 ? "ano" : "anos"}`;
}