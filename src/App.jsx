import './css/App.css';
import LoginWithFacebook from './Features/Auth/LoginWithFacebook';
import LoginWithGoogle from './Features/Auth/LoginWithGoogle';
import { ToastContainer } from 'react-toastify';

import { FirebaseUploadPhoto } from './Helpers/FirebaseUpload';

function App() {
  const handleUpload = async (url) => {
    const data = await FirebaseUploadPhoto(url);
    console.log(data);
  };
  return (
    <div className="App">
      {/* <LoginWithGoogle /> */}
      {/* <LoginWithFacebook /> */}
      <form>
        <input type="file" onChange={(e) => handleUpload(e.target.files)} />
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
