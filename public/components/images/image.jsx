import avatar from '../images/avatar-jessica.jpeg'
import './image.css'

const Avatar = () =>{
    return(
        <div className='avatar'>
            <img src={avatar} alt="avatar" />
        </div>
    )
}

export default Avatar;