import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PropsWithChildren } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import * as Progress from 'react-native-progress';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function GroupStats({isVisible, onClose}: Props) {
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={[styles.modalContent, { height: height * 0.85 }]}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Group Statistics</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#000000" size={20}/>
                        </Pressable>
                    </View>
                    <ScrollView 
                        contentContainerStyle={[styles.container, { paddingBottom: 30 }]} 
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Group Progress */}
                        <View style={[styles.progressContainer, { width: width * 0.9 }]}>
                            <Text style={styles.sectionTitle}>Group Progress</Text>
                            <View style={styles.progressRow}>
                                <Text style={styles.label}>Total Saved</Text>
                                <Text>P10,000.00</Text>
                            </View>
                            <View style={styles.progressRow}>
                                <Text style={styles.label}>Combined Goal</Text>
                                <Text>P100,000.00</Text>
                            </View>
                            <Progress.Bar
                                progress={0.3}
                                width={null}
                                style={styles.progressBar}
                                color="#1B263B"
                                borderRadius={5}
                            />
                            <Text style={styles.progressText}>10% of group goal reached</Text>
                        </View>

                        {/* This Month */}
                        <View style={[styles.progressContainer, { width: width * 0.9 }]}>
                            <Text style={styles.sectionTitle}>This Month</Text>
                            <View style={styles.rowBetween}>
                                <View>
                                    <Text style={{ color: '#6A7282'}}>Group Total</Text>
                                    <Text style={{ color: '#01BD81', fontSize: 16, fontWeight: 'bold' }}>+ P 5,000.00</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#6A7282'}}>Most Active</Text>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Karl</Text>
                                </View>
                            </View>
                        </View>

                        {/* Member Rankings */}
                        <View style={[styles.progressContainer, { width: width * 0.9 }]}>
                            <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginBottom: 8 }}>Member Rankings</Text>
                            {[1,2,3,4,5].map((rank) => (
                                <View key={rank} style={styles.rowBetween}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.goldCircle}>
                                            <Text style={{ fontWeight: 'bold'}}>{rank}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: 'bold' }}>Karl</Text>
                                            <Text style={{ color: '#6A7282', fontSize: 10 }}>20% complete</Text>
                                        </View>
                                    </View>
                                    <Text style={{ color: '#6A7282'}}>P2,000.00</Text>
                                </View>
                            ))}
                        </View>
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
        alignItems: 'center',
    },
    progressContainer: {
        borderColor: '#ccc',
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff'
    },
    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 2,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 5,
    },
    progressBar: {
        backgroundColor: "#ccc",
        alignSelf: "stretch",
        marginTop: 10,
        marginHorizontal: 5,
        borderWidth: 0,
    },
    progressText: {
        fontSize: 10,
        color: '#6A7282',
        marginLeft: 5,
        marginTop: 5,
    },
    goldCircle: {
        width: 30,
        height: 30,
        borderRadius: 25,
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    sectionTitle: {
        color: 'black',
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5
    },
    label: {
        color: 'black'
    }
});
