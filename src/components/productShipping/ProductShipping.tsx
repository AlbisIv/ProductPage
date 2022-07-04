/* eslint-disable camelcase */
import { Tooltip } from '@mui/material';
import useStore from '../../store/OptionStore';
import ProductModel from '../../models/ProductModel';
import styles from './ProductShipping.module.scss';
import gray_info from '../../icons/gray_info.png';

const ProductShipping = (prop:ProductModel) => {
  const {
    product: {
      options,
      shipping: {
        method: {
          country, title, shipping_time, cost,
        }, lead_time,
      },
    },
  } = prop;

  const optionState = useStore((state) => state);

  return (
    <div
      className={styles.mainContainer}
    >

      <div>
        {optionState['1080p'] > 0 && (
          <div className={styles.option__container}>
            <div className={styles.option__left}>
              <b className={styles.gray14}>{options['1080p'].label}</b>
            </div>
            <br />

            <span className={styles.option__middle}>
              {options['1080p'].price.currency.symbol}
              {' '}
              {options['1080p'].price.value}
              {' '}
              x
              {' '}
              {optionState['1080p']}
            </span>

            <b className={styles.option__right}>
              =
              {' '}
              {options['1080p'].price.currency.symbol}
              {' '}
              {Number((optionState['1080p'] * options['1080p'].price.value).toFixed(2)).toLocaleString('en-US')}
            </b>
          </div>
        )}

        {optionState['4k'] > 0 && (
          <div className={styles.option__container}>
            <div className={styles.option__left}>
              <b className={styles.gray14}>
                {options['4k'].label}
              </b>
            </div>
            <br />

            <span className={styles.option__middle}>
              {options['4k'].price.currency.symbol}
              {' '}
              {options['4k'].price.value}
              {' '}
              x
              {' '}
              {optionState['4k']}
            </span>

            <b className={styles.option__right}>
              =
              {' '}
              {options['4k'].price.currency.symbol}
              {' '}
              {Number((optionState['4k'] * options['4k'].price.value).toFixed(2)).toLocaleString('en-US')}
            </b>
          </div>
        )}

        {optionState.battery_accessories > 0 && (
          <div className={styles.option__container}>
            <div className={styles.option__left}>
              <b className={styles.gray14}>{options.battery_accessories.label.slice(0, 7)}</b>
            </div>

            <span className={styles.option__middle}>
              {options.battery_accessories.price.currency.symbol}
              {' '}
              {options.battery_accessories.price.value}
              {' '}
              x
              {' '}
              {optionState.battery_accessories}
            </span>
            <b className={styles.option__right}>
              =
              {' '}
              {options.battery_accessories.price.currency.symbol}
              {' '}
              {Number((optionState.battery_accessories * options.battery_accessories.price.value)
                .toFixed(2)).toLocaleString('en-US')}
            </b>
          </div>
        )}
      </div>

      <div className={styles.shipto__price}>
        <div>
          <span className={styles.gray14}>
            ship to
            {' '}
            <u className={styles.gray14}>{country}</u>
          </span>
          <br />
          <Tooltip title={title}>
            <u className={styles.gray14}>
              by
              {' '}
              {title.slice(0, 15)}
              ...
            </u>
          </Tooltip>
        </div>
        <span className={styles.price}>{Number(cost.value.toFixed(2)).toLocaleString('en-US')}</span>
      </div>

      <div className={styles.time__box}>
        <span className={styles.gray14}>
          Lead Time
          {' '}
          <b>
            {lead_time.value}
          </b>
        </span>
        <Tooltip title={lead_time.info}><img src={gray_info} alt="info" width="14px" height="14px" /></Tooltip>
      </div>

      <div className={styles.time__box}>
        <span className={styles.gray14}>
          Shipping time
          {' '}
          <b>
            {shipping_time.value}
          </b>
        </span>
        <Tooltip title={shipping_time.info}><img src={gray_info} alt="info" width="14px" height="14px" /></Tooltip>
      </div>

      <button className={`${styles.btn}  ${styles.btn__primary}`}>Login to Purchase</button>
      <button className={`${styles.btn}  ${styles.btn__secondary}`}>Contact the Supplier</button>

    </div>
  );
};

export default ProductShipping;
