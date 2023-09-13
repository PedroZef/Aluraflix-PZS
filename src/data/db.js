import { v4 as uuidv4 } from "uuid";

let videos = [
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    title: "SEO com React",
    description:
      "Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.",
    videoImgLink: "https://img.youtube.com/vi/Z-N5Fr9P-GU/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=Z-N5Fr9P-GU",
  },

  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Frontend",
    title: "Ciclo de vida de componentes React.js | #AluraMais",
    description:
      "Aprenda o que é o ciclo de vida de um componente React.js e como usar no desenvolvimento de projetos.",
    videoImgLink: "https://img.youtube.com/vi/jK0uiQ1ZQQQ/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=jK0uiQ1ZQQQ",
  },
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    title: "O que é React JS",
    description:
      "Afinal, o que é React JS? Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ele. ",
    videoImgLink: "https://i.ytimg.com/vi/6IuQUgeDPg0/hq720.jpg",
    videoLink: "https://www.youtube.com/watch?v=6IuQUgeDPg0",
  },
  {
    id: uuidv4(),
    categoryName: "datascience",
    categoryDisplayName: "Data Science",
    title: "O que é Machine Learning?",
    description: "O que é Machine Learning? #HipstersPontoTube",
    videoImgLink: "https://img.youtube.com/vi/Iuz_jc96bQk/hqdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=Iuz_jc96bQk",
  },
  {
    id: uuidv4(),
    categoryName: "datascience",
    categoryDisplayName: "Data Science",
    title: "Big Data com Apache Spark | #AluraMais",
    description:
      "O que é Apache Spark? Conheça essa tecnologia de Big Data a partir da evolução Hadoop vs. Spark e entenda como funciona sua lógica interna.",

    videoImgLink: "https://img.youtube.com/vi/3aSfKsBhU5E/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=3aSfKsBhU5E",
  },
  {
    id: uuidv4(),
    categoryName: "datascience",
    categoryDisplayName: "Data Science",
    title: "Trabalhando com arquivos no Google Colab | #AluraMais",
    description:
      "Neste vídeo, o Pedro Henrique, Instrutor aqui na Alura, vai ensinar você a usar arquivos corretamente no Google Collab. Vem mergulhar com a gente?",
    videoImgLink: "https://img.youtube.com/vi/ojgvdqexJ0Q/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=ojgvdqexJ0Q",
  },
  {
    id: uuidv4(),
    categoryName: "mobile",
    categoryDisplayName: "Mobile",
    title: "ConstraintLayout no Android | #AluraMais",
    description:
      "Neste #AluraMais, aJeniffer Bittencourt, Instrutora na Escola Mobile da Alura, vai mostrar algumas formas implementar e otimizar a criação de layouts maiores e mais complexos utilizando o Constraint Layout.",
    videoImgLink: "https://img.youtube.com/vi/p4fiAiiPi3E/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=p4fiAiiPi3E",
  },
  {
    id: uuidv4(),
    categoryName: "mobile",
    categoryDisplayName: "Mobile",
    title: "Criando e visualizando logs no Android | #AluraMais",
    videoImgLink: "https://img.youtube.com/vi/412nsNqL8YE/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=412nsNqL8YE",
  },
  {
    id: uuidv4(),
    categoryName: "mobile",
    categoryDisplayName: "Mobile",
    description:
      "Vem com a gente conhecer mais sobre uma ferramenta muito interessante do Android: o Log.",
    title:
      "Top 5 libs que todo aplicativo Android deve ter com Alex Felipe | #HipstersPontoTube",
    videoImgLink: "https://img.youtube.com/vi/ldRbnpy-qQs/hqdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=ldRbnpy-qQs",
  },
];

let categories = [
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    categoryDescription: "Formação Frontend na Alura",
    categoryColor: "#6bd1ff",
  },
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    categoryDescription: "Formação Front End na Alura",
    categoryColor: "#ffba05",
  },
  {
    id: uuidv4(),
    categoryName: "datascience",
    categoryDisplayName: "Data Science",
    categoryDescription: "Formação Data Science na Alura",
    categoryColor: "#69953b",
  },
  {
    id: uuidv4(),
    categoryName: "mobile",
    categoryDisplayName: "Mobile",
    categoryDescription: "Formação Mobile na Alura",
    categoryColor: "#ffba05",
  },
  
]

export { videos, categories };
