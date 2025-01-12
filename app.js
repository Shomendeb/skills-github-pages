// -----------Load API Data Start-----------//
const loadProducts = () => {
  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: "259",
      },
    },
    {
      id: 3,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 4,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 5,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 6,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 7,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 8,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 9,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 10,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 11,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 12,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
  ];
  showProducts(data);
  return data;
};
// -----------Load API Data End-----------//

// -----------Show All Products In UI-----//
const showProducts = (products) => {
  const allProducts = products.map((pd) => pd);  
  for (const product of allProducts) {
    const image = product.image;
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<div class="single-product">
      <div>
    <img class="product-image" src=${image}></img>
      </div>
      <h4>${product.title}</h4>
      <p>Category: ${product.category}</p>
      <p>Price: $ ${product.price}</p>
      <p>Rating:  ${product.rating.rate}</p>
      <p>Reviews:  ${product.rating.count}</p>

      <button style="background-color: #FF136F
      ";
      onclick="addToCart(${product.id},${product.price})",id="addToCart-btn"
      class="buy-now btn btn-primary">add to cart</button>
      </div>
      `;
    document.getElementById("all-products").appendChild(div);
  }
};

let count = 0;


const addToCart = (id,price) => {
  // count = count + 1;
  count += 1;
  updatePrice("price", price);
  updateTaxandCharge();
  document.getElementById("total-Products").innerText = count;

  const table = document.getElementById("cart_details").getElementsByTagName('tbody')[0];

  if(existence(id)==0)
  {
    const newRow = table.insertRow();
    //newRow.id=id;
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    const result=loadProducts();

    //console.log(result.data["title"]);

    cell1.innerHTML = id; 
    //cell2.innerHTML = result[id].title;//result.title;
    cell2.innerHTML = result[id].category;//category;//result.category;
    cell3.innerHTML = price;
    cell4.innerHTML = `<button type="button" onclick="decreaseQuantity(${id},${price})">-</button>
                      <input type="number" class="Qtytextbar" id=${id}>
                      <button type="button" onclick="increaseQuantity(${id},${price})">+</button>`;
    cell5.innerHTML= `<button type="button" class="removeBtn" onclick="removeItem(${id},${price})">Remove</button>`;

    addeditemrecord.items.push({
      id: id,
      happens: 1
    });

    document.getElementById(`${id}`).value=1;//String(addeditemrecord.items[1].happens); 
  }
  else
  {
    document.getElementById(`${id}`).value= updatequantity(id); 
    //addeditemrecord.items[addeditemrecord.items.length].happens=updatequantity(id);
  } 
};

const addeditemrecord={
  items: [
    {
      id: 0,
      happens: 0
    }
  ]
};

const existence = (id) =>{
  
  let exist=0; 

  for(let i in addeditemrecord.items)
  {
      if(addeditemrecord.items[i].id==id)
      {
        exist=1;        
      }      
  }
  return exist;
};
const updatequantity = (id) => {

  let quantitycount=0;

  for(let i in addeditemrecord.items)
  {
      if(addeditemrecord.items[i].id==id)
      {
        addeditemrecord.items[i].happens+=1;        
        quantitycount=addeditemrecord.items[i].happens;
      }      
  }
  
  return quantitycount;
}; 

const increaseQuantity = (id,price) =>{
  count += 1;
  updatePrice("price", price);
  updateTaxandCharge();
  document.getElementById("total-Products").innerText = count;

  const input = document.getElementById(id);
  input.value = parseInt(input.value) + 1 || 0; 

  for(let i in addeditemrecord.items)
  {
      if(addeditemrecord.items[i].id==id)
      {
        addeditemrecord.items[i].happens+=1; 
        
      }      
  }
};
const decreaseQuantity = (id,price) =>{ 

  const input = document.getElementById(id);

  if(parseInt(input.value-1)==0)
  {
    document.getElementById("price").innerText=0
    document.getElementById("total-tax").innerText=0
    document.getElementById("delivery-charge").innerText=0
    document.getElementById("total").innerText=0    

    document.getElementById("total-Products").innerText = 0;

    input.value = 0;
    count=0;
  }
  else
  {
    if (parseInt(input.value-1)<0)
    {
      alert('you cannot input negative quantity')
    }
    else
    {
      count -= 1;
      decreasedPrice("price", price);
      updateTaxandCharge();
      document.getElementById("total-Products").innerText = count;
      input.value = parseInt(input.value) - 1 || 0;

      for(let i in addeditemrecord.items)
      {
        if(addeditemrecord.items[i].id==id)
        {
          addeditemrecord.items[i].happens-=1; 
        }      
      }
    }
  }     
};

const removeItem = (id,price) =>{

  const itemIndex = addeditemrecord.items.findIndex(items => items.id === id);  

  // If the item is found, delete the item
  if (itemIndex !== -1) {
    const totalitems= parseInt(document.getElementById("total-Products").innerText);
    document.getElementById("total-Products").innerText= String(totalitems - addeditemrecord.items[itemIndex].happens);
    count=parseInt(document.getElementById("total-Products").innerText);
    addeditemrecord.items[itemIndex].happens=count;

    decreasedPrice("price", price);
    updateTaxandCharge();

    addeditemrecord.items.splice(itemIndex, 1); // Remove the item from the array
    console.log(`Item with ID ${id} has been removed.`);      

    const table = document.getElementById('cart_details');

    // Add event listener to the table to handle the remove button click
    table.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('removeBtn')) {
            // Find the row of the clicked remove button
            const row = event.target.closest('tr');
            // Remove the row from the table
            row.remove();
            //count-=1
        }
    });
    if(parseInt(document.getElementById("total-Products").innerText)==0)
    {
      document.getElementById("price").innerText=0
      document.getElementById("total-tax").innerText=0
      document.getElementById("delivery-charge").innerText=0
      document.getElementById("total").innerText=0    

      document.getElementById("total-Products").innerText = 0;
      document.getElementById("discount").innerText = 0;
      document.getElementById("discountamount").innerText = 0;
      document.getElementById("totalafterdiscount").innerText = 0;

      //count=0;
    }
  } else {
    console.log(`Item with ID ${id} not found.`);
  }
};
// Price, Delivery, Tax update
const getInputValue = (id) => {
  const element = document.getElementById(id).innerText;
  const converted = parseFloat(element);
  return converted;
};

// Set InnerText Function
const setInnerText = (id, value) => {
  document.getElementById(id).innerText = value.toFixed(2);
};

// Main Price / Update Price
const updatePrice = (id, value) => {
  const convertOldPrice = getInputValue(id);
  const convertPrice = parseFloat(value);
  const total = parseFloat(convertOldPrice + convertPrice).toFixed(2);  
  document.getElementById(id).innerText = total;  
};

const decreasedPrice = (id, value) => {
  const convertOldPrice = getInputValue(id);
  const convertPrice = parseFloat(value);
  const total = parseFloat(convertOldPrice - convertPrice).toFixed(2);
  document.getElementById(id).innerText = total;
};

// Update Delivery charge, Tax

const updateTaxandCharge = () => {
  const priceConverted = getInputValue("price");
  if (priceConverted > 200) {
    setInnerText("delivery-charge", 30);
    setInnerText("total-tax", priceConverted * 0.2);
  }
  if (priceConverted > 400) {
    setInnerText("delivery-charge", 60);
    setInnerText("total-tax", priceConverted * 0.3);
  }
  if (priceConverted > 500) {
    setInnerText("delivery-charge", 80);
    setInnerText("total-tax", priceConverted * 0.4);
  }
  updateTotal();
};

// Grand Total
const updateTotal = () => {
  const grandTotal =
    getInputValue("price") +
    getInputValue("delivery-charge") +
    getInputValue("total-tax");
  document.getElementById("total").innerText = grandTotal.toFixed(2);
};


const applyPromoCode= () =>{
  const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();
  let discount=0;

  if (localStorage.getItem('promoCodeApplied') === promoCode)
  {
    alert('Promo code already applied!');    
  }
  else
  {
    if(promoCode=="OSTAD10")
    {
      discount=0.1;
      document.getElementById("discount").innerText="10%"
      localStorage.setItem('promoCodeApplied', promoCode);
    }
    else
    {
      if(promoCode=="OSTAD5")
      {
        discount=0.05;
        document.getElementById("discount").innerText="5%"
        localStorage.setItem('promoCodeApplied', promoCode);
      }
      else{
        alert("Invalid promocode!");
      }
    }
  }
  
  const discounted = parseFloat(parseFloat(document.getElementById("total").innerText) * discount).toFixed(2);
  const final_total = parseFloat(parseFloat(document.getElementById("total").innerText)-discounted).toFixed(2);

  document.getElementById("discountamount").innerText = String(discounted);
  document.getElementById("totalafterdiscount").innerText = String(final_total);
}; 

loadProducts();