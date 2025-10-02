import { useState } from "react";
import { FlatList, Modal, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useTheme } from "./context/ThemeContext";

export default function History() {
    const { width } = useWindowDimensions();
    const { darkMode } = useTheme();

    const colors = {
        background: darkMode ? "#1c1c1c" : "#fff",
        card: darkMode ? "#2a2a2a" : "#fff",
        text: darkMode ? "#fff" : "#000",
        subtext: darkMode ? "#aaa" : "#647282",
        border: darkMode ? "#555" : "#ccc",
        borderHighlight: darkMode ? "#396FDC" : "#1B263B",
    };

    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedYear, setSelectedYear] = useState("2025");

    const [monthDropdownVisible, setMonthDropdownVisible] = useState(false);
    const [yearDropdownVisible, setYearDropdownVisible] = useState(false);

    const [filter, setFilter] = useState("All");

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const years = ["2023", "2024", "2025", "2026", "2027"];

    const historyData = [
        { type: "deposit", amount: 5000, note: "Bonus from Work", balance: 10000, date: "Sept 3, 2025" },
        { type: "withdrawal", amount: 2000, note: "ATM Withdrawal", balance: 8000, date: "Sept 5, 2025" },
        { type: "deposit", amount: 10000, note: "Salary", balance: 18000, date: "Sept 10, 2025" },
        { type: "withdrawal", amount: 3000, note: "Bills Payment", balance: 15000, date: "Sept 12, 2025" },
    ];

    const filteredData = historyData.filter(entry => {
        if (filter === "All") return true;
        if (filter === "Deposits") return entry.type === "deposit";
        if (filter === "Withdrawals") return entry.type === "withdrawal";
        return true;
    });

    const renderDropdown = (data: string[], visible: boolean, onSelect: (val: string) => void, onClose: () => void) => (
        <Modal transparent visible={visible} animationType="fade">
            <Pressable style={styles.modalOverlay} onPress={onClose}>
                <View style={[styles.dropdownList, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <Pressable
                                style={({ pressed }) => [
                                    styles.dropdownItem,
                                    pressed && { backgroundColor: colors.borderHighlight }
                                ]}
                                onPress={() => {
                                    onSelect(item);
                                    onClose();
                                }}
                            >
                                <Text style={[styles.btnText, { color: colors.text }]}>{item}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            </Pressable>
        </Modal>
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Filter Buttons */}
            <View style={styles.filterContainer}>
                {["All", "Deposits", "Withdrawals"].map((label, i) => (
                    <Pressable
                        key={i}
                        style={({ pressed }) => [
                            styles.dateRangebtn,
                            { minWidth: width * 0.28, borderColor: colors.border, backgroundColor: colors.card },
                            (filter === label) && { backgroundColor: colors.borderHighlight },
                            pressed && { backgroundColor: colors.borderHighlight },
                        ]}
                        onPress={() => setFilter(label)}
                    >
                        {({ pressed }) => (
                            <Text style={[styles.btnText, { color: (filter === label || pressed) ? '#fff' : colors.text }]}>
                                {label}
                            </Text>
                        )}
                    </Pressable>
                ))}
            </View>

            {/* Month & Year Dropdown Buttons */}
            <View style={styles.filterContainer}>
                <Pressable
                    style={[styles.dateRangebtn, { borderColor: colors.border, minWidth: width * 0.4, backgroundColor: colors.card }]}
                    onPress={() => setMonthDropdownVisible(true)}
                >
                    <Text style={[styles.btnText, { color: colors.text }]}>{selectedMonth}</Text>
                </Pressable>
                <Pressable
                    style={[styles.dateRangebtn, { borderColor: colors.border, minWidth: width * 0.4, backgroundColor: colors.card }]}
                    onPress={() => setYearDropdownVisible(true)}
                >
                    <Text style={[styles.btnText, { color: colors.text }]}>{selectedYear}</Text>
                </Pressable>
            </View>

            {renderDropdown(months, monthDropdownVisible, setSelectedMonth, () => setMonthDropdownVisible(false))}
            {renderDropdown(years, yearDropdownVisible, setSelectedYear, () => setYearDropdownVisible(false))}

            <View style={styles.statsWrapper}>
                <View style={[styles.statsContainer, { minWidth: width * 0.20, borderColor: colors.border, backgroundColor: colors.card }]}>
                    <Text style={{ fontSize: 14, color: colors.subtext }}>Total Deposit</Text>
                    <Text style={{ fontSize: 16, color: '#01BD81', fontWeight: 'bold' }}>P25,000.00</Text>
                </View>
                <View style={[styles.statsContainer, { minWidth: width * 0.20, borderColor: colors.border, backgroundColor: colors.card }]}>
                    <Text style={{ fontSize: 14, textAlign: 'center', color: colors.subtext }}>Total Withdrawals</Text>
                    <Text style={{ fontSize: 16, color: '#EF4444', fontWeight: 'bold' }}>P25,000.00</Text>
               </View>
                <View style={[styles.statsContainer, { minWidth: width * 0.20, borderColor: colors.border, backgroundColor: colors.card }]}>
                    <Text style={{ fontSize: 14, color: colors.subtext }}>Net Change</Text>
                    <Text style={{ fontSize: 15, color: '#2563EB', fontWeight: 'bold' }}>P25,000.00</Text>
                </View>
            </View>

            {/* History Entries */}
            {filteredData.map((entry, i) => (
                <View key={i} style={[styles.historyEntry, {
                    borderColor: colors.border,
                    backgroundColor: colors.card,
                    borderLeftColor: entry.type === "deposit" ? "#01BD81" : "#EF4444"
                }]}>
                    <View style={{ width: 40, height: 40, backgroundColor: colors.subtext, borderRadius: 5, marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: entry.type === "deposit" ? '#01BD81' : '#EF4444' }}>
                                {entry.type === "deposit" ? "+ " : "- "}P{entry.amount.toLocaleString()}
                            </Text>
                            <View style={[styles.badge, { borderColor: colors.border }]}>
                                <Text style={{ fontSize: 10, textAlign: 'center', color: colors.text }}>
                                    {entry.type === "deposit" ? "Personal Fund" : "Withdrawal"}
                                </Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: 2, color: colors.subtext }}>{entry.note}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10, color: colors.subtext }}>{entry.date}</Text>
                            <Text style={{ fontSize: 10, color: colors.subtext }}>Balance: P{entry.balance.toLocaleString()}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10
    },
    filterContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 10,
    },
    dateRangebtn: {
        borderWidth: 1,
        borderRadius: 8,
        margin: 5,
        paddingVertical: 6,
        alignItems: 'center',
    },
    btnText: {
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownList: {
        width: '60%',
        borderWidth: 1,
        borderRadius: 8,
    },
    dropdownItem: {
        padding: 10,
        alignItems: 'center',
    },
    statsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 5,
    },
    statsContainer: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        margin: 5,
        flex: 1,
        paddingHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.20,
        shadowRadius: 6,
        elevation: 6,
    },
    historyEntry: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 10,
        borderWidth: 2,
        borderRadius: 8,
        width: '100%',
        borderLeftWidth: 10,
    },
    badge: {
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal: 6,
        paddingVertical: 2,
    }
});
