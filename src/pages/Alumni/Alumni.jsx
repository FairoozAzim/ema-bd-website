import Avatar from '../../Assets/members/avatar.jpg' ;
import Profile from '../../components/Profile/Profile';
import './Alumni.css'

const alumniList = []
for (let i=0; i<5;i++)
{
    alumniList.push({url:Avatar,name: "John Doe", Subject: "EMJM ABC"})
}

const Alumni = () => {
    return (
        <div className='mt alumnus-grid'>
            <h1 className='section-header text-center'>Year 2022</h1>
          <div className='mt-5 team-grid'>
                {
                   alumniList.map((member, index) => (
                      <Profile
                        key={index}
                        url = {member.url}
                        name = {member.name}
                        position = {member.position}
                      /> 
                   )) }
              </div>
            
        </div>
    );
};

export default Alumni;