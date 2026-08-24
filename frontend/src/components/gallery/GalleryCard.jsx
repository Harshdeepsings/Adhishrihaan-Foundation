// GalleryCard placeholder — ready for future gallery image cards
export default function GalleryCard({ image, title }) {
  return (
    <div className="card border-0 shadow-sm overflow-hidden">
      <img src={image} alt={title} className="card-img-top" />
      {title && (
        <div className="card-body">
          <p className="card-text text-muted">{title}</p>
        </div>
      )}
    </div>
  );
}
