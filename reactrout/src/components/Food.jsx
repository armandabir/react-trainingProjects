export default function Food({name,price,theme,id,img,handleOnClick}){
    return (
        <div className={theme} onClick={handleOnClick}>
            <img src={img} alt="food" />
             <button> {id} name: {name} price:{price}</button>
        </div>
    )
}