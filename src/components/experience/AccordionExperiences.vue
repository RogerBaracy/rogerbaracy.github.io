<template>  
    <q-list>
        <q-expansion-item
          v-for="(e , index) in experiencies" 
          v-bind:key="index"
          group="somegroup"           
          header-class="text-primary"
          expand-icon-class="text-primary"
        > 
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="corporate_fare" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section >
            <p class="text-primary">
              {{e.office}}
              <br>
              <span class="text-grey-8" v-text="e.company" ></span>
            </p>
          </q-item-section>
          <q-item-section side>
            <div class="row items-center">
              <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="e.dateInit"></span>
              <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="e.dateEnd"></span>
            </div>
          </q-item-section>
        </template>
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
        </q-expansion-item>
    </q-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { data, Idata } from './data'
@Component
export default class AccordionExperiences extends Vue {
  private experiencies: Array<Idata> = data  
}
</script>
