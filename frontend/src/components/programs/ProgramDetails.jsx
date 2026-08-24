// ProgramDetails placeholder — ready for individual program detail view
export default function ProgramDetails({ program }) {
  if (!program) return null;
  
  return (
    <div className="container py-5">
      <h1 className="text-primary mb-4">{program.title}</h1>
      <p className="text-muted fs-5">{program.desc}</p>
    </div>
  );
}
