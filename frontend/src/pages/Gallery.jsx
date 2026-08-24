import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5 display-5 fw-bold">Gallery</h1>
      <GalleryGrid />
    </div>
  );
}
