import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IonApp, IonHeader, IonToolbar,IonTitle, IonContent, IonIcon } from '@ionic/react';
import { getBitcoinPrice } from './api/bitcoin';
import LoadingCard from './components/LoadingCard/LoadingCard';
import BitcoinCard from './components/BitcoinCard/BitcoinCard';

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

    createLoadingCards () {
      return (
        <>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        </>
      )
    }
    createBtcCards (bitcoinInfo) {
      return Object.keys(bitcoinInfo.bpi).map((item,index) => 
      <BitcoinCard data={bitcoinInfo.bpi[item]} />
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
          <section className="btc-header">
        <IonIcon name="logo-bitcoin" className="btc-logo" />
          </section>
          {loading === true ? 
            this.createLoadingCards() :
            this.createBtcCards(bitcoinInfo)}
            <section className="disclaimer">
            <p>{bitcoinInfo.disclaimer}</p>
            </section>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
