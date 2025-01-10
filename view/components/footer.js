 // Define the Navbar Web Component
 class FooterComponent extends HTMLElement {
    constructor() {
      super();
    //   this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.innerHTML = `
        <footer class="px-5 py-3">
          <div style="max-width: 1200px; margin: auto; display: flex; flex-wrap: wrap; justify-content: space-between; column-gap: 1.5em">
            <!-- About Section -->
            <div style="flex: 1; min-width: 250px; margin-bottom: 20px;">
              <h3 style="margin-bottom: 10px; color: #00adb5;">About Me</h3>
              <p>
                Hi, I’m <strong>Harold</strong>, a self-taught developer and a proud member of the PWD community, passionate about building apps that solve real-world problems. Let's bring your ideas to life!
              </p>
            </div>

            <!-- Quick Links -->
            <div style="flex: 1; min-width: 250px; margin-bottom: 20px;">
              <h3 style="margin-bottom: 10px; color: #00adb5;">Quick Links</h3>
              <ul style="list-style: none; padding: 0;">
                <li><a href="/about" style="color: #f2f2f2; text-decoration: none;">About</a></li>
                <li><a href="/portfolio" style="color: #f2f2f2; text-decoration: none;">Portfolio</a></li>
                <li><a href="/services" style="color: #f2f2f2; text-decoration: none;">Services</a></li>
                <li><a href="/contact" style="color: #f2f2f2; text-decoration: none;">Contact</a></li>
              </ul>
            </div>

            <!-- Contact Section -->
            <div style="flex: 1; min-width: 250px; margin-bottom: 20px;">
              <h3 style="margin-bottom: 10px; color: #00adb5;">Contact</h3>
              <p>Email: <a href="mailto:harold@myfav.dev" style="color: #f2f2f2; text-decoration: none;">harold@myfav.dev</a></p>
              <p>Phone: <a href="tel:+1234567890" style="color: #f2f2f2; text-decoration: none;">+123 456 7890</a></p>
              <div style="margin-top: 10px;">
                <a href="https://github.com/yourprofile" target="_blank" style="color: #f2f2f2; margin-right: 15px; text-decoration: none;">
                  <i class="fab fa-github"></i> GitHub
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" style="color: #f2f2f2; margin-right: 15px; text-decoration: none;">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" style="color: #f2f2f2; text-decoration: none;">
                  <i class="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
          </div>

          <!-- Bottom Section -->
          <div style="border-top: 1px solid #333; margin-top: 20px; padding-top: 10px; text-align: center;">
            <p class="m-0">© <span id="year"></span> myfav. All Rights Reserved. | <a href="/privacy-policy" style="color: #00adb5; text-decoration: none;">Privacy Policy</a></p>
          </div>
        </footer>
      `;       
    }
  }

  // Register the custom element
  customElements.define('footer-component', FooterComponent);
  
  // Set the current year dynamically
  document.getElementById('year').textContent = new Date().getFullYear();