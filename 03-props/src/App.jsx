import Card from'./components/card'
const App=()=>
{
  return(
    <div className="parent">
     

        <Card user='Captain America' img="https://wallpaperaccess.com/full/6098370.jpg" bio="Captain America, also known as Steve Rogers, 
        is the super soldier who stands for freedom and hope. 
        Armed with his iconic shield, he never backs down from a fight."/>

        <Card user='Iron Man' img="https://i.pinimg.com/originals/0d/e2/39/0de239ae9861ac168c512c8a0b63aa6f.jpg?nii=t" bio="Iron Man, also known as Tony Stark, 
        is a genius inventor and billionaire. 
        With his advanced armored suits, he fights to protect the world 
        while relying on his intelligence and technology."/>
       

      </div> 

  )
}
export default App;