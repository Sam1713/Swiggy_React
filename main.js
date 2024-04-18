

import React, {useEffect } from 'react';
import ReactDOM from 'react-dom';


function Parent(){
const [count,setCount]=useState(0)

useEffect(()=>{
    console.log('useEffect')
})

return(
    <div>
        <button onClick={setCount(count+1)}>+</button>
        <h1>{count}</h1>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);
