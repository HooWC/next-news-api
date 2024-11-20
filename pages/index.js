import axios from 'axios';
import styles from '../styles/Home.module.css';  // 引入CSS样式

export default function Home({ news }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Real-time News</h1>
      <div className={styles.newsList}>
        {news.map((article, index) => (
          <div key={index} className={styles.newsItem}>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className={styles.newsImage} />
            )}
            <div className={styles.newsContent}>
              <h2 className={styles.newsTitle}>{article.title}</h2>
              <p className={styles.newsDescription}>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.readMore}>Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/news');
  const news = response.data;

  return {
    props: { news },
  };
}
