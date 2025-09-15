export default function PhotoGallery() {
  const images = [
    {
      src: "https://blockchain-life.com/wp-content/uploads/2025/03/2-min.jpg",
      alt: "Blockchain Life event attendees networking"
    },
    {
      src: "https://blockchain-life.com/wp-content/uploads/2025/03/6-min.jpg",
      alt: "Speaker presenting at Blockchain Life conference"
    },
    {
      src: "https://blockchain-life.com/wp-content/uploads/2025/03/5-min-1.jpg",
      alt: "Exhibition area with blockchain company booths"
    },
    {
      src: "https://blockchain-life.com/wp-content/uploads/2025/03/4-min.jpg",
      alt: "VIP networking area at Blockchain Life"
    },
    {
      src: "https://blockchain-life.com/wp-content/uploads/2025/03/3-min.jpg",
      alt: "Panel discussion with crypto industry leaders"
    }
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-16 bg-background" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex space-x-4 sm:space-x-6 scrolling-gallery">
            {duplicatedImages.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-60 sm:w-72 md:w-80 h-48 sm:h-56 md:h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  data-testid={`gallery-image-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
