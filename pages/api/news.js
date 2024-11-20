import axios from 'axios';

export default async function handler(req, res) {
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);
        const articles = response.data.articles;
        res.status(200).json(articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Error fetching news data' });
    }
}
