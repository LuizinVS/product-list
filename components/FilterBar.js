import { TouchableOpacity, View } from "react-native"

export function Filtro(props) {
    return
    <View>
        <TouchableOpacity
        onPress={() => props.onClick('nome')}
        style={[
          styles.botao,
          { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
          props.value === 'nome' ? styles.botaoSelecionado : null
        ]}>
        <Text style={styles.texto}>Nome</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => props.onClick('preco')}
        style={[
          styles.botao,
          props.value === 'preco' ? styles.botaoSelecionado : null
        ]}>
        <Text style={styles.texto}>Preço</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => props.onClick('qtd')}
        style={[
          styles.botao,
          props.value === 'qtd' ? styles.botaoSelecionado : null
        ]}>
        <Text style={styles.texto}>Estoque</Text>
      </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    botao: {
      flex: 1,
      padding: 12,
      backgroundColor: '#ccc',
      borderWidth: 1,
      borderColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    botaoSelecionado: {
      backgroundColor: '#3498db',
      borderColor: '#3498db',
    },
    texto: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });