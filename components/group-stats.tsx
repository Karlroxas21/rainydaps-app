import { useTheme } from '@/app/context/ThemeContext';
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
    const { darkMode } = useTheme();

    const colors = {
        background: darkMode ? "#1c1c1c" : "#fff",
        card: darkMode ? "#2a2a2a" : "#fff",
        text: darkMode ? "#fff" : "#000",
        subtext: darkMode ? "#aaa" : "#6A7282",
        border: darkMode ? "#555" : "#ccc",
        progressBg: darkMode ? "#444" : "#ccc",
    };

    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={[styles.modalContent, { height: height * 0.85, backgroundColor: colors.background }]}>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, { color: colors.text }]}>Group Statistics</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color={colors.text} size={20}/>
                        </Pressable>
                    </View>
                    <ScrollView 
                        contentContainerStyle={[styles.container, { paddingBottom: 30 }]} 
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={[styles.progressContainer, { width: width * 0.9, backgroundColor: colors.card, borderColor: colors.border }]}>
                            <Text style={[styles.sectionTitle, { color: colors.text }]}>Group Progress</Text>
                            <View style={styles.progressRow}>
                                <Text style={[styles.label, { color: colors.subtext }]}>Total Saved</Text>
                                <Text style={{ color: colors.text }}>P10,000.00</Text>
                            </View>
                            <View style={styles.progressRow}>
                                <Text style={[styles.label, { color: colors.subtext }]}>Combined Goal</Text>
                                <Text style={{ color: colors.text }}>P100,000.00</Text>
                            </View>
                            <Progress.Bar
                                progress={0.3}
                                width={null}
                                style={[styles.progressBar, { backgroundColor: colors.progressBg }]}
                                color="#1B263B"
                                borderRadius={5}
                            />
                            <Text style={[styles.progressText, { color: colors.subtext }]}>10% of group goal reached</Text>
                        </View>

                        <View style={[styles.progressContainer, { width: width * 0.9, backgroundColor: colors.card, borderColor: colors.border }]}>
                            <Text style={[styles.sectionTitle, { color: colors.text }]}>This Month</Text>
                            <View style={styles.rowBetween}>
                                <View>
                                    <Text style={{ color: colors.subtext }}>Group Total</Text>
                                    <Text style={{ color: '#01BD81', fontSize: 16, fontWeight: 'bold' }}>+ P 5,000.00</Text>
                                </View>
                                <View>
                                    <Text style={{ color: colors.subtext }}>Most Active</Text>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.text }}>Karl</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.progressContainer, { width: width * 0.9, backgroundColor: colors.card, borderColor: colors.border }]}>
                            <Text style={[styles.sectionTitle, { alignSelf: 'center' }]}>Member Rankings</Text>
                            {[1,2,3,4,5].map((rank) => (
                                <View key={rank} style={styles.rowBetween}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.goldCircle}>
                                            <Text style={{ fontWeight: 'bold'}}>{rank}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: 'bold', color: colors.text }}>Karl</Text>
                                            <Text style={{ color: colors.subtext, fontSize: 10 }}>20% complete</Text>
                                        </View>
                                    </View>
                                    <Text style={{ color: colors.subtext }}>P2,000.00</Text>
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
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
        marginVertical: 10,
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
        alignSelf: "stretch",
        marginTop: 10,
        marginHorizontal: 5,
        borderWidth: 0,
    },
    progressText: {
        fontSize: 10,
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
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5
    },
    label: {}
});
