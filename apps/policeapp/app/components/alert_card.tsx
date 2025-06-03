import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export type UserLocation = {
  phonenumber: string;
  userid: string;
  latitude: number;
  longitude: number;
};

export type Alert = {
  userLocation: UserLocation;
  distance: number;
  timeAgo?: string; // optional, if you want to add it
};

export type AlertCardProps = {
  alertNumber: number;
  userLocation: UserLocation;
  distance: number;
  buttonType: string;
  onTrackPress: () => void;
};

const AlertCard: React.FC<AlertCardProps> = ({
  alertNumber,
  userLocation,
  distance,
  buttonType,
  onTrackPress,
}) => {
  return (
    <View className="p-4 bg-white mb-3 rounded-lg shadow-sm">
      <Text className="text-base font-bold">Alert #{alertNumber}</Text>
      <Text className="text-sm text-gray-700 my-1">User Phone: {userLocation.phonenumber}</Text>
      <Text className="text-sm text-gray-700 my-1">User ID: {userLocation.userid}</Text>
      <Text className="text-sm text-gray-700 my-1">Latitude: {userLocation.latitude}</Text>
      <Text className="text-sm text-gray-700 my-1">Longitude: {userLocation.longitude}</Text>
      <Text className="text-sm text-gray-700 my-1">Distance: {distance.toFixed(2)} km</Text>
      <TouchableOpacity 
        className="bg-indigo-500 py-2 px-3 rounded-md self-start"
        onPress={onTrackPress}
      >
        <Text className="text-white font-semibold">{buttonType}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertCard;