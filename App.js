import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Yes from './yes';
export default class App extends Component {
  constructor(props) {
    super(props);
    <Yes/>
    this.state = {
      HeadTable: ['', 'Set', 'Rep', 'Weight', 'Rest'],
      DataTable: [
        [<TextInput placeholder="Exercise"/>, <TextInput/>,
         <TextInput/>, <TextInput/>,
         <TextInput placeholder='optional'/>],[<TextInput placeholder="Exercise"/>, <TextInput/>,
         <TextInput/>, <TextInput/>,
         <TextInput placeholder='optional'/>],[<TextInput placeholder="Exercise"/>, <TextInput/>,
         <TextInput/>, <TextInput/>,
         <TextInput placeholder='optional'/>],[<TextInput placeholder="Exercise"/>, <TextInput/>,
         <TextInput/>, <TextInput/>,
         <TextInput placeholder='optional'/>],[<TextInput placeholder="Exercise"/>, <TextInput/>,
         <TextInput/>, <TextInput/>,
         <TextInput placeholder='optional'/>]
      ]
    }
    
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#000000'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 20,
    alignContent: "center",
    backgroundColor: '#00FAFE'
  },
  TableText: { 
    margin: 1
  }
});