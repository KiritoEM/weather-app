import SectionContent from "./SectionContent";

const HomeContent = () => {
  return (
    <section id="home-content">
      <div id="home-content__container">
        <div className="row gx-0">
          <div className="col-7">
            <div className="section-cover">
              <div className="logo">
                <h4><img src="/images/weather.svg" alt="" /> Weather-app</h4>
              </div>
              <div className="degree">
                <h1>26° C</h1>
                <h3>Nosy-Be Hell-Ville</h3>
                <h5>Wednesday, 06 Dec 2023</h5>
              </div>
            </div>
          </div>
          <div className="col-5">
            <SectionContent/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
