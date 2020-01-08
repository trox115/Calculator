import React from 'react'
const Display = (props) =>{
    let value = props;
    return (<div>
        {value}
    </div>)
}
Display.propTypes = {
    value: PropTypes.string
};
