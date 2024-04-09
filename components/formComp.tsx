/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { StyleSheet, Text, View  , TextInput , TouchableOpacity , FlatList} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Formik } from 'formik'
import { GestureHandlerEvent } from 'react-native-reanimated/lib/typescript/reanimated2/hook'

export default function FormComponent() {
  const [tableData , setTableData] = useState([])
  // const testtableData = [{email: 'test' , password: 'test' , website: 'test'},{email: 'test' , password: 'test' , website: 'test'},{email: 'test' , password: 'test' , website: 'test'},{email: 'tesgrt' , password: 'hmm' , website: 'Meri'}    ]
  return (
    <View style={styles.conatinerStyle}>
      {tableData.length>0 && <>
      <View style={styles.tablebody}>
        <Text style={styles.tableHeading}>Website</Text>
        <Text style={styles.tableHeading}>Email</Text>
        <Text style={styles.tableHeading}>Password</Text>
      </View>
      <View style={{
        
        // height: 300,
        display:'flex',
        flexDirection:'column',
        // marginTop:,
      }}>
        {/* <FlatList
          data={testtableData}
          renderItem={TableComponent}
          keyExtractor={(item , index)  => index.toString()}
          scrollEnabled={true}

          /> */}
          {tableData.map((item , index) => {
            return  <TableComponent key={index} item={tableData[index]} />
            
          })}
        {/* <TableComponent item={testtableData[0]} />
        <TableComponent item={testtableData[0]} /> */}
      </View>
      </>
      }
      
      <Formik
     initialValues={{ email: '' , password: '' , website: ''}}
     onSubmit={(values,{resetForm}) => {
        setTableData([...tableData ,values])
        resetForm()
     }}
     resetForm
   >
     {({ handleChange, handleBlur, handleSubmit, values , resetForm}) => (
       <View>
        <Text style={styles.formLabel} >Website</Text>
            <TextInput
              onChangeText={handleChange('website')}
                onBlur={handleBlur('website')}
                value={values.website}
                style={styles.formInput}
                placeholder='Enter Website'
                placeholderTextColor={'#218F76'}

            />
            <Text style={styles.formLabel} >Email</Text>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
              style={styles.formInput}
                placeholder='Enter Email'
                placeholderTextColor={'#218F76'}
         />
            <Text style={styles.formLabel}>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.formInput}
                placeholder='Enter Password'
                secureTextEntry={true}
                placeholderTextColor={'#218F76'}
            />
            
        <TouchableOpacity onPress={handleSubmit} style={styles.formButton} title="Submit" >
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
       </View>
     )}
   </Formik>
    </View>
  )
}

const TableComponent = ({item}:any) => {
    return (
        <View style={{
          display:'flex',
          // height: 40,
          
          
          flexDirection:'row',
          width: 300,
          justifyContent:'space-between',
          padding: 10,
          marginVertical: 0,
          gap: 4,

        }} >
            {/* <View> <Text style={styles.tableHeading}>Email</Text> </View> */}
            {/* <View> <Text style={styles.tableHeading}>Password</Text> </View> */}
            {/* <Text style={styles.tableHeading}>Email</Text>
            <Text style={styles.tableHeading}>Password</Text> */}
            <Text style={styles.tableContent}>{item.website}</Text>
            <Text style={styles.tablecontent__email}>{item.email}</Text>
            <Text style={styles.tableContent}>{item.password}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    conatinerStyle: {
        // height:600,
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingTop:20,
    },
    formLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#218F76',
        marginTop: 10,
        
    },
    formInput: {
        borderWidth: 1,
        borderColor: '#218F76',
        // height:20,
        width: 300,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        marginHorizontal: 'auto',
        color: '#218F76',
    },
    formButton: {
        backgroundColor: '#218F76',
        padding: 10,
        margin: 5,
        width: 300,
        borderRadius: 5,
        alignItems: 'center',
    },
    tablebody:{ 
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#218F76',
        color: 'white',
        width: 300,
    },
    tableHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    
    tableContent: {
        fontSize: 12,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        color: 'green',
        // flex:1,
        padding: 2,
        maxWidth: 200,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius:5,
    },
    tablecontent__email: {
        fontSize: 12,
        color: 'green',
        flex:3,
        padding: 4,
        maxWidth: 200,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius:5,
    },
})