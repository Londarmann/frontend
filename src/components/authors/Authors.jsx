import image1 from "../../styles/img/img3.jpg";
import "../../styles/components/authors.css";

const Authors = () => {
  return (
    <>
      <div className="favouriteAuth">
        <a href="#">Most viewed authors</a>
        <div className="everything">

          <div className="allAuth">
            <div className="authorPhoto">
              <a href="#">
                <img src={image1} />
                <h3>Leonardo DaVinci</h3>
              </a>
            </div>
          </div>
          <div className="allAuth">
            <div className="authorPhoto">
              <a href="#">
                <img src={image1} />
                <h3>Leonardo DaVinci</h3>
              </a>
            </div>
          </div>

          <div className="allAuth">
            <div className="authorPhoto">
              <a href="#">
                <img src={image1} />
                <h3>Leonardo DaVinci</h3>
              </a>
            </div>
          </div>

          <div className="allAuth">
            <div className="authorPhoto">
              <a href="#">
                <img src={image1} />
                <h3>Leonardo DaVinci</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authors;
