import './index.css';

function Header({ imgSrc, iconAlt }) {
  return (
    <header className="head">
      <div className="logo"> R.S Naudoti Automobiliai</div>
      <img src={imgSrc} alt={iconAlt} className="headCarImg" />
    </header>
  );
}

export default Header;
