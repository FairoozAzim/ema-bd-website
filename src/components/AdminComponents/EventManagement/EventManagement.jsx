import { MdDelete } from 'react-icons/md';
import ev1 from '../../../Assets/images/event1.png';
import ev2 from '../../../Assets/images/event2.jpg';

import './EventManagement.css'
import { useState } from 'react';
import Modal from '../../Modal/Modal';
const EventManagement = () => {
    
const [isOpen, setIsOpen] = useState(false);

const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};

    const events = [
        {
          id: 1,
          date: '6 March',
          link: '#',
          title: 'A ROAD TO ERASMUS MUNDUS MASTER DEGREE AND ERASMUS SCHOLARSHIP',
          time: '3:00 pm - 5:00 pm',
          url: ev1
        },
        {
          id: 2,
          date: '25 February',
          link: '#',
          title: 'MIST Event',
          time: '4:00 pm - 5:00 pm',
          url : ev2
        },
        {
          id: 3,
          date: '4 February',
          link: '#',
          title: 'Erasmus Mundus Association - Bangladesh (EMA-BD) presents Symposium series 2023',
          description: 'This event aims to increase Bangladeshi participation in Erasmus Mundus Masters programs. We are a voluntary organization working tirelessly to achieve this goal.',
          time: '10:00 am - 12:00 pm',
          url: ev1
        },
        {
          id: 4,
          date: '15 January',
          link: '#',
          title: 'Workshop on Writing Strong Applications for Erasmus Mundus Scholarships',
          time: '10:00 am - 12:00 pm',
          url : ev2
        },
      ];
    return (
        <div>
            <div className='d-flex event-header'>
            
            <div className='upcoming-event'>
            <h2>Upcoming Events</h2>
            <p>No Upcoming Events</p>
            </div>
            <button className='create-btn btn-red event-btn' onClick={openModal}>Create an Event</button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                   <h3 className='text-center'>Create an Event</h3>
                   <form className='create-form'>
                     <div className='form-content'>
                      <input type='text' placeholder='Event Title'></input>
                      <input type='text' placeholder='Event Date'></input>
                      <input type='text' placeholder='Event Link'></input>
                      <input type='text' placeholder='Event Poster'></input>
                      <textarea type='text' placeholder='Description' rows={10}></textarea>
                      <button className='submit btn-submit' type='submit'>Submit</button>
                     </div>
                     
                   </form>
                 </Modal>
            </div>
           
            <div className='event-wrapper'>
            <h2 className='text-center'>Past Events</h2>
            <table>
            <thead>
                    <tr>
                       <td>Event Title</td>
                       <td>Date</td>
                       <td>Action</td>
                   </tr>
            </thead>
            <tbody>
                {
                    events.map(event => 
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td>{event.date}</td>
                            <td className='text-center'><MdDelete /></td>
                        </tr>
                        
                    )
                }
            </tbody>
            </table>
            </div>

        </div>
    );
};

export default EventManagement;