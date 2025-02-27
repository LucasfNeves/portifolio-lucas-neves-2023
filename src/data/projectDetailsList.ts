import imageDeliveryBurguerDetails from './../assets/detailsImagesProjects/delivery-burguer.svg'
import imageMycashlyDetails from './../assets/detailsImagesProjects/mycashly.svg'
import imageMycashlyApiDetails from './../assets/detailsImagesProjects/mycashly-api.svg'

const projectDetailsList = [
  {
    image: imageDeliveryBurguerDetails,
    title: 'Delivery Burguer',
    date: 'Nov - 2023',
    my_role: 'Front-end',
    team: 'Lucas Farias Neves',
    about:
      'O Burger Delivery é um projeto fictício dedicado à entrega de hambúrgueres, proporcionando aos clientes uma experiência prática e saborosa. A estrutura do site compreende três páginas principais – menu, carrinho e página de conclusão – para facilitar a navegação e conclusão de pedidos de forma intuitiva.',
    tecnologies:
      'JavaScript, CSS, React.JS, TypeScript, Vite, Styled Components, Flexbox e CSS Grid, Immer, React Hook Form, Local Storage, useContext e outros hooks do React,  ',
    notes:
      'O Burger Delivery foi concebido como um exercício para aprofundar meus conhecimentos em React, TypeScript, JavaScript e estilização. Durante o desenvolvimento, foram aplicados conceitos cruciais, como componentização, propriedades, estados, imutabilidade, uso de hooks do React e integração com bibliotecas externas. Inicialmente, o projeto estava configurado para interagir com uma API, mas posteriormente foi adaptado para utilizar o LocalStorage, uma abordagem mais adequada para um projeto fictício de treinamento. O armazenamento de dados é feito localmente no navegador do usuário, eliminando a necessidade de cobranças ou solicitação de dados sensíveis.',
    id: 'Delivery_Burguer',
    linkGit: 'https://github.com/LucasfNeves/Delivery-Burguer',
    linkDeploy: 'https://delivery-burguer.vercel.app/',
  },
  {
    image: imageMycashlyApiDetails,
    title: 'MyCashly - Backend (API)',
    date: 'Dez - 2024',
    my_role: 'Full-stack',
    team: 'Lucas Farias Neves',
    about:
      'O MyCashly é um aplicativo de controle financeiro pessoal, projetado para ajudar os usuários a gerenciar suas finanças de forma eficaz e prática. A aplicação oferece uma visão geral das despesas, receitas e investimentos, permitindo que os usuários adicionem, editem e excluam transações, categorizem despesas e receitas, e visualizem relatórios e gráficos detalhados para uma melhor compreensão de suas finanças.',
    tecnologies:
      'Back-end: Node.js, Express, TypeScript, TypeORM, PostgreSQL, JWT, Bcrypt, Cors, Zod, Docker, Dotenv, Vitest e outras dependências.',
    notes:
      'O MyCashly foi desenvolvido com o objetivo de aprimorar minhas habilidades em desenvolvimento full-stack, explorando conceitos avançados de back-end e front-end. O back-end foi construído com Node.js, Express, TypeScript, TypeORM, PostgreSQL, JWT, Bcrypt, Cors, Zod, Docker, Dotenv, Vitest e outras dependências. Utilizei uma estratégia de autenticação baseada em JWT, com Refresh Token e validação de dados com Zod. O back-end foi testado com Vitest, garantindo a qualidade e confiabilidade do código. O MyCashly foi projetado para ser uma aplicação prática e eficiente, oferecendo aos usuários uma experiência intuitiva e agradável para o gerenciamento de suas finanças pessoais.',
    id: 'MyCashly_Backend',
    linkGit: 'https://github.com/LucasfNeves/mycashly-api',
    linkDeploy: 'https://mycashly-api.onrender.com/api-docs/#/',
  },
  {
    image: imageMycashlyDetails,
    title: 'MyCashly - Controle Financeiro',
    date: 'Jan - 2025',
    my_role: 'Full-stack',
    team: 'Lucas Farias Neves',
    about:
      'O MyCashly é um aplicativo de controle financeiro pessoal, projetado para ajudar os usuários a gerenciar suas finanças de forma eficaz e prática. A aplicação oferece uma visão geral das despesas, receitas e investimentos, permitindo que os usuários adicionem, editem e excluam transações, categorizem despesas e receitas, e visualizem relatórios e gráficos detalhados para uma melhor compreensão de suas finanças.',
    tecnologies:
      'Back-end: Node.js, Express, TypeScript, TypeORM, PostgreSQL, JWT, Bcrypt, Cors, Zod, Docker, Dotenv, Vitest e outras dependências. Front-end: React.JS, TypeScript, Vite, Tailwind CSS, Axios, React Hook Form, React Router, React Query, React Hooks, ShadCN, e outras dependências. ',
    notes:
      'O MyCashly foi desenvolvido com o objetivo de aprimorar minhas habilidades em desenvolvimento full-stack, explorando conceitos avançados de back-end e front-end. O back-end foi construído com Node.js, Express, TypeScript, TypeORM, PostgreSQL, JWT, Bcrypt, Cors, Zod, Docker, Dotenv, Vitest e outras dependências. O front-end foi desenvolvido com React.JS, TypeScript, Vite, Tailwind CSS, Axios, React Hook Form, React Router, React Query, React Hooks, ShadCN, e outras dependências. Durante o desenvolvimento, foram aplicados conceitos de autenticação, Refresh Token, autorização, validação de dados, segurança, performance, testes, otimização de código, responsividade e acessibilidade. O MyCashly foi projetado para ser uma aplicação prática e eficiente, oferecendo aos usuários uma experiência intuitiva e agradável para o gerenciamento de suas finanças pessoais.',
    id: 'MyCashly',
    linkGit: 'https://github.com/LucasfNeves/mycashly-frontend',
    linkDeploy: 'https://mycashly.vercel.app/',
  },
]

export default projectDetailsList
