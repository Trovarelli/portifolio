import { describe, it, expect } from 'vitest'
import { calcularTempoExperiencia } from './calcularTempoExperiencia'

const d = (y: number, m: number, day: number) => new Date(y, m - 1, day)

describe('calcularTempoExperiencia (saída humana)', () => {
  const HOJE = d(2025, 8, 23)

  it('2021-09-01 → "quase 4 anos"', () => {
    expect(calcularTempoExperiencia(d(2021, 9, 1), HOJE)).toBe('quase 4 anos')
  })

  it('2021-08-01 → "mais de 4 anos"', () => {
    expect(calcularTempoExperiencia(d(2021, 8, 1), HOJE)).toBe('mais de 4 anos')
  })

  it('2021-07-01 → "mais de 4 anos"', () => {
    expect(calcularTempoExperiencia(d(2021, 7, 1), HOJE)).toBe('mais de 4 anos')
  })

  it('2021-01-01 → "quase 5 anos"', () => {
    expect(calcularTempoExperiencia(d(2021, 1, 1), HOJE)).toBe('quase 5 anos')
  })

  it('aniversário exato → retorna só "X anos"', () => {
    const hojeAniversario = d(2025, 9, 1)
    expect(calcularTempoExperiencia(d(2021, 9, 1), hojeAniversario)).toBe('4 anos')
  })

  it('dia do mês ainda não chegou conta para baixo (ex.: começou dia 30)', () => {
    expect(calcularTempoExperiencia(d(2021, 8, 30), HOJE)).toBe('quase 4 anos')
  })
})
