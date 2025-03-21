import headImg from "./../assets/react-core-concepts.png"
export default function Header({headImg}){
    const startWords=['Esential','Arman','Dabir']
    function RandomGen(){
        return Math.floor(Math.random()*startWords.length)
      }

    return (
      <header>
        <img src={headImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {startWords[RandomGen()]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}