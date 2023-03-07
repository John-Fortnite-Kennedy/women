<!-- <script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import  HelloWorld from './components/HelloWorld.vue'

const countries = <any>ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  bruh
  <HelloWorld></HelloWorld>
</template> -->
<template>
  <div style="display: flex;flex-direction: column;background-color: #F5C5BD;">
    <audio
      hidden="true"
      id="audio"
    >
      <source src="song.mp3" type="audio/mp3">
    </audio>

    <div v-bind:class="{'active': animated}" @click="open" style="position: fixed;height: 100vh;width: 100vw;background-color: pink;display: flex;align-items: center;justify-content: center;font-size: 3rem;">
      Поздравление от Алибека<br> на 8-ое марта
    </div>

    <div style="height:100%;width: 100%;">
      <!--  background-image: url('1.jpg');background-size: contain;-->
      <img src="1.jpg" style="max-width: 100%;max-height: 100vh;margin: auto;"/>
    </div>
    <div style="height:100%;width: 85%;padding: 5%;display: flex;flex-direction:column;text-align: center;font-size: 1.5rem;border:2.5vw solid #FCFAFA;">
      <h1>Поздравляю с 8-ым марта!</h1>
      <p>Милые, добрые и очаровательные, мама и сестренки! Поздравляю с Международным женским днем! Желаю весеннего настроения, улыбок, тепла и вдохновения. Пусть счастьем и любовью наполнится душа и сердце. Люблю, целую, обнимаю. Посылаю вам тепло, нежность и любовь в праздник 8 Марта!</p>
    </div>
    <div style="height:100%;width: 100%;">
      <img src="2.jpg" style="max-width: 100%;max-height: 100vh;margin: auto;"/>
    </div>
    <div class="flower" @click="party">
      <Renderer resize="parent" ref="renderer" :alpha="true">
        <Camera :position="{ z: 1 }" />
        <Scene>
            <PointLight :position="{ y: 50, z: 50 }" />
            <AmbientLight color="#ffffff"/>
            <!-- <FbxModel src="./public/rose.fbx" ref="rose" :position="{x:0,y:0,z:0}" :rotation="{z:50}"/> -->
            <GltfModel src="./public/scene.gltf"  ref="rose"/>
        </Scene>
      </Renderer>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import party from "party-js";
export default defineComponent({
    data() {
      const animated = ref(false)
      return {animated}
    },
    setup() {
        const renderer = ref();
        const rose = ref();
        
        onMounted(() => {
            renderer?.value?.onBeforeRender(() => {
                //console.log(rose.value.scene.rotation.z)
                rose.value.scene.rotation.y += 0.01;
            });
            // audio.value!.muted=true
        });
        return {
            renderer,
            rose
        };
    },
    methods:{
      party(){
        party.confetti(party.Rect.fromScreen(), {shapes: ["star"]});
      },
      
    },
    open(){
        const audio = <HTMLVideoElement> document.getElementById("audio");
        audio?.play()
        this.animated = true
      }
});
</script>
<style scoped>
.active{
  animation: move 8s linear forwards;
}
@keyframes move {
  from{
    top:0%;
    opacity: 1;
    display: fixed;
  }
  to{
    top: -100%;
    opacity: 0;
    display: none !important;
  }
}
.flower{
  height: 100vh;width: 100%;background-image: url('3.jpg');background-size: 100% 100%;
}
</style>