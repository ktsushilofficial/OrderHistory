import React ,{useContext,useEffect, useState}from 'react';
import { View, Text, Image, Button, StyleSheet, Touchable, TouchableOpacity, Alert } from 'react-native';
import LanguageContext from './LanguageContext';
const Card = ({ orderNumber, orderDate, orderStatus, itemsPurchased, image, onPressDetails }) => {
  const { isRTL } = useContext(LanguageContext);
  const [rowdirection, settowdir] = useState("row")
  useEffect(()=>{
    isRTL ? settowdir("row-reverse") : settowdir("row")
  },[isRTL])

  return (
    <View style={styles.item}>
       <View style={{flexDirection:rowdirection}}>
       <Text style={styles.orderNumber}>{orderNumber}</Text>
       </View>
   
    <View style={{flexDirection:rowdirection}}>
    <Image source={image} style={styles.image} />
    </View>
    <View style={{flexDirection:rowdirection}}>
    <Text style={styles.orderDate}>{isRTL ? `ترتيب التاريخ:${orderDate}`:`Order Date : ${orderDate}` }   
     </Text>
    </View>
    
    <View style={styles.lineStyle} />
    <View style={[styles.statusContainer,{flexDirection:rowdirection}]}>
      <Text style={styles.orderStatus}>{isRTL ? "تاريخ الطلب": "Order Status"}</Text>
      <Text style={styles.shippingStatus}>{orderStatus}</Text>
    </View>
    <View style={[styles.itemsContainer,{marginTop:10,flexDirection:rowdirection}]}>
      <Text style={styles.items}>{isRTL ? "لعناصر المشتر" :"Items"}</Text>
      <Text style={styles.itemsPurchased}>{itemsPurchased}</Text>
    </View>
    <TouchableOpacity onPress={()=>{
      Alert.alert('', isRTL ? 'لم يتم تنفيذ شاشة التفاصيل!' : 'Detail Screen is not implemented!');
    }}>
      <View style={{flexDirection:rowdirection}}>
      <Text style={styles.underlineText}>{isRTL ? "الأفضل في السوق" : "Best in The Market"}</Text>
      </View>
    </TouchableOpacity>
    
    
   
  </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderNumber: {
    marginTop:20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    marginTop:20,
  },
  orderDate: {
    marginTop:20,
    fontSize: 14,
  },
  lineStyle: {
    marginTop:20,
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  statusContainer: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderStatus: {
    fontSize: 14,
  },
  shippingStatus: {
    fontSize: 14,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items: {
    fontSize: 14,
  },
  itemsPurchased: {
    fontSize: 14,
  },
  underlineText: {
    marginTop:10,
    marginBottom:10,
    fontSize: 14,
    color:'red',
    textDecorationLine: 'underline',
  },
  
});

export default Card;
