import React from "react";
import {
    StyleSheet,
    View,
    FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../Components/logo";
import CategoryListItem from "../Components/CategoryListItem";
import SearchBar from "../Components/SearchBar";


export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { id: 1, name: '123' },
                { id: 2, name: '456' },
                { id: 3, name: '789' },
                { id: 4, name: '123' },
            ]
        };
    }


    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (

            <View style={styles.container}>
                <StatusBar style='dark' />
                <Logo />
                <SearchBar />
                <FlatList
                    data={categories}
                    renderItem={({ item }) => <CategoryListItem category={item}
                        onPress={() => navigation.navigate('Category', {
                            'categoryName': item.name
                        })}
                    />}
                    keyExtractor={item => `${item.id}`}
                    contentContainerStyle={{
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingVertical: 10
                    }}

                />

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#f0f8ff`,
    }
});
