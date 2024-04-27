
import Accordion from '../../components/Accordion/Accordion';
import './Faq.css';

const Faq = () => {
    return (
        <div>
             <div className='faq-wrapper'>
             <h1 className='section-header text-center'>Frequently Asked Questions</h1>
             <Accordion title="What is Lorem Ipsum?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus et magna sodales consectetur."></Accordion>
             <Accordion title="Why do we use it?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus et magna sodales consectetur."></Accordion>
             <Accordion title="Where does it come from?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus et magna sodales consectetur."></Accordion>
             <Accordion title="How can I use it?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus et magna sodales consectetur."></Accordion>
           </div>

        </div>
    );
};

export default Faq;