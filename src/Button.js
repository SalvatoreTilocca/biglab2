import { useState } from "react";

import { Button } from 'react-bootstrap';

function MyButton(props) {
let [buttonLang, setButtonLang] = useState(props.lang) ;
if (buttonLang === 'it')
return <button onClick={()=>setButtonLang('en')}>Ciao!</button>;
else
return <button onClick={()=>setButtonLang('it')}>Hello!</button>;
}
export default MyButton;