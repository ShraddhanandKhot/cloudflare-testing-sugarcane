
const varieties = [
  {
    name: 'Co-86032',
    tag: 'Popular variety',
    description:
      'Ask about availability and whether this variety is suitable for your growing region.',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Co-0238',
    tag: 'Farmer favourite',
    description:
      'Contact the nursery to discuss availability and local planting requirements.',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'SU-01',
    tag: 'Explore availability',
    description:
      'Ask our team about current stock and suitable planting options.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
]

export default function Varieties() {
  return (
    <section className="section varieties-section">
      <div className="section-heading">
        <span className="eyebrow">OUR SUGARCANE</span>
        <h2>Explore Our Varieties</h2>
        <p>
          Learn about available options and contact us to discuss
          your farming requirements.
        </p>
      </div>

      <div className="variety-grid">
        {varieties.map((variety) => (
          <article className="variety-card" key={variety.name}>
            <img
              src={variety.image}
              alt={`Agricultural plants representing ${variety.name}`}
              loading="lazy"
            />

            <div className="variety-body">
              <span className="card-tag">{variety.tag}</span>
              <h3>{variety.name}</h3>
              <p>{variety.description}</p>

              <a
                className="text-link"
                href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
                  `Hello, I would like to enquire about ${variety.name}.`,
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Enquire about this variety →
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="disclaimer">
        Confirm variety availability and agronomic suitability with
        the nursery before ordering.
      </p>
    </section>
  )
}
