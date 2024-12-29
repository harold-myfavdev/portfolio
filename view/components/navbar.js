 // Define the Navbar Web Component
 class NavbarComponent extends HTMLElement {
    constructor() {
      super();
    //   this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.innerHTML = `
            <nav>
                <ul>                    
                    <li><a class="nav-link" href="/">HOME</a></li>
                    <li><a class="nav-link" href="/page1">PAGE1</a></li>
                    <li><a class="nav-link" href="/page2">PAGE2</a></li>
                </ul>
            </nav>            
      `;       
    }
  }

  // Register the custom element
  customElements.define('navbar-component', NavbarComponent);