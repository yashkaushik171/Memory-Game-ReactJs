import React, { useState } from "react";
import Card from "./Card";
import gameAPI from "./GameAPI";
let arr = [];
let indexArr = [];
let click = 0;
let score = 0;

const Main = () => {
  const [gameData, setGameData] = useState(
    [...gameAPI].sort(() => {
      return Math.random() - 0.5;
    })
  );

  const handleClick = (index, id) => {
    gameData[index].status = "active";
    setGameData((old) => [...old]);

    arr.push(id);
    indexArr.push(index);
    click++;

    if (arr.length == 2 && arr[0] === arr[1]) {
      score++;
      if (score == 8)
        return setTimeout(() => {
          alert(`You Won By ${click} Moves.`);
        }, 700);

      // if condition for correct pairs
      gameData[indexArr[0]].status = "active correct";
      gameData[indexArr[1]].status = "active correct";
      setGameData((old) => [...old]);
      arr = [];
      indexArr = [];
    } else if (arr.length == 2) {
      // if condition for wrong pairs

      gameData[indexArr[0]].status = "active wrong";
      gameData[indexArr[1]].status = "active wrong";
      setTimeout(() => {
        gameData[indexArr[0]].status = "";
        gameData[indexArr[1]].status = "";
        setGameData((old) => [...old]);
        arr = [];
        indexArr = [];
      }, 500);
    }
  };

  return (
    <>
      <h2 className=" text-center heading my-5">Memory game - React</h2>
      <div className="container-fluid main mt-3 ">
        <div className="info-box d-flex align-items-center justify-content-center flex-column me-5">
          <h4>Moves</h4>
          <p className="moves">{click}</p>
        </div>
        <div className="card-container">
          {gameData.map((item, index) => {
            return <Card src={item} index={index} handleClick={handleClick} />;
          })}
        </div>

        <div className="info-box custom d-flex align-items-center justify-content-center flex-column ms-5">
          <h4>Score</h4>
          <p className="score s">{score}</p>
        </div>
      </div>
    </>
  );
};

export default Main;
