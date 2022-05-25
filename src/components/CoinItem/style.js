import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 3
      },
      text: {
        color: "#fff",
        marginRight: 5
      },
      coinContainer: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#282828',
        padding: 15
      },
      rank: {
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 5,
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        borderRadius: 5
      }
})

export default styles