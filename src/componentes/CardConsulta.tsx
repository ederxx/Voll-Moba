import {Text, Avatar, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardsProps{
    nome:string;
    foto:string;
    especialidade:string;
    data?:string;
    foiAtendido?:boolean;
    foiAgendado?:boolean;
}

export function CardConsultas({nome, foto,especialidade,data,foiAgendado,foiAtendido}:CardsProps) {
    return (
        <VStack  w="100%" backgroundColor={foiAtendido? 'blue.100': 'white'}  padding="5" borderRadius="lg" shadow="2"mb={5} >
             <VStack flexDir="row"> 
             <Avatar size='lg' source={{uri: foto }}  />
      
           <VStack paddingLeft={4}>  
            <Text fontSize='md' bold>{nome}</Text>
            <Text>{especialidade}</Text>
            <Text>{data}</Text>
            </VStack>
            </VStack>
            <Botao mt={4} >{foiAgendado ? 'Cancelar' : 'Agendar Consulta'}</Botao>


        
        </VStack>



    )

};