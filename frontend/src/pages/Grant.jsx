export default function Grant() {
  return (
    <div className="container py-5" style={{ maxWidth: '800px' }}>
      <h1 className="text-center text-primary mb-5 display-5 fw-bold">The Shrihaan Sahyog Grant</h1>
      
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
        <h2 className="text-accent mb-4">Empowering Grassroots NGOs</h2>
        <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.8' }}>
          The Shrihaan Sahyog Grant is our annual initiative dedicated to supporting 3-5 micro-NGOs operating at the grassroots level. 
          We understand that small organizations often lack the funding and resources required to scale their operations, despite doing incredible work on the ground.
        </p>
        <p className="text-muted fs-5 mb-5" style={{ lineHeight: '1.8' }}>
          Through this grant, we provide not just financial assistance, but comprehensive capacity building and mentorship to ensure sustainable growth and amplified impact.
        </p>
        
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-5">Apply for Grant (Coming Soon)</button>
        </div>
      </div>
    </div>
  );
}
