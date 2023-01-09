import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Title from '../../components/Title';
import styles from '../../components/Title/styles';

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text='Where do?' style={{ fontweight: 'normal' }}/>
                <Title text='you want to go?'/>
            </View>
        </SafeAreaView>
    );
};

export default Home;
