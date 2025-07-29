const ArrowComponent=()=>{
    const cars=["audi","bmw","kia","volvo"];

   return (
    <>
      <h1>Available Car In Garrage</h1>
      {cars.map((car,index)=><li key={index}>{car}</li>)}
    </>
   )
}
export default ArrowComponent;