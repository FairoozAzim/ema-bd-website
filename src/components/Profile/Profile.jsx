import './Profile.css'

const Profile = ({url, name, position}) => {
    return (
        <div className="gallery-item">
            <div className='item-img'>
              <img src={url}></img>
            </div>
            <p className='item-name'>{name}</p>
            <p className='item-pos'>{position}</p>
         </div>
    );
};

export default Profile;