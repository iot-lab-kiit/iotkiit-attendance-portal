import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export interface Member {
    id: number;
    avatar?: string;
    name: string;
    hostel : string;
    year : number;
    intime : string;
    outtime : string;
    date: string;
}

const members: Array<Member> = [
    {
        id: 2005166,
        avatar : 'https://i.imgur.com/5vZmWBO.png',
        name: 'John Doe',
        hostel : 'Hostel 1',
        intime : '13:50', 
        outtime : '14:50',
        year : 1,
        date: '2022-10-26'
    },
    {
        id: 2005287,
        avatar : 'https://i.imgur.com/5vZmWBO.png',
        name: 'Jane Doe',
        hostel : 'Hostel 2',
        intime : '10:34', 
        outtime : '15:29',
        year : 2,
        date: '2022-10-27'
    },
    {
        id: 2007897,
        avatar : 'https://i.imgur.com/5vZmWBO.png',
        name: 'Jack Doe',
        intime : '01:53', 
        outtime : '17:21',
        hostel : 'Hostel 3',
        year : 3,
        date: '2022-10-28'
    },
    
];


const tablecolumns: GridColDef[] = [
    { field: 'id', headerName: 'Roll No', width:120 },
    { field: 'name', headerName: 'Name', width: 120 },
    {
      field: 'intime',
      headerName: 'In-Time',
      type: 'number',
      width: 120,
    },
    {
      field: 'outtime',
      headerName: 'Out-Time',
      type: 'number',
      width: 120,
    },
  ];

export { members , tablecolumns};
