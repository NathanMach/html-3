import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(){
      super()
      this.state = {
          isMobileMenuOpen: false,
      }
  }

  toggleMobileMenu = () => {
      this.setState({
          isMobileMenuOpen: !this.state.isMobileMenuOpen,
      })
  }

  render() {
      return (
          <div className='App'>
              <header className='header'>
                <p className='intro'>Start Bootstrap</p>
                <nav className='nav'>
                    <ul className='list'>
                      <li className='nav-item'>SERVICES</li>
                      <li className='nav-item'>PORTFOLIO</li>
                      <li className='nav-item'>ABOUT</li>
                      <li className='nav-item'>TEAM</li>
                      <li className='nav-item'>CONTACT</li>
                    </ul>  
                </nav>
                <button onClick={this.toggleMobileMenu} className='buttonscreen'>Menu</button>
                <div className="globalnavbar">
                <ul 
                        className={`mobile-nav-list ${
                          this.state.isMobileMenuOpen ? 'mobile-nav-list-open' : null
                        }`}
                      >          
                      <li className='mobile-nav-item'>SERVICES</li>
                      <li className='mobile-nav-item'>PORTFOLIO</li>
                      <li className='mobile-nav-item'>ABOUT</li>
                      <li className='mobile-nav-item'>TEAM</li>
                      <li className='mobile-nav-item'>CONTACT</li>
                    </ul>  
                </div>
              </header>
              <div className='info'>
                <h2 className='h2'>Welcome To Our Studio</h2>
                <h1 className='h1'>IT'S NICE TO MEET YOU</h1>
                  <button className='button'>Tell Me More</button>
                <h2>SERVICES</h2>
              </div>
                  <div className></div>
              </div>
      )
  }
}

export default App;


