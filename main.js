// main.js

// Aquí yo defino los datos de mis libros tal como vienen en el objeto base
let bookData = [
    {
        title: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        coverUrl: "https://placehold.co/300x400?text=Don+Quijote+de+la+Mancha",
        synopsis: "Una obra destacada de la literatura en español, escrita por Miguel de Cervantes.",
        publishedDate: "1977",
        genre: "Ficción literaria",
        summary: "Don Quijote de la Mancha es una obra representativa de Miguel de Cervantes que explora las complejidades humanas y sociales.",
        quotes: [
        "Hay que ser valiente para ser feliz.",
        "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
        "La vida no es la que uno vivió, sino la que uno recuerda."
    ]
    },
    {
        title: "La sombra del viento",
        author: "Carlos Ruiz Zafón",
        coverUrl: "https://placehold.co/300x400?text=La+sombra+del+viento",
        synopsis: "Una obra destacada de la literatura en español, escrita por Carlos Ruiz Zafón.",
        publishedDate: "1996",
        genre: "Narrativa contemporánea",
        summary: "La sombra del viento es una obra representativa de Carlos Ruiz Zafón que explora las complejidades humanas y sociales.",
        quotes: [
        "Cada quien es dueño de su propio destino.",
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
        "La vida no es la que uno vivió, sino la que uno recuerda."
    ]
    },
    {
        title: "Rayuela",
        author: "Julio Cortázar",
        coverUrl: "https://placehold.co/300x400?text=Rayuela",
        synopsis: "Una obra destacada de la literatura en español, escrita por Julio Cortázar.",
        publishedDate: "1987",
        genre: "Novela",
        summary: "Rayuela es una obra representativa de Julio Cortázar que explora las complejidades humanas y sociales.",
        quotes: [
        "No existe mejor medicina que tener pensamientos alegres.",
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
        "Nunca se debe confundir la verdad con la opinión de la mayoría."
    ]
    },
    {
        title: "El amor en los tiempos del cólera",
        author: "Gabriel García Márquez",
        coverUrl: "https://placehold.co/300x400?text=El+amor+en+los+tiempos+del+cólera",
        synopsis: "Una obra destacada de la literatura en español, escrita por Gabriel García Márquez.",
        publishedDate: "1997",
        genre: "Narrativa contemporánea",
        summary: "El amor en los tiempos del cólera es una obra representativa de Gabriel García Márquez que explora las complejidades humanas y sociales.",
        quotes: [
        "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
        "La vida no es la que uno vivió, sino la que uno recuerda.",
        "No hay medicina que cure lo que no cura la felicidad."
    ]
    },
    {
        title: "Pedro Páramo",
        author: "Juan Rulfo",
        coverUrl: "https://placehold.co/300x400?text=Pedro+Páramo",
        synopsis: "Una obra destacada de la literatura en español, escrita por Juan Rulfo.",
        publishedDate: "1972",
        genre: "Ficción histórica",
        summary: "Pedro Páramo es una obra representativa de Juan Rulfo que explora las complejidades humanas y sociales.",
        quotes: [
        "Cada quien es dueño de su propio destino.",
        "No hay medicina que cure lo que no cura la felicidad.",
        "Nada tiene sentido si no se vive con pasión."
    ]
    },
    {
        title: "La ciudad y los perros",
        author: "Mario Vargas Llosa",
        coverUrl: "https://placehold.co/300x400?text=La+ciudad+y+los+perros",
        synopsis: "Una obra destacada de la literatura en español, escrita por Mario Vargas Llosa.",
        publishedDate: "2005",
        genre: "Ficción literaria",
        summary: "La ciudad y los perros es una obra representativa de Mario Vargas Llosa que explora las complejidades humanas y sociales.",
        quotes: [
        "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
        "Nunca se debe confundir la verdad con la opinión de la mayoría."
    ]
    },
    {
        title: "Ficciones",
        author: "Jorge Luis Borges",
        coverUrl: "https://placehold.co/300x400?text=Ficciones",
        synopsis: "Una obra destacada de la literatura en español, escrita por Jorge Luis Borges.",
        publishedDate: "1960",
        genre: "Narrativa contemporánea",
        summary: "Ficciones es una obra representativa de Jorge Luis Borges que explora las complejidades humanas y sociales.",
        quotes: [
        "Cada quien es dueño de su propio destino.",
        "No existe mejor medicina que tener pensamientos alegres.",
        "La vida no es la que uno vivió, sino la que uno recuerda."
    ]
    },
    {
        title: "Los detectives salvajes",
        author: "Roberto Bolaño",
        coverUrl: "https://placehold.co/300x400?text=Los+detectives+salvajes",
        synopsis: "Una obra destacada de la literatura en español, escrita por Roberto Bolaño.",
        publishedDate: "1991",
        genre: "Realismo mágico",
        summary: "Los detectives salvajes es una obra representativa de Roberto Bolaño que explora las complejidades humanas y sociales.",
        quotes: [
        "Nunca se debe confundir la verdad con la opinión de la mayoría.",
        "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro."
    ]
    },
    {
        title: "El túnel",
        author: "Ernesto Sabato",
        coverUrl: "https://placehold.co/300x400?text=El+túnel",
        synopsis: "Una obra destacada de la literatura en español, escrita por Ernesto Sabato.",
        publishedDate: "1992",
        genre: "Drama",
        summary: "El túnel es una obra representativa de Ernesto Sabato que explora las complejidades humanas y sociales.",
        quotes: [
        "Todo lo que realmente importa sucede en secreto.",
        "La vida no es la que uno vivió, sino la que uno recuerda.",
        "No hay medicina que cure lo que no cura la felicidad."
    ]
    },
    {
        title: "Sobre héroes y tumbas",
        author: "Ernesto Sabato",
        coverUrl: "https://placehold.co/300x400?text=Sobre+héroes+y+tumbas",
        synopsis: "Una obra destacada de la literatura en español, escrita por Ernesto Sabato.",
        publishedDate: "2004",
        genre: "Ciencia ficción",
        summary: "Sobre héroes y tumbas es una obra representativa de Ernesto Sabato que explora las complejidades humanas y sociales.",
        quotes: [
        "Todo lo que realmente importa sucede en secreto.",
        "Nada tiene sentido si no se vive con pasión.",
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro."
    ]
    },
    {
        title: "Crónica de una muerte anunciada",
        author: "Gabriel García Márquez",
        coverUrl: "https://placehold.co/300x400?text=Crónica+de+una+muerte+anunciada",
        synopsis: "Una obra destacada de la literatura en español, escrita por Gabriel García Márquez.",
        publishedDate: "1996",
        genre: "Ficción histórica",
        summary: "Crónica de una muerte anunciada es una obra representativa de Gabriel García Márquez que explora las complejidades humanas y sociales.",
        quotes: [
        "La vida no es la que uno vivió, sino la que uno recuerda.",
        "No existe mejor medicina que tener pensamientos alegres.",
        "No hay medicina que cure lo que no cura la felicidad."
    ]
    },
    {
        title: "La casa de los espíritus",
        author: "Isabel Allende",
        coverUrl: "https://placehold.co/300x400?text=La+casa+de+los+espíritus",
        synopsis: "Una obra destacada de la literatura en español, escrita por Isabel Allende.",
        publishedDate: "1990",
        genre: "Novela",
        summary: "La casa de los espíritus es una obra representativa de Isabel Allende que explora las complejidades humanas y sociales.",
        quotes: [
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
        "Nada tiene sentido si no se vive con pasión.",
        "Nunca se debe confundir la verdad con la opinión de la mayoría."
    ]
    },
    {
        title: "Ensayo sobre la ceguera",
        author: "José Saramago",
        coverUrl: "https://placehold.co/300x400?text=Ensayo+sobre+la+ceguera",
        synopsis: "Una obra destacada de la literatura en español, escrita por José Saramago.",
        publishedDate: "1999",
        genre: "Misterio",
        summary: "Ensayo sobre la ceguera es una obra representativa de José Saramago que explora las complejidades humanas y sociales.",
        quotes: [
        "Todo lo que realmente importa sucede en secreto.",
        "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
        "Nunca se debe confundir la verdad con la opinión de la mayoría."
    ]
    },
    {
        title: "El Aleph",
        author: "Jorge Luis Borges",
        coverUrl: "https://placehold.co/300x400?text=El+Aleph",
        synopsis: "Una obra destacada de la literatura en español, escrita por Jorge Luis Borges.",
        publishedDate: "1971",
        genre: "Ficción histórica",
        summary: "El Aleph es una obra representativa de Jorge Luis Borges que explora las complejidades humanas y sociales.",
        quotes: [
        "No existe mejor medicina que tener pensamientos alegres.",
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
        "Todo lo que realmente importa sucede en secreto."
    ]
    },
    {
        title: "2666",
        author: "Roberto Bolaño",
        coverUrl: "https://placehold.co/300x400?text=2666",
        synopsis: "Una obra destacada de la literatura en español, escrita por Roberto Bolaño.",
        publishedDate: "1986",
        genre: "Narrativa contemporánea",
        summary: "2666 es una obra representativa de Roberto Bolaño que explora las complejidades humanas y sociales.",
        quotes: [
        "La vida no es la que uno vivió, sino la que uno recuerda.",
        "Nada tiene sentido si no se vive con pasión.",
        "Nunca se debe confundir la verdad con la opinión de la mayoría."
    ]
    },
    {
        title: "La tregua",
        author: "Mario Benedetti",
        coverUrl: "https://placehold.co/300x400?text=La+tregua",
        synopsis: "Una obra destacada de la literatura en español, escrita por Mario Benedetti.",
        publishedDate: "1958",
        genre: "Ficción literaria",
        summary: "La tregua es una obra representativa de Mario Benedetti que explora las complejidades humanas y sociales.",
        quotes: [
        "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
        "La vida no es la que uno vivió, sino la que uno recuerda."
    ]
    },
    {
        title: "El coronel no tiene quien le escriba",
        author: "Gabriel García Márquez",
        coverUrl: "https://placehold.co/300x400?text=El+coronel+no+tiene+quien+le+escriba",
        synopsis: "Una obra destacada de la literatura en español, escrita por Gabriel García Márquez.",
        publishedDate: "2000",
        genre: "Ficción histórica",
        summary: "El coronel no tiene quien le escriba es una obra representativa de Gabriel García Márquez que explora las complejidades humanas y sociales.",
        quotes: [
        "Nunca se debe confundir la verdad con la opinión de la mayoría.",
        "Todo lo que realmente importa sucede en secreto.",
        "La vida no es la que uno vivió, sino la que uno recuerda."
    ]
    },
    {
        title: "Aura",
        author: "Carlos Fuentes",
        coverUrl: "https://placehold.co/300x400?text=Aura",
        synopsis: "Una obra destacada de la literatura en español, escrita por Carlos Fuentes.",
        publishedDate: "1985",
        genre: "Narrativa contemporánea",
        summary: "Aura es una obra representativa de Carlos Fuentes que explora las complejidades humanas y sociales.",
        quotes: [
        "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
        "Nunca se debe confundir la verdad con la opinión de la mayoría.",
        "Nada tiene sentido si no se vive con pasión."
    ]
    },
    {
        title: "Santa Evita",
        author: "Tomás Eloy Martínez",
        coverUrl: "https://placehold.co/300x400?text=Santa+Evita",
        synopsis: "Una obra destacada de la literatura en español, escrita por Tomás Eloy Martínez.",
        publishedDate: "2003",
        genre: "Drama",
        summary: "Santa Evita es una obra representativa de Tomás Eloy Martínez que explora las complejidades humanas y sociales.",
        quotes: [
        "Todo lo que realmente importa sucede en secreto.",
        "Cada quien es dueño de su propio destino.",
        "Nada tiene sentido si no se vive con pasión."
    ]
    },
    {
        title: "Pantaleón y las visitadoras",
        author: "Mario Vargas Llosa",
        coverUrl: "https://placehold.co/300x400?text=Pantaleón+y+las+visitadoras",
        synopsis: "Una obra destacada de la literatura en español, escrita por Mario Vargas Llosa.",
        publishedDate: "1986",
        genre: "Ciencia ficción",
        summary: "Pantaleón y las visitadoras es una obra representativa de Mario Vargas Llosa que explora las complejidades humanas y sociales.",
        quotes: [
        "Todo lo que realmente importa sucede en secreto.",
        "Nada tiene sentido si no se vive con pasión.",
        "La vida no es la que uno vivió, sino la que uno recuerda."
    ]
    }
];

  // Aquí yo espero que el DOM esté listo para empezar a poner tarjetas
