import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
    return (
        <section className="favorite-quotes">
            <div className="wrapper quotes">
                <h3>Top 3 favorite quotes</h3>
                {favoriteQuotes.length >= 1 && <ul>{favoriteQuotes.map((quote, index) => (
                    <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites} listPosition={index + 1}/>
                ))}</ul>}
            </div>
            {favoriteQuotes.length < maxFaves && (<div className="favorite-quotes-description">
                <p>You can add {maxFaves - favoriteQuotes.length} more quotes to you rtop three favorites by selecting from the options below.</p>
            </div>)}
        </section>
    )
};

export default FavoriteQuotes;