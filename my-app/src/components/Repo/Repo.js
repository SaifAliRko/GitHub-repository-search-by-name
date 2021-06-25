import React from "react";
import { Card } from "semantic-ui-react";
import classes from './Repo.module.css'

const Repo = (props) => {
  if(props.hasSearched){}
  let repoResult=[];
  
  if(props.yourRepos){

    repoResult=props.yourRepos.map((r,index)=>{
      return(
        
      <Card style={{margin:20,padding:"auto" ,width:920,top:20}} id="message" key={index}>
        
        <Card.Content >
          <Card.Header style={{margin:"auto",padding:"auto"}}>{r}</Card.Header>
          <Card.Description >
           Repository is Public
          </Card.Description>
        </Card.Content>      
      </Card>)
    })
    }
    

    
    


 
  return (
    <React.Fragment>
    <div >
      <h2 id="theResult">Following are your repositories</h2>
    </div>
    <div className={classes.Repo}>
      

      {repoResult}



    </div>
    </React.Fragment>
  );
};

export default Repo;
