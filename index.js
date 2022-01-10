const contactsOperations = require('./contacts')

// const { Command } = require('commander');
// const program = new Command();
// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();
console.log(__dirname);
// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts()
      console.log(contacts);
      break;

    case 'get':
        const contactId = await contactsOperations.getContactById(id)
        console.log(contactId);
      break;

    case 'add':
    //   const newContact = await contactsOperations.addContact(name, email, phone);
    //   console.log(newContact);
     
      break;

    case 'remove':
      const contact = await contactsOperations.removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction({action: 'list'});
