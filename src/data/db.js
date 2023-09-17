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
    categoryDisplayName: "Front End",
    title: "O que é React JS",
    description:
      "Afinal, o que é React JS? Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ele. ",
    videoImgLink: "https://i.ytimg.com/vi/6IuQUgeDPg0/hq720.jpg",
    videoLink: "https://www.youtube.com/watch?v=6IuQUgeDPg0",
  },
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    title: "Como deixar o Layout Responsivo no seu site | #AluraMais",
    description:
      "Aprenda responsividade na prática com este tutorial sobre como transformar seu site num layout responsivo através do uso de ferramentas de desenvolvedor do seu navegador, o visual studio code e códigos CSS: media screen, container, propriedades CSS e mais.",
    videoImgLink: "https://img.youtube.com/vi/kyFiT4ofMwk/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=kyFiT4ofMwk",
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
    title: "O que são Data Lakes? | #AluraMais",
    description:
      "O que são os Data Lake e qual sua relação com os Data Warehouse? Descubra as vantagens e desvantagens do uso de Data Lake, sua arquitetura e quais as principais ferramentas como Hadoop, Spark, Kafka, Tableau, Power BI ou Amazon.",
    videoImgLink: "https://img.youtube.com/vi/GkhuRcHsVMk/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=GkhuRcHsVMk",
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
    title: "Como criar temas customizados no Flutter | #AluraMais",
    description: "Como utilizar Flutter Themes, customizar temas no seu aplicativo, usar cor primária e secundária, com o Dart.",
    videoImgLink: "https://img.youtube.com/vi/412nsNqL8YE/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=412nsNqL8YE",
  },
 
  {
    id: uuidv4(),
    categoryName: "mobile",
    categoryDisplayName: "Mobile",
    title:
      "Top 5 libs que todo aplicativo Android deve ter com Alex Felipe | #HipstersPontoTube",
    description:
      "Vem com a gente conhecer mais sobre uma ferramenta muito interessante do Android: o Log.",
    videoImgLink: "https://img.youtube.com/vi/ldRbnpy-qQs/hqdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=ldRbnpy-qQs",
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
    title:
      "Logs no Android: boas práticas para otimização e aplicação | #AluraMais",
    description:
      "Neste Alura+, vamos conhecer algumas dicas e boas práticas que podem ajudar você na utilização de logs e otimizar o seu dia a dia como dev de app.",
    videoImgLink: "https://img.youtube.com/vi/sTnUwOVYZt0/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/watch?v=sTnUwOVYZt0",
  },
];

const categories = [
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    categoryDescription: "Formação Front End",
    categoryColor: "#6bd1ff",
  },
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    categoryDescription: "Formação Front End",
    categoryColor: "#ffba05",
  },
  {
    id: uuidv4(),
    categoryName: "datascience",
    categoryDisplayName: "Data Science",
    categoryDescription: "Formação DataScience",
    categoryColor: "#69953b",
  },
  {
    id: uuidv4(),
    categoryName: "mobile",
    categoryDisplayName: "Mobile",
    categoryDescription: "Formação Mobile",
    categoryColor: "#ffba05",
  },
];

export { videos, categories };
