import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import fetchCardDetails from '../../api/fetchCardDetail';
import { readLocal } from '../../helpers/localStorage';
import fetchSalesUpdatingStatus from '../../api/fetchSalesUpdatingStatus';

function OrderDetailSeller() {
  const params = useParams();
  const [date, setDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [order, setOrder] = useState([]);
  const [disabledPreparative, setDisabledPreparative] = useState(false);
  const [disabledDelivery, setDisabledDelivery] = useState(true);
  const [status, setStatus] = useState('');

  const addingZero = (num) => {
    let zeroPlusNumber = String(num);
    let counter = zeroPlusNumber.length;
    const maxLength = 4;

    while (counter < maxLength) {
      zeroPlusNumber = `0${zeroPlusNumber}`;
      counter += 1;
    }

    return zeroPlusNumber;
  };

  const dateConverter = (d) => {
    const currentDate = new Date(d);
    const sliceNumber = -2;
    const day = (`0${currentDate.getDate()}`).slice(sliceNumber);
    const month = (`0${currentDate.getMonth() + 1}`).slice(sliceNumber);
    const result = `${day}/${month}/${currentDate.getFullYear()}`;
    return result;
  };
  const priceConverter = (currency) => {
    const brlCurrency = currency.toString()
      .replace('.', ',');
    return `R$ ${brlCurrency}`;
  };

  const disabledButton = (currentStatus) => {
    if (currentStatus === 'Preparando') {
      setDisabledPreparative(true);
      return setDisabledDelivery(false);
    }
    if (currentStatus === 'Pendente') {
      setDisabledPreparative(false);
      return setDisabledDelivery(true);
    }
    setDisabledPreparative(true);
    setDisabledDelivery(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = readLocal('user');
        const { data } = await fetchCardDetails(user.token, params.id);

        setOrder(data);
        disabledButton(data[0].sale.status);
        setTotalPrice(data[0].sale.totalPrice);
        setStatus(data[0].sale.status);
        setDate(data[0].sale.saleDate);
      } catch (error) { console.error(error); }
    };
    fetchData();
  }, [params.id]);

  const preparingDelivery = async () => {
    setDisabledPreparative(true);
    setDisabledDelivery(false);
    const user = readLocal('user');
    await fetchSalesUpdatingStatus(user.token, params.id, { status: 'Preparando' });
    setStatus('Preparando');
  };

  const outToDelivery = async () => {
    setDisabledDelivery(true);
    const user = readLocal('user');
    await fetchSalesUpdatingStatus(user.token, params.id, { status: 'Em Trânsito' });
    setStatus('Em Trânsito');
  };

  return (
    <div className="shopping-cart-table">
      <h3 data-testid="seller_order_details__element-order-details-label-order-id">
        Order N°
        {' '}
        { addingZero(params.id) }
      </h3>

      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Subtotal</th>
          </tr>
          {order?.map((product, i) => {
            const item = `seller_order_details__element-order-table-item-number-${i}`;
            const description = `seller_order_details__element-order-table-name-${i}`;
            const quantity = `seller_order_details__element-order-table-quantity-${i}`;
            const unitPrice = `seller_order_details__element-order-table-unit-price-${i}`;
            const total = `seller_order_details__element-order-table-sub-total-${i}`;
            return (
              <tr key={ product.id }>
                <td data-testid={ item }>{ i + 1 }</td>
                <td data-testid={ description }>{ product.product.name }</td>
                <td data-testid={ quantity }>{ product.quantity }</td>
                <td data-testid={ unitPrice }>
                  { `${priceConverter(product.product.price)}` }
                </td>
                <td data-testid={ total }>
                  { `${priceConverter((+product.quantity
                     * +product.product.price).toFixed(2))}` }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>
        Total:
        {' '}
        <span
          data-testid="seller_order_details__element-order-total-price"
        >
          { `${priceConverter(totalPrice)}` }
        </span>
      </h3>
      <h2
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        Date:
        {' '}
        { dateConverter(date) }
      </h2>
      <h2
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        Status:
        {' '}
        { status }
      </h2>
      <Button
        style={ {
          backgroundColor: disabledPreparative ? 'grey' : '#dd571c',
          margin: '5px',
          color: 'white',
          display: 'flex',
        } }
        data-testid="seller_order_details__button-preparing-check"
        disabled={ disabledPreparative }
        onClick={ preparingDelivery }
        type="button"
      >
        Order Preparative
      </Button>
      <Button
        style={ {
          backgroundColor: disabledDelivery ? 'grey' : '#dd571c',
          margin: '5px',
          color: 'white',
          display: 'flex',
        } }
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ disabledDelivery }
        onClick={ outToDelivery }
        type="button"
      >
        Out to Delivery
      </Button>

    </div>
  );
}

export default OrderDetailSeller;
