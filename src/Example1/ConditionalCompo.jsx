function ConditionalCompo({isLoggedIn}){
    return(
        <>
        {isLoggedIn?<DashBoard/>:<LogIn/>}
        </>
    )
}

function DashBoard(){
    return <h1>WelCome to DashBoard</h1>
}

function LogIn(){
    return <h1>Please LogIn</h1>
}

export default ConditionalCompo;