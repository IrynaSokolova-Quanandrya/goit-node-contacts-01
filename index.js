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
      break;

    case 'get':
        const contactId = await contactsOperations.getContactById(id)
        if(!contactId){
          throw new Error (`Contact with ${id} not found`)
        }
        
      break;

    case 'add':
      const newContact = await contactsOperations.addContact(name, email, phone);
      break;

    case 'remove':
      const contact = await contactsOperations.removeContact(id)
      console.log(contact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
 
invokeAction(argv);
