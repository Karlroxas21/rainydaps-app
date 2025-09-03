import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PropsWithChildren } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function GroupHistory({isVisible, onClose}: Props) {
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <Modal animationType='slide' transparent={true} visible={isVisible}>
                <View style={[styles.modalContent, { height: height * 0.85 }]}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Complete History</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#000000" size={20}/>
                        </Pressable>
                    </View>

                    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                        {/* Filter Buttons */}
                        <View style={styles.dropdownContainer}>
                            {["All", "Deposits", "Withdrawals"].map((label, i) => (
                                <Pressable
                                    key={i}
                                    style={({ pressed }) => [
                                        styles.dateRangebtn,
                                        { minWidth: width * 0.28 },
                                        pressed && { backgroundColor: '#1B263B' },
                                    ]}
                                    onPress={() => alert(label)}
                                >
                                    {({ pressed }) => (
                                        <Text style={[styles.btnText, { color: pressed ? 'white' : 'black' }]}>{label}</Text>
                                    )}
                                </Pressable>
                            ))}
                        </View>

                        <View style={styles.dropdownContainer}>
                            {["Month", "Year"].map((label, i) => (
                                <Pressable
                                    key={i}
                                    style={({ pressed }) => [
                                        styles.dateRangebtn,
                                        { minWidth: width * 0.28 },
                                        pressed && { backgroundColor: '#1B263B' },
                                    ]}
                                    onPress={() => alert(label)}
                                >
                                    {({ pressed }) => (
                                        <Text style={[styles.btnText, { color: pressed ? 'white' : 'black' }]}>{label}</Text>
                                    )}
                                </Pressable>
                            ))}
                        </View>

                        {/* Stats */}
                        <View style={styles.statsWrapper}>
                            <View style={[styles.statsContainer, { minWidth: width * 0.28 }]}>
                                <Text style={{ fontSize: 14 }}>Total Deposit</Text>
                                <Text style={{ fontSize: 16, color: '#01BD81', fontWeight: 'bold' }}>P25,000.00</Text>
                            </View>
                            <View style={[styles.statsContainer, { minWidth: width * 0.28 }]}>
                                <Text style={{ fontSize: 14, textAlign: 'center' }}>Total Withdrawals</Text>
                                <Text style={{ fontSize: 16, color: '#EF4444', fontWeight: 'bold' }}>P25,000.00</Text>
                            </View>
                            <View style={[styles.statsContainer, { minWidth: width * 0.28 }]}>
                                <Text style={{ fontSize: 14 }}>Net Change</Text>
                                <Text style={{ fontSize: 15, color: '#2563EB', fontWeight: 'bold' }}>P25,000.00</Text>
                            </View>
                        </View>

                        {/* History Entries */}
                        {[1,2,3,4].map((_, i) => (
                            <View key={i} style={styles.historyEntry}>
                                <View style={{ width: 40, height: 40, backgroundColor: '#6A7282', borderRadius: 5, marginRight: 10 }} />
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#01BD81' }}>+ P5,000.00</Text>
                                        <View style={styles.badge}>
                                            <Text style={{ fontSize: 10, textAlign: 'center' }}>Personal Fund</Text>
                                        </View>
                                    </View>
                                    <Text style={{ marginTop: 2, color: '#647282' }}>Bonus from Work</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 10, color: '#6A7282' }}>Sept 3, 2025</Text>
                                        <Text style={{ fontSize: 10, color: '#647282' }}>Balance: P10,000.00</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        padding: 15,
        alignItems: 'center',
    },
    dropdownContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 10,
    },
    dateRangebtn: {
        borderWidth: 1,
        borderColor: '#1B263B',
        borderRadius: 8,
        margin: 5,
        paddingVertical: 6,
        alignItems: 'center',
    },
    btnText: {
        fontWeight: 'bold',
    },
    statsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 10,
    },
    statsContainer: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        margin: 5,
        flex: 1,
    },
    historyEntry: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderLeftColor: '#1B263B',
        borderLeftWidth: 10,
        borderRadius: 8,
        width: '100%',
    },
    badge: {
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal: 6,
        paddingVertical: 2,
    }
});
