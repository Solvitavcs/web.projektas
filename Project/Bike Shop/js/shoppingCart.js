// to use this function, html code has to have element with id=items
// also materilaize libarary should be used
function displayShopingCartList(){
    let shopingcart = getShopingCartList();

    for (let index = 0; index < shopingcart.length; index++) {
      const cartList = shopingcart[index];

      console.log(cartList);

      let template = '<section><article><div class="content"><div class="divide1"><section class="photo"><img class="materialboxed" width="100%" src="{{image}}"></section></div><div class="divide2"><section class="info"><h5>{{name}}</h5><p>{{description1}}</p><p>{{description2}}</p><p>{{description3}}</p><p>{{description4}}</p><div class="parameters"><h5>Specifications</h5><ul class="a"><li><strong>Frame:</strong>{{frame}}</li><li><strong>Chain:</strong>{{chain}}</li><li><strong>Tires:</strong>{{tire}}</li><li><strong>Shifters:</strong>{{shifters}}</li><li><strong>Weight:</strong>{{weight}}</li></ul></div></section></div><div class="divide3"><section class="price"><div id="price"><h6>Price:</h6><p>{{price}}</p></div><div class="button"><a href="#" class="button">Add to Cart<i class="material-icons">local_grocery_store</i></a></div></section></div></div></article></section><hr class="solid">';

      template = template.replace("{{image}}", cartList.image);
      template = template.replace("{{name}}", cartList.name);
      template = template.replace("{{description1}}", cartList.description1);
      template = template.replace("{{description2}}", cartList.description2);
      template = template.replace("{{description3}}", cartList.description3);
      template = template.replace("{{description4}}", cartList.description4);
      template = template.replace("{{frame}}", cartList.frame);
      template = template.replace("{{chain}}", cartList.chain);
      template = template.replace("{{tire}}", cartList.tire);
      template = template.replace("{{shifters}}", cartList.shifters);
      template = template.replace("{{weight}}", cartList.weight);
      template = template.replace("{{price}}", cartList.price);

      document.querySelector("#items").innerHTML += template;
      
    }
}
function getShopingCartList(){
    return [
        {
            image: "Images/shop/Bike-1.jpg",
            name: "Cannondale CAAD Optimo 1 Road Bike 2021",
            description1: "Where Performance Takes Off: A true performance road bike with race-winning DNA – delivering champagne experience for lemonade money.Where it thrives The open road, In competition What it's built for Speed, Handling, Durability.",
            description2: "Exceptional Aluminum Performance: Everything we know about aluminum road bikes in one space – refined tube profiles, precision butting, and double-pass welds create frames that are lighter and ride better than our competitors’ high-ticket alloy offerings.",
            description3: "Elite Race Geometry: With geometry influenced directly from our award-winning CAAD13 bike, the CAAD         Optimo offers true race handling and optimal body position at all times.",
            description4: "Ride Smoother with SAVE: Along with Optimo’s new dropped seatstay profile, finely engineered flex zones in the rear of the frame absorb road chatter for better comfort and control.",
            frame: " All-New SmartForm C2 Alloy, SAVE, tapered headtube, fender mounts, 130x9mm QR",
            chain: " KMC X11, 11-speed",
            tire: " 25, 700c",
            shifters: " Shimano 105, 11-speed",
            weight: " -",
            price: "1 549,99 €"
        },
        {
            image: "Images/shop/bike-2.jpg",
            name: "Cannondale Synapse Alloy Tiagra Road Bike 2021",
            description1: "A road bike that’s light, stiff, fast and surprisingly comfortable. Your rides will go longer. You'll barely notice.",
            description2: "Lightweight SmartForm C2 Alloy Frame w/ full carbon fork",
            description3: "Shimano Tiagra 10-speed drivetrain w/ dual chainring FSA crank",
            description4: "Promax Decoder R mechanical disc brakes",
            frame: " SmartForm C2 Alloy, SAVE, BB30, internal cable routingflat mount, 130x9mm QR",
            chain: " KMC X10EL, 10-speed",
            tire: " Vittoria Zaffiro, 700 x 30c",
            shifters: " Shimano Tiagra, 10-speed",
            weight: " -",
            price: "1 489,99 €"
        },
        {
            image: "Images/shop/bike-3.jpg",
            name: "Giant Propel Advanced Pro 1 Disc Ultegra Road Bike 2021",
            description1: "This composite road machine offers a true advantage for sprinting and solo riding. With its aero-engineered frameset, integrated WheelSystem and disc-brake technology, you have a new level of efficiency and road handling to help you aim for the podium.",
            description2: "AeroSystem Shaping, a result of CFD analysis and dynamic wind-tunnel testing, optimises aerodynamic performance at every yaw angle. The truncated ellipse airfoil tube shapes and Contact SL Aero cockpit help produce the best overall aero performance.",
            description3: "Integrated disc brakes deliver powerful stopping power and modulation for added control in variable weather. Thru-axles boost stiffness and improve overall handling, and an integrated WheelSystem with a 65mm rear rim and shallower 42mm front rim optimises aerodynamics and control.",
            description4: "Advanced-grade composite frameset features high-performance materials and modern manufacturing processes for optimised stiffness and the lowest weight in its category.",
            frame: " Advanced-Grade Composite, disc",
            chain: " KMC X11SL-1",
            tire: " Giant Gavia AC 1, tubeless,700x25c (max tyre width possible: 26mm)",
            shifters: " Shimano Ultegra",
            weight: " 8.1kg",
            price: "5 199,99 €"
        },
        {
            image: "Images/shop/bike-4.jpg",
            name: "Drag Master Pro Road Bike",
            description1: "The new CLARIS R2000 series correspond to entry riders. Riding style is not race oriented, but easy sports, long touring, town cruising with casual cloths, shopping and also commuting for daily use. The bike with CLARIS is a partner of the rider. Having the bike make riders feel happy. It’s sporty looks but it promises that the opportunity of comfortable riding. The Shimano Claris components guarantee a long and problem-free lifetime.",
            description2: "Master is an entry-level road bike with a comfortable geometry that helps you get the most out of longer rides while keeping aches and pains to a minimum.",
            description3: "",
            description4: "",
            frame: " Master 6-S Alloy",
            chain: " YBN S52",
            tire: " Schwalbe Lugano, Kevlard Guard, 28-622",
            shifters: " Shimano Claris R2000, 2×8 Speed",
            weight: " 10.4 kg",
            price: "939,99 €"
        }
    ];
}