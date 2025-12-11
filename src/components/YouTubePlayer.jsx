import React from 'react';
import styles from './YouTubePlayer.module.scss';

const YouTubePlayer = ({ videoUrl, title = "Video Player" }) => {
  // Convert YouTube URL to embeddable format
  const getEmbedUrl = (url) => {
    // Handle different YouTube URL formats
    let videoId = '';
    
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtube.com/embed/')) {
      return url; // Already in embed format
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className={styles.youtubePlayerPanel}>
      <div className={styles.youtubePlayerContainer}>
        <div className={styles.videoWrapper}>
          <iframe
            src={embedUrl}
            className={styles.videoFrame}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
