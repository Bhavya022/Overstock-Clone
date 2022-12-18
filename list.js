async function getData(url) {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
  
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  let cont = document.getElementById("prod-list");
  
  let selected_id = JSON.parse(localStorage.getItem("list_id")) || [];
  let res = JSON.parse(localStorage.getItem("list_id")) || [];
  
  let parent = document.getElementById("prod-list");
  let fav = document.getElementById("favorites");
  fav.innerHTML = `Favorites     ${selected_id.length} Items`;
  let listlength = document.getElementById("listLength");
  listlength.innerHTML = `Lists      1 Items`;
  
  function appendD(res, cont) {
    cont.innerHTML = " ";
    res.map(function (ele, index) {
      let rev = Math.round(Math.random() * 200) + 10;
  
      let div = document.createElement("div");
      div.id = "box";
  
      let image = document.createElement("img");
      image.src = ele.imageURL;
      image.id = "poster";
  
      let name = document.createElement("p");
      name.className = "name";
      name.innerText = ele.name;
  
      let price = document.createElement("p");
      price.className = "price";
      price.innerText = `Sale Starts at INR ${ele.price}`;
  
      let rating = document.createElement("p");
      rating.className = "rating";
      if (ele.rating > 0 && ele.rating <= 1.4) {
        rating.innerHTML = `${ele.rating} &#11088 `;
      } else if (ele.rating >= 1.5 && ele.rating < 2.4) {
        rating.innerHTML = `${ele.rating} &#11088 &#11088 `;
      } else if (ele.rating >= 2.5 && ele.rating <= 3.4) {
        rating.innerHTML = `${ele.rating} &#11088 &#11088 &#11088`;
      } else if (ele.rating >= 3.5 && ele.rating <= 4.4) {
        rating.innerHTML = `${ele.rating} &#11088&#11088 &#11088 &#11088 (${rev})`;
      } else if (ele.rating >= 4.5) {
        rating.innerHTML = `${ele.rating} &#11088  &#11088 &#11088 &#11088 &#11088 (${rev})`;
      }
      let buttons = document.createElement("div");
      let addCart_btn = document.createElement("button");
      addCart_btn.id = "addCart_btn";
      addCart_btn.textContent = "Add to Cart";
      addCart_btn.addEventListener("click", function () {
        addToCart(ele);
      });
      let remove = document.createElement("button");
      remove.innerText = "Remove";
      remove.id = "remove";
      remove.addEventListener("click", function () {
        removeItem(index);
      });
      function removeItem(index) {
        res.splice(index, 1);
        localStorage.setItem("list_id", JSON.stringify(res));
        appendD(res, cont);
      }
  
      buttons.append(addCart_btn, remove);
      buttons.id = "buttons";
      div.append(image, price, rating, name, buttons);
      cont.append(div);
    });
  }
  var cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  function addToCart(data) {
    console.log(data);
    console.log(cart);
    console.log(typeof cart);
    cart.push(data);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    //  window.location.href = "cart.html";
    alert("Cart added successfully");
  }
  
  appendD(res, parent);