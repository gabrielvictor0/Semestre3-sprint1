import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from "./src/components/screens/Navigation/Navigation"
import { Login } from './src/components/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates"
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { RecoverPassword } from './src/components/screens/RecoverPassword/RecoverPassword';
import { EmailCode } from './src/components/screens/EmailCode/EmailCode';
import { Register } from './src/components/screens/Register/Register';
import { RedefinePassword } from './src/components/screens/RedefinePassword/RedefinePassword';
import { Profile } from './src/components/screens/Profile/Profile';
import { Home } from './src/components/screens/Home/Home';
import { MedicalRecord } from './src/components/screens/MedicalRecord/MedicalRecord';
import { HomePatient } from './src/components/screens/HomePatient/HomePatient';
import { SelectClinic } from './src/components/screens/SelectClinic/SelectClinic';
import { SelectDoctor } from './src/components/screens/SelectDoctor/SelectDoctor';

//criar navegação entre telas
const Stack = createNativeStackNavigator();

export default function App() {

  const [] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium,
    Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular
  })

  return (
    //Navegacao
    //container
    //StackNavigator
    //StackScreen

    //envolve a estrutura da navegação
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
          //nome da tela
          name='Navigation'

          //componente que sera chamado
          component={Navigation}

          //titulo da tela
          options={{ title: "Navigation" }}
        />

        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ title: "Profile" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Navigation" }} />

        <Stack.Screen
          name='RecoverPassword'
          component={RecoverPassword}
          options={{ title: "RecoverPassword" }}
        />

        <Stack.Screen
          name='EmailCode'
          component={EmailCode}
          options={{ title: "EmailCode" }} />

        <Stack.Screen
          name='Register'
          component={Register}
          options={{ title: "Register" }} />

        <Stack.Screen
          name='RedefinePassword'
          component={RedefinePassword}
          options={{ title: "RedefinePassword" }} />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: "Home" }} />

        <Stack.Screen
          name='MedicalRecord'
          component={MedicalRecord}
          options={{title: "MedicalRecord"}}/>

        {/* <Stack.Screen 
          name='HomePatient'
          component={HomePatient}
          options={{title: "HomePatient"}}/> */}

        <Stack.Screen
          name='SelectClinic'
          component={SelectClinic}
          options={{title: "SelectClinic"}}/>

        <Stack.Screen
          name='SelectDoctor'
          component={SelectDoctor}
          options={{title: "SelectDoctor"}}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}
