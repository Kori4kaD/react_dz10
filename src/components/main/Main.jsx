import pict from './pngwing.com.png';
export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="list">
          <img src={pict} alt='pict' width={'400px'}/>
        </div>
      </div>
    </main>
  );
}
