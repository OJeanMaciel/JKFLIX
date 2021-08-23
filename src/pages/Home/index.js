import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import  categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import Loading from '../../components/Loading';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);


  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
        .catch((err) => {
          console.log(err.menssage);
        });
      }, []);

  return (
    
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && <Loading />}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>              
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Quer ficar por dentro de todas as novidades? Inscreva-se no canal do youtube!"}
              />
        
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
                />
            </div>
          );
        }

        return (
          <Carousel
          key={categoria.id}
          category={categoria}
          />
        );
        })}
    </PageDefault>
  );
}

export default Home;