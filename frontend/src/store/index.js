import {createStore} from 'vuex'
import axios from "axios";
import router from '../router'
import createPersistedState from "vuex-persistedstate";
//import toast from 'vue-toaster'

export default createStore({
    state: {
        appName: 'Hope UI',
        settings: {
            scheme: 'light',
            themeColor: 'theme-color-default',
            themeprimarycolor: '#3a57e8',
            themeinfocolor: '#079aa2',
            schemeDir: 'ltr',
            sidebarcolor: 'sidebar-white',
            sidebartype: {mini: '', hover: '', boxed: ''},
            sidebaractivestyle: 'navs-rounded-all',
            navbarstyle: '',
            subnavbarstyle: ''
        },
        userLoginData: {
            isLoginError: '',
            loginErrorMessage: '',
            loginToken: '',
            loginUser: '',
        }
    },
    plugins: [createPersistedState()],
    getters: {
        scheme: state => {
            return state.settings.scheme
        },
        themeColor: state => {
            return state.settings.themeColor
        },
        themePrimaryColor: state => {
            return state.settings.themeprimarycolor
        },
        themeinfoColor: state => {
            return state.settings.themeinfocolor
        },
        appName: state => {
            return state.appName
        },
        schemeDir: state => {
            return state.settings.schemeDir
        },
        sidebartypemini: state => {
            return state.settings.sidebartype.mini
        },
        sidebartypehover: state => {
            return state.settings.sidebartype.hover
        },
        sidebartypeboxed: state => {
            return state.settings.sidebartype.boxed
        },
        sidebarcolor: state => {
            return state.settings.sidebarcolor
        },
        sidebaractivestyle: state => {
            return state.settings.sidebaractivestyle
        },
        navbarstyle: state => {
            return state.settings.navbarstyle
        },
        subnavbarstyle: state => {
            return state.settings.subnavbarstyle
        },
        isLoginError: state => {
            return state.userLoginData.isLoginError
        },
        loginErrorMessage: state => {
            return state.userLoginData.loginErrorMessage
        },
        loginToken: state => {
            return state.userLoginData.loginToken
        },
        loginUser: state => {
            return state.userLoginData.loginUser
        }
    },
    mutations: {
        schemeModeCommit(state, payload) {
            sessionStorage.setItem('color-mode', payload)
            state.settings.scheme = payload
        },
        themecolorModeCommit(state, payload) {
            console.log(payload)
            sessionStorage.setItem('theme-mode', payload.p1)
            sessionStorage.setItem('themeprimary-mode', payload.p2)
            sessionStorage.setItem('colorcustomchart-mode', payload.p3)
            state.settings.themeColor = payload.p1
            state.settings.themeprimarycolor = payload.p2
            state.settings.themeinfocolor = payload.p3
        },
        schemedirModeCommit(state, payload) {
            sessionStorage.setItem('dir-mode', payload)
            state.settings.schemeDir = payload
        },
        sidebarcolorsCommit(state, payload) {
            state.settings.sidebarcolor = payload
            sessionStorage.setItem('sidebar-color', payload)
        },
        sidebarminitypeCommit(state, payload) {
            state.settings.sidebartype.mini = payload
            sessionStorage.setItem('type-mini', payload)
        },
        sidebarhovertypeCommit(state, payload) {
            state.settings.sidebartype.hover = payload
            sessionStorage.setItem('type-hover', payload)
        },
        sidebarboxedtypeCommit(state, payload) {
            state.settings.sidebartype.boxed = payload
            sessionStorage.setItem('type-boxed', payload)
        },
        sidebaractivestylesCommit(state, payload) {
            sessionStorage.setItem('sidebaractivestyle', payload)
            state.settings.sidebaractivestyle = payload
        },
        navbarstylesCommit(state, payload) {
            if (payload === 'navs-bg-color') {
                state.settings.subnavbarstyle = payload
                sessionStorage.setItem('navbarstyle', payload)
                state.settings.navbarstyle = ''
            } else {
                state.settings.navbarstyle = payload
                sessionStorage.setItem('navbarstyle', payload)
                state.settings.subnavbarstyle = ''
            }
        },
        defaultCommit(state) {
            state.settings.navbarstyle = ''
            state.settings.subnavbarstyle = ''
            sessionStorage.setItem('navbarstyle', state.settings.navbarstyle)
        },
        updateLoginStatusCommit(state, payload) {
            state.userLoginData.isLoginError = payload.strIsLoginError
            state.userLoginData.loginErrorMessage = payload.strLoginErrorMessage
        },
        setLoginUser(state, payload) {
            state.userLoginData.loginUser = payload
            localStorage.setItem('user', payload)
            //console.log(state.userLoginData.loginUser);
        },
        setLoginToken(state, payload) {
            state.userLoginData.loginToken = payload
            localStorage.setItem('token', payload)
        }
    },
    actions: {
        schemeModeAction(context, payload) {
            context.commit('schemeModeCommit', payload)
        },
        themecolorModeAction(context, payload) {
            context.commit('themecolorModeCommit', payload)
        },
        schemedirModeAction(context, payload) {
            context.commit('schemedirModeCommit', payload)
        },
        sidebarcolorsAction(context, payload) {
            context.commit('sidebarcolorsCommit', payload)
        },
        sidebarminitypeAction(context, payload) {
            context.commit('sidebarminitypeCommit', payload)
        },
        sidebarhovertypeAction(context, payload) {
            context.commit('sidebarhovertypeCommit', payload)
        },
        sidebarboxedtypeAction(context, payload) {
            context.commit('sidebarboxedtypeCommit', payload)
        },
        sidebaractivestyleAction(context, payload) {
            context.commit('sidebaractivestylesCommit', payload)
        },
        navbarstyleAction(context, payload) {
            context.commit('navbarstylesCommit', payload)
        },
        defaultAction(context, payload) {
            context.commit('defaultCommit', payload)
        },
        loginUser(context, payload) {
            let LoginStatus;
            return new Promise((resolve, reject) => {
                axios.post("login", {
                    email: payload.email,
                    password: payload.password,
                }).then(response => {
                    if ('error_message' in response.data) {
                        LoginStatus = {'strIsLoginError': 'Y', 'strLoginErrorMessage': 'Incorrect Email/Password. Please try again.'};
                        context.commit('updateLoginStatusCommit', LoginStatus)
                        resolve(response);
                    } else {
                        LoginStatus = {'strIsLoginError': '', 'strLoginErrorMessage': ''};
                        context.commit('updateLoginStatusCommit', LoginStatus);
                        context.commit('setLoginUser', response.data.user);
                        context.commit('setLoginToken', response.data.token);
                        router.push('/default');
                    }
                }, (error) => {
                    LoginStatus = {'strIsLoginError': 'Y', 'strLoginErrorMessage': 'Incorrect Email/Password. Please try again.'};
                    context.commit('updateLoginStatusCommit', LoginStatus)
                    reject(error);
                });
            });
        },
        logoutUser(context) {
            let LoginStatus;
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Accept': 'application/json'
            };
            let data;

            return new Promise((resolve, reject) => {
                axios.post("logout",data,{
                    headers: headers
                }).then(response => {
                    LoginStatus = {'strIsLoginError': '', 'strLoginErrorMessage': ''};
                    context.commit('updateLoginStatusCommit', LoginStatus);
                    context.commit('setLoginUser', '');
                    context.commit('setLoginToken', '');
                    router.push('/signin');
                }, (error) => {
                    reject(error);
                });
            });
        }
    }

})
