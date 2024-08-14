import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LocalStorage from "./utils/localStorage";
import Routes from "./Routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // initial load
    const accessToken = LocalStorage.getInstance().read("accessToken");
    // TEST: token
    // console.log(`token: ${accessToken}`);
    if (accessToken) {
      getProfile();
    }
  }, []);

  const getProfile = async () => {
    // const resp = await userServices.getProfile();
    // const data = resp.data;
    // if (resp?.status === 200) {
    //   dispatch(saveProfile(data?.data));
    // } else if (resp?.code === "408" || resp?.code === "401") {
    //   LocalStorage.getInstance().save("accessToken", null);
    //   window.location.href = SIDEBAR_ITEM_HREF.home;
    // }
  };

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
