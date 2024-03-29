import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const FolderItem = ({ name,type, description, onPress }) => {
  return (
    <View style={styles.card}>
      <Pressable onPress={onPress}>
        <View style={styles.iconContainer}>
          <Icon name={type == "cm:folder" ? "folder" : "document-outline"} size={50} color="#004725" />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    width: 150,
    margin: 15,

  },
  iconContainer: {
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#666",
  },
});

export default FolderItem;
