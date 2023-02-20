import { createSlice } from "@reduxjs/toolkit";


const contactsInitialState = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: contactsInitialState,
        filter: '',
    },
    reducers: {
        addContacts(state, action) {
            state.push(action.payload);
            console.log(action.payload, 'addContact payload');
        },

        deleteContacts(state, action) { 
            state.items.filter(contact => contact.id !== action.payload);
            console.log(action.payload, 'deleteContacts payload');
        },
        setFilter(state, action) {
            state.filter = action.payload;
            console.log(action.payload, 'setFilter payload');
        }
    },
});

export const { addContacts, deleteContacts, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;