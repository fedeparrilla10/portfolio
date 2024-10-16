export const allProjects = [
  {
    id: 1,
    name: 'RecoFM',
    img: '/projects/RecoFM.webp',
    icon: '/icons/ball.svg',
    description_en:
      'A place for Football Manager enthusiasts like me. Randomizer-style application. I used the Framer Motion library for page animations. For styles (pure CSS), BEM methodology was followed. Routing was implemented using React Router DOM.',
    description_es:
      'Pequeño rincón para los amantes de Football Manager. Aplicación estilo "randomizer". Utilicé la librería Framer Motion para las animaciones entre páginas. Para los estilos (puro CSS), se siguió la metodología BEM. El routing fue implementado mediante React Router DOM.',

    tech: [
      {
        id: 1,
        name: 'React',
        img: '/icons/react.svg',
        class: 'bg-cyan-950 text-gray-100',
      },
      {
        id: 2,
        name: 'CSS',
        img: '/icons/css3.svg',
        class: 'bg-blue-800 text-gray-100',
      },
    ],
    preview: 'https://fedeparrilla10.github.io/recofm/',
    code: 'https://github.com/fedeparrilla10/recofm',
  },
  {
    id: 2,
    name: 'BookFinder',
    img: '/projects/bookfinder.webp',
    icon: '/icons/book.svg',
    description_en:
      'Given my passion for reading, I crafted this responsive SPA using React. It features registration and login functionalities. I employed hooks like useState, useEffect, useContext and useParams for functionality, and Axios for handling requests.',
    description_es:
      'Como la lectura es otra de mis pasiones, desarrollé esta SPA receptiva utilizando React. Incluye funcionalidades de registro e inicio de sesión. Utilicé hooks como useState, useEffect, useContext y useParams para la funcionalidad, y Axios para manejar las solicitudes.',
    tech: [
      {
        id: 1,
        name: 'React',
        img: '/icons/react.svg',
        class: 'bg-cyan-950 text-gray-100',
      },
      {
        id: 2,
        name: 'CSS',
        img: '/icons/css3.svg',
        class: 'bg-blue-800 text-gray-100',
      },
    ],
    preview: 'https://fedeparrilla10.github.io/bookfinder/',
    code: 'https://github.com/fedeparrilla10/bookfinder',
  },
];
