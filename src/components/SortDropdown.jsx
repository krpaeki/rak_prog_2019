import React from "react";
import PropTypes from "prop-types";
import "./dropdown.css";

class SortDropdown extends React.PureComponent{
    state = {
        open: false,
    };

    handleTrigger = () =>{
        this.setState( {
            open: !this.state.open,
        });
    };

    render (){
        return(
            <div className={"custom-select-wrapper"} onClick={this.handleTrigger}>
                <div 
                    className={`custom-select sources ${this.state.open ? "opened" : ""}`}
                >
                    <span className={"custom-select-trigger"}>
                        {getDirectionText(this.props.direction)}
                    </span>
                    <div className={"custom-options"}>
                        <span 
                            className={"custom-option"}
                            onClick={() => this.props.onChange(1)}
                            >
                            {getDirectionText(1)}
                        </span>
                        <span 
                            className={"custom-option"}
                            onClick={() => this.props.onChange( -1)}
                            >
                            {getDirectionText( -1)}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

const getDirectionText = (x) => {
    switch (x) {
        case 1: return "Hinnad madalamast korgemaks";
        case -1: return "Hinnad korgemast madalamaks";
    }
};


// const SortDropdown = () => (
//     <div className={"custom-select-wrapper"}>
//         <div className={"custom-select-sources"}>
//             <span className={"custom-select-trigger"}>selectedoption</span>
//             <div className={"custom-options"}>
//                 <span className={"custom-option"}>Hinnad madalamast korgemaks</span>
//                 <span className={"custom-option"}>Hinnad korgemast madalamaks</span>    
//             </div>
//         </div>
//     </div>
// );

// {/* <select value={direction} onChange={onChange}>
//             <option value={-1}>Hinnad korgemast madalamaks</option>
//             <option value={1}>Hinnad madalamast korgemaks</option>
//         </select> */}

SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SortDropdown;