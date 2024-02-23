import React from 'react';

const SobrePretaLabPage = () => {
  return (
    // Container principal com estilos para a cor de fundo e cor do texto
    <div style={{ backgroundColor: '#FFC0CB', minHeight: '100vh', padding: '20px'  }}>
      
      {/* Título "Sobre PretaLab" */}
      <h1 style={{ marginBottom: '30px', color: '#9370DB' }}>Sobre PretaLab</h1>
      
      {/* Texto menor sobre o PretaLab */}
      <p style={{ fontSize: '20px' }}>
        Somos uma plataforma que conecta mulheres negras que são ou gostariam de ser da tecnologia, 
        por meio dos nossos ciclos formativos, rede de profissionais, mercado de trabalho, consultorias e estudos.
        A necessidade de diversificar a cena tecnológica trazendo um recorte de gênero e raça é o tema deste projeto,
         que nasceu em 2017 como uma rede de mulheres negras na tecnologia e hoje possui um braço de formação educacional
          e outro de consultoria de diversidade para empresas. A Pretalab conta ainda com uma ferramenta de perfis de 
          mulheres negras na tecnologia, uma espécie de banco de talentos que apresenta mulheres potentes do nosso país.
      </p>

      {/* Título "Ciclo Formativo em Tecnologia" */}
      <h1 style={{ marginBottom: '20px', color: '#9370DB'}}>Ciclo Formativo em Tecnologia</h1>
      
      {/* Texto sobre o Ciclo Formativo em Tecnologia */}
      <p style={{ fontSize: '20px' }}>
         As formações contam com uma metodologia autoral, que além de abordar conteúdos técnicos, expõe as participantes
          a desenvolverem habilidades de soft skills, autoconhecimento e autogestão. Em dois anos, seis ciclos formativos
          foram desenvolvidos e ofertados em formatos que perpassam por introdução à tecnologia para mulheres com interesse 
          em ingressar neste universo até temas avançados para mulheres negras que já atuam na cena tecnológica brasileira.
      </p>
    </div>
  );
};

export default SobrePretaLabPage;
