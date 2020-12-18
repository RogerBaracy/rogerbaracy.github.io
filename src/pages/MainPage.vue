<template>
  <q-page>   
    <div class="row">
      <div class="col-sm-6 col-12">
        <div class="row">
          <q-card class="my-card q-pa-md q-mt-md" flat bordered>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6">Roger Santos</q-item-label>
                <q-item-label class="text-subtitle2" caption>
                  Desenvolvedor web
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="q-ma-none"/>
            <q-card-section horizontal>
              <q-card-section>
                <p>
                  Sou desenvolvedor web, formado em Tecnologia em Redes para Computadores e 
                  estudante do curso de Tecnologia em Sistemas para Internet pelo Instituto Federal 
                  do Rio Grande do Sul, Campus Porto Alegre.
                </p>
                <p> 
                   Possuo 8 anos de experiência na área de informática, tenho conhecimentos avançados em Linux,  programação e banco de dados.
                </p>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="row">
          <div class="col-12 q-mb-sm q-mt-sm">
            <Carousel/>
            <!-- 
                <q-separator/>
                <q-card
                  class="my-card text-white q-mt-sm"
                  style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
                >
                  <q-card-section>
                    <div class="text-h6">Estagiário em Desenvolvimento Web</div>
                    <div class="text-subtitle2">PROCERGS</div>
                    <div class="text-subtitle3"><q-icon name="date_range" class="q-pr-sm"/>07/2018 <q-icon name="date_range" class="q-pr-sm q-pl-sm"/> 02/2019</div>
                  </q-card-section>
                  <q-separator/>
                  <q-card-section class="q-pt-sm">
                    <strong>Principais atividades: </strong>
                    <p>Desenvolvimento de novos componentes para CMS / Framework proprietário.</p> 
                    <strong>Tecnologia utilizadas: </strong>  
                    <p>PHP, MySQL, HTML, CSS, JavaScript, Jquery, Vue.js, versionamento com Git e configuração de ambiente com docker.</p>
                  </q-card-section>
                </q-card>
                <q-separator/>
                <q-card
                  class="my-card text-white q-mt-sm"
                  style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
                >
                  <q-card-section>
                    <div class="text-h6">Estagiário em Desenvolvimento Web (Back-End)</div>
                    <div class="text-subtitle2">Dableo Comunicações</div>
                    <div class="text-subtitle3"><q-icon name="date_range" class="q-pr-sm"/>09/2017 <q-icon name="date_range" class="q-pr-sm q-pl-sm"/> 06/2018</div>
                  </q-card-section>
                  <q-separator/>
                  <q-card-section class="q-pt-sm">
                    <strong>Principais atividades: </strong>
                    <p>Desenvolvimento de componentes para CMS Joomla.</p> 
                    <strong>Tecnologia utilizadas: </strong>  
                    <p>PHP, MySQL, HTML, CSS e Bootstrap.</p>
                  </q-card-section>
                </q-card>
              </q-card-section>
            </q-card>-->
          </div>
        </div> 
      </div>
      <div class="col-sm-6 col-12">
        <h1>
          my skills
        </h1>
      </div>
    </div>   
  </q-page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Carousel from 'components/experience/Carousel.vue'
@Component({
  components: {
    Carousel
  }
})
export default class MainPage extends Vue {
}
</script>
<style lang="scss" scoped>
.my-card {
  width: 100%;
}
 
</style>
