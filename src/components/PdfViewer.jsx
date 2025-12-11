import React from 'react';
import styles from './PdfViewer.module.scss';

const PdfViewer = ({ pdfUrl, title = "PDF Viewer" }) => {
  // Convert Google Drive share link to embeddable format
  const getEmbedUrl = (shareUrl) => {
    const fileId = shareUrl.match(/\/d\/(.+?)\//)?.[1] || shareUrl.match(/id=(.+?)(&|$)/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : shareUrl;
  };

  const embedUrl = getEmbedUrl(pdfUrl);

  return (
    <div className={styles.pdfViewerPanel}>
      <div className={styles.pdfViewerContainer}>
        <div className={styles.pdfWrapper}>
          <iframe
            src={embedUrl}
            className={styles.pdfFrame}
            title={title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
