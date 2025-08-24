import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function AboutScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Family Saver', value: 'familysaver' },
    { label: 'Group X', value: 'groupx' },
    { label: 'Group B', value: 'groupb' },
    { label: 'Add New Entry', value: 'addnewentry'}
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.row}>
          <View style={{ flex: 1, maxWidth: 180 }}>
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
      </View>
    </View>
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
    backgroundColor: '#f4f6f9',
    borderRadius: 15,
    width: '100%',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // <-- pushes left and right apart
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#f4f6f9',
    borderColor: '#ccc',
    borderRadius: 15,
    height: 30,
  },
  dropdownContainer: {
    borderColor: '#ccc',
    borderRadius: 15,
  },
  membersBox: {
    backgroundColor: '#7f8c8d',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  membersText: {
    fontWeight: 'bold',
    color: '#fff'
  },
});
