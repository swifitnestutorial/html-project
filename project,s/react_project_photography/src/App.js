import './Style.css';
import logo from './image/back wala.jpg'
import img from './image/dadu.jpeg'
import Image from './image/sandesh.jpg'
import sandy from './image/sandy.jpg'
import vikki from './image/vikki 1.jpg'
import vikki2 from './image/vikki2.jpg'
import sandesh7jpg from './image/sandesh7.jpg'
import sandesh9jpg from './image/sandesh9.jpg'
import sandesh10jpg from './image/sandesh10.jpg'

function App() {
  return (
    <div className="App">
     <header>
        <h1>My Photography Portfolio</h1>
        <nav>
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="portfolio">Portfolio</a></li>
                <li><a href="about.html">about</a></li>
                <li><a href="contact.html"> contact</a></li>
            </ul>
        </nav>
    </header>
    
    <h1 className="h12"> it,s Photography,s website </h1>
    
    <section id="portfolio">
        <div className="gallery">
            <img src={logo} alt="Photo 1"/>
            
            <img src={img} alt="Photo 2" />

            <img src={Image} alt="Photo 3" />

            <img src={sandy} alt="Photo 4" />

            <img src={vikki} alt="Photo 5" />

            <img src={vikki2} alt="Photo 6" /> 

            <img src={sandesh7jpg} alt="photo 7"/>

            <img src={sandesh9jpg} alt="photo 9"/>

            <img src={sandesh10jpg} alt="photo 10"/>


            </div>
        
    </section>

    
    
    
    <section id="contact">
        <h2>Contact</h2>
        
        <p>If you would like to get in touch, please email me at <a href="mailto:@sandeshgawai33@gmail.com">sandeshgawai33@gmail.com</a>.</p>
        <p><a href='wa.me/9579142537'>wa.me/9579142537</a></p>
    </section>
    
    <footer>
        <p>&copy; My Photography Portfolio</p>
    </footer>

    </div>
  );
}

export default App;
