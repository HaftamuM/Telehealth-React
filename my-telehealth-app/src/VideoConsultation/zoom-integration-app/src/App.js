import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    // Load Zoom SDK configurations
    ZoomMtg.setZoomJSLib("https://source.zoom.us/2.9.0/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    // Join the Zoom meeting
    const joinMeeting = () => {
      ZoomMtg.init({
        leaveUrl: "https://yourapp.com",
        success: () => {
          ZoomMtg.join({
            apiKey: process.env.REACT_APP_ZOOM_API_KEY,
            signature: "GENERATED_SIGNATURE", // use a backend to generate this
            meetingNumber: "MEETING_NUMBER",
            userName: "USERNAME",
            passWord: "PASSWORD",
            success: (success) => console.log(success),
            error: (error) => console.error(error),
          });
        },
      });
    };

    joinMeeting();
  }, []);

  return (
    <div className="App">
      <h1>Zoom Meeting Integration</h1>
    </div>
  );
}


/**
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
**/

export default App;
