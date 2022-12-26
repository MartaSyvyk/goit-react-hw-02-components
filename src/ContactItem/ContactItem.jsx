export const ContactItem = ({id, name, number, onDelete}) => {
    return (<li key={id}> <p>{name} {number}</p> <button  name={id} type="button" onClick={onDelete}>Delete</button> </li>)
    
}