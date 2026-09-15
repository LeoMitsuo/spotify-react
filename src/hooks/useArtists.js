import { useEffect, useState } from 'react';

const ARTISTS_URL = `${process.env.PUBLIC_URL}/artists.json`;

/**
 * Carrega a lista de artistas uma única vez.
 *
 * A versão original fazia uma requisição a cada tecla digitada, contra um
 * json-server rodando em localhost:4000 — o que impedia o deploy. Como o
 * conjunto de dados é pequeno e estático, buscar uma vez e filtrar em memória
 * é mais simples e evita requisição desnecessária. Se a busca fosse feita no
 * servidor, o caminho seria outro: debounce no input e paginação na resposta.
 */
export default function useArtists() {
  const [artists, setArtists] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | success | error

  useEffect(() => {
    // Evita atualizar estado depois que o componente foi desmontado.
    const controller = new AbortController();

    async function loadArtists() {
      try {
        const response = await fetch(ARTISTS_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Falha ao carregar artistas: ${response.status}`);
        }

        const data = await response.json();
        setArtists(data.artists ?? []);
        setStatus('success');
      } catch (error) {
        if (error.name === 'AbortError') return;
        setStatus('error');
      }
    }

    loadArtists();

    return () => controller.abort();
  }, []);

  return { artists, status };
}
