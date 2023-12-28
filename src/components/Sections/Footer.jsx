import logoImg from "../../assets/logo_white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <p className="copyright">All right reserved for <span className="bold">Ayoub Jasim</span></p>
      </div>
    </footer>
  );
}
