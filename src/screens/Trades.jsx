import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BasicTable from '../components/tradeTable';

const Trades = () => {
  const params = useParams();
  const arr = [];
  const [data, setData] = useState();

  const database = [
    {
        id: "1",
        bookId: "1",
        counterPartyId: "1",
        securityId: "86",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    },
    {
        id: "2",
        bookId: "2",
        counterPartyId: "1",
        securityId: "7",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    },
    {
        id: "3",
        bookId: "3",
        counterPartyId: "1",
        securityId: "8",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    },
    {
        id: "4",
        bookId: "1",
        counterPartyId: "1",
        securityId: "9",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    },
    {
        id: "5",
        bookId: "2",
        counterPartyId: "1",
        securityId: "17",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    },
    {
        id: "6",
        bookId: "3",
        counterPartyId: "1",
        securityId: "8",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    },
    {
        id: "7",
        bookId: "1",
        counterPartyId: "1",
        securityId: "36",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    },
    {
        id: "8",
        bookId: "2",
        counterPartyId: "1",
        securityId: "7",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    },
    {
        id: "9",
        bookId: "3",
        counterPartyId: "1",
        securityId: "8",
        quantity: "4",
        status: "Ok",
        price: "100",
        buy_sell: "100",
        tradeDate: new Date(),
        settlementDate: new Date()
    }
  ];

  async function formatData() {
    database.map((data, i) => {
        if(data.bookId === params.bookId){
            console.log('hoiiii', data.bookId);
            arr.push(data);
        }
    })
  }

  useEffect(() => {
    formatData().then(() => {setData(arr)})
  }, [params.bookId])
  
  return (
    <div>
        <h1>Trades</h1>
        {console.log('This is formated data', arr)}
        {console.log('This is formated data2', data)}
        { data === undefined && <h1>Loading...</h1>}
        { data !== undefined && <BasicTable data={data}/> }
    </div>
  )
}

export default Trades
