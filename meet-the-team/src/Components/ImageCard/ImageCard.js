import React from "react"
import "./ImageCard.css"
import rlogo from "./rlogo.png"

//Should have made this seperate components 

function ImageCard() {
  return (
    <div className="imageGrid">
      <div className="picture1 pic">
        <div className="textBox">
          <h3>Name</h3>
          <h4>SubTitle</h4>
          <p>
            <span>Q.</span>Question
          </p>
          <p>
            <span className="a">A.</span>Answer
          </p>
        </div>
      </div>
      <div className="picture2 pic">
        <div className="textBox">
          <h3>Name</h3>
          <h4>SubTitle</h4>
          <p>
            <span>Q.</span>Question
          </p>
          <p>
            <span>A.</span>Answer
          </p>
        </div>
      </div>
      <div className="picture3 pic">
        <div className="quoteWrap">
          <div className="quote">"</div>
          <div className="quoteText">I LIKE QUOTES AS MUCH AS THE NEXT GUY</div>
          <div className="quoteName">ALEX BARBATI</div>
        </div>
      </div>
      <div className="picture4 pic">
        <div className="textBox">
          <h3>Name</h3>
          <h4>SubTitle</h4>
          <p>
            <span>Q.</span>Question
          </p>
          <p>
            <span>A.</span>Answer
          </p>
        </div>
      </div>
      <div className="picture5 pic">
        <div className="textBox">
          <h3>Name</h3>
          <h4>SubTitle</h4>
          <p>
            <span>Q.</span>Question
          </p>
          <p>
            <span>A.</span>Answer
          </p>
        </div>
      </div>
      <div className="picture6 pic">
        <div className="textBox">
          <h3>ALEX BARBATI</h3>
          <h4>Designer Developer Dad</h4>
          <p>
            <span>Q.</span>What's kind of music do you like?
          </p>
          <p>
            <span>A.</span>Indie Pop, Jazz, Rock, Rap and
            SynthWave
          </p>
        </div>
      </div>
      <div className="picture7">
        <div className="quoteWrap two">
          <div className="quote">"</div>
          <div className="quoteText">
            DO THINGS HOW I DO THEM, YOU'LL SUCCEED.... lol jk don't
          </div>
          <div className="quoteName">ALEX BARBATI</div>
        </div>
      </div>
      <div className="picture8 pic">
        <div className="textBox">
          <h3>Name</h3>
          <h4>SubTitle</h4>
          <p>
            <span>Q.</span>Question
          </p>
          <p>
            <span>A.</span>Answer
          </p>
        </div>
      </div>
      <div className="picture9 pic">
        <div className="textBox">
          <h3>Name</h3>
          <h4>SubTitle</h4>
          <p>
            <span>Q.</span>Question
          </p>
          <p>
            <span className="a">A.</span>Answer
          </p>
        </div>
      </div>
      <div className="picture10 pic">
        <div className="textBox">
          <h3>Name</h3>
          <h4>SubTitle</h4>
          <p>
            <span>Q.</span>Question
          </p>
          <p>
            <span className="a">A.</span>Answer
          </p>
        </div>
      </div>
      <div className="picture11 pic">
        <div className="hireWrap">
          <h1>HIRE ME FOR YOUR TEAM</h1>
          <h2>IF YOU THINK I'VE GOT IT TAKES?</h2>
        </div>
        <img src={rlogo} alt="rLogo" className="rLogo"></img>
      </div>
    </div>
  )
}

export default ImageCard
