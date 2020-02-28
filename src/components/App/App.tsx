import React from 'react';
import './App.css';
import Header from '../Header/Header';


interface Props {

}

interface State {

}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );

  }


  
  
  
}

export default App;
