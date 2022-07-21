import { checkForText } from './js/textChecker'
import { handleSubmit } from './js/formHandler'
import { showResult } from './js/showResult'
import { removeError } from './js/removeError'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import  Logo from './images/paris.jpg';
import  Favicon from './images/favicon.png';

const element= document.getElementById("img1");
element.src=Logo;
    // <link rel="icon" type="image/x-icon" href=""> 

const link = document.createElement('link');
link.href = Favicon;
link.rel = 'icon';
link.type = 'image/x-icon';
document.getElementsByTagName('head')[0].appendChild(link);

export {
    handleSubmit,
    checkForText,
    showResult,
    removeError

}

// alert("I EXIST");