import Chart from '../chart/chart.component';

import styles from './cryptoDisplayer.module.scss';

const CryptoDisplayer = ({ coinData, baseData }) => {

    return (
        coinData === null ? <div> loading </div> :
        <div className={ styles.main } style={{ backgroundColor: coinData.color }}>
            <div className={ styles.header }>
                <div className={ styles.info }>
                    <div className={ styles.logo }>
                        <img src={ coinData.iconUrl } alt=""/>
                    </div>
                    <div className={ styles.details }>
                        <p className={ styles.name }> { coinData.name } </p>
                        <div className={ styles.secDetials }>
                            <p>{coinData.symbol}</p>
                            <p>#{coinData.rank}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={ styles.changes }>
                        % {coinData.change}
                    </div>
                </div>
            </div>
            <div className={ styles.hero }>
                <h1>
                    {baseData.sign} {parseFloat(coinData.price).toFixed(2)}
                </h1>
            </div>
            <div className={ styles.footer }>
                <div>
                    Powerd by <a href="https://coinranking.com/" target="_" rel="noopener noreferrer">CoinRanking</a>.
                </div>
            </div>
            <div className={ styles.main_bgChart }>
                <Chart dataArr={ coinData } />
            </div>
        </div>
    );
}

export default CryptoDisplayer;