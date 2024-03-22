import React from "react";
import { GrFirefox } from "react-icons/gr";
import { SiGooglechrome } from "react-icons/si";

function CardInstallMetaMask() {
  return (
    <div className="bg-white rounded-lg flex flex-col p-8 ">
      <p>Para usar essa Nosso serviços é necessario ter a extenção MetaMask instalada</p>
      <p>Ela pode ser encontarda nos seguinte links:</p>
      <div className="mt-4">
        <div className="flex text-[40px] text-blue-400 justify-around px-[30%]">
          <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/">
            <GrFirefox />
          </a>
          <a
            target="_blank"
            href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?pli=1"
          >
            <SiGooglechrome />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardInstallMetaMask;
