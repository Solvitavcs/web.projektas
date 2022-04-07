// to use this function, html code has to have element with id=shopMenu
// also materilaize libarary should be used
function displayShopLists(){
    let shopMenu = getShopLists();

        for (let index = 0; index < shopMenu.length; index++) {
            const shop = shopMenu[index];

            console.log(shop);

            let template = '<div class="col m3 s12"><div class=card><div class=card-image><img src={{image}}></div><div class="black card-action"><a href=bikes.html>{{name}}</a></div></div></div>';

            template = template.replace("{{image}}", shop.image);
            template = template.replace("{{name}}", shop.name);

            document.querySelector("#shopMenu").innerHTML += template;
        }
}
function getShopLists(){
    return [
        {
            image: "Images/shop/bike.jpg",
            name: "BIKES"
        },
        {
            image: "Images/shop/e-bike.jpg",
            name: "BELECTRIC BIKES"
        },
        {
            image: "Images/shop/kid-bike.jpg",
            name: "KIDS BIKES"            
        },
        {
            image: "Images/shop/clos.png",
            name: "CLOTHING"
        },
        {
            image: "Images/shop/acces.png",
            name: "ACCESSORIES"
        },
        {
            image: "Images/shop/maint.jpeg",
            name: "MAINTENANCE"
        },
        {
            image: "Images/shop/training.jpg",
            name: "TRAINING"
        },
        {
            image: "Images/shop/sale.jpg",
            name: "SALE"
        }
    ];
}