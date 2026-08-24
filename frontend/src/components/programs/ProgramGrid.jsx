import ProgramCard from './ProgramCard';

export default function ProgramGrid({ programs }) {
  return (
    <div className="row g-4">
      {programs.map((init, i) => (
        <div className="col-md-6 col-lg-4" key={i}>
          <ProgramCard title={init.title} desc={init.desc} />
        </div>
      ))}
    </div>
  );
}
