import React, { useEffect, useState, useRef } from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Alert as RNAlert } from "react-native";
import socket from "../../lib/services/police_socket_api";
import AlertCard, { UserLocation } from "../../components/alert_card";
import { useNavigation } from "@react-navigation/native";
import { usesendLocationToBackend } from '../../lib/services/send_location_to_backend';

export type Alert = {
  userLocation: UserLocation;
  distance: number;
};
const home_screen = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [locationSharing, setLocationSharing] = useState(false);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const locationIntervalRef = useRef<number | null>(null);
  const { sendLocationToBackend } = usesendLocationToBackend();
  const navigation = useNavigation();


  const handlesendLocationToBackend = async () => {
    try {
      setLoading(true);
      console.log('loading');
      await sendLocationToBackend()
    } catch (error: any) {
    console.error('Full error:', error);
    const message = error?.message || 'Something went wrong';
    setErrorMsg(message);
    // Alert.alert('Error', message);
    } finally {
    setLoading(false);
    }
  };

  useEffect(() => {
    if (locationSharing) {
      handlesendLocationToBackend(); 
      locationIntervalRef.current = setInterval(handlesendLocationToBackend, 10 * 60 * 1000) as unknown as number;    } else {
      clearInterval(locationIntervalRef.current ?? undefined);
    }

    return () => clearInterval(locationIntervalRef.current ?? undefined);
  }, [locationSharing]);

  useEffect(() => {
    socket.on("receive_alert", (alert:Alert) => {
      console.log("Received alert:", alert);
      setAlerts(prev => [...prev, alert]);
    });

    return () => {
      socket.off("receive_alert");
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar hidden={true} />
      
      {/* Header */}
      <View className="bg-white shadow-sm py-4 pt-12 px-4 flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-purple-500">Help Now India</Text>
        <View className="flex-row items-center gap-5">
          <TouchableOpacity onPress={handlesendLocationToBackend} className="bg-gray rounded-sm ">
            <Text className="text-green-700 font-bold text-lg">on</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlesendLocationToBackend} className="bg-gray rounded-sm">
            <Text className="text-red-700 font-bold text-lg">off</Text>
          </TouchableOpacity>
        </View>
        
      </View>

      <View className="flex-1 pt-6">
        <Text className="text-2xl font-bold text-center mb-6 text-gray-900">
          Alerts
        </Text>

        <FlatList
          data={alerts}
          renderItem={({ item, index }) => (
            <AlertCard
              alertNumber={index + 1}
              userLocation={item.userLocation}
              distance={item.distance}
              buttonType="Track"
              onTrackPress={() =>
                navigation.navigate('map_screen', { userLocation: item.userLocation})
              }
            />
          )}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default home_screen;