import PR1 from '../../Assets/members/PR_CR_Tahmida_Shamsuddin.jpeg'
import PR2 from '../../Assets/members/PR_Fahim_Tahmid.jpg'
import PR3 from '../../Assets/members/PR_SHARIF_MUTASIM_BILLAH.jpg'
import PM1 from '../../Assets/members/PM_CR_Md Imran Hossain.jpg'
import PM2 from '../../Assets/members/PM_Abu_Touhid_Hossain.jpg'
import PM3 from '../../Assets/members/PM_faysal_ahmed.jpg'
import AS1 from '../../Assets/members/Ans_ CR_Fahmida Yeasmin.jpg'
import AS2 from '../../Assets/members/Ans_Mazharul Islam Sajeeb.jpg'
import As3 from '../../Assets/members/Ans_Sohana Alam Mim.jpg'
import IT1 from '../../Assets/members/PM_faysal_ahmed.jpg'
import IT2 from '../../Assets/members/IT_Abdur_Rahman.jpg'
import IT3 from '../../Assets/members/IT_Fairooz_Azim.jpg'
import CR1 from '../../Assets/members/PM_CR_Md Imran Hossain.jpg'
import CR2 from '../../Assets/members/PM_CR_Md Imran Hossain.jpg'
import PnD1 from '../../Assets/members/PnD_Arghya_Kamol_Roy.jpg'
import PnD2 from '../../Assets/members/PnD_Samsoon_Nahar_Shampa.jpg'
import './Team.css'
import Profile from '../../components/Profile/Profile'

const teamArray = [
    {
        url: PM1,
        name: "Md Imran Hossain",
        position: "Coordinator of Event and Project Management"
    },

    {
        url: PnD1,
        name: "Arghya Kamol Roy",
        position: "Coordinator of Planning and Development"
    },

      {
        url: IT1,
        name: "Sadad Mahamud",
        position: "Coordinator of IT and Social Media"
      },
      {
        url: PR1,
        name: "Tahmida Shamsuddin",
        position: "Coordinator of Public Relation and Students"
      },
      {
        url: AS1,
        name: "Fahmida Yeasmin",
        position: "Coordinator of Alumni and Students"
      },
      {
        url: PM3,
        name: "M FAYSAL AHMED",
        position: "Deputy Coordinators of Event and Project Management"
      },
      {
        url: PnD2,
        name: "Samsoon Nahar Shampa",
        position: "Deputy Coordinator of Planning and Development"
      },
      {
        url: IT3,
        name: "Fairooz Azim",
        position: "Deputy Coordinator of IT and Social Media"
      },
      {
        url: PR3,
        name: "Sharif Mutasim Billah",
        position: "Deputy Coordinator of Public Relation"
      },
      {
        url:  As3,
        name: "Sohana Alam Mim",
        position: "Deputy Coordinator of Alumni and Students"
      },
      {
        url: PM2,
        name: "Abu Touhid Hossain",
        position: "Deputy Coordinator of Event and Project Management"
      },
      {
        url: IT2,
        name: "Md Abdur Rahman",
        position: "Deputy Coordinator of IT and Social Media"
      },
      {
        url: PR2,
        name: "Sk Fahim Tahmid Boni",
        position: "Deputy Coordinator of Public Relation"
      },
      {
        url:  AS2,
        name: "Mazharul Islam Sajeeb",
        position: "Deputy Coordinator of Alumni and Students"
      },
]

const Team = () => {
    return (
        <div className="mt">
        <h1 className="section-header text-center">Our Team (2024)</h1>

        <div className="team-gallery">
           <div className="leaders">
              <div className="d-flex leaders-row">
                <Profile 
                  url = {CR1}
                  name = "Sayed Muhammad Baker"
                  position = 'Country Representative'
                />
                <Profile 
                  url = {CR2}
                  name = "Md Mahmudul Hasan Mredul"
                  position = 'Deputy Country Representative'
                />
              </div>
           </div>
           <div className='grid-container'>
              <div className='team-grid'>
                {
                   teamArray.map((member, index) => (
                      <Profile
                        key={index}
                        url = {member.url}
                        name = {member.name}
                        position = {member.position}
                      /> 
                   )) }
              </div>
           </div>
        </div>
    </div>
    );
};

export default Team;