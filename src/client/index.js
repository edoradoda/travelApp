import { checkForText } from './js/textChecker'
import { handleSubmit } from './js/formHandler'
import { showResult } from './js/showResult'
import { removeError } from './js/removeError'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import  Logo from './images/logo.png';

const element= document.getElementById("logo");
element.src=Logo;

export {
    handleSubmit,
    checkForText,
    showResult,
    removeError

}

// alert("I EXIST");