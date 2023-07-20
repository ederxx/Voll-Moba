import {VStack, Image, Text, Box, Link, Checkbox, ScrollView} from 'native-base'
import { Botao } from './componentes/Botao';
import {useState  } from 'react';
import Logo from './assets/Logo.png';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { secoes } from './ultils/CadastroEntradaTexto';

export default function Cadastro() {
  const[numSecao, setNumSecao] = useState(0)
  
function avancarSecao() {
  if(numSecao<secoes.length-1){
    setNumSecao(numSecao+1)
  }}
  function voltarSecao() {
    if(numSecao>0){
      setNumSecao(numSecao-1)
    }
}
  return (
    <ScrollView flex={1} p={5} > 
<Image alignSelf="center" source={Logo} alt="logoVoll" />
<Titulo>
  {secoes[numSecao].titulo}
</Titulo>
<Box>
{
secoes[numSecao]?.entradaTexto?.map(entrada => {
  return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} />
})
}
 </Box>
 <Box>
  <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={4}>
    Selecione o Plano:
  </Text>
{
secoes[numSecao].checkbox.map(checkbox => 
  {
  return  <Checkbox  key={checkbox.id} value={checkbox.value}>
    {checkbox.value}
    </Checkbox>
})
}
 </Box>
{numSecao > 0 && <Botao  onPress={() =>voltarSecao()} bg={'gray.400'}>Voltar</Botao>}
<Botao mt={4}  mb={20} onPress={() =>avancarSecao()}>Avançar</Botao>


    </ScrollView>

  );
}
