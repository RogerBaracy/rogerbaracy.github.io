<template>  
  <q-card>    
    <q-card-section class="q-pt-sm">
      <strong>Principais atividades: </strong>
      <p v-text="e.activities"></p> 
      <strong>Tecnologia utilizadas: </strong>  
      <p v-text="e.technologies"></p>               
      <strong v-if="e.outherTechnologies"> Outras Tecnologias: </strong>
      <p v-text="e.outherTechnologies? e.outherTechnologies: ''"></p>
    </q-card-section>
  </q-card> 
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Idata } from './data'
@Component
export default class Experience extends Vue {
  @Prop(Object) readonly e!: Idata  
}
</script>
