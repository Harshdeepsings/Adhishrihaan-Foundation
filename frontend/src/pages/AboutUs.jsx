export default function AboutUs() {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5 display-4 fw-bold">About Us</h1>
      
      <div className="row align-items-center gy-5 mt-3">
        <div className="col-md-6">
          <h2 className="text-primary mb-4">Our Ethos</h2>
          <p className="text-muted mb-3 fs-5">
            Rooted in <strong>"Seva Paramam Dharma"</strong> (Service is the highest duty) and <strong>"Rooted in Love, Rising through Service"</strong>.
            The legacy of 'Seva' is carried forward in Adhishrihaan's memory. We believe that true impact comes from empowering those who are already on the frontlines of change.
          </p>
          <p className="text-muted fs-5">
            Our purpose is to serve as the backbone for frontline changemakers in Punjab, offering them the support they need to amplify their impact.
          </p>
        </div>
        
        <div className="col-md-6">
          <div className="bg-primary text-white p-4 p-lg-5 rounded-4 shadow">
            <h3 className="mb-3">Our Vision</h3>
            <p className="mb-4 opacity-75 fs-5">
              To create a resilient ecosystem of grassroots organizations that can effectively address the most pressing social challenges in India.
            </p>
            
            <h3 className="mb-3">Our Mission</h3>
            <p className="opacity-75 fs-5 mb-0">
              To provide capacity building, visibility, and networking support to micro-NGOs, enabling them to scale their operations and deepen their impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
