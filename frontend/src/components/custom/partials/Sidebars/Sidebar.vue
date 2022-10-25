<template>
    <aside :class="`sidebar sidebar-default ${ minisidebar? 'sidebar-mini':''} ${stateSidebarActiveStyle} ${stateminiclass}`">
        <div class="sidebar-header d-flex align-items-center justify-content-start">
            <router-link :to="{ name: 'default.dashboard'}" class="navbar-brand">
                <logo />
                <h4 class="logo-title">Hope UI</h4>
            </router-link>
            <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
                <i class="icon">
                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="SidebarMini">
                        <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </i>
            </div>
        </div>
        <div class="sidebar-body pt-0 data-scrollbar">
          <div class="sidebar-list">
            <verticalnav />
          </div>
        </div>
        <div class="sidebar-footer"></div>
    </aside>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'
import verticalnav from '@/components/custom/partials/Sidebars/Verticalnav.vue'
import logo from '@/components/custom/Logo/logo.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Sidebar',
  components: {
    verticalnav,
    logo
  },
  props: {
    minisidebar: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters({
    //   stateSidebarColor: 'sidebarcolor',
      stateSidebarActiveStyle: 'sidebaractivestyle',
      stateminiclass: 'sidebartypemini',
    //   statehoverclass: 'sidebartypehover',
    //   stateboxedclass: 'sidebartypeboxed'
    })
  },
  watch: {
    stateminiclass () {
      this.onminiclass()
    },
    stateSidebarActiveStyle () {
      this.onsidebaractivestyle()
    },
  },
  methods: {
    ...mapActions({
      sidebarminitypeChange: 'sidebarminitypeAction',
      sidebaractivestyleChange: 'sidebaractivestyleAction'
    }),
    SidebarMini () {
      this.$emit('makeminisidebar', !this.minisidebar)
    },
    onsidebaractivestyle () {
      const SidebarActiveStyle = sessionStorage.getItem('sidebaractivestyle')
      if (SidebarActiveStyle !== null) { this.sidebaractivestyleChange(SidebarActiveStyle) } else {
        this.sidebaractivestyleChange(this.stateSidebarActiveStyle)
      }
    },
    onminiclass () {
      const miniclass = sessionStorage.getItem('type-mini')
      if (miniclass !== null || miniclass !== undefined) {
        this.sidebarminitypeChange(miniclass)
      } else {
        this.sidebarminitypeChange(this.stateminiclass)
      }
    },
  }

}
</script>
