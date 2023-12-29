import imageDeliveryBurguerDetails from './../assets/detailsImagesProjects/delivery-burguer.svg'
import imageToDoListDetails from './../assets/detailsImagesProjects/to-do-list.svg'
import imageTailwindUIDetails from './../assets/detailsImagesProjects/tailwind-next-ui.svg'

export const projectDetailsList = [
  {
    image: imageDeliveryBurguerDetails,
    title: 'Delivery Burguer',
    date: 'Nov - 2023',
    my_role: 'Front-end',
    team: 'Lucas Farias Neves',
    about:
      'O Burger Delivery é um site fictício dedicado à entrega de hambúrgueres, proporcionando aos clientes uma experiência prática e saborosa. O projeto é estruturado em três páginas principais, menu, carrinho e página de conclusão, para facilitar a navegação e a conclusão de pedidos.',
    tecnologies:
      'JavaScript, CSS, React.JS, TypeScript, Vite, Styled Components, Flexbox e CSS Grid, Immer, React Hook Form, Local Storage, useContext e outros hooks do React,  ',
    notes:
      'O projeto foi desenvolvido para aprofundar os estudos de React, TypeScript, JavaScript e estilização, abordando conceitos como Componentização, Propriedades, Estados, Imutabilidade, Hooks do React, uso de bibliotecas externas e conexão com API. Posteriormente, foi modificado para utilizar o LocalStorage em vez de API, pois é um projeto fictício para treinamento, sem cobranças ou solicitamento de dados sensíveis, armazenando dados é feito localmente no navegador do usuário.',
    id: 'Delivery_Burguer',
    linkGit: 'https://github.com/LucasfNeves/Delivery-Burguer',
    linkDeploy: 'https://delivery-burguer.vercel.app/',
  },
  {
    image: imageToDoListDetails,
    title: 'To-do List',
    date: 'set - 2023',
    my_role: 'Front-end',
    team: 'Lucas Farias Neves',
    about:
      'Este projeto é uma aplicação de lista de tarefas que permite aos usuários adicionar, marcar como concluídas e excluir tarefas.',
    tecnologies:
      'JavaScript, CSS, React.JS, TypeScript, Vite, Flexbox e CSS Grid, React Hook Form, Local Storage e hooks do React,  ',
    notes:
      'O projeto foi desenvolvido para aprofundar os estudos de React, TypeScript, JavaScript e estilização, abordando conceitos como Componentização, Propriedades, Estados, Imutabilidade, Hooks do React e persistir dados no Local Storage.',
    id: 'To_do_List',
    linkGit: 'https://github.com/LucasfNeves/Todo-list-reactjs',
    linkDeploy: 'https://todo-list-reactjs-tau.vercel.app/',
  },
  {
    image: imageTailwindUIDetails,
    title: 'Delivery Burguer',
    date: 'Nov - 2023',
    my_role: 'Front-end',
    team: 'Lucas Farias Neves',
    about:
      'Essa página foi desenvolvida para estudar a biblioteca de estilização Tailwind CSS, que utiliza a abordagem de classes de utilitários (utility classes) que aplica o CSS no HTML.',
    tecnologies:
      'JavaScript, CSS, React.JS, TypeScript, Next, Tailwind CSS, Radiix, Memo.   ',
    notes:
      'Conceitos abordados: Configurações do Tailwind CSS utilizando o NextJS, Fundamentos do Tailwind CSS, Desenvolvimento mobile first, Seletores e estados, Responsividade e Breakpoints, Valores arbitrários e extensões de propriedades CSS, Variantes e Variantes com slots, Animações, Estilização com Tailwind CSS, Dark Mode, Variáveis de ambiente, Componentes com Tailwind CSS, Componentes com Tailwind CSS e Radiix,   ',
    id: 'Next_Tailwind_UI',
    linkGit: 'https://github.com/LucasfNeves/settings-page-tailwind-next',
    linkDeploy: 'https://settings-page-tailwind-next.vercel.app/',
  },
]
