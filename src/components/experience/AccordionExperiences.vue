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
          <q-item-section avatar class="mobile-hide">
            <q-avatar icon="corporate_fare" color="primary" text-color="white"/>
          </q-item-section>
          <q-item-section >
            <p class="text-primary">
              {{e.office}}
              <br>
              <span class="text-grey-8" v-text="e.company" ></span>
            </p>
          </q-item-section>
          <q-item-section side class="mobile-hide">
            <div class="row items-center">
              <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="e.dateInit"></span>
              <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="e.dateEnd"></span>
            </div>
          </q-item-section>
        </template>
          <q-card>    
            <q-card-section class="q-pt-sm q-pl-md q-pr-sm q-pb-sm">
              <div class="row items-center mobile-only">
                <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="e.dateInit"></span>
                <q-icon name="date_range" color="primary" size="12px" /> <span class="q-pa-sm" v-text="e.dateEnd"></span>
              </div>
              <div class="row">
                <strong class="text-grey-8">Principais atividades: </strong>
              </div>
              <div class="row">
                <p v-text="e.activities"></p> 
              </div>
              <div class="row">
                <strong class="text-grey-8">Tecnologia utilizadas: </strong> 
              </div>
              <div class="row">
                <p v-text="e.technologies"></p>   
              </div>
              <div class="row">
                <strong v-if="e.outherTechnologies" class="text-grey-8"> Outras Tecnologias: </strong> 
              </div>  
              <div class="row">
                <p v-text="e.outherTechnologies? e.outherTechnologies: ''"></p>
              </div> 
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
