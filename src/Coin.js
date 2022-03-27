import React from 'react'
import './Coin.css';
const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>

                <div className='coin'>
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>

                <div className='coin-data'>
                    <p className='space'>Price: ${price}</p>
                    <p className='space'>Volume: ${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="space red">Porcent: {priceChange.toFixed(2)}%
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-down-arrow" viewBox="0 0 16 16">
                                <path className='red' fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z" />
                            </svg>
                        </p>
                    ) : (
                        <p className="space green"> Porcent: {priceChange.toFixed(2)}%
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-down-arrow red" viewBox="0 0 16 16">
                                <path className='green' fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                            </svg>
                        </p>
                    )}
                    <p className='space'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Coin
