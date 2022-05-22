import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  SearchState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows } from './demo-data/generator';

export default () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows] = useState(generateRows({ length: 6 }));

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <SearchState defaultValue="Paris" />
        <IntegratedFiltering />
        <Table />
        <TableHeaderRow />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </Paper>
  );
};
