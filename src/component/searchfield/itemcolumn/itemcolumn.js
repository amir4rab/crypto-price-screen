import styles from './itemcolumn.module.scss';
const itemcolumn = ({ data, selectCoinFn }) => {
    return (
        <div className={ styles.main } onClick={_=> selectCoinFn(data)}>
            <img src={data.iconUrl} className={ styles.main_icon } alt='' />
            <div className={ styles.main_name }>
                {data.symbol}
            </div>
        </div>
    )
}

export default itemcolumn;