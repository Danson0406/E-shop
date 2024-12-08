const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "MSI Titan 18",
    price: 5299,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "lightgray",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Sony PlayStation 5",
    price: 780,
    colors: [
      {
        code: "white",
        img: "./img/jordan.png",
      },
      {
        code: "black",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "ASUS Rog 9",
    price: 1366,
    colors: [
      {
        code: "black",
        img: "./img/blazer.png",
      },
      {
        code: "white",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "ASUS ROG STRIX G18",
    price: 3200,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "orange",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Logitech ASTRA 50",
    price: 380,
    colors: [
      {
        code: "black",
        img: "./img/hippie.png",
      },
      {
        code: "white",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
