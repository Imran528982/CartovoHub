export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="logo">
              <div className="logo-icon">C</div>
              <div className="logo-text">
                Cartovo<span>Hub</span>
              </div>
            </a>

            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="YouTube">▶</a>
              <a href="#" className="social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Flash Deals</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>



          {/* Support */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CartovoHub. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
