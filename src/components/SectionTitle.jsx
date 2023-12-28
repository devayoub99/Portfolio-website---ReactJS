export default function SectionTitle({ light, bold }) {
  return (
    <h2 className="section-title">
      {light} <span className="bold">{bold}</span>
    </h2>
  );
}
