import React from 'react'
const Display = (props) =>{
    let value = props;
    return (<div>
        {value}
    </div>)
}
Display.defaultProps = {
    value: '0',
}
Display.propTypes = {
    value: PropTypes.string
};
export default {Display};
