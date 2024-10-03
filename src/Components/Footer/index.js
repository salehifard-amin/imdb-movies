import "./style.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="footer">
        <div className="lines"></div>
        <div className="icons">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="lines"></div>
      </div>
    </div>
  );
}
