import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.shadowWrapper}>
      <LinearGradient
      colors={['#1B263B', '#396FDC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.summaryContainer}>
        <Text style={styles.title}>Your Emergency Fund</Text>
        <Text style={styles.subtitle}>Current Balance</Text>

        <Progress.Bar
          progress={0.6}
          width={null}
          style={styles.progressBar}
          color="#fff"
          borderRadius={5}
        />

        <Text style={styles.goalText}>Goal: P100,000.00</Text>
      </LinearGradient>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsRowContainer}>          
          <View style={styles.statCard}>
            <Ionicons name="add-sharp" size={30} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15 }}>This Month</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18}}>
                + P5000.00
              </Text>
            </View>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="calendar-outline" size={30} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15 }}>Months Active</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                3 / 12
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recent Transactions */}
      <View style={styles.entriesContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontWeight: 'bold', padding: 10, fontSize: 15 }}>Recent Entries</Text>
          <Link style={{ fontSize: 13, color: '#3498db', padding: 10 }} href="/">View All</Link>
        </View>
        <View style={styles.entries}>
          <View style={styles.entriesCard}>
            <Ionicons name="wallet-outline" size={30}/>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: '#01BD81', fontSize: 20, fontWeight: 'bold' }}>+ P5000.00</Text>
              <Text style={{ fontSize: 13, color: '#7f8c8d' }}>Bonus from Work</Text>
            </View>
          </View>
          <View style={styles.entriesCard}>
            <Ionicons name="wallet-outline" size={30}/>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: '#01BD81', fontSize: 20, fontWeight: 'bold' }}>+ P5000.00</Text>
              <Text style={{ fontSize: 13, color: '#7f8c8d' }}>Bonus from Work</Text>
            </View>
          </View>
          <View style={styles.entriesCard}>
            <Ionicons name="wallet-outline" size={30}/>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: '#01BD81', fontSize: 20, fontWeight: 'bold' }}>+ P5000.00</Text>
              <Text style={{ fontSize: 13, color: '#7f8c8d' }}>Bonus from Work</Text>
            </View>
          </View>
          <View style={styles.entriesCard}>
            <Ionicons name="wallet-outline" size={30}/>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: '#01BD81', fontSize: 20, fontWeight: 'bold' }}>+ P5000.00</Text>
              <Text style={{ fontSize: 13, color: '#7f8c8d' }}>Bonus from Work</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: '#e4e7ebff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  shadowWrapper: {
    borderRadius: 20,  // match your gradient container’s radius
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8, 
    width: '100%',
    minHeight: 180,
  },
  summaryContainer: {
    borderRadius: 12,
    padding: 20,
    width: '100%',
    minHeight: 180,
    marginTop: 10
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    color: '#fff',
    marginBottom: 5,
  },
  progressBar: {
    alignSelf: 'stretch',
    marginVertical: 5,
  },
  goalText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'right',
  },
  statsContainer: {
    width: '100%',
    marginTop: 25,
  },
  statsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f4f6f9',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  entriesContainer: {
    marginTop: 15,
    backgroundColor: '#f4f6f9',
    width: '100%',
    borderRadius: 10
  },
  entries: {
    flex: 1,
    margin: 10
  },
  entriesCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f9fa',
    marginHorizontal: 5,
  }
});
