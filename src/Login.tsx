import { VStack, Image, Text, Box, Link } from 'native-base'
import { Botao } from './componentes/Botao';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';


export default function Login({ navigation }) {
  return (
    <VStack 
    flex={1} 
    alignItems="center" 
    p={5} 
    justifyContent="center">
      <Image 
      source={Logo} 
      alt="logoVoll" />
      <Titulo>Faça o Login na Sua conta</Titulo>
      <Box>
        <EntradaTexto 
        label='Email' 
        placeholder='Insira seu Email' />
        <EntradaTexto 
        label='Senha' 
        placeholder='Insira Sua Senha' />
      </Box>
      <Botao 
      onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>
      <Link href='https://www.alura.com.br' mt={2}>Esqueceu Sua Senha</Link>
      <Box 
      w="100%" 
      flexDirection="row" 
      justifyContent="center" 
      mt={8}>
        <Text >Ainda naão etm Cadastro?</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">Faça Seu Cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>

  );
}
