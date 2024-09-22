import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#00BFFF', color: 'white', textAlign: 'center', padding: '10px 0' }}>
      <div>
        <p style={{ fontSize: '20px', margin: '0' }}>The Generics</p>
        <div>
          <a href="#youtube">
            <img src="youtube-icon.png" alt="YouTube" style={{ width: '30px', margin: '0 10px' }} />
          </a>
          <a href="#spotify">
            <img src="spotify-icon.png" alt="Spotify" style={{ width: '30px', margin: '0 10px' }} />
          </a>
          <a href="#facebook">
            <img src="facebook-icon.png" alt="Facebook" style={{ width: '30px', margin: '0 10px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
