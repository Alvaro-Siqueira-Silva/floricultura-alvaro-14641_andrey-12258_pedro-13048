import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import girassol from "../assets/GIRASOL.jpg";
import lirio from "../assets/pexels-hiếu-hoàng-1179860.jpg"
import "../Reset.css";
import "../App.css";

const Flowers = [
  {
    nome: "Girasol",
    preco: "R$ 39,00",
    foto: "https://images.pexels.com/photos/1338724/pexels-photo-1338724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nome: "Lirio",
    preco: "R$ 45,90",
    foto:"https://images.pexels.com/photos/1179860/pexels-photo-1179860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    nome: "Rosas",
    preco: "R$ 29,90",
    foto: "https://images.pexels.com/photos/1463528/pexels-photo-1463528.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    nome: "Orquideas",
    preco: "R$ 70,00",
    foto: "https://images.pexels.com/photos/11965281/pexels-photo-11965281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    nome: "Margarida",
    preco: "R$ 40,00",
    foto:"https://images.pexels.com/photos/432843/pexels-photo-432843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    nome: "Acacia",
    preco: "R$ 89,00",
    foto:"https://images.pexels.com/photos/12137952/pexels-photo-12137952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }, 
];
function Produtos() {
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Flores a venda</h1>
        <p>Deixe sua casa mais viva e colorida</p>
      </div>
      <div className="Produtos">
        {Flowers.map(({ nome, preco, foto }) => (
          <div className="produto" key={nome}>
            <img src={foto} alt="" />
            <h2>{nome}</h2>
            <p>{preco}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Produtos;
