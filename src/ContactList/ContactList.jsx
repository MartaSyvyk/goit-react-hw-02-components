import { ContactItem } from "ContactItem/ContactItem";

export const ContactList = ({data, deleteContact}) => {
     
     return (<ul> {data.map(({id, name, number}) => 
     {return (<ContactItem  key={id} name={name} number={number} onDelete={() => deleteContact(id)} />)}
        )}</ul>) 
}





