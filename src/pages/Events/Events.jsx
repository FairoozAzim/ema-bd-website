import EventCard from '../../components/EventsPage/EventCard';
import ev1 from '../../Assets/images/event1.png';
// import ev2 from '../../Assets/images/event2.jpg';

import './Events.css'

import { useLoaderData } from 'react-router-dom';

const Events = () => {
//     const events = [
//         {
//           id: 1,
//           date: '6 March',
//           link: '#',
//           title: 'A ROAD TO ERASMUS MUNDUS MASTER DEGREE AND ERASMUS SCHOLARSHIP',
//           time: '3:00 pm - 5:00 pm',
//           url: ev1
//         },
//         {
//           id: 2,
//           date: '25 February',
//           link: '#',
//           title: 'MIST Event',
//           time: '4:00 pm - 5:00 pm',
//           url : ev2
//         },
//         {
//           id: 3,
//           date: '4 February',
//           link: '#',
//           title: 'Erasmus Mundus Association - Bangladesh (EMA-BD) presents Symposium series 2023',
//           description: 'This event aims to increase Bangladeshi participation in Erasmus Mundus Masters programs. We are a voluntary organization working tirelessly to achieve this goal.',
//           time: '10:00 am - 12:00 pm',
//           url: ev1
//         },
//         {
//           id: 4,
//           date: '15 January',
//           link: '#',
//           title: 'Workshop on Writing Strong Applications for Erasmus Mundus Scholarships',
//           time: '10:00 am - 12:00 pm',
//           url : ev2
//         },
//       ];
const events = useLoaderData();

    return (
        <div className='mt'>
            {
                events.map(event => (
                    <EventCard
                     key = {event.id}
                     event_details={event}
                     img = {ev1}
                    />
                ))}
        </div>
    );
};

export default Events;