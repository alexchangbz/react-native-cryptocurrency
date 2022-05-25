import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    tickerContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    tickerTitle: {
        color: '#fff', 
        fontWeight: 'bold', 
        marginHorizontal: 5, 
        fontSize: 17
    },
    tickerRank: {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 15,
        backgroundColor: "#585858",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        marginLeft: 3
    }
})

export default styles