import { useState } from 'react';

function StatefulComponent(){
   const [count, setCount] = useState(0);
   
   return(
        <>
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button> <br />
        <button onClick={() => setCount(count - 1)}>Subtract</button> <br />
       </div>
    
        </>
    )
}
export default StatefulComponent;