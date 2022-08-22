import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export interface Member {
    id: number;
    avatar?: string;
    name: string;
    hostel : string;
    year : number;
    intime : string;
    outtime : string;
}

const members: Array<Member> = [
    {
        id: 2005166,
        avatar : 'https://i.imgur.com/5vZmWBO.png',
        name: 'John Doe',
        hostel : 'Hostel 1',
        intime : '13:50', 
        outtime : '13:50',
        year : 1
    },
    {
        id: 2005287,
        avatar : 'https://i.imgur.com/5vZmWBO.png',
        name: 'Jane Doe',
        hostel : 'Hostel 2',
        intime : '13:50', 
        outtime : '13:50',
        year : 2
    },
    {
        id: 2007897,
        avatar : 'https://i.imgur.com/5vZmWBO.png',
        name: 'Jack Doe',
        intime : '13:50', 
        outtime : '13:50',
        hostel : 'Hostel 3',
        year : 3
    },
];


const tablecolumns: GridColDef[] = [
    { field: 'id', headerName: 'Roll No', width:100 },
    { field: 'name', headerName: 'Name', width: 130 },
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
