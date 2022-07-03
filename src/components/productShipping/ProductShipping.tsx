/* eslint-disable camelcase */
import React from 'react';
import { Tooltip } from '@mui/material';
import ProductModel from '../../models/ProductModel';
import styles from './ProductShipping.module.scss';
import gray_info from '../../icons/gray_info.png';

const ProductShipping = (prop:ProductModel) => {
  const {
    product: {
      shipping: {
        method: {
          country, title, shipping_time, cost,
        }, lead_time,
      },
    },
  } = prop;
  return (
    <div
      className={styles.mainContainer}
    >
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
        <span className={styles.price}>{cost.value.toFixed(2)}</span>
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
