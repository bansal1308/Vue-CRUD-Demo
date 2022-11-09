<template>
    <!-- loader Start -->
    <!--  <div id="loading">-->
    <!--    <loader />-->
    <!--  </div>-->
    <!-- loader END -->
    <Sidebar :minisidebar="sidebarmini" @makeminisidebar="onsidebarmini"/>
    <main class="main-content">
        <!--    <div class="position-relative">-->
        <!--Nav Start-->
        <HeaderStyle1 :fullsidebar="sidebarmini" @makefullsidebar="onfullsidebar"/>
        <SubHeader :statesubNavbarStyle="stateNavbarStyle"/>
        <!--Nav End-->
        <!--    </div>-->
        <div class="conatiner-fluid content-inner mt-n5 py-0">
            <router-view/>
        </div>
        <!--    <Footer />-->
    </main>
    <!-- Wrapper End-->
</template>
<script>
import Footer from "../components/custom/partials/Footer/Footer.vue";
import Sidebar from "../components/custom/partials/Sidebars/Sidebar.vue";
import HeaderStyle1 from "../components/custom/partials/Header/HeaderStyle1.vue";
import SubHeader from "../components/custom/partials/Header/SubHeader.vue";
import {mapGetters} from "vuex";

export default {
    name: "default",
    components: {
        Footer,
        Sidebar,
        HeaderStyle1,
        SubHeader,
    },
    data() {
        return {
            sidebarmini: false,
        };
    },
    computed: {
        ...mapGetters({
            stateNavbarStyle: "subnavbarstyle",
            stateLoginUser: 'loginUser',
            stateLoginToken: 'loginToken',
        }),
    },
    methods: {
        onsidebarmini(e) {
            this.sidebarmini = e;
        },
        onfullsidebar(e) {
            this.sidebarmini = e;
        },
    },
};
</script>
