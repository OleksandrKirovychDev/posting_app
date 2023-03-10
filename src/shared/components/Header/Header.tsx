import { AppBar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Header: React.FC = () => {
  const { classes, cx } = useStyles();

  return (
    <AppBar className={cx(classes.appBar)} position="static" color="secondary">
      <Typography className={cx(classes.heading)} variant="h2" align="center">
        <Link to="/home">Posting App</Link>
      </Typography>
      <img
        className={cx(classes.image)}
        src={require('../../../assets/logo.png')}
        alt="posting app"
        height="60"
        width="60"
      />
    </AppBar>
  );
};

export default Header;
