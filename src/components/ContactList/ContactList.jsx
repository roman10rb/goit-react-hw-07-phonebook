import css from './ContactList.module.css'


import { useContacts } from 'redux/useContacts'; 




const ContactList = () => {

  const { contacts, filter, deleteContact } = useContacts();
  

   const getFilterName = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),)
  };

   const list = getFilterName();
 
    return (<div>
        <ul>
    {list.map(({ id, name, number}) => (
      <li key={id}>
        <span className={css.contactName}>{name}</span>  <span className={css.contactNumber}>: {number}</span>
            
            <button
          type="button"
          onClick={() => deleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
    </div>)

    
}



export default ContactList;


