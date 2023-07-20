import { VStack, Text, Divider, ScrollView} from 'native-base'
import { CardConsultas } from '../componentes/CardConsulta'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'


export default function Consultas (){
return (
    <ScrollView p={5}>
        <Titulo color="blue.500">Minhas Consultas</Titulo>
        <Botao mt={5} mb={5}>Agendar outra consulta</Botao>
        <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas Consultas</Titulo>
        <CardConsultas 
        nome="Edmar Cruz" 
        especialidade='Psicologo' 
        foto='https://github.com/ederxx.png' 
        data='13/02/2023' 
        foiAtendido={false} 
        foiAgendado={true}/>
        <Divider  mt={5}/>

        <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas Passadas</Titulo>
        <CardConsultas 
        nome="Edmar Cruz" 
        especialidade='Psicologo' 
        foto='https://github.com/ederxx.png' 
        data='13/02/2023' 
        foiAtendido={true} 
        foiAgendado={false}/>
         <CardConsultas 
        nome="Edmar Cruz" 
        especialidade='Psicologo' 
        foto='https://github.com/ederxx.png' 
        data='13/02/2023' 
        foiAtendido={true} 
        foiAgendado={false}/>
         <CardConsultas 
        nome="Edmar Cruz" 
        especialidade='Psicologo' 
        foto='https://github.com/ederxx.png' 
        data='13/02/2023' 
        foiAtendido={true} 
        foiAgendado={false}/>
    </ScrollView>
)


}