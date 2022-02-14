<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {watchEffect, ref} from "vue";

const leftDrawer = ref(true);
const version = import.meta.env.VITE_APP_VERSION;
const {locale, t} = useI18n();
watchEffect(() => {
  document.title = t('appName');
});

</script>
<template>
  <v-app>
    <v-app-bar  density="compact">
      <v-app-bar-nav-icon class="text-primary" @click="leftDrawer=!leftDrawer"/>
      <v-app-bar-title class="text-primary" >Brand</v-app-bar-title>
      <v-spacer/>

    </v-app-bar>
    <v-navigation-drawer v-model="leftDrawer">
      <v-list density="compact" nav>
        <v-list-item active-color="primary" title="Left Menu 1" value="lm1"></v-list-item>
        <v-list-item active-color="primary" title="Left Menu 2" value="lm2"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item key="en">
            <v-list-item-title>en-EN</v-list-item-title>
          </v-list-item>
          <v-list-item key="tr">
            <v-list-item-title>tr-TR</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
      <form>
        <label>{{ t('language') }}</label>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="tr">tr</option>
        </select>
      </form>
      <dl>
        <dt>version</dt>
        <dd>{{ version }}</dd>
      </dl>
      <dl>
        <dt>i18n</dt>
        <dd v-t="'appName'"></dd>
      </dl>
      <dl>
        <dt>language</dt>
        <dd>{{ t('language') }}</dd>
      </dl>
    </v-main>
  </v-app>
</template>
