import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IonApp, IonHeader, IonToolbar,IonTitle, IonContent } from '@ionic/react';
import { getBitcoinPrice } from './api/bitcoin';

class App extends Component {
  state = {
    bitcoinInfo: {},
    loading: true
  }

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinPrice();
    this.setState({
      bitcoinInfo,
      loading: false, 
    }, () => console.log(this.state))
  };

  render() {
    const { bitcoinInfo } = this.state;
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Bitcoin Price Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <code>{JSON.stringify(bitcoinInfo)}</code>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
