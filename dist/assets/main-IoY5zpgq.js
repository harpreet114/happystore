import{g as m,u as g,s as y,p}from"./updateCartValue-DN_nZs8e.js";let f=`<footer class="section-footer">
      <div class="footer-container container">
        <div class="content_1">
          <img src="./images/logo.png" alt="logo" />
          <p>
            Welcome to Happy EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discount</a>
        </div>
        <div class="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">Payment Method</a>
          <a href="" target="_blank">Delivery</a>
          <a href="" target="_blank">Return and Exchange</a>
        </div>
        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <p>Be the first to know about new<br />arrivals, sales & promos!</p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div class="f-design">
        <div class="f-design-txt">
          <p>Design and Code by Harpreet</p>
        </div>
      </div>
    </footer>`;const S=document.querySelector(".section-footer");S.insertAdjacentHTML("afterbegin",f);const h=(i,r,l)=>{let c=m();const n=document.querySelector(`#card${r}`);let t=n.querySelector(".productQuantity").innerText,o=n.querySelector(".productPrice").innerText;o=o.replace("₹","");let s=c.find(a=>a.id===r);if(s&&t>1){t=Number(s.quantity)+Number(t),o=Number(o*t);let a={id:r,quantity:t,price:o};a=c.map(u=>u.id===r?a:u),console.log(a),localStorage.setItem("cartProductLS",JSON.stringify(a))}if(s)return!1;o=Number(o*t),t=Number(t),c.push({id:r,quantity:t,price:o}),localStorage.setItem("cartProductLS",JSON.stringify(c)),g(c),y("add",r)},q=(i,r,l)=>{const n=document.querySelector(`#card${r}`).querySelector(".productQuantity");let t=parseInt(n.getAttribute("data-quantity"))||1;i.target.className=="cartIncrement"&&(t<l?t+=1:t==l&&(t=l)),i.target.className=="cartDecrement"&&(t>1?t-=1:t==1&&(t=1)),n.innerText=t,console.log(t),n.setAttribute("data-quantity",t)},v=document.querySelector("#productContainer"),b=document.querySelector("#productTemplate"),C=i=>{if(!i)return!1;i.forEach(r=>{const{brand:l,category:c,description:n,id:t,image:o,name:s,price:a,stock:u}=r,e=document.importNode(b.content,!0);console.log(e),e.querySelector("#cardvalue").setAttribute("id",`card${t}`),e.querySelector(".productName").textContent=s,e.querySelector(".productImage").src=o,e.querySelector(".productImage").alt=s,e.querySelector(".productDescription").textContent=n,e.querySelector(".category").textContent=c,e.querySelector(".productPrice").textContent=`₹${a}`,e.querySelector(".productActualPrice").textContent=`₹${4*a}`,e.querySelector(".productStock").textContent=u,e.querySelector(".stockElement").addEventListener("click",d=>{q(d,t,u)}),e.querySelector(".add-to-cart-button").addEventListener("click",d=>{h(d,t)}),v.append(e)})};C(p);console.log(p);
