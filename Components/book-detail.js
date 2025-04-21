// Defino la clase BookDetail que extiende HTMLElement
class BookDetail extends HTMLElement {
    constructor() {
        super(); // Llamo al constructor de la clase base (HTMLElement)
        this.attachShadow({ mode: 'open' }); // Creo un Shadow DOM en modo 'open' para encapsular el contenido
    }

    // Especifico qué atributos quiero observar en el componente
    static get observedAttributes() {
        return ['coverUrl', 'title', 'author', 'synopsis', 'isbn'];
    }

    // Cuando alguno de los atributos observados cambia, se ejecuta este método
    attributeChangedCallback(name, oldValue, newValue) {
        this.render(); // Llamo al método render() para actualizar el contenido del componente
    }

    // Este método se ejecuta cuando el componente es insertado en el DOM
    connectedCallback() {
        this.render(); // Renderizo el contenido cuando el componente es agregado al DOM

        // Agrego un evento al hacer clic en el botón de "cerrar"
        this.shadowRoot.querySelector('.close-button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('closeDetail', { bubbles: true, composed: true })); // Envio un evento para cerrar el detalle
        });
    }

    // Método que construye y muestra el contenido HTML del componente
    render() {
        // Obtengo los valores de los atributos
        const coverUrl = this.getAttribute('coverUrl');
        const title = this.getAttribute('title');
        const author = this.getAttribute('author');
        const synopsis = this.getAttribute('synopsis');
        const isbn = this.getAttribute('isbn');

        // Inserto el HTML y el CSS dentro del Shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
                .book-detail {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 2px solid #ddd;
                    border-radius: 10px;
                    padding: 20px;
                    background-color: #f9f9f9;
                    max-width: 400px;
                    margin: 20px auto;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s ease;
                }
                
                .book-detail:hover {
                    transform: scale(1.05);
                }

                .book-detail img {
                    width: 100%;
                    max-width: 250px;
                    height: auto;
                    border-radius: 8px;
                    margin-bottom: 15px;
                }

                .book-detail h2 {
                    font-size: 1.5em;
                    color: #333;
                    margin-bottom: 10px;
                }

                .book-detail p {
                    font-size: 1em;
                    color: #555;
                    margin-bottom: 8px;
                    text-align: center;
                }

                .close-button {
                    padding: 10px;
                    margin-top: 20px;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .close-button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="book-detail">
                <img src="${coverUrl}" alt="${title}">
                <h2>${title}</h2>
                <p><strong>Autor:</strong> ${author}</p>
                <p><strong>Sinopsis:</strong> ${synopsis}</p>
                <p><strong>ISBN:</strong> ${isbn}</p>
                <button class="close-button">Cerrar</button>
            </div>
        `;
    }
}

// Registro el componente personalizado 'book-detail'
customElements.define('book-detail', BookDetail);
