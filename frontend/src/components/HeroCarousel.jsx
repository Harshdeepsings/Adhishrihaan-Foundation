import { Carousel } from 'react-bootstrap';

const slides = [
  {
    image: 'https://adhishrihaan.org/wp-content/uploads/2025/08/4.png',
    title: 'EDUCATION',
    subtitle: 'Investing in Grassroots, Investing in India\'s Future',
  },
  {
    image: 'https://adhishrihaan.org/wp-content/uploads/2025/08/6.png',
    title: 'ENVIRONMENT',
    subtitle: 'Nurturing Our Planet for Generations to Come',
  },
  {
    image: 'https://adhishrihaan.org/wp-content/uploads/2025/08/5.png',
    title: 'ANIMAL WELFARE',
    subtitle: 'Empowering Those Who Empower Others',
  }
];

export default function HeroCarousel() {
  return (
    <Carousel fade interval={5000} indicators={true} controls={true}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} style={{ height: '80vh', minHeight: '500px', backgroundColor: 'var(--bs-primary)' }}>
          <div 
            className="w-100 h-100 position-absolute" 
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: 'rgba(45, 74, 34, 0.4)', zIndex: 2 }}
          >
            <div className="text-center text-white px-4">
              <h1 className="display-3 fw-bold mb-3 text-uppercase" style={{ letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {slide.title}
              </h1>
              <p className="fs-4 mb-0 mx-auto" style={{ maxWidth: '800px', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
