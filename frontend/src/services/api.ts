// Wrapper único de fetch — centraliza a base URL e o tratamento de erro HTTP.
const API_URL = import.meta.env.VITE_API_URL;

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  console.log(API_URL);

  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const erro = await res.json().catch(() => ({ erro: 'Erro inesperado' }));
    throw new Error(erro.erro ?? 'Erro inesperado');
  }

  return res.json();
}

