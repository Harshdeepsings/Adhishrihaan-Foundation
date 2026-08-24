// DonationCard placeholder — ready for future donation tier cards
export default function DonationCard({ title, amount, description }) {
  return (
    <div className="card h-100 border-0 shadow-sm text-center p-4">
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        {amount && <p className="display-6 fw-bold text-accent">{amount}</p>}
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
}
