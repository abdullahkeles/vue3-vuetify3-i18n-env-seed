// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import {createVuetify} from 'vuetify';
export default createVuetify({
    theme: {
        themes: {
            light: {
                dark: false,
                variables: {},
                colors: {
                    background: '#fcfcfc',
                    surface: '#FFFFFF',
                    primary: '#00796b',
                    secondary: '#4db6ac',
                    error: '#c52a46',
                    info: '#6fb8ea',
                    success: '#7abe58',
                    warning: '#eaa954',
                }
            }

        }
    }
});
