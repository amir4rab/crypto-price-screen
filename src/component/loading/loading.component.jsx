import styles from './loading.module.scss';

const Loading = props => {
    return (
        <div className={styles.overlay}>
            <div className={styles.box}>
                Loading...
            </div>
        </div>
    );
}

export default Loading;