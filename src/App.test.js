import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const artistsMock = {
  artists: [
    { id: 1, name: 'Foo Fighters', genre: 'Rock', urlImg: 'https://example.com/foo.jpg' },
    { id: 2, name: 'Michael Jackson', genre: 'Pop', urlImg: 'https://example.com/mj.jpg' },
  ],
};

function mockFetchSuccess() {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve(artistsMock) })
  );
}

beforeEach(() => {
  mockFetchSuccess();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('busca de artistas', () => {
  test('mostra as playlists quando não há busca ativa', async () => {
    render(<App />);

    expect(await screen.findByText('Boas vindas')).toBeInTheDocument();
    expect(screen.getByText('Rock')).toBeInTheDocument();
    expect(screen.getByText('Música Latina')).toBeInTheDocument();
  });

  test('filtra e exibe o artista correspondente ao termo digitado', async () => {
    render(<App />);
    const input = screen.getByLabelText('Buscar artistas');

    await userEvent.type(input, 'foo');

    expect(await screen.findByText('Foo Fighters')).toBeInTheDocument();
    expect(screen.queryByText('Michael Jackson')).not.toBeInTheDocument();
    // As playlists saem de cena durante a busca
    expect(screen.queryByText('Boas vindas')).not.toBeInTheDocument();
  });

  test('exibe mensagem quando a busca não retorna resultados', async () => {
    render(<App />);
    const input = screen.getByLabelText('Buscar artistas');

    await userEvent.type(input, 'artista inexistente');

    expect(
      await screen.findByText('Nenhum artista encontrado para essa busca.')
    ).toBeInTheDocument();
  });

  test('volta a mostrar as playlists ao limpar a busca', async () => {
    render(<App />);
    const input = screen.getByLabelText('Buscar artistas');

    await userEvent.type(input, 'foo');
    expect(await screen.findByText('Foo Fighters')).toBeInTheDocument();

    await userEvent.clear(input);

    expect(await screen.findByText('Boas vindas')).toBeInTheDocument();
  });

  test('exibe mensagem de erro quando a requisição falha', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: false, status: 500 }));

    render(<App />);
    // Espera o efeito de carregamento terminar antes de interagir,
    // para que a atualização de estado aconteça dentro de act().
    await screen.findByText('Boas vindas');

    const input = screen.getByLabelText('Buscar artistas');
    await userEvent.type(input, 'foo');

    await waitFor(() => {
      expect(
        screen.getByText('Não foi possível carregar os artistas. Tente novamente mais tarde.')
      ).toBeInTheDocument();
    });
  });
});
