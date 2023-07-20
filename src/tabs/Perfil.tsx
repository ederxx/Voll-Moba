import {ScrollView, Avatar, Divider,VStack, Text} from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function (){
return (
<ScrollView flex={1}>  
    <VStack flex={1} alignItems="center" p={5}>
        <Titulo color='blue.500'> Meu Perfil</Titulo>

        <Avatar source={{uri: "https://github.com/ederxx.png" }} mt={5} size='xl'/>
        <Titulo color='blue.500'>Informações Pessoais</Titulo>

        <Titulo fontSize='lg' mb={1}>Eder Cruz</Titulo>
        <Text >01/11</Text>
        <Text>Salvador</Text>
        <Divider mt={5}/>
        <Titulo color='blue.500' mb={1}>Histórico médico</Titulo>
        <Text>Bronquite</Text>
        <Text>Bronquite</Text>
    </VStack>

</ScrollView>
)


}