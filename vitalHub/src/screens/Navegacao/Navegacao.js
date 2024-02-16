import { Button, View } from "react-native";

export const Navegacao = ({navigation}) => {
    return (
        <View>
            <Button 
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button 
                title="CreateAccount"
                onPress={() => navigation.navigate("CreateAccount")}
            />
            <Button 
                title="PasswordForgot"
                onPress={() => navigation.navigate("PasswordForgot")}
            />
            <Button 
                title="EmailCode"
                onPress={() => navigation.navigate("EmailCode")}
            />
            <Button 
                title="PasswordReset"
                onPress={() => navigation.navigate("PasswordReset")}
            />
            <Button 
                title="UserScreen"
                onPress={() => navigation.navigate("UserScreen")}
            />
            <Button 
                title="UserScreenEdit"
                onPress={() => navigation.navigate("UserScreenEdit")}
            />
            <Button 
                title="HomeScreen_Doctor"
                onPress={() => navigation.navigate("HomeScreen_Doctor")}
            />
            {/* <Button 
                title="MedicalRecord"
                onPress={() => navigation.navigate("MedicalRecord")}
            /> */}
        </View>
    );
}