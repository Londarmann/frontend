import image1 from "../../styles/img/img0.jpeg";

const Landing = () => {
  return (
    <main>
      <div className="landingPhoto">
        <img src={image1} />
        <button className="landingButton" onClick={() => {}}>
          Find your art
        </button>
      </div>
    </main>
  );
};

export default Landing;
