import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IonApp, IonHeader, IonToolbar,IonTitle, IonContent } from '@ionic/react';
import { getBitcoinPrice } from './api/bitcoin';
import LoadingCard from './components/LoadingCard/LoadingCard';
class App extends Component {
  state = {
    bitcoinInfo: {},
    loading: true
  }

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinPrice();
    this.setState({
      bitcoinInfo,
      loading: true, 
    }, () => console.log(this.state))
  };

    createLoadingCards () {
      return (
        <>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        </>
      )
    }
  render() {
    const { bitcoinInfo, loading } = this.state;
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Bitcoin Price Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          { loading === true ? 
            this.createLoadingCards() :
            null}
          {/* <code>{JSON.stringify(bitcoinInfo)}</code> */}
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
