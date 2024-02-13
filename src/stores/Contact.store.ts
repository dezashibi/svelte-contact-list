import { writable } from "svelte/store";
import { v4 as uuidv4 } from 'uuid';
import type { Contact } from "../types/Contact";

// Define an interface for the store's state
interface ContactStoreState {
    contacts: Contact[];
    editId: string | undefined;
}

// Create the store with an initial state and type it with StoreState
const store = writable<ContactStoreState>({ contacts: [], editId: undefined });

export default {
    subscribe: store.subscribe,
    add: (newContact: Contact) => {
        store.update((state) => {
            newContact.id = uuidv4();
            const newContacts: Contact[] = [newContact, ...state.contacts];

            return { contacts: newContacts, editId: undefined };
        });
    },
    selectContact: (id: string) => {
        store.update((state) => {
            return { ...state, editId: id };
        });
    },
    edit: (updateContact: Contact) => {
        store.update((state) => {
            const newContacts = state.contacts.map(contact => {
                if (contact.id === state.editId) {
                    return { ...contact, name: updateContact.name, phone: updateContact.phone, description: updateContact.description };
                }

                return contact;
            })

            return { contacts: newContacts, editId: undefined };
        });
    },
    delete: (id: string) => {
        store.update((state) => {
            const newContacts = state.contacts.filter((c) => c.id !== id);

            return { contacts: newContacts, editId: undefined };
        });
    },
}
