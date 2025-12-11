import styles from './MangaViewer.module.scss';

const MangaViewer = () => {
  return (
    <div className={styles.mangaViewer}>
      <iframe 
        src="https://namicomi.com/en/title/nM6E7HnY/corsace-closed-the-manga" 
        className={styles.mangaFrame}
        title="Corsace Manga"
      />
    </div>
  );
};

export default MangaViewer;
