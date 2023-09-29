import "../css/Articles.css";
import React from "react";

const Articles = () => {
    return (
        <section class="articles">
            <div class="articles-container">
                <h1>Articles.</h1>
                <p>Ideas that will Shape & Supercharge your business.</p>
                
                <div class="articles-read-more">
                    <a href="/" class="article-btn"><button>Read More →</button></a>
                </div>
            </div>
        </section>
    );
}

export default Articles;