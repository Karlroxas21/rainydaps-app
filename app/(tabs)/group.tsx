import InviteModal from '@/components/invitemodal';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Progress from 'react-native-progress';

export default function AboutScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Family Saver', value: 'familysaver' },
    { label: 'Group X', value: 'groupx' },
    { label: 'Group B', value: 'groupb' },
    { label: 'Add New Entry', value: 'addnewentry'}
  ]);
  const [isInviteVisible, setInviteVisible ] = useState<boolean>(false);

  const onInvite = () => {
    setInviteVisible(true);
  }

  const inviteClose = () => {
    setInviteVisible(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* First Section */}
      <View style={[styles.firstContainer, { zIndex: 2000, elevation: 2000 }]}>
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
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
            />
          </View>
          <View style={styles.membersBox}>
            <Text style={styles.membersText}>5 members</Text>
          </View>
        </View>
        <Text style={{ color: '#7f8c8d', marginTop: 5 }}>
          Building emergency funds together
        </Text>
      </View>

      {/* Members Section */}
      <View style={[styles.membersContainer, { zIndex: 1 }]}>
        <Image 
          source={{ uri: "https://via.placeholder.com/60" }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View style={styles.membersDetails}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>You</Text>
          <Text style={{ color: '#7f8c8d', fontSize: 11 }}>P10,000.00</Text>
          <Progress.Bar
            progress={0.6}
            width={null}
            style={styles.progressBar}
            color="#000000"
            borderRadius={5}
          />
        </View>
      </View>
      <View style={[styles.membersContainer, { zIndex: 1 }]}>
        <Image 
          source={{ uri: "https://via.placeholder.com/60" }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View style={styles.membersDetails}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>You</Text>
          <Text style={{ color: '#7f8c8d', fontSize: 11 }}>P10,000.00</Text>
          <Progress.Bar
            progress={0.6}
            width={null}
            style={styles.progressBar}
            color="#000000"
            borderRadius={5}
          />
        </View>
      </View>
      <View style={[styles.membersContainer, { zIndex: 1 }]}>
        <Image 
          source={{ uri: "https://via.placeholder.com/60" }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View style={styles.membersDetails}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>You</Text>
          <Text style={{ color: '#7f8c8d', fontSize: 11 }}>P10,000.00</Text>
          <Progress.Bar
            progress={0.6}
            width={null}
            style={styles.progressBar}
            color="#000000"
            borderRadius={5}
          />
        </View>
      </View>
      {/*Stats*/}
      <View style={styles.statsContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.statsButton,
              pressed && { backgroundColor: '#1B263B' },
            ]}
          onPress={onInvite}
          >
          {({ pressed }) => (
            <>
            <Ionicons
              name="person-add"
              size={21}
              style={{ padding: 5, color: pressed ? 'white' : 'black' }}
            />
          <Text style={{ color: pressed ? 'white' : 'black' }}>Invite</Text>
          </>
          )}
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.statsButton,
              pressed && { backgroundColor: '#1B263B' },
            ]}
          onPress={() => alert('Invite a user.')}
          >
          {({ pressed }) => (
            <>
            <Ionicons
              name="stats-chart"
              size={21}
              style={{ padding: 5, color: pressed ? 'white' : 'black' }}
            />
          <Text style={{ color: pressed ? 'white' : 'black' }}>Stats</Text>
          </>
          )}
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.statsButton,
              pressed && { backgroundColor: '#1B263B' },
            ]}
          onPress={() => alert('Invite a user.')}
          >
          {({ pressed }) => (
            <>
            <Ionicons
              name="refresh"
              size={21}
              style={{ padding: 5, color: pressed ? 'white' : 'black' }}
            />
          <Text style={{ color: pressed ? 'white' : 'black' }}>History</Text>
          </>
          )}
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.statsButton,
              pressed && { backgroundColor: '#1B263B' },
            ]}
          onPress={() => alert('Invite a user.')}
          >
          {({ pressed }) => (
            <>
            <Ionicons
              name="flame"
              size={21}
              style={{ padding: 5, color: pressed ? 'white' : 'black' }}
            />
          <Text style={{ color: pressed ? 'white' : 'black' }}>Activity</Text>
          </>
          )}
          </Pressable>
      </View>
      <InviteModal isVisible={isInviteVisible} onClose={inviteClose}></InviteModal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e7ebff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  firstContainer: {
    backgroundColor: '#1B263B',
    borderRadius: 15,
    width: '100%',
    padding: 20,
    marginBottom: 15, // 👈 space between sections
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#f4f6f9',
    borderColor: '#ccc',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    minHeight: 36,
    justifyContent: 'center',
    zIndex: 2000,   // 👈 ensures the picker button is above
    elevation: 2000 // 👈 Android fix
  },
  dropdownContainer: {
    borderColor: '#ccc',
    borderRadius: 15,
    zIndex: 3000,     // 👈 dropdown list stays above all
    elevation: 3000,  // 👈 Android fix
  },
  membersBox: {
    backgroundColor: '#f4f6f9',
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
    backgroundColor: '#f4f6f9',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,           // 👈 same padding as firstContainer
    width: '100%',
    margin: 10,
  },
  membersDetails: {
    flex: 1,
    marginLeft: 10,        // 👈 aligns text with firstContainer’s padding
  },
  progressBar: {
    alignSelf: 'stretch',
    marginVertical: 5,
    backgroundColor: '#f4f6f9'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // space them evenly
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },

  statsButton: {
    flex: 1,                       // 👈 each takes equal space
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,           // 👈 spacing between buttons
  },
});
