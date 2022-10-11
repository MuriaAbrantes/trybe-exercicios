const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#posts-container');

// Pegar o url parâmetro Id post:
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('id');

// Função que PEGA TODOS OS POSTS (GET ALL POSTS):
async function getAllPosts() {

    const response = await fetch(url);
    const data = await response.json();
    loadingElement.classList.add('hide');

    // Inserir dados no template:
    data.map((post) => {

      // Criando elementos HTML para inserir cada post:
      const div = document.createElement('div');
      const title = document.createElement('h2');
      const body = document.createElement('p');
      const link = document.createElement('a');

      // Agora vou preencher os elementos criados com CONTEÚDO:
      title.innerText = post.title;
      body.innerText = post.body;
      link.innerText = 'Ler';
      link.setAttribute('href', `/post.html?id=${post.id}`);

      // Colocar todos os elementos de cada post em uma DIV:
      div.appendChild(title);
      div.appendChild(body);
      div.appendChild(link);

      postsContainer.appendChild(div);

    })
    console.log(data);
}

if (!postId) {
  getAllPosts();
} else {
  console.log(postId);
}