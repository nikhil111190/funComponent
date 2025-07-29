
const Card = ({ children }) => {
return <div style={{ border: '1px solid black', padding: '10px' }}>{children}</div>;
};

function WrapComponent(){
    return(
        <>
        <h1>Virat Kohli</h1>
        <h2>Royal Challengers Bangloare</h2>
        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. consectetur adipisicing elit. Quibusdam, consequatur?</p>
        </>
    )
}
export default WrapComponent;


