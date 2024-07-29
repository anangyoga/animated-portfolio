import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Bentala Dev</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="Facebook Img" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="Instagram Img" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="YouTube Img" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="Dribbble Img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
