import { View, Text, Image, StatusBar, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import CustomButton from "@/app/components/customButton";
import { router } from "expo-router";

const welcome = () => {
  return (
    <ImageBackground 
      source={images.background}
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <StatusBar hidden={true} />

        {/* the body start here */}
        <View className="flex-1 gap-10 p-5">

          {/* logo and the text view */}
          <View className=" relative w-full h-[250px] justify-center items-center">
            <Image
              source={icons.logo2}
              className="z-0 w-48 h-48"
              resizeMode="cover"
            />
            <Text className="text-2xl text-black font-bold absolute bottom-1 z-10">
              Access Your Z Grade Security
            </Text>
          </View>
          {/* end */}
          
          {/* two buttons view */}
          <View className="flex-col items-center justify-center gap-5 p-10">
            <CustomButton
              onPress={() => {}}
              title="Continue With Google"
              IconLeft={() => (
                <Image
                  source={icons.google}
                  resizeMode="contain"
                  className="w-5 h-5 mx-2"
                />
              )}
              className="bg-white p-3"
            />
            <CustomButton
              onPress={() => {}}
              title="Continue With Apple"
              IconLeft={() => (
                <Image
                  source={icons.apple}
                  resizeMode="contain"
                  className="w-5 h-5 mx-2"
                />
              )}
              className="bg-white p-3"
            />
          </View>
          {/* end here  */}

          {/* or view */}
          <View className="flex-row items-center my-2">
            <View className="flex-1 h-px bg-black" />
            <Text className="mx-4 text-gray-400">or</Text>
            <View className="flex-1 h-px bg-black" />
          </View>
          {/* end or */}

          {/* third button */}
          <View className=" flex-col justify-center items-center p-10">
            <CustomButton
              onPress={() => router.navigate('./phoneScreen')}
              title="Continue With Phone"
              IconLeft={() => (
                <Image
                  source={icons.phone}
                  resizeMode="contain"
                  className="w-6 h-6 mx-2"
                />
              )}
              className="bg-white p-3"
            />
          </View>
          {/* end third */}

        </View>
        {/* end body */}

      </SafeAreaView>
    </ImageBackground>
  );
};

export default welcome;