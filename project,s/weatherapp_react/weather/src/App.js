import './App.css';
import sandy from './image/sandy.jpg'

function App(){
    return(

<div>
    
<body>
    <div class="mainContainer">
        <div class="searchInput">
            <input type="text" placeholder="Enter City Name" id="searchInput" value="New York"/>
            <button id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="weatherDetails">
            <div class="weatherIcon">
                <img src="Images/sun.png" alt="Clouds" id="weatherIcon">
            </div>
            <div class="cityDetails">
                <div class="weather" id="weather"></div>
                <div class="desc"></div>
            </div>
            <div class="windDetails">
                <div class="humidityBox">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgr7XehXJkOPXbZr8xL42sZEFYlS-1fQcvUMsS2HrrV8pcj3GDFaYmYmeb3vXfMrjGXpViEDVfvLcqI7pJ03pKb_9ldQm-Cj9SlGW2Op8rxArgIhlD6oSLGQQKH9IqH1urPpQ4EAMCs3KOwbzLu57FDKv01PioBJBdR6pqlaxZTJr3HwxOUlFhC9EFyw/s320/thermometer.png" alt="Humidity">
                    <div><p class="humidity"></p><span>Humidity</span></div>
                </div>
                <div class="windSpeed">
                    <img src={https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyaIguDPkbBMnUDQkGp3wLRj_kvd_GIQ4RHQar7a32mUGtwg3wHLIe0ejKqryX8dnJu-gqU6CBnDo47O7BlzCMCwRbB7u0Pj0CbtGwtyhd8Y8cgEMaSuZKrw5-62etXwo7UoY509umLmndsRmEqqO0FKocqTqjzHvJFC2AEEYjUax9tc1JMWxIWAQR4g/s320/wind.png}/ alt="phto1">
                    <div><p id="windSpeed"></p><span>Wind Speed</span></div>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
    </div>
);
};

export default App;