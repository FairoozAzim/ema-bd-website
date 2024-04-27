import { Link } from 'react-router-dom';
import './Events.css';

const EventCard = ({event_details, img}) => {
   
    let description = event_details.description
    if(description && description.length > 50){
       description = description.slice(0,50) + '...';
  
    }
    return (
        <div className='event-card d-flex'>
            <div className='event-details'>
              <span>{event_details.date} @ {event_details.time}</span>
              <h3>{event_details.title}</h3>
              <p>{description}</p>
             <Link to = {`/events/${event_details.id}`} className='link-text'>View Details</Link>
            </div>
            <div className='poster'>
              <img src={img}/>
            </div>
        </div>
    );
};

export default EventCard;