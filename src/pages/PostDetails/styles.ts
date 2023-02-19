import { useTheme } from '@mui/material/styles';
import { createMakeAndWithStyles } from 'tss-react';

const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});

export default makeStyles()((theme) => ({
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
}));