document.addEventListener('DOMContentLoaded', () => {
        const section = document.getElementById('books-section');

      // Yo itero sobre cada libro, creo un <book-card> y se lo paso
        bookData.forEach(book => {
            const card = document.createElement('book-card');
            card.setAttribute('coverUrl', book.coverUrl);
            card.setAttribute('title', book.title);
            card.setAttribute('author', book.author);
            card.setAttribute('synopsis', book.synopsis);
            section.appendChild(card);
        });

      // Yo escucho el evento 'showDetail' para reemplazar tarjeta por detalle
        section.addEventListener('showDetail', (evt) => {
            const clickedCard = evt.target;
            const title = clickedCard.getAttribute('title');
            const book = bookData.find(b => b.title === title);

            const detail = document.createElement('book-detail');
            detail.setAttribute('coverUrl', book.coverUrl);
            detail.setAttribute('title', book.title);
            detail.setAttribute('author', book.author);
            detail.setAttribute('synopsis', book.summary);      // muestro el resumen completo
            detail.setAttribute('isbn', book.publishedDate);     // uso isbn para fecha de publicación

          // Cuando el usuario cierra, traigo de vuelta la tarjeta
        detail.addEventListener('closeDetail', () => {
            const newCard = document.createElement('book-card');
            newCard.setAttribute('coverUrl', book.coverUrl);
            newCard.setAttribute('title', book.title);
            newCard.setAttribute('author', book.author);
            newCard.setAttribute('synopsis', book.synopsis);
            detail.replaceWith(newCard);
        });

        clickedCard.replaceWith(detail);
    });
});
