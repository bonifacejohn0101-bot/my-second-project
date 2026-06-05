function InstagramFeed() {
  const images = [
    'src/assets/image (7).png',
    'src/assets/image (8).png',
    'src/assets/image (9).png',
    'src/assets/image (10).png',
    'src/assets/image (11).png',
    'src/assets/image (12).png',
    'src/assets/image (13).png'
  ];

  return (
    <section className="instagram-feed py-5">
      <div className="container text-center">
        <h1 className="mb-3">Follow Us on Instagram</h1>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
        </p>

        <div
          className="d-flex gap-3 overflow-auto pb-2"
          style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
        >
          {images.map((src) => (
            <div
              key={src}
              className="flex-shrink-0"
              style={{ width: '280px', scrollSnapAlign: 'center' }}
            >
              <img
                src={src}
                alt="Instagram"
                className="img-fluid rounded-4"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default InstagramFeed;