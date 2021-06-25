import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Profile from "../Profile/Profile";
import MainRepo from "../MainRepo/MainRepo";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const [searchedRepo, setSearchedRepo] = useState([]);
  const [searched,setSearched]=useState(false)



  const inputHandler = (e) => {
    setSearchInput(e.target.value);
    if(!e.target.value){
        setSearched(false)
        setSearchedRepo([])
        
    }
  };

  const submitHandler = () => {
    if(searchInput!==''){
        setSearched(true)
        const search = (r) => {
            if (r.toLowerCase().includes(searchInput.toLowerCase())) {
              return r;
            }
          };
      
          setSearchedRepo(searchedRepo.concat(props.hereIt.filter(search)));


    }
  
  };
  
  

  return (
      <React.Fragment>
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            
          </IconButton>
          <Typography
            style={{ color: "white", textDecoration: "none", borderBottom:"6px solid red",marginRight:640 }}
            // component={Link}
            to="/"
            color="secondary"
            className={classes.title}
            variant="h6"
            noWrap
          ><a href='/' id="anchor" style={{color:'white'}}>Saifs Repositories</a>
            
          </Typography>
        
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            
            
              placeholder="Search Repository"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value ={searchInput}
              onChange={inputHandler}
            />
            <Button id ="search" variant="contained" color="secondary" onClick={submitHandler}>
              Search
            </Button>
         
          </div>
          <div className={classes.grow} />
          <div></div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        
      </AppBar>
      <Profile />
    </div>
    <MainRepo hasSearched={searched} theSearchedRepo={searchedRepo} everyRepo={props.hereIt} input={searchInput}/>
    </React.Fragment>
  );
}
