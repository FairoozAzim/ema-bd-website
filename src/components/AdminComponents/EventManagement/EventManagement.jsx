import { MdDelete } from 'react-icons/md';
// import ev1 from '../../../Assets/images/event1.png';
// import ev2 from '../../../Assets/images/event2.jpg';

import './EventManagement.css'
import { useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';
const EventManagement = () => {
    
const [isOpen, setIsOpen] = useState(false);

const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};

 const [events, setEvents] = useState([]);

 useEffect(() =>{
   fetch('http://localhost:5000/events')
   .then(res => res.json())
   .then(data => setEvents(data));

 }, [])

 const handleAddEvent = event => {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const date = form.date.value;
  const link = form.link.value;
  const desc = form.eventDesc.value;
  const newEvent = {title, date, link, desc};
  console.log(newEvent);
  fetch("http://localhost:5000/events", {
    method: 'POST',
    headers:{
     'content-type': 'application/json'
    },
    body: JSON.stringify(newEvent)
  })
  .then(res => res.json())
  .then(data => {
    console.log('post response', data);
    const addNewEvent = [...events, data];
    setEvents[addNewEvent];
    setIsOpen(false);
    form.reset();

  })
 }

 const handleDeleteEvent = id =>{
   console.log(id);
   fetch(`http://localhost:5000/events/${id}`,{
    method: 'DELETE'
   } )
   .then(res => res.json())
   .then(data => {
    console.log(data);
    setEvents[data];
   })
 }

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
                   <form className='create-form' onSubmit={handleAddEvent}>
                     <div className='form-content'>
                      <input name='title' type='text' placeholder='Event Title'></input>
                      <input name='date' type='text' placeholder='Event Date'></input>
                      <input name='link' type='text' placeholder='Event Link'></input>
                      <textarea name='eventDesc' type='text' placeholder='Description' rows={10}></textarea>
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
                            <td className='text-center'>
                              <button className='delete-btn' onClick={() => handleDeleteEvent(event.id)}><MdDelete /></button></td>
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