import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import  categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

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

      {dadosIniciais.length === 0 && (<div class="ldBar" data-value="50">
</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>              
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. ... O modo multijogador, Grand Theft Auto Online, permite que até trinta jogadores explorem o mundo e entrem em partidas competitivas ou cooperativas."}
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