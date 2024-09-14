import { StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, StatusBar,} from 'react-native'
import React, { useState } from 'react'
import { Octicons, FontAwesome } from '@expo/vector-icons';

let number_types = ['Decimal', 'Binary', 'Octal', 'Hexa-Decimal'] 

const HomeScreen = () => {
    const [isDark, setIsDark] = useState(false);
    const [inputNumber, setInputNumber] = useState('');
    const [decimalToBinary, setDecimalToBinary] = useState(true);
    const [outputNumber, setOutputNumber] = useState('0');
    const [showLeftSideNumberType, setShowLeftSideNumberType] = useState(false);
    const [showRightSideNumberType, setShowRightSideNumberType] = useState(false);
    const [selectedTypeLeft, setSelectedTypeLeft] = useState(0);
    const [selectedTypeRight, setSelectedTypeRight] = useState(1);

    const convert = ()=> {
        if(selectedTypeLeft == 0 && selectedTypeRight == 1){
             //Convert Decimal to Binary
             console.log('Decimal to Binary');
            const decimal_to_binary = parseInt(inputNumber).toString(2);
            setOutputNumber(decimal_to_binary);     
        }
        if(selectedTypeLeft === 0 && selectedTypeRight === 2){
            //Convert Decimal to Octal
            console.log('Decimal to Octal');
            const decimal_to_octal = parseInt(inputNumber).toString(8);
            setOutputNumber(decimal_to_octal);
        }
        if(selectedTypeLeft === 0 && selectedTypeRight === 3){
            //Convert Decimal to Hexa-decimal
            console.log('Decimal to Hexa-decimal');
            const decimal_to_hexa_decimal = parseInt(inputNumber).toString(16);
            setOutputNumber(decimal_to_hexa_decimal);
        }
        if(selectedTypeLeft === 1 && selectedTypeRight === 0){
            //  Convert Binary to Decimal
            console.log('Binary to Decimal');
            const binary_to_decimal = parseInt(inputNumber, 2).toString(10);
            setOutputNumber(binary_to_decimal);
            
        }
        if(selectedTypeLeft === 1 && selectedTypeRight === 2){
             //Convert Binary to Octal
            console.log('Binary to Octal');
            const binary_to_octal = parseInt(inputNumber, 2).toString(8);
            setOutputNumber(binary_to_octal);
            
        }
        if(selectedTypeLeft === 1 && selectedTypeRight === 3){
             //Convert Binary to Hexa-decimal
            console.log('Binary to Hexa-decimal');
            const binary_to_hexa_decimal = parseInt(inputNumber, 2).toString(16);
            setOutputNumber(binary_to_hexa_decimal);
            
        }
        if(selectedTypeLeft === 2 && selectedTypeRight === 0){
             //Convert Octal to Decimal
            console.log('Octal Decimal');
            const octal_to_decimal = parseInt(inputNumber, 8).toString(10);
            setOutputNumber(octal_to_decimal);
            
        }
        if(selectedTypeLeft === 2 && selectedTypeRight === 1){
             //Convert Octal to Binary
            console.log('Octal to Binary');
            const octal_to_binary = parseInt(inputNumber, 8).toString(2);
            setOutputNumber(octal_to_binary);
            
        }
        if(selectedTypeLeft === 2 && selectedTypeRight === 3){
             //Convert Octal to Hexa-decimal
            console.log('Octal to Hexa-decimal');
            const octal_to_hexa_decimal = parseInt(inputNumber, 8).toString(16);
            setOutputNumber(octal_to_hexa_decimal);
            
        }
        if(selectedTypeLeft === 3 && selectedTypeRight === 0){
             //Convert Hexa-decimal to Decimal
            console.log('Hexa-decimal to Decimal');
            const hexa_decimal_to_decimal = parseInt(inputNumber, 16).toString(10);
            setOutputNumber(hexa_decimal_to_decimal);
            
        }
        if(selectedTypeLeft === 3 && selectedTypeRight === 1){
             //Convert Hexam-decimal to Binary
            console.log('Hexa-decimal to Binary');
            const hexa_decimal_to_binary = parseInt(inputNumber, 16).toString(2);
            setOutputNumber(hexa_decimal_to_binary);
            
        }
        if(selectedTypeLeft === 3 && selectedTypeRight === 2){
             //Convert Hexa-decimal to Octal
            console.log('Hexa-decimal to Octal');
            const hexa_decimal_to_octal = parseInt(inputNumber, 16).toString(8);
            setOutputNumber(hexa_decimal_to_octal);
            
        }
        if(selectedTypeLeft === selectedTypeRight){
            Alert.alert('Waning', 'Both side number type are same : Please select diffrent type of number type')
            console.log(selectedTypeLeft);
            console.log(selectedTypeRight);
        }
        
    }

    const clearData = ()=> {
        setInputNumber('');
        setOutputNumber('0');
    }

    const showNumberType = (type)=> {
        if(type === 'left'){
            setShowLeftSideNumberType(!showLeftSideNumberType);
            setShowRightSideNumberType(false);
        }
        if(type === 'right'){
            setShowRightSideNumberType(!showRightSideNumberType);
            setShowLeftSideNumberType(false);
        }
    }

    const applyItem = (index, side)=> {
        if(side === 'left'){
            setShowLeftSideNumberType(false);
            setSelectedTypeLeft(index);
        }
        if(side === 'right'){
            setShowRightSideNumberType(false);
            setSelectedTypeRight(index);
        }
    }

    const swapType = ()=> {
        const temp = selectedTypeLeft
        setSelectedTypeLeft(selectedTypeRight)
        setSelectedTypeRight(temp)
    }

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={isDark ? 'grey' : 'teal'} />
      <View style={[styles.header, {backgroundColor: isDark ? 'grey' : 'teal'}]}>
        <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>Number System Converter</Text>
        <Switch style={{marginTop: 5}} 
            trackColor={{false: '#767577', true: '#18191a'}}
            thumbColor={isDark ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={()=> setIsDark(!isDark)}
            value={isDark}
            
        />
      </View>
      <View style={[styles.contentContainer, {backgroundColor: isDark ? 'black' : 'white'}]}>
        <View style={[styles.inputBox, {borderColor: isDark ? 'white' : 'teal'}]}>
            <TextInput value={inputNumber} onChangeText={(txt)=> setInputNumber(txt)} style={{fontSize: 20, color: isDark ? 'white' : 'black'}} placeholder='Enter number here' placeholderTextColor={isDark ? 'white' : 'grey'}/>
        </View>

        <View style={styles.switchContainer}>
            <TouchableOpacity onPress={()=> showNumberType('left')} style={[styles.switchItem, {borderColor: isDark ? 'white' : 'teal'}]}>
                <Text style={{fontSize: 18, color: isDark ? 'white' : 'black'}}>{number_types[selectedTypeLeft]}</Text>
                <FontAwesome name={showLeftSideNumberType ? 'angle-up' : 'angle-down'} size={24} color={isDark ? 'white' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={swapType} style={[styles.switchItem, {width: 35, borderColor: isDark ? 'white' : 'teal'}]}>
                <Octicons name='arrow-switch' size={24} color={isDark ? 'orange' : 'teal'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> showNumberType('right')} style={[styles.switchItem, {borderColor: isDark ? 'white' : 'teal'}]}>
                <Text style={{fontSize: 18, color: isDark ? 'white' : 'black'}}>{number_types[selectedTypeRight]}</Text>
                <FontAwesome name={showRightSideNumberType ? 'angle-up' : 'angle-down'} size={24} color={isDark ? 'white' : 'black'} />
            </TouchableOpacity>   
        </View>

        {
            showLeftSideNumberType ? 
            <View style={{height: 200, width: 120, backgroundColor: 'lightgrey', borderRadius: 8, alignItems: 'center', position: 'absolute', left: 18, top: 180, zIndex: 100}}>
            {
                number_types.map((item, index)=> {
                return(
                    <TouchableOpacity key={index} onPress={()=> applyItem(index, side='left')} style={[styles.item, {backgroundColor: index === selectedTypeLeft ? isDark ? '#000000' : 'skyblue' : 'white' }]}>
                        <Text style={{color: selectedTypeLeft === index ? isDark ? 'white' : 'black' : 'black' }}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
            </View>
            : null
        }

        {
            showRightSideNumberType ? 
            <View style={{height: 200, width: 120, backgroundColor: 'lightgrey', alignItems: 'center', borderRadius: 8, position: 'absolute', right: 18, top: 180, zIndex: 100}}>
            {
                number_types.map((item, index)=> {
                return(
                    <TouchableOpacity key={index} onPress={()=> applyItem(index, side='right')} style={[styles.item, {backgroundColor: index === selectedTypeRight ? isDark ? '#000000' : 'skyblue' : 'white' }]}>
                        <Text style={{color: selectedTypeRight === index ? isDark ? 'white' : 'black' : 'black' }}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
            </View>
            : null
        }

        <TouchableOpacity onPress={convert} style={[styles.btn, {backgroundColor: isDark ? 'grey' : 'teal'}]}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold',}}>Convert</Text>
        </TouchableOpacity>

        <View style={{height: 100, width: '90%', alignItems: 'center', marginTop: 50}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: isDark ? 'white' : 'black'}}>{number_types[selectedTypeRight]}</Text>
            <Text style={{fontSize: 40, fontWeight: 'bold', color: isDark ? 'white' : 'black'}}>{outputNumber}</Text>
        </View>

        

        <TouchableOpacity onPress={clearData} style={[styles.clearBtn, {borderColor: isDark ? 'grey' : '#0b80b1'}]}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: isDark ? 'white' : 'black'}}>CLEAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        // backgroundColor: '#416de7'
    },

    header:{
        height: 120,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'teal'
    },

    contentContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    inputBox:{
        marginTop: 30,
        height: 50,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        borderWidth: 1,
        borderColor: 'teal',
        borderRadius: 8
    },

    switchContainer:{
        marginTop: 50,
        height: 50,
        width: '90%',
        flexDirection: 'row',
        // alignItems: 'center'
        justifyContent: 'center',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: 'teal',
        borderRadius: 8
    },
    switchItem:{
        height: '100%', 
        width: 140, 
        flexDirection: 'row',
        borderWidth: 1, 
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: 'teal'
    },

    btn:{
        marginTop: 50,
        height: 50,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'teal',
        borderRadius: 8
    },

    clearBtn:{
        height: 40,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#0b80b1',
        // elevation: 5,
        borderRadius: 20,
    },

    item:{
        marginTop: 7,
        height: 40,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 3
    }
})