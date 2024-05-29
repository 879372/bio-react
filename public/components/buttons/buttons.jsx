import Button from "./button";
import './button.css'

const Buttons = () => {
    return(
        <div className="bnts">
           <Button title='GitHub' url='https://github.com'/>
            <Button title='FrontEnd Mentor' url='https://www.frontendmentor.io'/>
            <Button title='Twitter' url='https://twitter.com'/>
            <Button title='LinkedIn' url='https://www.linkedin.com'/>
            <Button title='Instagram' url='https://www.instagram.com'/>
        </div>
    );
};

export default Buttons;