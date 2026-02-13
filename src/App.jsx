import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [noBtnPos, setNoBtnPos] = useState(null); // Изначально null, чтобы кнопка была в потоке
  const [isAccepted, setIsAccepted] = useState(false);

  // 9 заглушек для фото (замени на свои ссылки)
  // const photoss = Array(9).fill("https://via.placeholder.com/150");
  // const photos = ['src/assets/111.JPG', 'src/assets/222.JPG', 'src/assets/333.jpg', 'src/assets/444.JPG', 'src/assets/555.jpg', 'src/assets/666.JPG', 'src/assets/777.JPG', 'src/assets/888.jpg', 'src/assets/999.jpg'];
  const photos = ['111.JPG', '222.JPG', '333.jpg', '444.JPG', '555.jpg', '666.JPG', '777.JPG', '888.jpg', '999.jpg'];

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    setNoBtnPos({ top: `${y}px`, left: `${x}px` });
  };

  if (isAccepted) {
    return (
      <div className="main-wrapper">
        <div className="content-box">
          <h1 className="title">YAAASS! ❤️</h1>
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGxqMDlyMDB4bGV2MzdvdWw1NW1qZDZpbzJyamJ3OGo1OTBwN284aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnHvXHHxOTcdmxO/giphy.gif" alt="Happy" className="success-gif" />
          <h2 className="title">Muaaaaaah 💋</h2>
          <h3 className="title">Come here baby 🫦</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      {/* Анимированный фон из сердечек */}
      <div className="hearts-bg">
        {[...Array(20)].map((_, i) => (
          <span key={i} style={{ 
            left: `${Math.random() * 100}%`, 
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}>❤️</span>
        ))}
      </div>

      <div className="content-box">
        <h1 className="title">For my beloved bubochka Veronica 🌸</h1>
        
        <div className="gallery-grid">
          {photos.map((src, i) => (
            <div className="polaroid" key={i}>
              <img src={src} alt="Memory" />
            </div>
          ))}
        </div>

        <div className="question-section">
          <h2 className="question">Will you be my valentine? 🌹</h2>
          
          <div className="btn-wrapper">
            <button className="btn yes-btn" onClick={() => setIsAccepted(true)}>
              Yes baby ofc!
            </button>
            
            <button 
              className="btn no-btn"
              style={noBtnPos ? { position: 'fixed', top: noBtnPos.top, left: noBtnPos.left } : {}}
              onMouseEnter={moveButton}
              onClick={moveButton}
            >
              Eww no 🥴 :(
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;