
import { useState } from 'react'
import css from './Form.module.css'

import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';



const Form = () => {
  
   
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const existingName = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = contacts.find(item => item.number === number);

    if (existingName) {
      return alert(`Contact "${name}" is already in contacts list`);
    } else if (existingNumber) {
      return alert(`Number "${number}" is already in contacts list`);
    }

    const newContact = {
      name,
      phone: number,
    };

    dispatch(addContacts(newContact));

    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };



    
        return (<div>
            <div> 
         <h2>Name</h2>
        <form onSubmit={handleSubmit}>
            <label>
            <input
                onChange={handleChange}
               value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                        /></label>
                    <h2>Number</h2>
                    <label>
                        <input
                            value={number}
                            onChange={handleChange}
                        type="tel"
                        name="number"
                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <p>
                        <input type="submit" value={'add contact'} className={css.addContact}/>
                    </p>
                
            </form>
        </div></div>
       )  
    

}

export default  Form;