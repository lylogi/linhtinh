import React from 'react';
import { StyleSheet, Text,ImageBackground, View ,Image, Button, Alert} from 'react-native';
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

export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage style={styles.container} >
        <View style={styles.flex}>
          <View style= {styles.header}>
            <Text style ={styles.text}>LINH TINH</Text>
          </View>

          <View style ={styles.content}>
            <View style={styles.button}>
              <Text style ={styles.textbutton}>Danh mục</Text>
            </View>

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


