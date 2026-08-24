// ImageModal placeholder — ready for future lightbox/modal gallery viewer
export default function ImageModal({ isOpen, image, title, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999 }}
      onClick={onClose}
    >
      <div className="position-relative" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} style={{ maxHeight: '80vh', maxWidth: '90vw' }} />
        <button 
          className="btn btn-light position-absolute top-0 end-0 m-2"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
