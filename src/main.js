import { createApp } from 'vue'
import App from '@Component/App/App.vue'
import router from './router'
import store from './vuex/store.js'

// import VueCookie from 'vue-cookie'
// import Vue2GTM from '@gtm-support/vue2-gtm'


// import { enableGTM, gtmKey } from './config'

// let testing = true
// if (testing || process.env.NODE_ENV === 'production') {
//   Vue.use(Vue2GTM, {
//     id: process.env.TARGET_ENV === 'staging' ? gtmKey.staging : gtmKey.production, // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
//     // queryParams: {
//     //   // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
//     //   gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
//     //   gtm_preview: 'env-4',
//     //   gtm_cookies_win: 'x'
//     // },
//     enabled: enableGTM, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
//     // Whether or not display console logs debugs (optional)
//     debug: process.env.TARGET_ENV === 'staging',
//     loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
//     vueRouter: router, // Pass the router instance to automatically sync with router (optional)
//     ignoredViews: [], // Don't trigger events for specified router names (optional)
//     trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
//   })
// }

createApp(App).use(router).use(store).mount('#app')
