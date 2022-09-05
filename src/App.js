import "./App.css";
import girl from "./images/girl.jpg";



function App() {
  return (
    <div className="App">
      
      <div class="flex-container">
        <div class="flex-item">
          <div className="sub1">
            <div className="circle"></div><span className="text">BASE APPAREL</span>
       
          </div>
        </div>  
        <div class="flex-item">
          <div className="seconddiv">
         
          <img src={girl}></img>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div className="contain">
        <div className="subcont">
        <div className="weR">WE’RE</div><span className="coming">COMING SOON</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form>
        <input className="inputdiv" placeholder="email Address" type="email" required ></input>
        <input type="submit" className="btn" value=">"></input> 
        </form>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
