<template>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
  <div class="grid-container">
    <div class="grid-item">
        <!-- SVG Background -->
        <div id="home" class="background">
           <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="1119" viewnews.news="0 0 1920 1119" fill="none">
              <path d="M0 0H1920V616C1920 616 1891.16 908.81 1811 1004C1730.84 1099.19 1531 1119 1531 1119H0V0Z" fill="url(#paint0_linear_335_992)"/>
              <defs>
                 <linearGradient id="paint0_linear_335_992" x1="0" y1="456" x2="1920" y2="456" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F83D4A"/>
                    <stop offset="1" stop-color="#F8703A"/>
                 </linearGradient>
              </defs>
           </svg>
        </div>

        <div class="grid-navbar">
          <div class="grid-link"></div>
          <div class="grid-link"><a href="#home">Home</a></div>
          <div class="grid-link"><a href="#acerca">Acerca</a></div>
          <div class="grid-link"><a href="#equipas">Equipas</a>  </div>
          <div class="grid-link , navbar-title">Formula1Pulse</div>
          <div class="grid-link"><a href="#circuitos">Circuitos</a></div>
          <div class="grid-link"><a href="#historia">História</a></div>
          <div class="grid-link"><a href="#series">Series</a></div>

          <div class="grid-link, navbar-icon" id="loginIcon">
              <RouterLink v-if="!store.isUserAuthenticated" :to="{ name: 'login' }" class="login-link">
                  <img src="../img/icons/login.png" alt="Login">
                  <span class="tooltip">Login</span>
              </RouterLink>

              <RouterLink v-else :to="{ name: 'dashboard' }" class="dashboard-link">  
                <img src="../img/icons/dashboard.png" alt="Dashboard">
                <span class="tooltip">Dashboard</span>
              </RouterLink>
           </div>
        </div>

      <div class="image-container" >
          <div class="image-shadow"></div>
          <img src="../img/car.png" alt="" style="width: 75rem; height: auto; opacity: 0.80;">    
      </div>
    </div>

    <div class="grid-item">
      <div class="background-acerca">
        <div id="acerca" class="acerca">
          <div id="acerca" class="title">
            <br><b>Acerca</b><br>
          </div>
          <div class="grid-acerca">
            <div class="grid-acerca-item" data-aos="fade-right">
              <img class="hamilton-image" alt="Image" src="..\img\news\hamilton.png"  />
            </div>
            <div class="grid-acerca-item" data-aos="fade-right">
              <div class="acerca-hamilton-title">Como Surgiu ?</div><br>
              <p class="acerca-hamilton-text">
                O 'Formula 1 Pulse' surge como um projeto interdisciplinar inovador na universidade, unindo conhecimentos em ciência
                da computação, design de interfaces e análise de dados. Esta dashboard dinâmica proporciona uma visão envolvente da
                Fórmula 1, destacando estatísticas e informações relevantes de maneira visualmente atrativa, resultado da paixão e
                dedicação de uma equipa diversificada.
              </p>
            </div>
            <div class="grid-acerca-item"></div>
            <div class="grid-acerca-item"></div>
            <div class="grid-acerca-item" data-aos="fade-left">
              <div class="acerca-leclerc-title">Para que Serve ?</div><br>
              <p class="acerca-leclerc-text">
                'Formula 1 Pulse' é uma ferramenta essencial para entusiastas e profissionais do desporto automobilístico.
                Funcionando como uma dashboard abrangente, oferece acompanhamento em tempo real de estatísticas, resultados de
                corridas e análises detalhadas, proporcionando uma perspetiva única sobre o desempenho das equipas e pilotos. Esta
                plataforma representa uma fonte valiosa de insights e entretenimento, reunindo paixão, inovação e conhecimento num
                só lugar.
              </p>
            </div>
            <div class="grid-acerca-item" data-aos="fade-left">
              <img class="leclerc-image" alt="Image" src="..\img\news\leclerc.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-item">
        <div class="background-teams">
        <div id="equipas" class="title">
          <br>
           <b>Equipas</b>
        </div>
        <div class="grid-teams">
          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="mercedes" alt="Mercedes" src="..\img\teams\mercedes.png"/>
              <div class="team-overlay">Mercedes</div>
            </div>
          </div>
          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000"> 
            <div class="teams">
              <img class="ferrari" alt="Ferrari" src="..\img\teams\ferrari.png"/>
              <div class="team-overlay">Ferrari</div>
            </div>
          </div>

          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="redbull" alt="Red Bull" src="..\img\teams\redbull.png"/>
              <div class="team-overlay">Red Bull</div>
            </div>
          </div>

          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="mclaren" alt="McLaren" src="..\img\teams\mcLaren.png"/>
              <div class="team-overlay">McLaren</div>
            </div>
          </div>

          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="astonmartin" alt="Aston Martin" src="..\img\teams\aston martin.png"/>
              <div class="team-overlay">Aston Martin</div>
            </div>
          </div>

          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="alfaromeo" alt="Alfa Romeo" src="..\img\teams\alfa romeo.png"/>
              <div class="team-overlay">Alfa Romeo</div>
            </div>
          </div>

          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="haas" alt="Haas" src="..\img\teams\haas.png"/>
              <div class="team-overlay">Haas</div>
            </div>
          </div>

          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="williams" alt="Williams" src="..\img\teams\williams.png"/>
              <div class="team-overlay">Williams</div>
            </div>
          </div> 

          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="alphatauri" alt="Alpha Tauri" src="..\img\teams\alpha tauri.png"/>
              <div class="team-overlay">Alpha Tauri</div>
            </div>
          </div>

          <div class="grid-team">
          </div>

          <div class="grid-team" data-aos="flip-left" data-aos-duration="2000">
            <div class="teams">
              <img class="alpine" alt="Alpine" src="..\img\teams\alpine.png"/>
              <div class="team-overlay">Alpine</div>
            </div>
          </div>

          <div class="grid-team">
          </div> 
        </div>     
      </div>
    </div>

    <div class="grid-item">
      <div class="background-circuitos">
        <div id="circuitos" class="title">
            <br><b>Circuitos</b>
        </div>
        <div class="grid-tracks">
          <div class="tracks" data-aos="fade-up">
            <img src="..\img\tracks\bahrain.png" alt="Bahrain" class="track">
            <div class="track-overlay">Bahrain</div>
          </div>
          <div class="tracks" data-aos="fade-up">
            <img src="..\img\tracks\Saudi Arabia.png" alt="Saudi Arabia" class="track">
            <div class="track-overlay">Saudi Arabia</div>
          </div>
          <div class="tracks" data-aos="fade-up">
            <img src="..\img\tracks\Australia.png" alt="Australia" class="track">
            <div class="track-overlay">Australia</div>
          </div>
          <div class="tracks" data-aos="fade-up">
            <img src="..\img\tracks\Japan.png" alt="Japan" class="track">
            <div class="track-overlay">Japan</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="1000">
            <img src="..\img\tracks\China.png" alt="China" class="track">
            <div class="track-overlay">China</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="1000">
            <img src="..\img\tracks\USA1.png" alt="United States" class="track">
            <div class="track-overlay">United States</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="1000">
            <img src="..\img\tracks\Italy1.png" alt="Italy" class="track">
            <div class="track-overlay">Italy</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="1000">
            <img src="..\img\tracks\Monaco.png" alt="Monaco" class="track">
            <div class="track-overlay">Monaco</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="2000">
            <img src="..\img\tracks\Canada.png" alt="Canada" class="track">
            <div class="track-overlay">Canada</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="2000">
            <img src="..\img\tracks\Spain.png" alt="Spain" class="track">
            <div class="track-overlay">Spain</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="2000">
            <img src="..\img\tracks\Austria.png" alt="Austria" class="track">
            <div class="track-overlay">Austria</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="2000">
            <img src="..\img\tracks\UK.png" alt="United Kingdom" class="track">
            <div class="track-overlay">United Kingdom</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Hungary.png" alt="Hungary" class="track">
            <div class="track-overlay">Hungary</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Belgium.png" alt="Belgium" class="track">
            <div class="track-overlay">Belgium</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Netherlands.png" alt="Netherlands" class="track">
            <div class="track-overlay">Netherlands</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Italy2.png" alt="Italy" class="track">
            <div class="track-overlay">Italy</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Azerbaijan.png" alt="Azerbaijan" class="track">
            <div class="track-overlay">Azerbaijan</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Singapore.png" alt="Singapore" class="track">
            <div class="track-overlay">Singapore</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\USA2.png" alt="United States" class="track">
            <div class="track-overlay">United States</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Mexico.png" alt="Mexico" class="track">
            <div class="track-overlay">Mexico</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Brazil.png" alt="Brazil" class="track">
            <div class="track-overlay">Brazil</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\USA3.png" alt="United States" class="track">
            <div class="track-overlay">United States</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Qatar.png" alt="Qatar" class="track">
            <div class="track-overlay">Qatar</div>
          </div>
          <div class="tracks" data-aos="fade-up" data-aos-duration="3000">
            <img src="..\img\tracks\Abu Dhabi.png" alt="Abu Dhabi" class="track">
            <div class="track-overlay">Abu Dhabi</div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-item">
      <div class="background-historia">
        <div id="historia" class="title">
          <br><b>História</b><br>
        </div>
        <div id="historia" class="historia" data-aos="fade-right">
          <p>A história da Fórmula 1 é uma emocionante saga que remonta ao pós-Segunda Guerra Mundial, quando o automobilismo de competição começou a se reerguer na Europa. A ideia de criar uma categoria de corridas com carros monopostos, equipados com motores de alta potência e aerodinâmica avançada, surgiu com o intuito de promover a excelência técnica e a competitividade entre fabricantes. A primeira temporada oficial da Fórmula 1 foi em 1950, com o Grande Prêmio da Grã-Bretanha realizando a corrida inaugural. Nessa época, equipes lendárias como a Ferrari e a Alfa Romeo competiam, e pilotos como Juan Manuel Fangio e Alberto Ascari começavam a escrever seus nomes na história do esporte. Desde então, a Fórmula 1 cresceu em popularidade, tornando-se uma das modalidades esportivas mais assistidas do mundo. Corridas lendárias, como o Grande Prêmio de Mônaco e o Grande Prêmio da Itália, tornaram-se marcos no calendário anual, com circuitos icônicos como Monza e Spa-Francorchamps testemunhando batalhas épicas.</p>
        </div>
      </div>
      </div>

      <div class="grid-item">
        <div class="background-series">
          <linearGradient id="paint0_linear_335_992" x1="0" y1="456" x2="1920" y2="456" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F83D4A"/>
            <stop offset="1" stop-color="#F8703A"/>
          </linearGradient>

          <div id="series" class="title" style="color: white !important;">
            <br><b>Séries</b>
          </div>
          <div class="box-container">
            <div class="box">
              <div class="overlay"></div>
            </div>
            <div class="box">
              <div class="overlay"></div>
            </div>
            <div class="box">
              <div class="overlay"></div>
            </div>
            <div class="box">
              <div class="overlay"></div>
            </div>
            <div class="box">
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-item">
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col">
                <h4>company</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">our services</a></li>
                  <li><a href="#">privacy policy</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>latest news</h4>
                <ul>
                  <li><a href="#">what is f1?</a></li>
                  <li><a href="#">drivers</a></li>
                  <li><a href="#">teams</a></li>
                  <li><a href="#">schedule</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>results</h4>
                <ul>
                  <li><a href="#">2023 season</a></li>
                  <li><a href="#">driver standings</a></li>
                  <li><a href="#">constructor standings</a></li>
                  <li><a href="#">archive</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>      
      </div>

  </div>

