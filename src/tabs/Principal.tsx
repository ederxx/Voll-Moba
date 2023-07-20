import {Image, ScrollView, VStack, Text, Box, Divider} from 'native-base'
import Logo from '../assets/Logo.png';
import { Titulo } from '../componentes/Titulo';
import { EntradaTexto } from '../componentes/EntradaTexto';
import { Botao } from '../componentes/Botao';
import { depoimentos } from '../ultils/mock';

export default function Principal (){
return (
    <ScrollView flex={1} bgColor='white'>  
   
        <VStack flex={1} alignItems='flex-start' justifyContent='flex-start' p={5}>
        <Image 
      source={Logo} 
      alt="logoVoll"mt={10}  />
        <Titulo color='blue.500' > Boas-Vindas</Titulo>

<Box width='100%'borderRadius='lg' p={3} mt={10} shadow='1' borderRightRadius='md'>
<EntradaTexto 
        placeholder='Digite a especialidade' />
        <EntradaTexto 
        placeholder='Digite sua Localização' />
      <Botao mt={3} mb={3}>Entrar</Botao>
      </Box>

      <Titulo  color='blue.800' alignSelf='center'> Depoimentos</Titulo>
      <VStack space={3} divider={<Divider /> }w='100%' >{
        depoimentos.map( depoimento => (
            <Box key={depoimento.id} w='100%' borderRadius='lg' p={3}>
                <Text color='gray.300' fontSize='md' textAlign='justify'>
                    {depoimento.text}
                </Text>
                <Text color='gray.500' fontSize='lg' fontWeight='bold' alignSelf='center' mt={2}>
                    {depoimento.titulo}
                </Text>
             </Box>
        ))
      }</VStack>
    </VStack>
    
</ScrollView>
)


}