// first basic syntax example:
import ArrowComponent from "./Example1/ArrowComponent";
import ConditionalCompo from "./Example1/ConditionalCompo";
import FormComponent from "./Example1/FormComponent";

import MyComponent from "./Example1/MyComponent";
import PropsBased from "./Example1/PropsBased";
import SideEffect from "./Example1/SideEffect";
import StatefulComponent from "./Example1/StatefulComponent";
import WrapComponent from "./Example1/WrapComponent";
import Home from "./project/Home";


function App() {
  return(
    <>
    {/* part1 */}
    {/* <MyComponent/> */}
    {/* <ArrowComponent/> */}


    {/* part2 */}
    {/* <PropsBased player={"Virat Kohli"}/> */}

    {/* part3 */}
    {/* <StatefulComponent/> */}

    {/* part4 */}
    {/* <SideEffect/> */}

    {/* part5 */}
    {/* <FormComponent/> */}

    {/* part6 */}
    {/* <ConditionalCompo isLoggedIn={true}/> */}
  

     {/* part7 */}
     {/* <WrapComponent/> */}


     {/* project */}
       <Home/>

    </>
  )
}

export default App;