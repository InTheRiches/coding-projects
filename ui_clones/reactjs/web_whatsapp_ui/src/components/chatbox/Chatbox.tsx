import { useState } from "react";
import "./Chatbox.css";
import contacts from "../../data/contacts.json";

import Contact from "../contact/Contact";
import Details from "../details/Details";

import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchIcon from "@material-ui/icons/Search";


export default function Chatbox() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <div className={`chatbox ${(navigationOpen) ? 'chatbox-navigation-open' : 'chatbox-navigation-closed'}`}>
      <div className="navigation-section">
        <img className="profile-picture" src="assets/images/Frontend_Coding.png"/>
        <div className="actions">
          <MessageIcon/>
          <MoreVertIcon/>
        </div>
      </div>
      <div className="search-section">
        <label htmlFor="searchbar">
          <SearchIcon/>
        </label>
        <input id="searchbar" placeholder="Search contacts"/>
      </div>
      <div className="list-section">
        {contacts.map((c) => {
          return <Contact contact={c}/>
        })}
      </div>
      <Details contact={selectedContact}/>
      <div className="chat-section"></div>
      <div className="message-section"></div>
    </div>
  );
}
