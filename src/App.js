import React, { Component } from 'react'
import "./App.css";

const api = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ligler: [],
    };
  }
  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ ligler: data.leagues }));
  }


  render() {

    const ligler_ = this.state.ligler;

    console.log(ligler_);


    return (

      <div className="main">

        <div className="headerText">
          <center> <h1 id="headerText"><a id="linkSprt" href="https://www.thesportsdb.com" target="blank">thesportsdb.com</a> ' da mevcut futbol ligleri</h1>
          </center>
        </div>
        <div className="container">

          <table className="table table-dark">
            <thead>
              <tr key={Math.random() * 2323232}>
                <th scope="col">Lig ID</th>
                <th scope="col">Takım</th>
                <th scope="col">Diğer adı</th>
              </tr>
            </thead>
            <tbody>
              {
                ligler_.map(lig =>
                  <tr key={Math.random() * 2323232}>
                    <th scope="row">{lig.idLeague}</th>
                    <td>{lig.strLeague}</td>
                    <td>{lig.strLeagueAlternate}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default App;