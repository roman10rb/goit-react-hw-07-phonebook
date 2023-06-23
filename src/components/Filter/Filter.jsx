import { useDispatch } from 'react-redux';
import css from './Filter.module.css'
import { setFilter } from 'redux/filtersSlice';


const Filter = () => {
  
   const dispatch = useDispatch();
  
    return (
        
            <label>
          <span className={css.filter}>Finde contacts by name</span>
          <input className={css.filterInput} type="text"   onChange={e => {
          dispatch(setFilter(e.target.value));
        }}/>
                </label>
        
    )
}


export default Filter;