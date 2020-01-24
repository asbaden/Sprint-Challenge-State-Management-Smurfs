import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";

const SmurfList = props => {
  console.log("this is props in list", props)
    return (
    <div>
      <button onClick={props.fetchSmurfs}>See The Smurfs</button>
      {!props.smurfs && !props.isLoading && (
        <h2>Click Above To See The Smurfs</h2>
      )}

      {props.smurfs && !props.isLoading && (
        <div>
          {props.smurfs.map(smurf => (
            <div>
              <h2>{smurf.name}</h2>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
