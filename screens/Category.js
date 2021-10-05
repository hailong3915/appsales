import React from "react";
import {
    StyleSheet,
    View
} from "react-native";
import Logo from "../Components/logo";


export default class Category extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: '123'
        }
    }



    render() {
        return <View>
            <Logo />
        </View >;

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#f0f8ff`,
    }
});
