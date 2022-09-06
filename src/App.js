import { useEffect, useState } from "react";
import "./App.css";
import smokeImg from "./Images/greensmoke.png";
import logo from "./Images/logo.png";
import motto from "./Images/motto.png";
import sign from "./Images/bt2.png";
import discord from "./Images/bt4.png";
import twitter from "./Images/bt5.png";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="LoadingScreen">
          <img className="Logo" src={logo} />
          <img className="Motto" src={motto} />
        </div>
      ) : (
        <div className="App">
          <div className="Sign">
            <img src={sign} alt="smoke" />
          </div>
          <div className="WC">
            <a href="https://www.launchmynft.io/" target="_blank">
              <div className="Mint">
                <p>&nbsp;</p>
              </div>
            </a>
            <div className="smoke-wrap">
              <img className="smoke" src={smokeImg} alt="smoke" />
            </div>
            <div className="smoke-wrap">
              <img className="smoke2" src={smokeImg} alt="smoke" />
            </div>
            <div className="smoke-wrap">
              <img className="smoke3" src={smokeImg} alt="smoke" />
            </div>
          </div>
          <div className="Socials">
            <a href="https://twitter.com/p00ps_NFT" target="_blank">
              <img
                className="imgT"
                href="https://twitter.com/p00ps_NFT"
                src={twitter}
                alt="twitter"
              />
            </a>
            <a href="https://discord.gg/svbJCVPU" target="_blank">
              <img className="imgD" src={discord} alt="discord" />
            </a>
          </div>
          <div className="Footer">
            <p>Copyright © 2022. Made with 💩 by the p00ptopia dev team!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
