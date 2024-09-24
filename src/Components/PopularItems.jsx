import React from "react";

const items = [
    {
        id: 1,
        name: "Butter Chicken",
        description: "Tasty and fresh. Get the incredible taste of Indian butter chicken!",
        image: "butter-chicken.jpg",
    },
    {
        id: 2,
        name: "Momo",
        description: "Delicious dumplings filled with savory meat or vegetables.",
        image: "momo.jpg",
    },
    {
        id: 3,
        name: "Pizza",
        description: "Tasty tomato sauce, mozzarella cheese, and various toppings.",
        image: "pizzaa.jpg",
    },
    {
        id: 4,
        name: "Biryani",
        description: "A fragrant, spiced rice layered with marinated meat or vegetables.",
        image: "biryanii.webp",
    },
    {
        id: 5,
        name: "Panner Tikka",
        description: "Grilled marinated chunks of paneer, seasoned with spices.",
        image: "Paneer-Tikka.jpg",
    },
    {
        id: 6,
        name: "Burger",
        description: "Delicious juicy patty topped with cheese, and flavorful sauces.",
        image: "burgerr.jpeg",
    },
];

const PopularItems = () => {
    return (
        <div id="PopularItems">
            <p>Popular Items</p>
            <div className="ItemsCardContainer">
                {items.map(item => (
                    <div className="ItemsCard" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <span>{item.description}</span>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularItems;
