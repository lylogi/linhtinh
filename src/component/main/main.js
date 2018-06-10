import React from 'react';
import { StyleSheet, Text,ImageBackground, View ,Image, Button, Alert,TouchableOpacity} from 'react-native';
import {HomeStack} from './src/router';
import styles from './src/style/style';


class BackgroundImage extends React.Component {
  
    render() {
        return (
            <ImageBackground source={require('./truyen1.jpg')} style={styles.backgroundImage}>
              {this.props.children}
            </ImageBackground>
        )
    }
}

export default class Main extends React.Component {
    gotoCate() {
        const { navigator } = this.props;
        navigator.push({ name: "Screen_Cate"})
    }
  render() {
    return (
      <BackgroundImage style={styles.container} >
        <View style={styles.flex}>
          <View style= {styles.header}>
            <Text style ={styles.text}>LINH TINH</Text>
          </View>

          <View style ={styles.content}>
            <TouchableOpacity style={styles.button}
                onpress = {this.gotoCate.bind(this)}
            >
              <Text style ={styles.textbutton}>Danh mục</Text>
            </TouchableOpacity>

            <View style={styles.button}>
              <Text style ={styles.textbutton}>Lịch sử</Text>
            </View>
          </View>
          <View style= {styles.content}>
            <View style={styles.button}>
              <Text style ={styles.textbutton}>Cài đặt</Text>
            </View>
            <View style={styles.button}>
              <Text style ={styles.textbutton}>Linh tinh</Text>
            </View>
          </View>
          <View style= {styles.footer}>
            <Text numberOfLines= {1} style ={styles.textfooter}>Mỗi người nhận được từ cuộc đời những gì mà mình đã bỏ vào đó.</Text>
          </View>
        </View>

      </BackgroundImage>
    );
  }
}


