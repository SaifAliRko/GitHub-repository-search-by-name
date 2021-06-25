import React from "react";
import { Card } from "semantic-ui-react";
import classes from './SearchedRepos.module.css'

const SearchedRepos = (props) => {

  let repoMessage = '';

  let repoResult=[];
  
  if(props.resultSearch){

    repoResult=props.resultSearch.map(r=>{
      return(
      
      <Card style={{margin:20,padding:"auto" ,width:400}}>
        <Card.Content>
          <Card.Header>{r}</Card.Header>

          <Card.Description>
            the searched repository name is {r}
          </Card.Description>
        </Card.Content>
    
      </Card>)
    })
    }

  (repoResult.length===0?repoMessage='Sorry No repositories found':repoMessage="Following are your searched Repositories");
 


 
  return (
    
    <div className={classes.AllRepos}>
        <div className={classes.root}>{repoMessage}</div>
      {repoResult}



    </div>
    
  );
};

export default SearchedRepos;
