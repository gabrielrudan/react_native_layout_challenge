import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      resultText: "",
      calculationText: "",
    }
    this.operations = ['Del', '+', '-', '*', '/']
  }

  operate(text){
    const lastChar = this.state.resultText.split('').pop()
    switch(text){
      case 'Del':
        let txt = this.state.resultText.split('')
        txt.pop()
        this.setState({
          resultText: txt.join('')
        })
        break
      case '+':
        if(this.operations.indexOf(lastChar) > 0){
          return
        }
        if(this.state.text == ""){
          return
        }
        this.setState({
          resultText: this.state.resultText + '+'
        })
        break
      case '-':
        if(this.operations.indexOf(lastChar) > 0){
          return
        }
        if(this.state.text == ""){
          return
        }
        this.setState({
          resultText: this.state.resultText + '-'
        })
        break
      case '*':
        if(this.operations.indexOf(lastChar) > 0){
          return
        }
        if(this.state.text == ""){
          return
        }
        this.setState({
          resultText: this.state.resultText + '*'
        })
        break
      case '/':
        if(this.operations.indexOf(lastChar) > 0){
          return
        }
        if(this.state.text == ""){
          return
        }
        this.setState({
          resultText: this.state.resultText + '/'
        })
        break
    }
  }

  calculateResult(){
    const text = this.state.resultText
    console.log(text, eval(text))
    this.setState({
      calculationText: eval(text),
    })
    //eval(text)
  }

  validate(){
    const text = this.state.resultText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

  buttonPressed(text){
    console.log(text)

    if(text == '='){

      return this.validate() &&this.calculateResult()
    }

    this.setState({
      resultText : this.state.resultText+text
    })
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
        <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.buttonPressed('7')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('8')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('9')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.buttonPressed('4')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('5')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('6')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.buttonPressed('1')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('2')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('3')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.buttonPressed('.')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('0')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('=')} style={styles.btn}>
                <Text style={[styles.btntext, styles.blue]}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations}>
            <TouchableOpacity onPress={() => this.operate('Del')} style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>Del</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.operate('+')} style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.operate('-')} style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.operate('*')} style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.operate('/')} style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText: {
    fontSize: 35,
    color: 'skyblue',
  },
  calculationText: {
    fontSize: 50,
    color: 'deepskyblue',
  },
  btntext: {
    fontSize: 25,
  },
  blue: {
    color: 'deepskyblue'
  },
  white: {
    color: 'white',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 0.25,
    borderRadius: 10,
    borderColor: 'deepskyblue',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'white',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    borderWidth: 0.25,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'deepskyblue',
  },

});
