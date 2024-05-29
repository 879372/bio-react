import './button.css'

const Button = ({title, url}) => {
    const handleClick = () => {
        window.location.href = url;
    }
    return(
        <button className='bnt' onClick={handleClick}>{title}</button>
    )
}

export default Button;