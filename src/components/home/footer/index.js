import React, { memo } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import EmailInput from "./EmailInput";
import logo from "../../../assets/images/logo.svg";
import whatsapp from "../../../assets/images/share-social/whatsapp.svg";
import twitter from "../../../assets/images/share-social/twitter.svg";
import facebook from "../../../assets/images/share-social/facebook.svg";
import discord from "../../../assets/images/share-social/discord.svg";
import telegram from "../../../assets/images/share-social/telegram.svg";

const Footer = () => {
  const postUrl = `https://gmail.us20.list-manage.com/subscribe/post?u=98153c4261d7893be2afff3c8&id=e005565386`;

  const [email, setEmail] = React.useState("");

  return (
    <div className="footer">
      <div className="footer__logo">
        <ReactSVG src={logo} />
      </div>
      <h3>A Mobile First Metaverse</h3>
      <p>Party, Collect, Earn</p>

      {/* <input type="text" placeholder="Enter your e-mail" />
       */}
      <div className="inputwrapper">
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <EmailInput
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
      <div className="footer__nav">
        <ul className="footer_nav_list">
          <li>
            <Link to="/all-1block" className="navigation__link">
              All 1Block
            </Link>
          </li>
          <li>
            <Link to="/buy-1block" className="navigation__link">
              Buy 1Block
            </Link>
          </li>
          <li>
            <Link to="/marketplace" className="navigation__link">
              Marketplace
            </Link>
          </li>
          <li>
            <Link to="/faq" className="navigation__link">
              FAQs{" "}
            </Link>
          </li>
          <li>
            <Link to="/blog" className="navigation__link">
              Blog{" "}
              <i
                className="fa fa-external-link"
                style={{ paddingLeft: "5px" }}
              ></i>
            </Link>
          </li>
          <li>
            <a
              href="https://1block.gitbook.io/1block-party/"
              target="blank"
              className="navigation__link"
            >
              Whitepaper{" "}
              <i
                className="fa fa-external-link"
                style={{ paddingLeft: "5px" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">© 2021, HODL Studios</p>
      <div className="footer__policy">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
      <div className="social__links">
        <a href="https://whatsapp_fake.com" target="_blank">
          <ReactSVG src={whatsapp} className="social__links__item" />
        </a>
        <a href="https://twitter_fake.com" target="_blank">
          <ReactSVG src={twitter} className="social__links__item" />
        </a>
        <a href="https://facebook_fake.com" target="_blank">
          <ReactSVG src={facebook} className="social__links__item" />
        </a>
        <a href="https://discord_fake.com" target="_blank">
          <ReactSVG src={discord} className="social__links__item" />
        </a>
        <a href="https://teletram_fake.com" target="_blank">
          <ReactSVG src={telegram} className="social__links__item" />
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);
