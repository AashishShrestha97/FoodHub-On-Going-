import React, { useEffect } from "react"; // Import useEffect for side effects

const Image1 = () => {
  // Array of image paths
  const images = [
    "pizza.jpg",
    "burger.webp",
    "biryani.webp"
  ];

  let currentIndex = 0;

  // Function to swap the image
  function swapImage() {
    // Get the image element by its ID
    const imageElement = document.getElementById('image-swap');
    
    // Update the image source
    if (imageElement) {
      imageElement.src = images[currentIndex];

      // Update the index to the next image
      currentIndex = (currentIndex + 1) % images.length; // Loop back when reaching the last image
    }
  }

  // useEffect to run the interval when the component mounts
  useEffect(() => {
    // Set the image swap to occur every 3 seconds (3000 milliseconds)
    const intervalId = setInterval(swapImage, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it runs only once when the component mounts

  return (
    <section>
      <div id="image1">
        <img id="image-swap" src="pizza.jpg" alt="Pizza" /> {/* Initial image */}
      </div>
    </section>
  );
}

export default Image1;
