import imageDeliveryBurguerDetails from './../assets/detailsImagesProjects/delivery-burguer.svg'
import imageToDoListDetails from './../assets/detailsImagesProjects/to-do-list.svg'
import imageTailwindUIDetails from './../assets/detailsImagesProjects/tailwind-next-ui.svg'

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
    image: imageToDoListDetails,
    title: 'To-do List',
    date: 'set - 2023',
    my_role: 'Front-end',
    team: 'Lucas Farias Neves',
    about:
      'A To-do List é uma aplicação de lista de tarefas, oferecendo aos usuários a capacidade de adicionar, marcar como concluídas e excluir tarefas de forma intuitiva.',
    tecnologies:
      'JavaScript, CSS, React.JS, TypeScript, Vite, Flexbox e CSS Grid, React Hook Form, Local Storage e hooks do React,  ',
    notes:
      'A criação deste projeto teve como objetivo aprofundar meus estudos em React, TypeScript, JavaScript e estilização. Durante o desenvolvimento, explorei conceitos essenciais, como Componentização, Propriedades, Estados, Imutabilidade e a implementação de Hooks do React. Destaquei a persistência de dados no Local Storage como parte fundamental da experiência do usuário, tornando a aplicação prática e eficiente para o gerenciamento de tarefas diárias.',
    id: 'To_do_List',
    linkGit: 'https://github.com/LucasfNeves/Todo-list-reactjs',
    linkDeploy: 'https://todo-list-reactjs-tau.vercel.app/',
  },
  {
    image: imageTailwindUIDetails,
    title: 'Next - Tailwind UI',
    date: 'Nov - 2023',
    my_role: 'Front-end',
    team: 'Lucas Farias Neves',
    about:
      'Essa página foi desenvolvida com o propósito de estudar a biblioteca de estilização Tailwind CSS, que adota a abordagem de classes de utilitários (utility classes) para aplicar o CSS diretamente no HTML.',
    tecnologies:
      'JavaScript, CSS, React.JS, TypeScript, Next, Tailwind CSS, Radiix, Memo.   ',
    notes:
      'Conceitos essenciais foram abordados durante o projeto, incluindo configurações do Tailwind CSS utilizando o NextJS, fundamentos do Tailwind CSS, desenvolvimento mobile-first, seletores e estados, responsividade e breakpoints, valores arbitrários e extensões de propriedades CSS, variantes e variantes com slots, animações, estilização com Tailwind CSS, Dark Mode, variáveis de ambiente, e a integração de componentes usando Tailwind CSS e Radiix. O projeto proporcionou uma compreensão aprofundada e prática desses conceitos, contribuindo para a expansão do conhecimento em design responsivo e eficaz.',
    id: 'Next_Tailwind_UI',
    linkGit: 'https://github.com/LucasfNeves/settings-page-tailwind-next',
    linkDeploy: 'https://settings-page-tailwind-next.vercel.app/',
  },
]

export default projectDetailsList
