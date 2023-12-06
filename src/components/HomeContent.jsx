import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeContent = () => {
  return (
    <section id="home-content">
      <div id="home-content__container">
        <div className="row gx-0">
          <div className="col-7">
            <div className="section-cover">
                <div className="logo">
                     <h4>Weather-app</h4>
                </div>
                 <div className="degree">
                     <h1>26°</h1>
                     <h4>Nosy-Be Hell-Ville</h4>
                 </div>
            </div>
          </div>
          <div className="col-5">
             <div className="section-content">
                  <div className="header">
                      <h5>Recherchez une ville</h5>
                  </div>
                  <div className="search-bar">
                       <div className="input">
                          <input type="text" name="" id="" placeholder="Nom de la ville ..."/>
                       </div>
                       <div className="button">
                          <FontAwesomeIcon icon={faSearch}/>
                       </div>
                  </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
