import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home, {} from '../Pages'
import Metas, {} from '../Pages/Metas'
import Cadastro, {} from '../Pages/Cadastro'
import CriarMetas, {} from '../Pages/CriarMetas'
const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown:false}}
      />
    <Stack.Screen
        name="Metas"
        component={Metas}
        options={{headerShown:false}}
      />
     <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{headerShown:false}}
      />
    <Stack.Screen
        name="CriarMetas"
        component={CriarMetas}
        options={{headerShown:false}}
    />
    </Stack.Navigator>
  );
}