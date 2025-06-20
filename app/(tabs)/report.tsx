import Layout from '@/components/Layout';
import { ReportsPageCardComponent } from '@/components/ReportCardComponent';
import { reports } from '@/constants';
import { Link } from 'expo-router';
import { Text, View, FlatList, Dimensions, ScrollView } from 'react-native';

export default function Report() {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className='flex flex-col items-start gap-y-8'>
          <Text className='text-4xl font-Bold'>Report Hub</Text>
          <View className='flex flex-col gap-y-4'>
            <View className='w-full flex flex-row justify-between items-center'>
              <Text className='text-xl font-Bold'>Latest Reports</Text>
              <Link href={'/reports/latest'}>
                <Text className='text-md text-primary-500 font-Bold'>See All</Text>
              </Link>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              snapToInterval={Dimensions.get("window").width}
              decelerationRate="fast"
              snapToAlignment="start"
              data={reports}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ReportsPageCardComponent {...item} />}
            />
            <View className='w-full flex flex-row justify-between items-center'>
              <Text className='text-xl font-Bold'>Nearby Reports</Text>
              <Link href={'/reports/nearby'}>
                <Text className='text-md text-primary-500 font-Bold'>See All</Text>
              </Link>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              snapToInterval={Dimensions.get("window").width}
              decelerationRate="fast"
              snapToAlignment="start"
              data={reports}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ReportsPageCardComponent {...item} />}
            />
            <View className='w-full flex flex-row justify-between items-center'>
              <Text className='text-xl font-Bold'>Your Reports</Text>
              <Link href={'/reports/your'}>
                <Text className='text-md text-primary-500 font-Bold'>See All</Text>
              </Link>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              snapToInterval={Dimensions.get("window").width}
              decelerationRate="fast"
              snapToAlignment="start"
              data={reports}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ReportsPageCardComponent {...item}/>}
              style={{ marginBottom: 100 }}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
