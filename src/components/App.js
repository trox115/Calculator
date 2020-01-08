import React from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel'
class App extends React.Component {
    render(){
        return(
            <div id='main-div'>
        <Display />
            <ButtonPanel />
        </div>
        );
    }


}
