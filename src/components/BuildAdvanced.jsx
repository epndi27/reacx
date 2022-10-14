import React from "react";
import styled from "styled-components";
import buildadvanced from "../assets/buildadvanced.png";
import "@fontsource/montserrat";

export default function BuildAdvanced() {
  return (
    <Section>
      <div className="image">
        <img src={buildadvanced} alt="buildadvanced" />
      </div>
      <div className="content">
        <h2>Build Advanced</h2>
        <p>
          Build Advanced merupakan fitur yang diperuntukkan bagi pengguna yang sudah paham tentang komputer, 
          pengguna dapat memilih sendiri part yang diinginkan. Selain itu didalam Build Advanced juga terdapat 
          pengecekan compatibility antar setiap part, serta terdapat juga perkiraan watt yang akan dibutuhkan.
        </p>
        
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 3rem;
  margin-bottom: 5rem;
  .image {
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    h2 {
      font-size: 4rem;
      font-family: 'Montserrat';
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
      font-family: 'Montserrat';
      font-size: 20px;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 30vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 1rem;
      }
      p {
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
    }
  }
`;
