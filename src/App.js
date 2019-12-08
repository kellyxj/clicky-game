import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageArray: [
                "https://cdn.jjkeller.com/wcsstore/CVCatalogAssetStore/images/product/500x500/3142.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/31vHXw5fKVL._SX425_.jpg",
                "https://www.wtbtraffic.com/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/3/5/353snw-_2969_.jpg",
                "https://www.wtbtraffic.com/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/3/5/354snw-_2974_.jpg",
                "https://sep.yimg.com/ay/comfort/extra-large-individual-house-number-31.gif",
                "http://signletterdepot.com/images/thumbnails/280/282/detailed/0/6.jpg"
            ],
            score: 0,
            alreadyGuessed: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    shuffle(array) {
        const returnArray = [];
        const copyArray = array.slice();
        for (let i = 0; i < array.length; i++) {
            const randIndex = Math.floor(Math.random() * copyArray.length);
            returnArray.push(copyArray[randIndex]);
            copyArray.splice(randIndex, 1);
        }
        return returnArray;
    }

    handleClick(url) {
        if (!this.state.alreadyGuessed.includes(url)) {
            const guessArray = this.state.alreadyGuessed;
            guessArray.push(url);
            this.setState({
                imageArray: this.state.imageArray,
                score: this.state.score + 1,
                alreadyGuessed: guessArray
            });
        } else {
            this.setState({
                imageArray: this.state.imageArray,
                score: 0,
                alreadyGuessed: []
            });
        }
    }

    render() {
        return (
            <>
                <h1>Clicky Game</h1>
                <p>
                    Score: <span>{this.state.score}</span>
                </p>
                <div>
                    {this.shuffle(this.state.imageArray).map(imageUrl => (
                        <img
                            height="100px"
                            alt=""
                            src={imageUrl}
                            onClick={() => this.handleClick(imageUrl)}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default App;
