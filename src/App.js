import React, { Component } from 'react';
import axios from 'axios'
import { Loading } from './Loading';


class App extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      users: [],
      loading: false
    };
  }


    getUsers() {
      this.setState({
        loading: true

      })
      axios('https://api.randomuser.me/?nat=US&results=5') .then(response => this.setState({
    users: response.data.results,
    loading: false
  })
  );
    }

componentWillMount() {
  this.getUsers();
}

  render() {
    return <div className="App">{!this.state.loading ?? this.state.users.map(user => 
      
      <div>
        <h3>{user.name.first}</h3>
        <p>{user.email}</p>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users"/>
        </form>
        </div>

    )}
    <Loading message= "hey hey hey"/>
    </div>
  }
}

export default App;
