function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


  

  function openCoffeeInvitation() {
    const newWindow = window.open('', '_blank');
    
    // Cargar contenido y ejecutar código cuando la página se haya cargado
    newWindow.document.write(`
      <html>
        <head>
          <title>Para Ti 💖</title>
          <style>
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
              background-color: #fff5f8;
              font-family: Arial, sans-serif;
              text-align: center;
              animation: fadeIn 2s ease-in-out;
            }

            h1 {
              color: #d81b60;
              font-size: 24px;
            }

            p {
              font-size: 18px;
              color: #444;
              max-width: 400px;
              margin-top: 10px;
            }

            img {
              width: 250px;
              border-radius: 20px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              margin-top: 20px;
              animation: fadeIn 3s ease-in-out;
            }

            .btn {
              margin-top: 20px;
              padding: 10px 20px;
              font-size: 16px;
              background-color: #d81b60;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background 0.3s;
            }

            .btn:hover {
              background-color: #c2185b;
            }
          </style>
        </head>
        <body>
          
          <p>Hola, quería sorprenderte con esta pequeña invitación. ¿Qué dices si compartimos un café juntos este finde? ☕</p>
          <img src="https://i.pinimg.com/originals/d0/77/39/d07739951659b0077f303d3f9453463d.gif" alt="Osito con una rosa">
          <p>Haz clic en el botón si aceptas la invitación 😊</p>
          <button class="btn" onclick="alert('Tenemos un trato, no olvides enseñarme a tejer! 🦦')">Aceptar</button>

          <!-- Audio control -->
          <audio id="audio" autoplay>
            <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3">
          </audio>
        </body>
      </html>
    `);
    
    newWindow.document.close();

    // Esperar que la nueva ventana termine de cargar y luego reproducir el audio
    newWindow.onload = function() {
      newWindow.document.getElementById('audio').play();
    };
  }