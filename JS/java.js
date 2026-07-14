// Hero Slider
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 5000);

}

//navbar
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

const overlay =
document.getElementById("overlay");

menuBtn.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

    overlay.classList.toggle("show");

    document.body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", ()=>{

    navLinks.classList.remove("active");

    overlay.classList.remove("show");

    document.body.classList.remove("no-scroll");
});

const navItems =
document.querySelectorAll(".nav-links a");

navItems.forEach(link=>{

    link.addEventListener("click", ()=>{

        navLinks.classList.remove("active");

        overlay.classList.remove("show");

    });

});


const sections =
document.querySelectorAll(".fade-in");

const observer =
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

// quote form //
const form = document.getElementById("quoteForm");

 if (form) {

   form.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if(name.length < 2){
        showError("Please enter a valid name.");
        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        showError("Please enter a valid email.");
        return;
    }

    if(phone.length < 10){
        showError("Please enter a valid phone number.");
        return;
    }

    if(message.length < 10){
        showError("Please provide more details.");
        return;
    }

    showSuccess(
        "Thank you! Your quote request has been sent."
    );

 });


}





//Back To Top
const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// review card
// Review Slider
const track = document.querySelector(".review-track");
const cards = document.querySelectorAll(".reviews-card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentReview = 0;

if (track && nextBtn && prevBtn && cards.length > 0) {

    function updateSlider() {
        track.style.transform = `translateX(-${currentReview * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {

        currentReview++;

        if (currentReview >= cards.length) {
            currentReview = 0;
        }

        updateSlider();

    });

    prevBtn.addEventListener("click", () => {

        currentReview--;

        if (currentReview < 0) {
            currentReview = cards.length - 1;
        }

        updateSlider();

    });

}

// filter Btn
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

function filterProducts(filter){

    productCards.forEach(card => {

        if(filter === "all" || card.dataset.category === filter){

            card.classList.remove("hide");

        }else{

            card.classList.add("hide");

        }

    });

}
filterBtns.forEach(button => {

    button.addEventListener("click", function(){

        filterBtns.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        filterProducts(this.dataset.filter);

    });

});
const params = new URLSearchParams(window.location.search);

const category = params.get("category");

if(category){

    filterProducts(category);

    filterBtns.forEach(btn => {

        if(btn.dataset.filter === category){

            btn.classList.add("active");

        }else{

            btn.classList.remove("active");

        }

    });

}


// Product page //
const products = [
    {
        id:1,
        name: "Luxury L-Shaped Sofa",
        sku: "LR-1001",
        image: "Assets/Images/L-sofa.jpg",
        category: "Living Room",
        description: "Modern and elegant sofa designed for comfort and style.",
        material: "Premium Fabric",
        stock: "In Stock",
        price: "₦1,250,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:2,
        name: "Coffee Table",
        sku: "LR-1002",
        image: "Assets/Images/Unique-coffee-table.jpg",
        category: "Living Room",
        description: "Round Stylish coffee table",
        material: "Wood",
        stock: "In Stock",
        price: "₦350,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:3,
        name: "Queens Bed",
        sku: "BR-1001",
        image: "Assets/Images/queen-size-bed.jpg",
        category: "Bedroom",
        description: "Beautiful queen size bed",
        material: "Wood",
        stock: "In Stock",
        price: "₦850,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:4,
        name: "Wardrobe",
        sku: "BR-1002",
        image: "Assets/Images/wardrobes-gray.jpg",
        category: "Bedroom",
        description: "Gray wooding wardrobe",
        material: "Wood",
        stock: "In Stock",
        price: "₦600,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:5,
        name: "Executive Chair",
        sku: "OF-1001",
        image: "Assets/Images/office-chair-brown.jpg",
        category: "Office",
        description: "Brown leather office chair",
        material: "leather",
        stock: "In Stock",
        price: "₦220,000",
        brand: "",
        warranty: "12 Months",
    },
    
    {
        id:6,
        name: "Office Set",
        sku: "OF-1002",
        image: "Assets/Images/office-furniture-set.png",
        category: "Office",
        description: "Blown and Gray Wooding Office Table with Office Chair",
        material: "Wood",
        stock: "In Stock",
        price: "₦630,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:7,
        name: "Outdoor Sofa",
        sku: "OD-1001",
        image: "Assets/Images/Fire-Pit-scaled.jpg",
        category: "Outdoor",
        description: "Outdoor Sofa Set",
        material: "Wood",
        stock: "In Stock",
        price: "₦400,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:8,
        name: "Coffee Table",
        sku: "LR-1003",
        image: "Assets/Images/simple-coffee-table.jpg",
        category: "Living Room",
        description: "Simple wooding coffee table",
        material: "Wood",
        stock: "In Stock",
        price: "₦120,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:9,
        name: "Wardrobe",
        sku: "BR-1003",
        image: "Assets/Images/wood-wardrobe.jpg",
        category: "Bedroom",
        description: "Brown wooding wardrobe",
        material: "Wood",
        stock: "In Stock",
        price: "₦500,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:10,
        name: "Single Sofa",
        sku: "LR-1004",
        image: "Assets/Images/Single-sofa.jpg",
        category: "Living Room",
        description: "Single sofa",
        material: "Wood",
        stock: "In Stock",
        price: "₦180,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:11,
        name: "Kids bed",
        sku: "KD-1001",
        image: "Assets/Images/baby-bed.jpg",
        category: "Kids",
        description: "Kids bed",
        material: "Wood",
        stock: "In Stock",
        price: "₦200,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:12,
        name: "Office Table",
        sku: "OF-1003",
        image: "Assets/Images/office-desk.jpg",
        category: "Office",
        description: "Office Deck with 2 Chairs",
        material: "Wood",
        stock: "In Stock",
        price: "₦350,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:13,
        name: "Sofa",
        sku: "LR-1005",
        image: "Assets/Images/Brown-Sofa.jpg",
        category: "Living Room",
        description: "Nice brown sofa",
        material: "Wood",
        stock: "In Stock",
        price: "₦780,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:14,
        name: "King Size bed",
        sku: "BR-1004",
        image: "Assets/Images/white-king-size-bed.jpg",
        category: "Bedroom",
        description: "Confortable king size bed",
        material: "Wood",
        stock: "In Stock",
        price: "₦950,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:15,
        name: "Dinning Set",
        sku: "DR-1001",
        image: "Assets/Images/Square-dinning-set.jpg",
        category: "Dining",
        description: "Beautiful woodig dining set",
        material: "Wood",
        stock: "In Stock",
        price: "₦600,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:16,
        name: "Kids bed",
        sku: "KD-1002",
        image: "Assets/Images/kids furniture.jfif",
        category: "Kids",
        description: "Beautiful 2 in 1 kids bed with shelf",
        material: "wood",
        stock: "In Stock",
        price: "₦480,000",
        brand: "",
        warranty: "12 Months",
    },
    
    {
        id:17,
        name: "Outdoor Dining Set",
        sku: "OD-1002",
        image: "Assets/Images/Outdoor-dinning.jpg",
        category: "Outdoor",
        description: "Outdoor dining set",
        material: "Plastic and Glass",
        stock: "In Stock",
        price: "₦250,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:18,
        name: "Side Shelf",
        sku: "LR-1006",
        image: "Assets/Images/Side-shelf.jpg",
        category: "Living Room",
        description: "Classic Brown Wooding Shelf ",
        material: "Wood",
        stock: "In Stock",
        price: "₦200,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:19,
        name: "Coffee table",
        sku: "LR-1007",
        image: "Assets/Images/Glass-n-face-coffee-table.jpg",
        category: "Living Room",
        description: "Artistic face coffee table",
        material: "Fine wood and glass",
        stock: "In Stock",
        price: "₦280,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:20,
        name: "Dining Set",
        sku: "DR-1002",
        image: "Assets/Images/modern-dinning-set.jpg",
        category: "Dining",
        description: "8 seater dining set",
        material: "Wood and premium fabic",
        stock: "In Stock",
        price: "₦1,200,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:21,
        name: "Shelf",
        sku: "LR-1008",
        image: "Assets/Images/wall-mount-shelf.jpg",
        category: "Living Room",
        description: "Wall maount decortative shelf",
        material: "Wood",
        stock: "In Stock",
        price: "₦160,000",
        brand: "",
        warranty: "12 Months",
    },

    {
        id:22,
        name: "Outdoor Set",
        sku: "OD-1003",
        image: "Assets/Images/outdoor-set.jpg",
        category: "Outdoor",
        description: "Premium outdoor chairs with side table",
        material: "Steel and premium fabic",
        stock: "In Stock",
        price: "₦310,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:23,
        name: "side Table",
        sku: "LR-1009",
        image: "Assets/Images/Nice-side-table.jpg",
        category: "Living Room",
        description: "Quality side table",
        material: "Wood",
        stock: "In Stock",
        price: "₦80,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:24,
        name: "Coffee table",
        sku: "LR-1010",
        image: "Assets/Images/Round-coffee-table.jpg",
        category: "Living Room",
        description: "Brown round coffee table",
        material: "Wood",
        stock: "In Stock",
        price: "₦220,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:25,
        name: "Kids bed",
        sku: "KD-1003",
        image: "Assets/Images/kids-bed.jpg",
        category: "Bedroom",
        description: "Car bed for kids",
        material: "Wood",
        stock: "In Stock",
        price: "₦175,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:26,
        name: "Tv console",
        sku: "LR-1011",
        image: "Assets/Images/Tv-console.jpg",
        category: "Living Room",
        description: "Premium tv console",
        material: "Wood",
        stock: "In Stock",
        price: "₦185,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:27,
        name: "Beside Shelf",
        sku: "BR-1005",
        image: "Assets/Images/bedside-table.jpg",
        category: "Bedroom",
        description: "Quality beside table",
        material: "Wood",
        stock: "In Stock",
        price: "₦160,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:28,
        name: "Kids bed",
        sku: "KD-1004",
        image: "Assets/Images/tedy-bear-kids-bed.jpg",
        category: "Bedroom",
        description: "Teddy bear kids bed ",
        material: "Wood",
        stock: "In Stock",
        price: "₦225,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:29,
        name: "Office Set",
        sku: "OF-1004",
        image: "Assets/Images/Executive-Desk-with-Leather-Inlay-Return-Pedestal-In-Office-Setting.jpg",
        category: "Office",
        description: "Premium office set",
        material: "Wood",
        stock: "In stock",
        price: "₦450,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:30,
        name: "Outdoor Sofa set",
        sku: "OD-1004",
        image: "Assets/Images/Outdoor-sofa-set.jpg",
        category: "Outdoor",
        description: "Quality outdoor sofa set",
        material: "Wood and premium fabric",
        stock: "In Stock",
        price: "₦585,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:31,
        name: "Marble Dining Set",
        sku: "DR-1003",
        image: "Assets/Images/Marble-or-Wood-What-Type-of-Dining-Table-Should-You-Buy-8-640x400.jpg",
        category: "Dining",
        description: "Luxury dining set",
        material: "Wood",
        stock: "In Stock",
        price: "₦1,450,000",
        brand: "",
        warranty: "12 Months",
    },
    {
        id:32,
        name: "White Dining Set",
        sku: "DR-1004",
        image: "Assets/Images/simple-dinning-set.jpg",
        category: "Dining",
        description: "6 seater dining set",
        material: "Fine Wood",
        stock: "In Stock",
        price: "₦1,155,000",
        brand: "",
        warranty: "12 Months",
    },
        {
        id:33,
        name: "Swing Chair",
        sku: "OD-1005",
        image: "Assets/Images/Hanging-sofa.jpg",
        category: "Outdoor",
        description: "Swinging chair",
        material: "Steel and quality fabric",
        stock: "In Stock",
        price: "₦100,000",
        brand: "",
        warranty: "12 Months",
    },
];


// Product cards
const productLinks = document.querySelectorAll(".product-card");

if (productLinks.length > 0) {

    productLinks.forEach(card => {

        card.addEventListener("click", function(e){

            e.preventDefault();

            const id = this.dataset.id;

            window.location.href = `product-details.html?id=${id}`;

        });

    });

}

// Product Details Page
const productName = document.getElementById("productName");
const breadcrumbCategory = document.getElementById("breadcrumbCategory");
const breadcrumbProduct = document.getElementById("breadcrumbProduct");
const whatsappBtn = document.getElementById("whatsappBtn");

if (productName) {

    const params = new URLSearchParams(window.location.search);

    const id = Number(params.get("id"));

    const product = products.find(item => item.id === id);

    if (product) {

        productName.textContent = product.name;

        document.getElementById("productImage").src = product.image;
        document.getElementById("productImage").alt = product.name;

        document.getElementById("productPrice").textContent = product.price;

        document.getElementById("productDescription").textContent = product.description;

        document.getElementById("productCategory").textContent = product.category;

        document.getElementById("productStock").textContent = "🟢 " + product.stock;

        document.getElementById("productMaterial").textContent = product.material;

        document.getElementById("productSku").textContent = product.sku;
        document.getElementById("productBrand").textContent = product.brand;
        document.getElementById("productWarranty").textContent = product.warranty;

        breadcrumbCategory.textContent = product.category;
        breadcrumbCategory.textContent = product.name;

        const phone ="2349067065186";

        const message = 
        `Hello, I'm intrested in the following product:

        Product: ${product.name}
        SKU: ${product.sku}
        Price: ${product.price}
        
        Please let me know its avalability.`;

        whatsappBtn.href = `http://wame/${phone}?text=${encodeURIComponent(message)}`;

    }

}