</template>

<script>    
import { useUserStore } from "@/stores/user";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'DashboardF1HomeView',

  setup() {
    const store = useUserStore();
    return { store };
  },

  mounted() {
    const store = useUserStore();
    AOS.init();
  },
};

document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll(".box");
  let activeIndex = -1;
  let isTransitioning = false;

  function updateCurrentImg() {
    isTransitioning = true;

    boxes.forEach((box, index) => {
      const isActive = index === activeIndex;
      box.classList.toggle("expanded", isActive);
      box.classList.toggle("closed", !isActive);
    });

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function handleArrowKey(event) {
    if (isTransitioning) {
      return;
    }

    if (event.key === "ArrowRight") {
      activeIndex = (activeIndex + 1) % boxes.length;
    } else if (event.key === "ArrowLeft") {
      activeIndex = (activeIndex - 1 + boxes.length) % boxes.length;
    }

    updateCurrentImg();
  }

  function handleBoxClick(index) {
    if (isTransitioning) {
      return;
    }

    if (index === activeIndex && boxes[index].classList.contains("expanded")) {
      boxes.forEach((box) => box.classList.remove("closed", "expanded"));
      activeIndex = 0;
    } else {
      activeIndex = index;
      updateCurrentImg();
    }
  }

  document.addEventListener("keydown", handleArrowKey);


  boxes.forEach((box, index) => {
    box.addEventListener("click", () => handleBoxClick(index));
  });
});

