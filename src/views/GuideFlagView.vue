<template>
    <Sidenav></Sidenav>
    <div class="main">
        <div class="links">
            <RouterLink :to="{ name: 'guide-tires' }" class="links">Pneus</RouterLink>
            <div class="bandeiras">Bandeiras</div>
        </div>

        <div class="grid-flags">
            <div class="card-flags">
                <img src="../img/guide/flags/greenFlag.jpg">
                <div class="title">Bandeira Verde</div>
                <div class="flag-overlay text" :class="{ 'show': overlayGreen }" @click="overlayGreen = false">A sessão começou ou vai continuar.</div>
                <div class="icon" @click="overlayGreen = !overlayGreen"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-flags">
                <img src="../img/guide/flags/blueFlag.jpg">
                <div class="title">Bandeira Azul</div>
                <div class="flag-overlay text" :class="{ 'show': overlayBlue }" @click="overlayBlue = false">Indica ao piloto que um carro com avanço está prestes a ultrupassá-lo e que tem de ceder passagem.</div>
                <div class="icon" @click="overlayBlue = !overlayBlue"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-flags">
                <img src="../img/guide/flags/whiteFlag.jpg">
                <div class="title">Bandeira Branca</div>
                <div class="flag-overlay text" :class="{ 'show': overlayWhite }" @click="overlayWhite = false">Informa o piloto que há carros lentos à sua frente.</div>
                <div class="icon" @click="overlayWhite = !overlayWhite"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-flags">
                <img src="../img/guide/flags/redFlag.jpg">
                <div class="title">Bandeira Vermelha</div>
                <div class="flag-overlay text" :class="{ 'show': overlayRed }" @click="overlayRed = false">A sessão parou.</div>
                <div class="icon" @click="overlayRed = !overlayRed"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-flags">
                <img src="../img/guide/flags/blackFlag.jpg">
                <div class="title">Bandeira Preta</div>
                <div class="flag-overlay text" :class="{ 'show': overlayBlack }" @click="overlayBlack = false">O piloto é desqualificado e é tem de regressar à pit imediatamente.</div>
                <div class="icon" @click="overlayBlack = !overlayBlack"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-flags">
                <img src="../img/guide/flags/yellowFlag.jpg">
                <div class="title">Bandeira Amarela</div>
                <div class="flag-overlay text" :class="{ 'show': overlayYellow }" @click="overlayYellow = false">Significa perigo.</div>
                <div class="icon" @click="overlayYellow = !overlayYellow"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-flags">
                <img src="../img/guide/flags/yellowRedFlag.jpg">
                <div class="title">Bandeira Amarela e Riscas Vermelhas</div>
                <div class="flag-overlay text" :class="{ 'show': overlayYellowRed }" @click="overlayYellowRed = false">Indica que a pista está escorregadia.</div>
                <div class="icon" @click="overlayYellowRed = !overlayYellowRed"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-flags">
                <img src="../img/guide/flags/checkeredFlag.jpg">
                <div class="title">Bandeira Axadrezada </div>
                <div class="flag-overlay text" :class="{ 'show': overlayCheckered }" @click="overlayCheckered = false">A sessão terminou.</div>
                <div class="icon" @click="overlayCheckered = !overlayCheckered"><img src="../img/icons/upload.png" alt=""></div>
            </div>
        </div>
    </div> 

</template>

<script>
import { RouterLink } from 'vue-router';
import Sidenav from "../components/sidenav.vue";

export default {
  components: {
    Sidenav,
  },
  data() {
    return {
        overlayWhite: false,
        overlayYellow: false,
        overlayRed: false,
        overlayGreen: false,
        overlayBlue: false,
        overlayBlack: false,
        overlayYellowRed: false,
        overlayCheckered: false,

    }
  },
}
</script>

<style lang="scss" scoped>

/* Header */
.bandeiras{
    margin-left: 2%;
    color: #FFF;
    text-decoration: underline;
    text-underline-offset: 10%;
    text-decoration-color: #C8473F;
    text-decoration-thickness: 2px;
}
.links {
    display: flex;
    font-family: "Onest";
    font-size: 1.5rem;
    color: #FFF; 
}

/* Cards */
.icon {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;
}

.grid-flags{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2,1fr);

}

.card-flags img{
    width: 60%;
}

.card-flags {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #343535;
    width: 20%;
    color: #FFF;
    height: 40vh;
    width: 20vw;
    border-radius: 3vh;
    font-family: "Onest";
    font-size: smaller;
}

.card-flags .title {
    margin-top: 5%;
    font-size: 1.2rem;
    text-align: center;
    font-family: Onest;
}

.flag-overlay {
    position: absolute;
    background-color: white; 
    color: black;
    height: 20vh;
    width: 20vw;
    transition: 0.5s ease-in;
    border-radius: 0 0 3vh 3vh ; 
    z-index: 1;
    opacity: 0.999;
    margin-top: 10%;
    font-family: Onest-Thin;
    font-size: 1rem;
    display: none;
    justify-content: center;
    padding: 1.5%;
}

.flag-overlay.show {
  display: flex;
}





</style>

