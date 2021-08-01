import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  
  return ( 
    <>
    <Toolbar className={classes.toolbar}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h2"
          color="secondary"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Firegram
        </Typography>
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
        </Grid>
      </Toolbar>
      {/* <Toolbar component="nav" variant="dense">
        <Grid
          container
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={1}
          >
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href="/"
            >
              Home
            </Link>
          </Grid>
          <Grid
            item
            xs={1}
          >
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href="/create"
            >
              Create
            </Link>
          </Grid>
        </Grid>
      </Toolbar> */}
    </>
   );
}
 
export default Navbar;