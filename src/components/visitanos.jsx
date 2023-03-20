import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactInfo() {
  return (
    <div className="contact-info">
        <div className='info'>
            <p>Avinguda d'Es Tren, 39, 07500 Manacor, Balearic Islands</p>
            <p><a href="https://facebook.com/chentopizzeria"><FontAwesomeIcon icon={faFacebook} /> @chentopizzeria</a></p>
            <p><a href="https://instagram.com/chentopizzeria"><FontAwesomeIcon icon={faInstagram} /> @chentopizzeria</a></p>
            <p><a href="tel:971843421">971 84 34 21</a></p>
        </div>
        <div>
            <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12302.376183864157!2d3.204769!3d39.5687602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129649a71c120869%3A0x8be9ee6d369212f7!2sPizza%20Chento!5e0!3m2!1ses!2ses!4v1678806039710!5m2!1ses!2ses" loading="lazy"></iframe>
        </div>
    </div>
  );
}

export default ContactInfo