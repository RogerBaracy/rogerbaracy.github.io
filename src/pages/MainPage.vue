<template>
  <q-page>   
    <div class="row">
      <div class="col-sm-6 col-12">
        <div class="row">        
          <q-card class="q-ma-sm">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img v-bind:src="image">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6" v-text="name"/>
                <q-item-label class="text-subtitle2" caption v-text="office"/>
              </q-item-section>
            </q-item>
            <q-separator class="q-ma-none"/>
            <q-card-section horizontal>
              <q-card-section v-html="resume"/>
            </q-card-section>
          </q-card> 
        </div>  
        <div class="row">          
          <q-card class="q-ma-sm">
            <q-card-section>
              <div class="text-h6">Experiências</div>
            </q-card-section>
            <q-separator/>
              <Accordion/>  
          </q-card>
        </div>
      </div>
      <div class="col-sm-6 col-12">
        <q-card class="q-ma-sm">
            <q-card-section>
              <div class="text-h6">Skills</div>
            </q-card-section>
            <q-separator/>
            <Skill v-bind:skills="skills"/>
        </q-card>
      </div>
    </div> 
  </q-page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Accordion from 'components/experience/Accordion.vue'
import Skill from 'components/skill/Skill.vue'
@Component({
  components: {
    Accordion,
    Skill
  }
})
export default class MainPage extends Vue {
  private name = 'Roger Santos'
  private office = 'Desenvolvedor web'
  private resume = `<p> &nbsp &nbsp &nbsp &nbsp Sou desenvolvedor web há 3 anos, formado em Tecnologia em Redes para Computadores, 
                  estudante do 5º semestre do curso de Tecnologia em Sistemas para Internet pelo Instituto Federal 
                  do Rio Grande do Sul, Campus Porto Alegre.
                <br>
                   &nbsp &nbsp &nbsp &nbsp Possuo 8 anos de experiência na área de informática, tenho conhecimentos avançados em Linux, programação nas linguagens PHP e JavaScript/TypeScript, banco de dados 
                   MySQL, Postgres e MongoDB.
                </p>`
  private image = 'https://cdn.quasar.dev/img/boy-avatar.png'  
  private skills = [['JavaScript', 10], ['TypeScript', 10], ['PHP', 8], ['VueJS', 10], ['Quasar Framework', 9], ['ElectronJS', 6], ['AdonisJS', 6], 
  ['NestJS', 5], ['Laravel', 6], ['MySQL', 5], ['Postgres', 4], ['MongoDB', 3]]            
}
</script>
<style lang="scss" scoped>
.q-card {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    vertical-align: top;
    background: #fff;
    position: relative;
    width: 100%;
}
</style>
