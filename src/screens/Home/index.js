import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text='Where do?' style={{ fontweight: 'normal' }}/>
                <Title text='you want to go?'/>
                <Title text='Explore Locations' style={styles.subtitle}/>

                <Categories selectedCategory='All' categories={['All', 'Popular', 'Historical', 'Trending', 'New', 'Most Viewed']}/>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);

