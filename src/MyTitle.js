
function MyTitle(props){
    return(
        <h1 style={{"color": "grey"}} 
        className={`text-center ${props.newClass}`}> {props.title}  </h1>
    )
}

export default MyTitle;