</script>

<style lang="scss" scoped> 

body, html {
  height: 100%;
  margin: 0;
  background-color: blue;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 160vh 170vh 300vh 100vh 100vh;
}

.title b {
  text-align: center;
  display: block;
  margin: 0 auto;
}

/* Navbar */ 

.grid-navbar {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 2fr 1fr 1fr 1fr 3fr; /* Use spaces, not commas */
  grid-template-rows: 15vh; /* 1 row */
  gap: 20px; /* Adjust the gap between columns if needed */
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
}

.grid-link.navbar-title {
  margin-right: 35px; /* Adjust the value for the right margin */
  margin-left: 35px; /* Adjust the value for the left margin */
}

.grid-link {
  font-family: "Onest-bold";
  text-align: center;
  color: #FFF; 
  text-decoration: none;
  font-size: 1.1rem; 
  margin-top: 30px;
}

.grid-link a:hover {
  text-decoration: underline;
  text-decoration-color: #B81A10;
  text-underline-offset: 8px;
}

.navbar-icon {
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  margin-top: 40px;
  margin-right: 30%;
  position: relative;
}
.navbar-icon img {
  width: 35px ;
  height: 35px;
  transition: transform 0.3s ease; /* Added a transition for smoother movement */
}

.tooltip {
  font-family: "Onest-Thin";
  text-align: center;
  color: #FFF; 
  font-size: 1.1rem; 
  opacity: 0; /* Initially hidden */
  position: absolute;
  color: #fff;
  transition: opacity 0.5s ease, transform 0.5s ease; /* Added transition for smoother appearance and disappearance */
  z-index: 2; /* Ensure the tooltip is above the icon */
  right: 14%; /* Center the tooltip horizontally */
  transform: translateX(50%) translateY(-50%); /* Center the tooltip horizontally and move it up */
}

