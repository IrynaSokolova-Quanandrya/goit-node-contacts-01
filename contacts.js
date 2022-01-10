// contacts.js
const fs = require("fs/promises");
const path = require("path")

const contactsPath = path.join(__dirname, "bd", "contacts.json");
// TODO: задокументировать каждую функцию
async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data)
    return contacts;
  }
  
async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(contact=>contact.id === id);
    return result;
  }
  
async function removeContact(contactId) {
    // ...твой код
  }
  
async function addContact(name, email, phone) {
    // ...твой код
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
  }