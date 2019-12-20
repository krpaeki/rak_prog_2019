import React from "react";
import ItemsList from "../components/ItemsList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "./homepage.css";
import SortDropdown from "../components/SortDropdown.jsx";
import {connect} from "react-redux";
import { getItems } from "../store/actions";
import { ItemProps } from "./CartPage.jsx";
import * as selectors from "../store/selectors.js";

class HomePage extends React.PureComponent{

    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired,
    };

    constructor(props){
      super(props);
      this.state = {
        sortDirection: -1,
        allCategories: ["phones", "laptops"],
        selectedCategories: ["phones"],
      };
    }

    componentDidMount(){
      this.props.dispatch(getItems());
    }

    handleFilterSelect = (event) =>{
      const categoryName = event.target.name;
      if(this.isSelected(categoryName)) {
        return this.unselectCategory(categoryName);
      }
      this.selectCategory(categoryName);
  };

  selectCategory = (categoryName) => {
    this.setState( {
      selectedCategories: this.state.selectedCategories.concat([categoryName])
    });
  };

  unselectCategory = (categoryName) => {
    const newArr = this.state.selectedCategories.filter( cn => cn !== categoryName);
    this.setState({
      selectedCategories: newArr
    });
  };

  getVisibleItems = () =>{
    return this.props.items
    .filter( item => this.isSelected(item.category))
    .sort( (a, b) => {
      switch (this.state.sortDirection) {
        case -1: return b.price - a.price;
        case 1: return a.price - b.price;
      }
    });
  };

  isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

  handleSortDropdown = (sortDirection) => {
    this.setState({
      sortDirection,
    });
  };

    render(){
      console.log("this.state", this.state);
      const items = this.getVisibleItems();
      return (
        <>
          <div>
            <div>
              <ItemFilters
                allCategories={this.state.allCategories}
                handleDropdown={this.handleFilterSelect}
                isSelected={this.isSelected}
              /> 
            </div>
            <div className={"items-header-wrapper"}>
              <div>
                Leitud: {items.length} {this.state.selectedCategories.join(", ")}
              </div>
              <SortDropdown 
                direction={this.state.sortDirection}
                onChange={this.handleSortDropdown}
              />
            </div>
            <ItemsList items={items} />
          </div>
        </>
      );
    }
  }

  const ItemFilters = ({allCategories, handleDropdown, isSelected}) => {
    return (
      <div className={"itemFilters-wrapper"}>
        {
        allCategories.map( categoryName => {
          return (
            <Checkbox 
            key={categoryName}
            name ={categoryName} 
            onChange={handleDropdown}
            checked={isSelected(categoryName)}
            />
            
          );              
        })
      }
      </div>      
    );
  };

  ItemFilters.propTypes = {
    allCategories: PropTypes.array.isRequired,
    handleDropdown: PropTypes.func.isRequired,
    isSelected: PropTypes.func.isRequired,
  };

  const mapStateToProps = (store) => {
    return {
      items: selectors.getItems(store),
    };
  };

  export default connect(mapStateToProps)(HomePage);