/* eslint-disable camelcase */
import React from 'react';
import ProductModel from '../../models/ProductModel';
import styles from './ProductDetails.module.scss';
import check from '../../icons/check.png';
import star from '../../icons/star.png';
import star_half from '../../icons/star_half.png';
import march_expo_logo from '../../icons/march_expo_logo.png';
import forward from '../../icons/forward.png';
import gray_clock from '../../icons/gray_clock.png';
import shield from '../../icons/shield.svg';
import visa from '../../icons/visa.svg';
import mastercard from '../../icons/mastercard.svg';
import apple_pay from '../../icons/apple_pay.svg';
import OptionAdder from '../optionAdder/OptionAdder';

// TODO Pielikt slidera loģiku
// TODO pielikt taimera loģiku
// TODO pielikt input loģiku (uztaisīt atsevišķu komponenti un mainīt cenu)
// TODO Pielikt komatu, ja cena ir virs 3 cipariem

const ProductDetails = (prop: ProductModel) => {
  const {
    product: {
      name, tags,
      options,

      discount,
      reviews: { rating, count, total_buyers },
      shipping: { props: { ready_to_ship, in_stock, fast_dispatch } },
    },
  } = prop;

  const starArray = [];

  // A function that fills starArray with full/half/empty stars

  for (let i = 0; i < Math.floor(rating); i += 1) {
    starArray.push('full');
  }
  if (rating % 1 !== 0) {
    starArray.push('half');
  }

  const discountEndDate = new Date(discount.end_date);
  const updateTimer = () => {
    const now = new Date();
    const diff = discountEndDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${days}d:${hours}h:${minutes}m:${seconds}s`;
  };

  const newPrices: number[] = [];
  const oldPrices: number[] = [];
  Object.keys(options).forEach((key) => {
    newPrices.push(options[key].price.value);
    oldPrices.push(options[key].old_price.value);
  });

  return (
    <div className={styles.mainContainer}>

      <div className={styles.labels}>
        {ready_to_ship && <div className={styles.gradient__label}>Ready to ship</div>}
        {in_stock && (
        <div className={styles.label}>
          <img src={check} alt="check" width="12px" height="12px" />
          In stock
        </div>
        )}
        {fast_dispatch && (
        <div className={styles.label}>
          <img src={check} alt="check" width="12px" height="12px" />
          Fast dispatch
        </div>
        )}
      </div>

      <div className={styles.title__container}>
        <span className={styles.title}>{name}</span>
        {tags && tags.map((tag) => <span className={styles.tag} key={tag}>{tag}</span>)}
      </div>

      <div className={styles.reviews}>

        <div className={styles.stars}>
          {starArray.map((element) => (
            <img
              key={Math.random()}
              src={element === 'full' ? star : star_half}
              alt="star"
              width="14px"
              height="14px"
            />
          ))}
          {rating}
          {' '}
          <span className={styles.reviews__text}>
            {count}
            {' '}
            Reviews
          </span>
        </div>

        <span className={styles.buyers}>
          {total_buyers}
          {' '}
          buyers
        </span>
      </div>

      <div className={styles.priceRange}>
        <div>
          <span className={styles.new__price}>
            {options['1080p'].price.currency.symbol}
            {' '}
            {newPrices.sort((a, b) => a - b)[0].toFixed(2)}
            {' '}
            -
            {' '}
            {options['1080p'].price.currency.symbol}
            {' '}
            {newPrices.sort((a, b) => b - a)[0].toFixed(2)}
          </span>
          <br />
          <span className={styles.old__price}>
            {options['1080p'].price.currency.symbol}
            {' '}
            {oldPrices.sort((a, b) => a - b)[0].toFixed(2)}
            {' '}
            -
            {' '}
            {options['1080p'].price.currency.symbol}
            {' '}
            {oldPrices.sort((a, b) => b - a)[0].toFixed(2)}
          </span>
        </div>
        <div>
          <span className={styles.gray14}>/ Option</span>
          <span className={styles.line}> | </span>
          <span className={styles.black14}>2 Options </span>
          <span className={styles.gray14}>(Min.Order)</span>
        </div>
      </div>

      <div className={styles.shipping__slider}>
        <img src={march_expo_logo} alt="logo" width="76px" height="40px" />
        <span className={styles.orange14}>• Free shipping (up to $40)</span>
        <span className={`${styles.orange14} ${styles.hidden}`}>• On-time delivery guaranteed</span>
        <img className={styles.forward__btn} src={forward} alt="forward" />
      </div>

      <div className={styles.discount__timer}>
        <div>
          <span className={styles.orange14}>
            {discount.amount}
            {' '}
            OFF
            {' '}
          </span>
          <span className={styles.gray14}>
            Discount ends in
          </span>

        </div>
        <div className={styles.timer__container}>
          <img src={gray_clock} alt="clock" width="16px" height="16px" />
          <span>{updateTimer()}</span>
        </div>
      </div>

      <div className={styles.options}>
        <div className={styles.options__left}>
          <span className={styles.gray14}>Options:</span>
        </div>
        <div className={styles.options__right}>
          {options && Object.keys(options).map((key, index) => (
            <div key={key} className={styles.options__box}>
              <div className={styles.options__box__left}>
                <span className={`${styles.black14} ${styles.option__name}`}>{options[key].label}</span>
                <span className={`${styles.black14} ${styles.option__price}`}>
                  {options[key].price.currency.symbol}
                  {' '}
                  {options[key].price.value}
                </span>
              </div>
              <OptionAdder />
            </div>
          ))}
        </div>

      </div>

      <div className={styles.protect}>
        <img src={shield} alt="shield" />
        <div>
          <span className={styles.trade__assurance}>Trade Assurance</span>
          <span className={styles.gray12}> protects your Alibaba.com orders</span>
        </div>
      </div>

      <div className={styles.payments}>

        <span className={styles.gray12}>
          Payments:
        </span>
        <img src={visa} alt="visa" />

        <img src={mastercard} alt="mastercard" />
        <img src={apple_pay} alt="apple pay" />
      </div>

      <div className={styles.links}>
        <span className={styles.gray12}>Alibaba.com Logistics</span>
        <span className={styles.gray12}>Inspection Solutions</span>
      </div>
    </div>
  );
};

export default ProductDetails;
