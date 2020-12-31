import { useState } from 'react';

function useToogle(initialVal= false){
    const [state, setState] = useState(initialVal);
    const toogle = () => {
        setState(!state);
    };
    return [state, toogle]; 
}
export default useToogle;