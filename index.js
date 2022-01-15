const contactsOperations = require('./contacts')

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts()
      console.table(contacts);
      break;
 
    case 'get':
        const contactId = await contactsOperations.getContactById(id)
        if(!contactId){
          throw new Error (`Contact with ${id} not found`)
        }
        console.log(contactId);
      break;

    case 'add':
      const newContact = await contactsOperations.addContact(name, email, phone);
      if(!name || !email || !phone){
        throw new Error ('Contact not created! Please, enter all required data.')
      }
      console.log(newContact);
      break;

    case 'remove':
      const contact = await contactsOperations.removeContact(id);
      if(!contact){
        throw new Error (`Contact ${contact} not found`)
      }
      console.log(contact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
 
invokeAction(argv);
