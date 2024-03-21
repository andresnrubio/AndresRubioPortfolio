import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import Technologies from './Technologies';
import WorkHistory from './WorkHistory';

const HomeContainer = styled.div`
  padding: 1rem;
  p {
    text-align: justify;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <ProfileCard />
      <article>
        <p>
          ¡Bienvenido a mi portfolio! Soy Andrés Rubio, un desarrollador full stack de Argentina,
          apasionado por la tecnología y siempre listo para aprender sobre las últimas novedades en
          el campo.
        </p>
        <br />
        <p>
          Con una combinación de experiencias profesionales en varias empresas y proyectos como
          freelancer, me desenvuelvo en el dinámico mundo del desarrollo de software, donde mezclo
          la creatividad con la técnica para crear soluciones digitales excepcionales.
        </p>
        <br />
        <p>
          Más allá del código, me encontrarás capturando momentos con mi cámara, viendo las últimas
          películas en el cine o haciendo ejercicio en el gimnasio. ¡Pero mi verdadera pasión es
          viajar! No hay nada como explorar nuevos lugares y culturas para inspirarme y alimentar mi
          espíritu aventurero.
        </p>
        <br />
        <p>
          ¿Necesitas alguien para colaborar en tu próximo proyecto o tienes alguna consulta? ¡No
          dudes en contactarme! ¡Conectemos y hagamos realidad tus ideas!
        </p>
      </article>
      <WorkHistory />
      <Technologies />
    </HomeContainer>
  );
};

export default Home;
