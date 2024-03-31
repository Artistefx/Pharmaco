

const colors = ['#6660d5', '#e69d93' , '#6f7e0d']; 


const WelcomeOffer = (props) => {
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div className="welcome-offer">
        <a href={props.link} className="offer-link">
            <img src={props.img} alt={props.alt} className="offer-image" />
            <div className="offer-details">
            <small className="offer-type" style={{ backgroundColor }}>Offre du mois</small>
            <h3 className="offer-title">{props.title}</h3>
            <p className="offer-description">{props.description}</p>
            <a href={props.link} className="offer-button">
                Je Découvre
            </a>
            </div>
        </a>
        </div>
    );
};

export default WelcomeOffer;
