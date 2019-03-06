import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getData } from "../actions/index.js";

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading Data...</p>;
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  characters: state.key.characters,
  isLoading: state.key.isLoading,
  error: state.key.error
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getData
  }
)(CharacterListView);
