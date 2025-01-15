import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      {/* Kişisel Bilgiler */}
      <div style={{ marginBottom: "20px" }}>
        <h1>Ahmet Kerem Göl</h1>
        <p>Email: gl.krm46@gmail.com</p>
        <p>Telefon: +90 538 728 72 60</p>
      </div>

      {/* Eğitim Bilgileri */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Eğitim Bilgileri</h2>
        <p>Üniversite: Kapadokya Üniversitesi Meslek Yüksek Okulu</p>
        <p>Bölüm: Bilgisayar Programcılığı</p>
        <p>Mezuniyet Yılı: 2025</p>
      </div>

      {/* İş Deneyimi */}
      <div style={{ marginBottom: "20px" }}>
        <h2>İş Deneyimi</h2>
        <p>Şirket: Koç</p>
        <p>Pozisyon: Web Tasarımı</p>
        <p>Çalışma Süresi: 1989 - 2000</p>
        <p>Tabi o zamanlar bilgisayar yoktu kağıt üstünde kodlama yapardık, hiç unutmuyorum yaptığımız ilk Web sitesi siyah beyazdı.</p>
      </div>

      {/* Yetenekler */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Yetenekler</h2>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>C#</li>
          <li>Veri Tabanı</li>
          <li>PHP</li>
        </ul>
      </div>

      {/* Hobiler ve İlgi Alanları */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Hobiler ve İlgi Alanları</h2>
        <p>Yemek yapmak, Oyun oynamak, World Domination</p>
      </div>

      {/* Sosyal Medya */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Sosyal Medya</h2>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <FaXTwitter size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
}

export default App;
