/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import db from "json/db.json";
import  { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export function useVideoContext() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }) {

  const localVideos = JSON.parse(localStorage.getItem('videos'))
  const localCategorias = JSON.parse(localStorage.getItem('categorias'))

  if(!localVideos){
    localStorage.setItem('videos', JSON.stringify(db.videos))
  }
  if(!localCategorias){
    localStorage.setItem('categorias', JSON.stringify(db.categorias))
  }

  const [videos, setVideos] = useState(localVideos);
  const [categorias, setCategorias] = useState(localCategorias);

  const addVideo = (newVideo) => {

    const verificaVideoUnico = videos.filter(video => newVideo.categoria.toLowerCase() === video.categoria.toLowerCase()).length === 0 ? true : false

    if(verificaVideoUnico){
      newVideo.videoDestaque = true;
    }

    localStorage.setItem('videos', JSON.stringify([newVideo, ...videos]))
    setVideos([newVideo, ...videos])
  };

  const addCategoria = (categoria) =>{
    localStorage.setItem('categorias', JSON.stringify([...categorias, categoria]))
    setCategorias([...categorias, categoria])
  }

  const mudarCorCategoria = (cor, id)=>{
    categorias.map(categoria =>{
      if(categoria.id === id){
        categoria.cor = cor;
      }
      return categoria;
    })
    localStorage.setItem('categorias', JSON.stringify(categorias))
    setCategorias(categorias)
  }

  const mudarFavorito = (id) => {
    const updatedCategorias = categorias.map((categoria) => {
      if (categoria.id !== id) {
        categoria.destaque = false;
      } else {
        categoria.destaque = true;
      }
      return categoria;
    });
  
    localStorage.setItem('categorias', JSON.stringify(updatedCategorias));
    setCategorias(updatedCategorias);
  };

  const mudarVideoFavorito = (idVideo, categoriaNome)=>{

    const updateVideos = videos.map((video) => {
      if(video.categoria.toLowerCase() === categoriaNome.toLowerCase()){
        if (video.id !== idVideo){
          video.videoDestaque = false;
        }else{
          video.videoDestaque = true;
        }
      }
      return video;
    })

    localStorage.setItem('videos', JSON.stringify(updateVideos))
    setVideos(updateVideos)
  }

  const excluirCategoria = (categoriaDeletada) => {
    const idsVideosCategoriaDel = videos.filter(video => video.categoria.toLowerCase() === categoriaDeletada.nome.toLowerCase())
    .map(video => video.id)
    const videosAtuais = videos.filter(video=> !idsVideosCategoriaDel.includes(video.id) )
    const categoriasAtualizadas = categorias.filter(cat => cat.id !== categoriaDeletada.id)

    const temFavorito = categoriasAtualizadas.find(cat => cat.destaque)

    if(!temFavorito){
      categoriasAtualizadas[0].destaque = true;
    }

    setCategorias(categoriasAtualizadas)
    setVideos(videosAtuais)
    localStorage.setItem('videos', JSON.stringify(videosAtuais))
    localStorage.setItem('categorias', JSON.stringify(categoriasAtualizadas))
  };

  return (
    <VideoContext.Provider value={{ addVideo, videos, categorias, addCategoria, mudarCorCategoria, mudarFavorito, mudarVideoFavorito, excluirCategoria}}>
      {children}
    </VideoContext.Provider>
  );
}