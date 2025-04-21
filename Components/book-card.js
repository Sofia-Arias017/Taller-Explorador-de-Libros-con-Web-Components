class BookCard extends HTMLElement {
    constructor() {
        super();
        // Aquí creo el Shadow DOM para encapsular el contenido del componente.
        this.attachShadow({ mode: 'open' });
    }

    // Este método se ejecuta cuando el componente se inserta en el DOM.
    connectedCallback() {
        // Obtengo los valores de los atributos que se pasan al componente.
        const coverUrl = this.getAttribute('coverUrl');
        const title = this.getAttribute('title');
        const author = this.getAttribute('author');

        // Ahora voy a insertar el contenido HTML y CSS dentro del Shadow DOM.
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ddd;
                    padding: 16px;
                    margin: 10px;
                    display: inline-block;
                    width: 200px;
                    text-align: center;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
                h3 {
                    font-size: 1.2em;
                    margin: 8px 0;
                }
                button {
                    margin-top: 10px;
                    padding: 8px;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="card">
                <img src="${coverUrl}" alt="${title}">
                <h3>${title}</h3>
                <p>${author}</p>
                <button>Ver Detalles</button>
            </div>
        `;

        // Agrego un evento al botón para que cuando el usuario haga clic, se dispare un evento personalizado.
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            // Este evento lo usaré para indicar que se debe mostrar el detalle del libro.
            this.dispatchEvent(new CustomEvent('showDetail', { bubbles: true, composed: true }));
        });
    }
}

// Registro el componente personalizado con el nombre 'book-card'.
customElements.define('book-card', BookCard);
