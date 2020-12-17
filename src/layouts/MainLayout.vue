<template>
  <q-layout view="lHh Lpr lFf" class="q-pl-xl q-pr-xl">
    <q-header elevated>
      <q-toolbar class="q-pl-xl q-pr-xl">
        <q-toolbar-title>
          Portfolio
        </q-toolbar-title>
        <div>
           <q-btn-group outline>
            <q-btn class="q-pr-md" label="Home" icon="home" />
            <q-btn class="q-pr-md" label="Projetos" icon="settings" />
            <q-btn class="q-pr-md" label="Contato" icon="email" />
          </q-btn-group>  
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class MainLayout extends Vue {
}
</script>
