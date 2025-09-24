import GroupActivity from '@/components/group-activity';
import GroupHistory from '@/components/group-history';
import GroupStats from '@/components/group-stats';
import InviteModal from '@/components/invitemodal';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Progress from 'react-native-progress';
import { useTheme } from '../context/ThemeContext'; // assume a ThemeContext

export default function AboutScreen() {
  const { darkMode } = useTheme();
  const bgColor = darkMode ? '#121212' : '#e4e7ebff';
  const textColor = darkMode ? '#fff' : '#000';
  const secondaryBg = darkMode ? '#1c1c1c' : '#f4f6f9';
  const accent = darkMode ? '#396FDC' : '#1B263B';

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Family Saver', value: 'familysaver' },
    { label: 'Group X', value: 'groupx' },
    { label: 'Group B', value: 'groupb' },
    { label: 'Add New Entry', value: 'addnewentry'}
  ]);
  const [isInviteVisible, setInviteVisible ] = useState<boolean>(false);
  const [isStatsVisible, setStatsVisible] = useState<boolean>(false);
  const [isHistoryVisible, setHistoryVisible] = useState<boolean>(false);
  const [isActivityVisible, setActivityVisible] = useState<boolean>(false);

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: bgColor }]}>
      <View style={[styles.firstContainer, { backgroundColor: accent, zIndex: 2000, elevation: 2000 }]}>
        <View style={[styles.row, { zIndex: 2000, elevation: 2000 }]}>
          <View style={{ flex: 1, maxWidth: 180, zIndex: 2000, elevation: 2000 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select a group"
              style={[
                styles.dropdown,
                { backgroundColor: secondaryBg, borderColor: darkMode ? '#555' : '#ccc' }
              ]}
              textStyle={{ color: textColor }}                 // ✅ dropdown button text color
              dropDownContainerStyle={[
                styles.dropdownContainer,
                { backgroundColor: secondaryBg, borderColor: darkMode ? '#555' : '#ccc' }
              ]}
              labelStyle={{ color: textColor }}               // ✅ dropdown list text color
            />
          </View>
          <View style={[styles.membersBox, { backgroundColor: secondaryBg }]}>
            <Text style={[styles.membersText, { color: textColor }]}>5 members</Text>
          </View>
        </View>
        <Text style={{ color: darkMode ? '#ccc' : '#7f8c8d', marginTop: 5 }}>
          Building emergency funds together
        </Text>
      </View>

      {[1,2,3].map((_, idx) => (
        <View key={idx} style={[styles.membersContainer, { backgroundColor: secondaryBg }]}>
          <Image 
            source={{ uri: "https://via.placeholder.com/60" }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <View style={styles.membersDetails}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: textColor }}>You</Text>
            <Text style={{ color: darkMode ? '#ccc' : '#7f8c8d', fontSize: 11 }}>P10,000.00</Text>
            <Progress.Bar
              progress={0.6}
              width={null}
              style={styles.progressBar}
              color={accent}
              borderRadius={5}
            />
          </View>
        </View>
      ))}

      <View style={styles.statsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.statsButton,
            { backgroundColor: secondaryBg },
            pressed && { backgroundColor: accent },
          ]}
          onPress={() => setInviteVisible(true)}
        >
          {({ pressed }) => (
            <>
              <Ionicons name="person-add" size={21} style={{ padding: 5, color: pressed ? '#fff' : textColor }} />
              <Text style={{ color: pressed ? '#fff' : textColor }}>Invite</Text>
            </>
          )}
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.statsButton,
            { backgroundColor: secondaryBg },
            pressed && { backgroundColor: accent },
          ]}
          onPress={() => setStatsVisible(true)}
        >
          {({ pressed }) => (
            <>
              <Ionicons name="stats-chart" size={21} style={{ padding: 5, color: pressed ? '#fff' : textColor }} />
              <Text style={{ color: pressed ? '#fff' : textColor }}>Stats</Text>
            </>
          )}
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.statsButton,
            { backgroundColor: secondaryBg },
            pressed && { backgroundColor: accent },
          ]}
          onPress={() => setHistoryVisible(true)}
        >
          {({ pressed }) => (
            <>
              <Ionicons name="refresh" size={21} style={{ padding: 5, color: pressed ? '#fff' : textColor }} />
              <Text style={{ color: pressed ? '#fff' : textColor }}>History</Text>
            </>
          )}
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.statsButton,
            { backgroundColor: secondaryBg },
            pressed && { backgroundColor: accent },
          ]}
          onPress={() => setActivityVisible(true)}
        >
          {({ pressed }) => (
            <>
              <Ionicons name="flame" size={21} style={{ padding: 5, color: pressed ? '#fff' : textColor }} />
              <Text style={{ color: pressed ? '#fff' : textColor }}>Activity</Text>
            </>
          )}
        </Pressable>
      </View>

      <InviteModal isVisible={isInviteVisible} onClose={() => setInviteVisible(false)} />
      <GroupStats isVisible={isStatsVisible} onClose={() => setStatsVisible(false)} />
      <GroupHistory isVisible={isHistoryVisible} onClose={() => setHistoryVisible(false)} />
      <GroupActivity isVisible={isActivityVisible} onClose={() => setActivityVisible(false)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  firstContainer: {
    borderRadius: 15,
    width: '100%',
    padding: 20,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    minHeight: 36,
    justifyContent: 'center',
  },
  dropdownContainer: {
    borderRadius: 15,
  },
  membersBox: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  membersText: {
    fontWeight: 'bold'
  },
  membersContainer: {
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    margin: 10,
  },
  membersDetails: {
    flex: 1,
    marginLeft: 10,
  },
  progressBar: {
    alignSelf: 'stretch',
    marginVertical: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  statsButton: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
  },
});
