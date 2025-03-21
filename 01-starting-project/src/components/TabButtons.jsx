export default function TabButtons({children,onSelect,active}){
    function handleClick(){
      onSelect()
    }
    return (
        <button className={active?"active":""} onClick={handleClick}>{children}</button>
    )
  }