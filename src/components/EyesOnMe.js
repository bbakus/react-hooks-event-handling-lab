// Code EyesOnMe Component Here

function EyesOnMe(){
    const sharp = () => console.log('Good!')
    const soft = () => console.log('Hey! Eyes on me!')
    return(
        <button type="text" onFocus={sharp} onBlur={soft} placeholder="Eyes on me">Eyes on me</button>
    )
}

export default EyesOnMe