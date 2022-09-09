import './App.css';
import Home from 'pages/home/Home';
import {
  // BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestBackendVersion, requestIpAddress } from 'apis/request';
import Config from 'config';
import { useDispatch, useSelector } from 'react-redux';
import * as actionConstants from 'store/constants/index';
import pathname from 'routes';
import NavBar from 'components/NavBar/NavBar';

function AppVersion() {
  const [backendVersion, setBackendVersion] = useState('0.0.0');
  useEffect(() => {
    requestBackendVersion().then((res) => (setBackendVersion(res.backend_version)));
  }, []);
  return (
    <div className="app-version">
      <span>
        {`SharkFBO v${Config.version}`}
      </span>
      <span>
        {`Backend v${backendVersion}`}
      </span>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    const data = await requestIpAddress();
    dispatch({ type: actionConstants.GET_IP_ADDRESS, payload: data });
  }, []);

  // should be removed in production
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log('state-change-listener:', state);
  }, [state]);
  return (
    <>
      <AppVersion />
      <div className="web-body">
        <NavBar />
        <Routes>
          <Route exact path={pathname.home} element={<Home />} />
          <Route component={Home} />
        </Routes>
      </div>
    </>
  );
}

export default App;
