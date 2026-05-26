// Banco de dados de filmes inserido direto no código
const listaFilmes = [
    { titulo: "A Origem", genero: "Ficção Científica", ano: 2010, sinopse: "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos." },
    { titulo: "Interestelar", genero: "Ficção Científica", ano: 2014, sinopse: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade." },
    { titulo: "Matrix", genero: "Ficção Científica", ano: 1999, sinopse: "Um hacker descobre a verdadeira natureza da sua realidade e seu papel na guerra contra seus controladores." },
    { titulo: "Duna: Parte Dois", genero: "Ficção Científica", ano: 2024, sinopse: "Paul Atreides se une a Chani e aos Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família." },
    
    { titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação", ano: 2008, sinopse: "Quando a ameaça conhecida como O Coringa surge de seu passado, ela causa estragos e caos no povo de Gotham." },
    { titulo: "Mad Max: Estrada da Fúria", genero: "Ação", ano: 2015, sinopse: "Em um deserto pós-apocalíptico, uma mulher se rebela contra um governante tirânico em busca de sua terra natal." },
    { titulo: "Top Gun: Maverick", genero: "Ação", ano: 2022, sinopse: "Após mais de trinta anos de serviço, Maverick continua liderando os pilotos de elite da Marinha." },
    { titulo: "Gladiador", genero: "Ação", ano: 2000, sinopse: "Um ex-general romano busca vingança contra o imperador corrupto que assassinou sua família e o enviou para a escravidão." },

    { titulo: "O Poderoso Chefão", genero: "Drama", ano: 1972, sinopse: "O patriarca envelhecido de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho." },
    { titulo: "Forrest Gump", genero: "Drama", ano: 1994, sinopse: "As presidências de Kennedy e Johnson, os eventos do Vietnã e Watergate se desdobram sob a perspectiva de um homem do Alabama." },
    { titulo: "O Oppenheimer", genero: "Drama", ano: 2023, sinopse: "A história do cientista americano J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica." },
    { titulo: "Clube da Luta", genero: "Drama", ano: 1999, sinopse: "Um trabalhador de escritório insone e um criador de sabonetes descuidado formam um clube de luta underground." },

    { titulo: "La La Land", genero: "Romance", ano: 2016, sinopse: "Enquanto navegam em suas carreiras em Los Angeles, um pianista de jazz e uma aspirante a atriz se apaixonam." },
    { titulo: "Questão de Tempo", genero: "Romance", ano: 2013, sinopse: "Aos 21 anos, Tim descobre que pode viajar no tempo e mudar o que acontece e aconteceu em sua própria vida." },
    { titulo: "Todos Menos Você", genero: "Romance", ano: 2023, sinopse: "Dois arquirrivais da faculdade se reencontram em um casamento e fingem ser um casal por motivos pessoais." },

    { titulo: "Se Beber, Não Case!", genero: "Comédia", ano: 2009, sinopse: "Três amigos acordam de uma despedida de solteiro em Las Vegas sem nenhuma memória da noite anterior e com o noivo desaparecido." },
    { titulo: "Superbad", genero: "Comédia", ano: 2007, sinopse: "Dois co-dependentes adolescentes enfrentam a ansiedade da separação enquanto tentam comprar bebida para uma festa de arromba." },
    { titulo: "Free Guy", genero: "Comédia", ano: 2021, sinopse: "Um caixa de banco descobre que é na verdade um personagem não jogável em um videogame de mundo aberto." },

    { titulo: "Homem-Aranha: No Aranhaverso", genero: "Animação", ano: 2018, sinopse: "O adolescente Miles Morales se torna o Homem-Aranha de seu universo e deve se juntar a cinco indivíduos de outras dimensões." },
    { titulo: "Divertida Mente 2", genero: "Animação", ano: 2024, sinopse: "A mente de Riley, agora adolescente, passa por uma demolição para dar lugar a novas emoções." },

    { titulo: "O Invocação do Mal", genero: "Terror", ano: 2013, sinopse: "Investigadores paranormais trabalham para ajudar uma família aterrorizada por uma presença sombria em sua fazenda." },
    { titulo: "Corra!", genero: "Terror", ano: 2017, sinopse: "Um jovem afro-americano visita os pais de sua namorada branca no fim de semana, onde descobre segredos sinistros." }
];

// Seletores dos elementos HTML
const containerFilmes = document.getElementById('lista-filmes');
const filtroGenero = document.getElementById('filtro-genero');
const filtroAno = document.getElementById('filtro-ano');
const btnFiltrar = document.getElementById('btn-filtrar');

// Função para exibir os filmes na tela
function renderizarFilmes(filmes) {
    containerFilmes.innerHTML = ""; // Limpa o container

    if (filmes.length === 0) {
        containerFilmes.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">Nenhum filme encontrado com esses filtros. 🍿</p>`;
        return;
    }

    filmes.forEach(filme => {
        const card = document.createElement('div');
        card.classList.add('filme-card');
        
        card.innerHTML = `
            <div class="filme-info">
                <h3 class="filme-titulo">${filme.titulo}</h3>
                <div class="filme-meta">📸 ${filme.genero} | 🗓️ ${filme.ano}</div>
                <p class="filme-sinopse">${filme.sinopse}</p>
            </div>
        `;
        containerFilmes.appendChild(card);
    });
}

// Lógica de filtragem por Ano
function verificarAno(anoFilme, filtroSelecionado) {
    if (filtroSelecionado === 'todos') return true;
    if (filtroSelecionado === '2020+' && anoFilme >= 2020) return true;
    if (filtroSelecionado === '2010-2019' && anoFilme >= 2010 && anoFilme <= 2019) return true;
    if (filtroSelecionado === '2000-2009' && anoFilme >= 2000 && anoFilme <= 2009) return true;
    if (filtroSelecionado === 'anos90' && anoFilme <= 1999) return true;
    return false;
}

// Função principal de filtro
function filtrarFilmes() {
    const generoSelecionado = filtroGenero.value;
    const anoSelecionado = filtroAno.value;

    const filmesFiltrados = listaFilmes.filter(filme => {
        const bateGenero = generoSelecionado === 'todos' || filme.genero === generoSelecionado;
        const bateAno = verificarAno(filme.ano, anoSelecionado);
        return bateGenero && bateAno;
    });

    renderizarFilmes(filmesFiltrados);
}

// Ouvintes de eventos (Cliques e carregamento da página)
btnFiltrar.addEventListener('click', filtrarFilmes);

// Inicializa a página mostrando todos os filmes ao carregar
window.addEventListener('DOMContentLoaded', () => {
    renderizarFilmes(listaFilmes);
});