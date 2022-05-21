import React, {useState, useEffect, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView as SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Linking,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  Portal,
  Dialog,
  RadioButton,
} from 'react-native-paper';
import {Header} from '../../components';
import {Theme} from '../../../../configs/ThemeConfig';
import {FontWeightConfig} from '../../../../configs/FontConfig';
import Images from '../../../../assets/';
// import { PaperComponent } from '../../components';

function DashboardScreen() {
  //   useEffect(() => {
  //     setTranslate(t('common:floatingButton.translate'));
  //   });

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={Images.background}
        style={{height: '100%'}}
        imageStyle={{opacity: 0.8}}>
        <Header />
      </ImageBackground>

      {/* CHANGE LANGUAGES DIALOG */}
    </View>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    backgroundColor: Theme.background,
  },
});
