import React, { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";

const Lottery = () => {
  let [ticket, setTicket] = useState(genTicket(3));

  let isWinning = sum(ticket) === 15;

  let buyTicket = () => {
    setTicket(genTicket(3));
  };

  return (
    <div className="container">
      <h1>Lottery Game !</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={buyTicket}>Buy new Ticket</button>
      <h3>{isWinning && "Congratulation you won"}</h3>
    </div>
  );
};

export default Lottery;
