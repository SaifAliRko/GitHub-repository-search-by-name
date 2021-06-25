import React from 'react';
import SearchedRepos from '../SearchedRepos/SearchedRepos';
import Repo from '../Repo/Repo';

const MainRepo =(props)=>{
 

    return(
        <div>

            {props.hasSearched && props.input ?<SearchedRepos resultSearch={props.theSearchedRepo}/>:<Repo yourRepos={props.everyRepo}/>}
        </div>
        
        
    )
}

export default MainRepo;