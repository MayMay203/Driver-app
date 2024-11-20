import images from "@/assets/images";
import {useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {
  const [info, setInfo] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const router = useRouter()

  const handleChange = (name: "email" | "password") => (text: string) => {
    if(error[name] !== '')  setError({ ...error, [name]: "" });
    setInfo({ ...info, [name]: text });
  };

  const checkValidate = () => {
    const newError: { email: string; password: string } = {
      email: "",
      password: "",
    };

    if (!info.email) {
      newError.email = "Vui lòng nhập email";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(info.email)
    ) {
      newError.email = "Email không đúng định dạng";
    }

    if (!info.password) {
      newError.password = "Vui lòng nhập mật khẩu";
    } else if (info.password.length < 6) {
      newError.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    setError(newError);
    return !newError.email && !newError.password;
  };

  const handleLogin = () => {
    if (checkValidate()) {
     router.push('/(tabs)')
   }
  };

  return (
    <View className="relative h-full">
      <View className="w-full h-[220px]">
        <Image source={images.login} className="w-full h-full object-cover" />
      </View>
      <View className="absolute top-[160px] left-0 right-0 bottom-0 h-[100%] bg-white rounded-tl-[50px] rounded-tr-[50px] px-7 py-5">
        <Text className="text-center text-[20px] font-bold">ĐĂNG NHẬP</Text>
        <Text className="italic mt-1 text-center mb-4">
          "Lái xe mỗi ngày, thành công mỗi phút."
        </Text>
        <View className="flex-col gap-y-3">
          <Text className="text-[15px]">Email</Text>
          <TextInput
            placeholder="Nhập email"
            value={info.email}
            onChangeText={handleChange("email")}
            className="border-[1px] border-[#ccc] p-2 rounded-[8px]"
          ></TextInput>
          {error.email && <Text className="text-red-500">{error.email}</Text>}
        </View>
        <View className="flex-col gap-y-3 mt-4">
          <Text className="text-[15px]">Mật khẩu</Text>
          <TextInput
            placeholder="Nhập mật khẩu"
            value={info.password}
            onChangeText={handleChange("password")}
            className="border-[1px] border-[#ccc] p-2 rounded-[8px]"
          ></TextInput>
          {error.password && (
            <Text className="text-red-500">{error.password}</Text>
          )}
        </View>
        <TouchableOpacity
          className="bg-[#FFEBE4] p-2 rounded-[4px] mt-5 mb-3"
          onPress={handleLogin}
        >
          <Text className="text-[#FF7F50] text-center text-[15px]">
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 6,
            width: 100,
            marginLeft: "auto",
          }}
        >
          <Text className="text-[#FF7F50] font-bold italic">Quên mật khẩu</Text>
        </TouchableOpacity>
        <View className="mt-6">
          <View className="flex-row items-center gap-x-3 justify-center">
            <View className="w-1/3 bg-[#ccc] h-[1px]"></View>
            <Text className="text-[#444] text-[14px]">hoặc</Text>
            <View className="w-1/3 bg-[#ccc] h-[1px]"></View>
          </View>
          <TouchableOpacity
            className="flex-row justify-center items-center gap-x-2 border-[#ccc] bg-white border-[1px] mt-4 rounded-[4px]"
            style={{
              padding: 6,
            }}
          >
            <Image
              source={images.google}
              style={{
                width: 24,
                height: 24,
              }}
            ></Image>
            <Text> Đăng nhập bằng Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
