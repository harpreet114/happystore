(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const o=`<section class="top_txt">
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
      </div>`,c=document.querySelector(".section-navbar");c.insertAdjacentHTML("afterbegin",o);const l=[{id:1,name:"Laptop",category:"Computer",brand:"ExampleBrand",price:999.99,stock:50,image:"../images/lappi.png",description:"Powerful laptop with a quad-core i5 processor, 8GB RAM, 256 SSD, and a 14-inch FHD display."},{id:2,name:"Smartphone",category:"Mobiles",brand:"TechGadget",price:499.99,stock:100,image:"../images/iphone.png",description:"Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera , 128 storage, and a 400mAh battery."},{id:3,name:"Wireless Headphones",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"../images/wirelessheadphone.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:4,name:"Watches",category:"Wearables",brand:"FitTech",price:199.99,stock:20,image:"../images/watche.png",description:"Smatwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."},{id:5,name:"Speakers",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"../images/headphones.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:6,name:"Television",category:"Video",brand:"Samsung",price:199.99,stock:20,image:"../images/tv.png",description:"Smatwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."}],p=()=>{let t=localStorage.getItem("cartProductLS");return t?(t=JSON.parse(t),t):[]};function u(t,i){const r=document.createElement("div");r.classList.add("toast"),t==="add"?r.textContent=`Product with ID ${i} has been added`:r.textContent=`Product with ID ${i} has been deleted`,document.body.appendChild(r),setTimeout(()=>{r.remove()},2e3)}const d=document.querySelector("#cartValue"),h=t=>d.innerHTML=`<i class="fa fa-shopping-cart" aria-hidden="true"> ${t.length} </i>`;export{p as g,l as p,u as s,h as u};
