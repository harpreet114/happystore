const nav = `<section class="top_txt">
        <div class="head container">
          <div class="head_txt">
            <p>Free shipping, 30 day return or refund gurantee.</p>

          </div>
          <div class="sing_in_up">
            <a href="#">SIGN IN</a>
            <a href="#">SIGN UP</a>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="navbar-brand">

          <a href="index.html">
            <img src="./images/logo.png" alt="Happy eCommerce logo" style="height: 112px; width: 120px;" class="logo" width="80%" height="auto">
          </a>
      </div>
      <nav class="navbar">
        <ul>

          <li class="nav-item"><a href="/" class="nav-link">Home</a>
          </li>
          
          
          <li class ="nav-item"><a href="products.html" class="nav-link">products</a></li>
          <li class ="nav-item"><a href="contact.html" class="nav-link">contact</a></li>
          <li class="nav-item"><a href="addToCart.html" class="nav-link add-to-cart-button " id="cartValue"><i class="fa fa-shopping-cart" aria-hidden="true"> 0 </i>

          </a></li>
        </ul>
      </nav>
      </div>`;
const navbar = document.querySelector(".section-navbar");
navbar.insertAdjacentHTML("afterbegin", nav);