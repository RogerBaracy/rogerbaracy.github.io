<template>
  <q-layout view="lHh Lpr lFf" class="q-pl-xl q-pr-xl">
    <q-header elevated>
      <q-toolbar class="q-pl-xl q-pr-xl">
        <q-toolbar-title>
          Portfolio
        </q-toolbar-title>        
        <q-tabs v-model="tab" shrink stretch>
          <q-tab class="q-pr-md" label="Home" name="home" icon="home" />
          <q-tab class="q-pr-md" label="Projetos" name="settings" icon="settings" />
          <q-tab class="q-pr-md" label="Contato" name="email" icon="email" />
        </q-tabs>  
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
  private tab = 'home'
}
</script>
