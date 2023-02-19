import { useTheme } from '@mui/material/styles';
import { createMakeAndWithStyles } from 'tss-react';

const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});

export default makeStyles()((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
