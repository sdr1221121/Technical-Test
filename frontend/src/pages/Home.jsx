import {useEffect, useState} from "react"
import { getArticles } from "../api/client"
import { Link } from "react-router-dom";

export default function HomeScreen(){
    const [articles, setArticle]=useState([]);
    useEffect(( ) => {
        getArticles().then(response=> setArticle(response.data));
    }, []);
    return <div className="article-detail">
        <h1>Article</h1>
        <ul>
  {articles.map(article => (
    <li key={article.id}>
      <Link to= {`/article/${article.id}`} className="article-link">
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <small>{new Date(article.date).toLocaleString()}</small>
      </Link>
    </li>
  ))}
</ul>

    </div>
}