import React from 'react';
import { connect } from 'react-redux';

import HomeComponent from "./pages/home/home.component";
import LoadingComponent from "./component/loading/loading.component";

const App = props => {
  // const apiKey = 'coinranking191787c6afc2839be2de35c1ba7b2f3401b9e6ec9706c163';

  const loading = props.loaded === false ? <LoadingComponent /> : null; 

  return (
    <div className="App">
      {loading}
      <HomeComponent />
    </div>
  );
}

const mapStateToProps = state => ({
  loaded: state.apiData.loaded
});

export default connect(mapStateToProps)(App);
