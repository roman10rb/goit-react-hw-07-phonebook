
import Form from "./Form/Form";

import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { useDispatch} from "react-redux";
// import { getError, getIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return <div className="container">
     <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
       <Filter  />
      <ContactList  />
    </div>
 
};


export default App;
