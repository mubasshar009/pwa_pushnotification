import './App.css';
import firebase from './firebase';

function App() {

  const messaging = firebase.messaging();
  messaging.getToken()
  .then((token) => {
    console.log('Token=> ',token);
  })

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
