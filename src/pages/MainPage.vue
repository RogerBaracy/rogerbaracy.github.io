<template>
  <q-page>   
    <div class="row">
      <div class="col-md-6 col-12">  
        <div class="row">
          <q-card class="q-mt-sm q-mr-sm">
            <q-item>
              <q-item-section avatar class="mobile-hide">
                <q-avatar>
                  <img v-bind:src="image">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h3 text-primary" v-text="name"/>
                <q-item-label class="text-subtitle text-grey-8" caption v-text="office"/>
              </q-item-section>
            </q-item>
            <q-separator class="q-ma-none"/>
            <q-card-section horizontal>
              <q-card-section v-html="resume"/>
            </q-card-section>
          </q-card> 
        </div> 
        <div class="row">
          <q-card class="q-mt-sm q-mr-sm">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="experiences" label="Experiências" />
              <q-tab name="formations" label="Formação" />
              <q-tab name="skills" label="Skills" />
              <!-- <q-tab name="curses" label="Outros cursos" /> -->
            </q-tabs>
            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="experiences">
                <AccordionExperiences/> 
              </q-tab-panel>

              <q-tab-panel name="formations">
                <Formations/>
              </q-tab-panel>
              <q-tab-panel name="skills">
                <Skill v-bind:skills="skills"/>
              </q-tab-panel>
              <!-- <q-tab-panel name="curses">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel> -->
            </q-tab-panels>
          </q-card>
        </div>  
      </div>
      <div class="col-sm-6 col-12">
        <div class="side">

        </div>
      </div>
    </div> 
  </q-page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AccordionExperiences from 'components/experience/AccordionExperiences.vue'
import Formations from 'components/formation/Formations.vue'

import Skill from 'components/skill/Skill.vue'
@Component({
  components: {
    AccordionExperiences,
    Formations,
    Skill
  }
})
export default class MainPage extends Vue {
  private tab = 'experiences'
  private name = 'Roger Santos'
  private office = 'Desenvolvedor web'
  private resume = `<p> &nbsp &nbsp &nbsp &nbsp Sou desenvolvedor web há 3 anos, 
  formado em Tecnologia em Redes para Computadores, estudante do 5º semestre do curso de Tecnologia em Sistemas
  para Internet pelo Instituto Federal do Rio Grande do Sul, Campus Porto Alegre.
                <br>
                   &nbsp &nbsp &nbsp &nbsp Possuo 8 anos de experiência na área de informática, 
                   tenho conhecimentos avançados em Linux, programação nas linguagens PHP e JavaScript/TypeScript,
                   banco de dados MySQL, Postgres e MongoDB.
                </p>`
  private image = 'https://avatars.githubusercontent.com/u/29338269?s=460&u=5d9a2f95fb851b167d49a2ecfa929b31fafb7be2&v=4'  
  private skills = [['JavaScript', 10], ['TypeScript', 10], ['PHP', 8], ['VueJS', 10], ['Quasar Framework', 9], ['ElectronJS', 6], ['AdonisJS', 6], 
    ['NestJS', 5], ['Laravel', 6], ['MySQL', 5], ['Postgres', 4], ['MongoDB', 3], ['Docker', 4], ['Git', 6]]            
}
</script>
<style lang="scss" scoped>
.q-card {
    box-shadow: none;
    border-radius: 4px;
    vertical-align: top;
    position: relative;
    width: 100%;    
}
.q-card--dark {
    border-color: rgb(29, 29, 29);
}
.q-avatar {
    font-size: 60px;
}
.text-caption {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.03333em;
}
.q-tabs {
    position: relative;
    transition: color 0.3s, background-color 0.3s;
    height: 75px;
}
.side {
  background-image: url('../assets/images/side_image.png'); 
  width: 100%; 
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 20px;
}
@media only screen and (max-width: 1022px) {
  .side {
    display: none;
  }
}

</style>
