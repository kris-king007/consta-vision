import { createObjectCsvWriter } from 'csv-writer';

export const constituentCsvWriterPath = './tmp/constituents.csv';

export const constituentCsvWriter = createObjectCsvWriter({
  path: constituentCsvWriterPath,
  header: [
    {id: 'email', title: 'EMAIL'},
    {id: 'id', title: 'ID'},
    {id: 'firstName', title: 'FIRST_NAME'},
    {id: 'lastName', title: 'LAST_NAME'},
    {id: 'address', title: 'ADDRESS'},
  ],
});
