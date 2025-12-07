import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api/client";
import '../components/ArticleDetail.css'

export default function ArticleDetail(){
    const {id}= useParams();
    const [article,setArticle]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        getArticleById(id).then(response=>{
            setArticle(response.data);
            setLoading(false);
        }).catch(error=>{
            console.error(error);
            setLoading(false);
        });
    },[id]);

    if (loading) return <p>Loading</p>;
    if (!article) return <p>404 - Article not found</p>

    return(
        <div className="article-detail">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}