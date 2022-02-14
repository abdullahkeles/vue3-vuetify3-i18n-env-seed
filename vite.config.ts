import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {vueI18n} from "@intlify/vite-plugin-vue-i18n";
import path from 'path'
import {ViteWebfontDownload} from "vite-plugin-webfont-dl";
import vuetify from "@vuetify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            include: path.resolve(__dirname, './**/locales/**'),
            //compositionOnly: false,
        }),
        vuetify({autoImport: true}),
        ViteWebfontDownload(['https://fonts.googleapis.com/css2?family=Roboto&display=swap3'])
    ]
})
