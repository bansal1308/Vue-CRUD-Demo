// Register global components
export default {
  install: (app, options) => {

    const componentFiles = import.meta.glob([
          '@/components/bootstrap/dropdown/*.vue',
          '@/components/custom/loader/*.vue',
          '@/components/bootstrap/Alert/*.vue',
          '@/components/bootstrap/Buttons/*.vue',
          '@/components/bootstrap/ButtonGroup/*.vue',
          '@/components/bootstrap/ListGroup/*.vue',
          '@/components/bootstrap/offcanvas/*.vue',
          '@/components/bootstrap/pagination/*.vue',
          '@/components/bootstrap/ScrollSpy/*.vue',
        ]
        , { eager: true });

    // console.log(Object.entries(componentFiles));

    Object.entries(componentFiles).forEach(([path, m]) => {
      app.component(
          `${path}`, m.default
      );
    })

    // app.component('accordion', require('@/components/bootstrap/Accordion/accordion').default)
    // app.component('loader', require('@/components/custom/loader/loader').default)
    // app.component('accordion-header', require('@/components/bootstrap/Accordion/accordion-header').default)
    // app.component('accordion-body', require('@/components/bootstrap/Accordion/accordion-body').default)
    // app.component('alert', require('@/components/bootstrap/Alert/alert').default)
    // app.component('badge', require('@/components/bootstrap/Badges/badge').default)
    // app.component('innercontent', require('@/components/bootstrap/Badges/innercontent').default)
    // app.component('breadcrumb', require('@/components/bootstrap/Breadcrumb/breadcrumb').default)
    // app.component('breadcrumbcontent', require('@/components/bootstrap/Breadcrumb/breadcrumbcontent').default)
    // app.component('buttons', require('@/components/bootstrap/Buttons/buttons').default)
    // app.component('buttongroup', require('@/components/bootstrap/ButtonGroup/buttongroup').default)
    // app.component('groupcontent', require('@/components/bootstrap/ButtonGroup/groupcontent').default)
    // app.component('iq-card', require('@/components/bootstrap/Cards/iq-card').default)
    // app.component('cards', require('@/components/bootstrap/Cards/cards').default)
    // app.component('cardbody', require('@/components/bootstrap/Cards/cardbody').default)
    // app.component('cardheader', require('@/components/bootstrap/Cards/cardheader').default)
    // app.component('carousels', require('@/components/bootstrap/carousel/carousels').default)
    // app.component('carouselCaption', require('@/components/bootstrap/carousel/carouselCaption').default)
    // app.component('carouselIndicator', require('@/components/bootstrap/carousel/carouselIndicator').default)
    // app.component('carouselItems', require('@/components/bootstrap/carousel/carouselItems').default)
    // app.component('dropdown', require('@/components/bootstrap/dropdown/dropdown').default)
    // app.component('dropdown-items', require('@/components/bootstrap/dropdown/dropdown-items').default)
    // app.component('listgroup', require('@/components/bootstrap/ListGroup/listgroup').default)
    // app.component('list-content', require('@/components/bootstrap/ListGroup/list-content').default)
    // app.component('modal', require('@/components/bootstrap/modal/modal').default)
    // app.component('model-header', require('@/components/bootstrap/modal/model-header').default)
    // app.component('model-body', require('@/components/bootstrap/modal/model-body').default)
    // app.component('model-footer', require('@/components/bootstrap/modal/model-footer').default)
    // app.component('tab-nav', require('@/components/bootstrap/tab/tab-nav').default)
    // app.component('tab-nav-items', require('@/components/bootstrap/tab/tab-nav-items').default)
    // app.component('tab-content', require('@/components/bootstrap/tab/tab-content').default)
    // app.component('tab-content-item', require('@/components/bootstrap/tab/tab-content-item').default)
    // app.component('offcanvas', require('@/components/bootstrap/offcanvas/offcanvas').default)
    // app.component('offcanvas-header', require('@/components/bootstrap/offcanvas/offcanvas-header').default)
    // app.component('offcanvas-body', require('@/components/bootstrap/offcanvas/offcanvas-body').default)
    // app.component('pagination', require('@/components/bootstrap/pagination/pagination').default)
    // app.component('pagination-content', require('@/components/bootstrap/pagination/pagination-content').default)
    // app.component('progressbar', require('@/components/bootstrap/Progressbar/progressbar').default)
    // app.component('progressfill', require('@/components/bootstrap/Progressbar/progressfill').default)
    // app.component('popover', require('@/components/bootstrap/popover/popover').default)
    // app.component('spinner', require('@/components/bootstrap/Spinners/spinner').default)
    // app.component('spinnercontent', require('@/components/bootstrap/Spinners/spinnercontent').default)
    // app.component('toast', require('@/components/bootstrap/toasts/toast').default)
    // app.component('toast-header', require('@/components/bootstrap/toasts/toast-header').default)
    // app.component('toast-body', require('@/components/bootstrap/toasts/toast-body').default)
    // app.component('tooltip', require('@/components/bootstrap/tooltip/tooltip').default)
    // app.component('sliders', require('@/components/bootstrap/Sliders/sliders').default)
    // app.component('navbar', require('@/components/bootstrap/Navbar/navbar').default)
    // app.component('navbar-item', require('@/components/bootstrap/Navbar/navbar-item').default)
    // app.component('navbar-content', require('@/components/bootstrap/Navbar/navbar-content').default)
    // app.component('scrollspy-nav', require('@/components/bootstrap/ScrollSpy/scrollspy-nav').default)
    // app.component('scrollspy-navitem', require('@/components/bootstrap/ScrollSpy/scrollspy-navitem').default)
    // app.component('scrollspy', require('@/components/bootstrap/ScrollSpy/scrollspy').default)
    // app.component('scrollspy-navitem-content', require('@/components/bootstrap/ScrollSpy/scrollspy-navitem-content').default)
  }
}