.navbar-icon:hover .tooltip {
  opacity: 1; /* Show on hover */
  transform: translateX(50%) translateY(0); /* Move the tooltip down */
}

.navbar-icon:hover img {
  transform: translateY(-80%); /* Move the icon up on hover */
}

.navbar-title {
  color: #B81A10;
  font-family: "Tektur-ExtraBold";
  font-size: 60px;
  font-weight: 700;
  line-height: normal;
}

/* Home */ 
.background {
  position: absolute;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}
svg {
  width: 100%;
  height: auto;
  display: block;
}
.button-container {
  z-index: 1;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  position: relative; 
}

@keyframes slide {
  0% {
    transform: translateX(-130%);
  }
  100% {
    transform: translateX(0);
  }
}

.image-shadow {
  position: absolute;
  width: 1300px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 1648px;
  background: radial-gradient(50% 50% at 50% 50%, #000 0%, rgba(0, 0, 0, 0.00) 100%);
  z-index: -1; 
  top: 82%;
}

.image-container img {
  width: 1000px;
  height: auto;
  opacity: 0.80;
  z-index: 1; 
}

.image-shadow, .image-container img{
  animation: slide 1s linear; /* Ajuste a duração conforme necessário */
  will-change: transform;
}

.title {
  color: #B81A10;
  font-family: "Tektur-Bold";
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

/* Acerca */
.background-acerca{
  background-color: #343535;
  height: 100%;
  
}
.news {
  position: relative;
  width: 100%;
}

.grid-acerca {
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 50vh 80vh 50vh;
  grid-template-rows: 50vh 50vh;
  width: 100%;
  grid-row-gap: 100px;
}

.grid-acerca-item {
  padding: 20px;
  text-align: center;
}

.acerca-hamilton-title,
.acerca-leclerc-title {
  color: #FFFFFF;
  font-family: "Onest-Bold";
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: left;
}

.acerca-hamilton-text, .acerca-leclerc-text{
  color: #FFFFFF;
  font-family: "Onest-thin";
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;
}

.hamilton-image, .leclerc-image{
  height: 25rem;
  left: 3%;
  position: relative;
}

/* Teams */

.grid-teams {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 28vw); 
  grid-template-rows: repeat(4, 1fr); 
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  gap: 15px;
  position: relative;
  overflow: hidden;
}

.teams .team-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 96.4%;//25vh; //185px
  width: 100%; //386px 
  opacity: 0;
  transition: .5s ease;
  border-radius: 19px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 350%;
  font-family: Tektur;
  background-color: #c9dce2; /* Default background color */
}

