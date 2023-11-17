export default function Main({ lang, data }) {
  return (
    <main>
      <div className="container">
        <div className="list">
          {data[lang].map((item, i) => (
            <div key={`item-${i + 1}`}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
