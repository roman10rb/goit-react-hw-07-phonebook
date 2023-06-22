import css from './Filter.module.css'


import { useContacts } from 'redux/useContacts';


const Filter = () => {
  
   const { changeFilter, filter } = useContacts();
  
    return (
        
            <label>
                   <span className={css.filter}>Finde contacts by name</span>  <input className={css.filterInput} type="text" value={filter} onChange={changeFilter} />
                </label>
        
    )
}


export default Filter;