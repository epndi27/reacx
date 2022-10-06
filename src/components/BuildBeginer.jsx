import React from "react";
import styled from "styled-components";
import pertanyaan1 from "../assets/pertanyaan1.jpeg";
import pertanyaan2 from "../assets/pertanyaan2.jpeg";
import pertanyaan3 from "../assets/pertanyaan3.jpeg";
import Rekomendasi from "../assets/Rekomendasi.jpeg";
import Button from "./Button";

export default function BuildBeginer() {
  const data = [
    {
      title: "Pertanyan 1",
      image: pertanyaan1,
      description:
        "Pada pertanyaan 1 kita akan menentukan berapa budget yang kita punya untuk membeli komputer. ",
      buttonText: "Create",
    },
    {
      
      title: "Pertanyaan 2",
      image: pertanyaan2,
      description:
        "Pada pertanyaan 2 kita akan menentukan apa kegunaan dari komputer yang akan kita beli. ",
      buttonText: "Add NFT",
    },
    {
      
      title: "Pertanyaan 3",
      image: pertanyaan3,
      description:
        "Pada pertanyaan 3 kita akan menentukan berapa besar memori penyimpanan dari komputer yang akan kita beli. ",
      buttonText: "Add NFT",
    },
    {
      
      title: "Rekomendasi",
      image: Rekomendasi,
      description:
        "Ini merupakan Rekomendasi dari rekomendasi yang disarankan sesuai dengan pilihan budget dan kegunaan anda",
      buttonText: "Sell Now",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Build Beginer</h2>
        <p>Build Beginer merupakan fitur yang diperuntukkan bagi pengguna yang masih awam tentang komputer. 
           Dalam Build Beginner kita akan diberikan 3 pertanyaan yaitu diantaranya menanyakan budget, 
           kegunaan, serta kapasitas memori komputer yang akan kita beli. Setelah kita menjawab semua 
           pertanyaan maka akan diberikan sebuah rekomendasi yang cocok bagi pengguna.</p>
      </div>
      <div className="container">
        <div className="ellipse"></div>
        <div className="content">
          {data.map(({ title, image, description, buttonText }, index) => {
            return (
              <div className="BuildBeginer" key={index}>
                <h3>{title}</h3>
                <div className="image">
                  <img src={image} alt="create and sell" />
                </div>
                <p>{description}</p>

                <Button text={buttonText} blue={index === 1} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      margin-bottom: 4rem;
    }
  }
  .container {
    background-color: #232835;
    padding: 5rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    .ellipse {
      height: 30rem;
      width: 30rem;
      background-color: #ae54c27d;
      border-radius: 100%;
      filter: blur(2000px);
      opacity: 0.5;
      position: absolute;
      bottom: -30%;
      left: -10%;
      z-index: 1;
    }
    .content {
      display: flex;
      gap: 3rem;
      .BuildBeginer {
        background-color: #ffffff34;
        z-index: 10;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 1rem;
        .image {
          background-color: #2d69fd;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          width: max-content;
          border-radius: 2rem;
          img {
            height: 20rem;
          }
        }
        h3 {
          color: white;
        }
        p {
          color: #c8c4cf;
          margin-bottom: 1rem;
        }
        button {
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .title {
      h2 {
        font-size: 2rem;
      }
    }
    .container {
      padding: 1rem;
      .content {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
