import React from 'react';
import Container from '../components/Container';

function Design() {
  return (
    <Container style={{ marginTop: '50px', maxWidth: '600px', padding: '20px' }}>
      <div style={{ 
        background: '#1d1d1d',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        outline: 'rgb(43, 43, 43) solid 3px',
        color: '#fff',
        fontFamily: "'Inconsolata', monospace",
        lineHeight: '1.6'
      }}>
        <h2 style={{ 
          color: '#b9a6e6',
          marginBottom: '24px',
          fontSize: '1.6rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Design Exploration
        </h2>
        
        <div style={{ fontSize: '1rem' }}>
          <p style={{ marginBottom: '20px' }}>
            It took me awhile to decide what to put on this page but I decided that it would be a place where I would exercise different design styles to try to expand my own personal style and adaptability.
          </p>
          
          <p style={{ marginBottom: '20px' }}>
            I was inspired to do this through guidance from my professors and my friend kaetwo's tweet: {' '}
            <a 
              href="https://x.com/kkaetwo/status/1956074878945386709"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: '#b9a6e6',
                textDecoration: 'underline',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#9c84d4'}
              onMouseLeave={(e) => e.target.style.color = '#b9a6e6'}
            >
              https://x.com/kkaetwo/status/1956074878945386709
            </a>
          </p>
          
          <p style={{ marginBottom: '0' }}>
            I'll give a little teaser to my first design inspiration: {' '}
            <a 
              href="https://hasu2010.bandcamp.com/track/pile-of-corpses"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: '#b9a6e6',
                textDecoration: 'underline',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#9c84d4'}
              onMouseLeave={(e) => e.target.style.color = '#b9a6e6'}
            >
              https://hasu2010.bandcamp.com/track/pile-of-corpses
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default React.memo(Design);