import { View, Text, StatusBar, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import QuickActionButton from '@/app/components/quickactionButton';
import EmergencyButton from '@/app/components/emergencyButton';
import  {useHelpRequest}  from '../../lib/services/socket_send_help'
import socket from '@/app/lib/services/socket_api';

const home = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [alerts, setAlerts] = useState([]);
  const { sendHelpRequestAndGetCurrentPosition } = useHelpRequest();

  const handleSendHelpandCurrentPosition = async () => {
    try {
    setLoading(true);
    console.log('loading');
    await sendHelpRequestAndGetCurrentPosition();
    Alert.alert('Help request sent successfully!');
    } catch (error: any) {
    console.error('Full error:', error);
    const message = error?.message || 'Something went wrong';
    setErrorMsg(message);
    Alert.alert('Error', message);
    } finally {
    setLoading(false);
    }
  };

  //   useEffect(() => {
  //   socket.on("help_request_sent", ({data}:{data:any}) => {
  //     console.log("help_request_sent recived:", data);
  //     setAlerts((prev) => [...prev, data] as any);
  //   });

  //   return () => {
  //     socket.off("receive_alert");
  //   };
  // }, []);
  
  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar hidden={true} />
      {/* Header */}
      <View className="bg-white shadow-sm py-4 pt-12">
        <View className="mx-4 flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-purple-500">Help Now India</Text>
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        {/* Main Content */}
        <View className="flex-1 mx-4 py-8 items-center justify-center">
          
          {/* Emergency Card */}
          <View className="w-full max-w-sm mb-6 bg-white rounded-lg
           shadow-md shadow-neutral-400/70 border border-purple-100">
            {/* Card Header */}
            <View className="bg-secondary rounded-t-lg p-6 items-center">
              <Text className="text-2xl font-bold text-gray-800 mb-2">Emergency Alert</Text>
              <Text className="text-gray-600 text-center text-sm font-medium">
                Press the emergency button to alert nearby police
              </Text>
            </View>
            
            {/* Button Content */}
            <View className="p-6 items-center">
              <EmergencyButton onPress={handleSendHelpandCurrentPosition} loading={loading} />
            </View>
            
            {/* Card Footer */}
            <View className="pb-4 px-4">
              <Text className="text-sm font-medium text-gray-500 text-center">
                Your location will be shared with nearby police officers
              </Text>
            </View>
          </View>

          {/* Quick Actions Grid */}
          <View className="w-full max-w-sm">
            <View className="flex-row mb-4">
              <QuickActionButton
                // icon={MapPin}
                title="Nearby Stations"
                // onPress={() => navigate('nearby-stations')}
              />
              <QuickActionButton
                // icon={Phone}
                title="Emergency Contacts"
                // onPress={() => navigate('emergency-contacts')}
              />
            </View>
            
            <View className="flex-row">
              <QuickActionButton
                // icon={AlertCircle}
                title="Safety Tips"
                // onPress={() => navigate('safety-tips')}
              />
              <QuickActionButton
                // icon={Navigation}
                title="Live Map"
                // onPress={() => navigate('map')}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

export default home