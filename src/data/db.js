import { v4 as uuidv4 } from "uuid";

let videos = [
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    title: "SEO com React",
    description:
      "Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.",
    videoImgLink:
      "https://i.ytimg.com/vi/CkGh3NM6NuQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD79B2LmiUGAsOi4X_59tFtFtxQPw",
    videoLink: "https://www.youtube.com/watch?v=CkGh3NM6NuQ",
  },
  {
    id: uuidv4(),
    categoryName: "mobile",
    categoryDisplayName: "Mobile",
    title:
      "SEO with React + NextJS + Deploy + Static Websites feat. Performance Tips | Pokedex",
    description:
      "I'm here in this video to tell you that we will start an app inspired in the Pokémon animation with Nextjs and React, see some performance tips and know more about an AMAZING platform to deploy that is Vercel. All of it and much more in this first 22 minutes of video of this new serie building an Pokedex!",
    videoImgLink:
      "https://i.ytimg.com/vi/c8mVlakBESE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhkFUxgkWQ9ytW1xzdF1VlsI-u-A",
    videoLink: "https://www.youtube.com/watch?v=c8mVlakBESE",
  },
  {
    id: uuidv4(),
    categoryName: "datascience",
    categoryDisplayName: "Data Science",
    title: "O que é React JS",
    description:
      "Afinal, o que é React JS? Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ele. ",
    videoImgLink:
      "https://i.ytimg.com/vi/6IuQUgeDPg0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLQTT_AktwQ__zMoCZs8jIlPa85g",
    videoLink: "https://www.youtube.com/watch?v=6IuQUgeDPg0",
  },
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Frontend",
    title: "Como usar Async/Await? Promises no JavaScript? ",
    description:
      "Eu vim falando desse video a um tempo já e ele chegou! Finalmente você vai parar de sofrer com async/await entendendo na prática como usar esses recursos do JavaScript vendo a essência, bora ver?",
    videoImgLink:
      "https://i.ytimg.com/vi/q28lfkBd9F4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI9Q1UsDKCaoodrFCRODWQLIDT5A",
    videoLink: "https://www.youtube.com/watch?v=q28lfkBd9F4",
  },
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Frontend",
    title:
      "SEO with React + NextJS + Deploy + Static Websites feat. Performance Tips | Pokedex",
    description:
      "I'm here in this video to tell you that we will start an app inspired in the Pokémon animation with Nextjs and React, see some performance tips and know more about an AMAZING platform to deploy that is Vercel. All of it and much more in this first 22 minutes of video of this new serie building an Pokedex!",
    videoImgLink:
      "https://i.ytimg.com/vi/c8mVlakBESE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhkFUxgkWQ9ytW1xzdF1VlsI-u-A",
    videoLink: "https://www.youtube.com/watch?v=c8mVlakBESE",
  },
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    title: "SEO com React",
    description:
      "Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.",
    videoImgLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmTmA_fiyCNTL2YQMqFPjofPCYkWu6oLRlT9137Y8VVtINoo766QbbRlCFmv-NDaO36w&usqp=CAU",
    videoLink: "https://www.youtube.com/watch?v=yS7AcF-xRUg&t=43s",
  },
];

let categories = [
  {
    id: uuidv4(),
    categoryName: "frontend",
    categoryDisplayName: "Front End",
    categoryDescription: "Formação frontend na Alura",
    categoryColor: "#6bd1ff",
  },
  {
    id: uuidv4(),
    categoryName: "datascience",
    categoryDisplayName: "Data Science",
    categoryDescription: "Formação datascience na Alura",
    categoryColor: "#69953b",
  },
  {
    id: uuidv4(),
    categoryName: "mobile",
    categoryDisplayName: "Mobile",
    categoryDescription: "Formação mobile na Alura",
    categoryColor: "#ffba05",
  },
];

export { videos, categories };
