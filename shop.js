// The array containing pedal objects
const shirts = [
    {
        id: 1,
        title: "Blue Long Sleeve Crew Tee",
        sleeve: "Long Sleeve",
        neck: "Crew",
        color: "Blue",
        price: "$35",
        img: "./products_images/BlueLongCrewT.png",
        advert: "NEW DESIGN - BUY NOW!!!"
    },

    {
        id: 2,
        title: "Brown Long Sleeve Crew Tee",
        sleeve: "Long Sleeve",
        neck: "Crew",
        color: "Brown",
        price: "$35",
        img: "./products_images/BrownLongCrewT.png",
        advert: "Spring Sale is here - add to cart ASAP"
    },

    {
        id: 3,
        title: "Green Short Sleeve Crew Tee",
        sleeve: "Short Sleeve",
        neck: "Crew",
        color: "Green",
        price: "$30",
        img: "./products_images/GreenShortCrewT.png",
        advert: "NEW DESIGN - BUY NOW!!!"
    },

    {
        id: 4,
        title: "Grey Short Sleeve Crew Tee",
        sleeve: "Short Sleeve",
        neck: "Crew",
        color: "Grey",
        price: "$30",
        img: "./products_images/GreyShortCrewT.png",
        advert: "Spring Sale is here - add to cart ASAP"
    },

    {
        id: 5,
        title: "Grey Short Sleeve V-Neck Tee",
        sleeve: "Short Sleeve",
        neck: "V-Neck",
        color: "Grey",
        price: "$25",
        img: "./products_images/GreyShortVT.png",
        advert: "NEW DESIGN - BUY NOW!!!"
    },

    {
        id: 6,
        title: "Orange Short Sleeve V-Neck Tee",
        sleeve: "Short Sleeve",
        neck: "V-Neck",
        color: "Orange",
        price: "$25",
        img: "./products_images/orangeShortVT.png",
        advert: "Spring Sale is here - add to cart ASAP"
    },

    {
        id: 7,
        title: "Red Short Sleeve Crew Tee",
        sleeve: "Short Sleeve",
        neck: "Crew",
        color: "Red",
        price: "$30",
        img: "./products_images/RedShortCrewT.png",
        advert: "Spring Sale is here - add to cart ASAP"
    },

    {
        id: 8,
        title: "Teal Short Sleeve V-Neck Tee",
        sleeve: "Short Sleeve",
        neck: "V-Neck",
        color: "Teal",
        price: "$25",
        img: "./products_images/TealShortVT.png",
        advert: "NEW DESIGN - BUY NOW!!!"
    },

    {
        id: 9,
        title: "White Long Sleeve V-Neck Tee",
        sleeve: "Long Sleeve",
        neck: "V-Neck",
        color: "White",
        price: "$40",
        img: "./products_images/WhiteLongVT.png",
        advert: "Spring Sale is here - add to cart ASAP"
    },
    
];

// Function to display shirt items on the page
function displayShirtItems(shirtItems) {
    let displayshirts = shirtItems.map(function (item, index) {
        return `<article class="shirt-item" data-index="${index}">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="shirt-info">
                <header>
                    <h4 id="shirt-title">${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </header>
                <p class="shirt-advert">
                    ${item.advert}
                </p>
            </div>
        </article>`;
    });
    displayshirts = displayshirts.join("");
    sectionCenter.innerHTML = displayshirts;
}

// Function to toggle sidebar and display object details
function toggleSidebar(item) {
    // Display sidebar
    sidebar.style.display = "block";

    // Display object details in sidebar
    document.getElementById("photo2").src = item.img;
    document.getElementById("shirt-title2").innerText = item.title;
    document.getElementById("shirt-price2").innerText = item.price;
}

// Function to hide sidebar
function hideSidebar() {
    sidebar.style.display = "none";
}

// Get the parent element where the shirt items will be displayed
const sectionCenter = document.querySelector(".section-center");

// Get sidebar element
const sidebar = document.getElementById("sidebar");

// Display all shirt items when the page loads
window.addEventListener("DOMContentLoaded", function () {
    displayShirtItems(shirts);

    // Get all shirt items after they're displayed
    const shirtItems = document.querySelectorAll(".shirt-item");

    // Attach click event listener to each shirt item
    shirtItems.forEach(item => {
        item.addEventListener("click", function() {
            // Get clicked item's index
            const index = parseInt(item.dataset.index);
            
            // Toggle sidebar and display object details
            toggleSidebar(shirts[index]);
        });
    });

    // Add event listener to close button on sidebar
    document.getElementById("x").addEventListener("click", hideSidebar);
});


// Event listeners for quantity button


// Get the quantity span element
const quantitySpan = document.getElementById("shirt-quantity");

// Get the increment and decrement buttons
const decrementButton = document.getElementById("decrement-quantity");
const incrementButton = document.getElementById("increment-quantity");

// Set initial quantity value
let quantity = 1;

// Function to update quantity displayed
function updateQuantityDisplay() {
    quantitySpan.innerText = quantity;
}

// Event listener for decrement button
decrementButton.addEventListener("click", function() {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
});

// Event listener for increment button
incrementButton.addEventListener("click", function() {
    quantity++;
    updateQuantityDisplay();
});