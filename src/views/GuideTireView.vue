<template>
    <Sidenav></Sidenav>
    <div class="main">
        <div class="links">
            <div class="pneus">Pneus</div>
            <RouterLink :to="{ name: 'guide-flags' }" class="links">Bandeiras</RouterLink>
        </div>  

        <!-- teste card -->

        <div class="grid-tires">
            <div class="card-tires">
                <img src="../img/guide/tires/white-parentesi.png" alt="white" class="pneu">
                <div class="title">White Hard Compound</div>
                <div class="tire-overlay text" :class="{ 'show': overlayWhite }" @click="overlayWhite = false">Esses proporcionam menos aderência, mas são projetados para se aguentarem mais tempo.</div>
                <div class="icon" @click="overlayWhite = !overlayWhite"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-tires">
                <img src="../img/guide/tires/yellow-parentesi.png" alt="yellow" class="pneu">
                <div class="title">Yellow Medium Compound</div>
                <div class="tire-overlay text" :class="{ 'show': overlayYellow }" @click="overlayYellow = false">Nomalmente é mais lento que os pneus soft mas mais rápidos que os hard. Duram mais que os soft mas não tanto como os hard.</div>
                <div class="icon" @click="overlayYellow = !overlayYellow"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-tires">
                <img src="../img/guide/tires/red-parentesi.png" alt="red" class="pneu">
                <div class="title">Red Soft Compound</div>
                <div class="tire-overlay text" :class="{ 'show': overlayRed }" @click="overlayRed = false">Estes representam a borracha mais rápida, mas vão ter o desgaste mais acelerado.</div>
                <div class="icon" @click="overlayRed = !overlayRed"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-tires">
                <img src="../img/guide/tires/cinturato-green-intermediate-4505508953587.png" alt="green" class="pneu">
                <div class="title">Green Intermediate Compound</div>
                <div class="tire-overlay text" :class="{ 'show': overlayGreen }" @click="overlayGreen = false">Os intermédios são os mais versáteis entre os pneus de chuva. Podem ser usados numa pista molhada bem como numa superficie ainda a secar. É feito de forma a ter um uso abrangente.</div>
                <div class="icon" @click="overlayGreen = !overlayGreen"><img src="../img/icons/upload.png" alt=""></div>
            </div>

            <div class="card-tires">
                <img src="../img/guide/tires/cinturato-blue-wet-4505508953865.png" alt="b" class="pneu">
                <div class="title">Full Wet Blue</div>
                <div class="tire-overlay text" :class="{ 'show': overlayBlue }" @click="overlayBlue = false">Estes pneus são os mais eficazes para chuva intensa, capazes de dispersar enormes quantidades de água. O perfil proporciona resistência aumentada à aquaplanagem, o que confere ao pneu mais aderência.</div>
                <div class="icon" @click="overlayBlue = !overlayBlue"><img src="../img/icons/upload.png" alt=""></div>
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

    }
  },
}
</script>

<style lang="scss" scoped>


// teste card //

.icon {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;
}

.grid-tires{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2,1fr);

}

.card-tires img{
    width: 40%;
}

.card-tires {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #343535;
    width: 20%;
    color: #FFF;
    height: 40vh;
    width: 25vw;
    border-radius: 3vh;
    font-family: "Onest";
    font-size: smaller;
}

.card-tires .title {
    margin-top: 5%;
    font-size: 1.2rem;
    text-align: center;
    font-family: Onest;
}

.tire-overlay {
    position: absolute;
    background-color: white; 
    color: black;
    height: 30vh;
    width: 25vw;
    transition: 0.5s ease-in;
    border-radius: 0 0 3vh 3vh ; 
    z-index: 1;
    opacity: 0.9;
    margin-top: 5%;
    font-family: Onest-Thin;
    font-size: 1rem;
    display: none;
    justify-content: center;
    padding: 1.5%;
}

.tire-overlay.show {
  display: flex;
}
// header //

.pneus{
    margin-right: 2%;
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

</style>
