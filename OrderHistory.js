// components/OrderHistoryScreen.js
import React, { useContext, useEffect, useState} from 'react';
import { FlatList, View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from './Card.js';
import LanguageContext from './LanguageContext';
import {data} from './Data.js' 


const OrderHistoryScreen = () => {
  const { isRTL } = useContext(LanguageContext);
 

 
  return (
    
        <FlatList
          data={data}
          renderItem={({ item }) => <Card orderNumber={isRTL ? item.orderNumber.ar : item.orderNumber.en} orderDate={isRTL ? item.orderDate.ar : item.orderDate.en} orderStatus={isRTL ? item.orderStatus.ar : item.orderStatus.en } itemsPurchased={isRTL ? item.itemsPurchased.ar : item.itemsPurchased.en} image={item.image} />}
          keyExtractor={(item) => item.id}
        />
      
  );
};



export default OrderHistoryScreen;