.teams:hover .team-overlay {
  opacity: 0.9;
  color: #343535;
}

/* .teams:hover .overlay.ferrari {
  background-color: #000000;  // not working
} */

.background-teams{
  background-color: #D4CBCA;
  height: 100%;
}

.teams { 
  height: 96%; //186px
  width: 100%; //386px
  position: relative;
} 

/* Circuitos */

.grid-tracks {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0px; /* Adjust the gap between tracks as needed */
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  position: relative;
  overflow: hidden;
}

.tracks .track-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 39vh; //98%;//289px;
  width:  100%; //263px;
  opacity: 0;
  transition: .5s ease;
  border-radius: 3vh; //15px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200%;
  font-family: "Tektur";
  background-color: #D4CBCA; 
}

.tracks:hover .track-overlay {
  opacity: 0.9;
  color: #000;
}

.tracks{
  height: auto;
  width: auto;
 /*  height: 289px;
  width: 263px; */
  position: relative;
  overflow: hidden;
  margin-bottom: 7%;
}

.background-circuitos{
  background-color: #343535;
  height: 100%;
}

/* História */
.background-historia{
  background-color: #D4CBCA;
  height: 100%;
}

.historia p {
  font-family: "Onest";
  text-align: justify;
  color: #000;
  font-size: 1.5rem;  //font-size: 25px / 156%
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 10%;
  margin-right: 10%;
}

/* ---------------------------------------------------------------------- */
/* SERIES */
.background-series {
  height: 100%;
  background: linear-gradient(to right, #F83D4A, #F8703A);
}

$backgrounds: (
  1: url(../img/series/Netflix-KV-horizontal.jpg),
  2: url(../img/series/IMG_5244-scaled.jpeg),
  3: url(../img/series/AAAABTmJ1PHpCCA5fSQrNQ4ktnoLERmUBephhozO32ajCsKYRZSTDJlalnYVp1luykvFnuVUrOV1ubrGwPnTZMJSpSdO-HOUIf3PrnpErVlfiC3WOmcoRp1-WIlHxgxKnQ-cleanup-jpg.webp),
  4: url(../img/series/6e7d6151f04e3d739de6b74847049f1b.jpg),
  5: url(../img/series/f1-drive-to-survive.jpeg),
);

@function get-background($index) {
  @return map-get($backgrounds, $index);
}

.box-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  max-width: 1400px;
  height: 70vh;
  max-height: 900px;
  padding: 1rem;
  margin: 0 auto;

  .box {
  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      background: get-background($i);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

    width: 25%;
    height: 340px;
    border-radius: 25px;
    cursor: pointer;
    transition: width 0.5s ease-in-out;
    position: relative;
    overflow: hidden;

    .overlay {
      opacity: 0;
    }

    &.closed {
      width: 5%;
      .overlay {
        opacity: 1;
      }
    }

    &.expanded {
      width: 85%;
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s ease;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}



/* ---------------------------------------------------------------------- */
/* FOOTER */

body{
  line-height: 1.5;
  font-family: 'Onest', sans-serif;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.container{
  max-width: 1170px;
  margin:auto;
}
.row{
  display: flex;
  flex-wrap: wrap;
}
ul{
  list-style: none;
}
.footer{
  background-color: #24262b; 
  //  background-color: #343535;
  padding: 70px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col h4::before{
  content: '';
  position: absolute;
  left:0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child){
  margin-bottom: 10px;
}
.footer-col ul li a{
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover{
  color: #ffffff;
  padding-left: 8px;
}
.footer-col .social-links a{
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255,255,255,0.2);
  margin:0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
  color: #24262b;
  background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}


</style> 