class Navigation {
  // 1. describe and create/initiate our object
  constructor() {
    this.body = document.querySelector("body");
    this.mainNavigation = document.querySelector(".main-navigation");
    this.overlay = this.mainNavigation.querySelector(".overlay");
    this.toggler = this.mainNavigation.querySelector(".navbar-toggler");
    this.burgerMenu = document.querySelector(".burger");
    this.events()
  }

  // 2. events
  events() {
    this.burgerMenu.addEventListener("click", () => this.openMenu());
    document.addEventListener("swiped-right", this.openSideNav);
    document.addEventListener("swiped-left", this.closeSideNav);
  }

  // 3. methods (function, action...)
  openSideNav() {
    this.mainNavigation.classList.add('active');
  } 
  closeSideNav(){
    this.mainNavigation.classList.remove('active');
  }
  openMenu () {
    //console.log(this.burgerMenu.classList.contains('activated'));
    if (this.burgerMenu.classList.contains('activated')) {
      var delayInMilliseconds = 100; //5 second
      this.burgerMenu.classList.remove('activated');
      this.body.classList.remove('no-scroll');
      this.closeSideNav();
    } else {
      this.burgerMenu.classList.add('activated');
      this.body.classList.add('no-scroll');
      this.openSideNav();
    }
  };
}

export default Navigation