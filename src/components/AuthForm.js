import React,{useState} from "react";
import { View, StyleSheet,ScrollView } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({headerText,errorMessage,onSubmit}) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView>

                <Text h3>{headerText} for tracker</Text>
                <Input label="Email" value={Email} onChangeText={(newText) => setEmail(newText)} autoCorrect={false} autoCapitalize={"none"} />
                <Input label="Password" value={Password} onChangeText={(newPassword) => setPassword(newPassword)} autoCorrect={false} autoCapitalize={"none"} secureTextEntry={true} />
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                <Button title={headerText} onPress={() => onSubmit({ email: Email, password: Password })} />
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection : "column",
        // alignItems : "center",
        justifyContent: "center",
        // marginBottom : 200,
        paddingTop: 100,
    },
    errorMessage: {
        fontSize: 20,
        color: "red",
    },
    
})

export default AuthForm;