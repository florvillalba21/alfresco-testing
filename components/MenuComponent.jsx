import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

const DropdownMenu = () => {
  const navigate = useNavigation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleDropdown}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDropdownVisible}
        onRequestClose={closeDropdown}
      >
        <TouchableWithoutFeedback onPress={closeDropdown}>
          <View style={styles.modalOverlay}>
            <View style={styles.dropdownContent}>
              <TouchableOpacity
                style={styles.textButton}
                onPress={() => console.log("Option 1 selected")}
              >
                <Text>Gestionar usuarios</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.textButton}
                onPress={() => navigate.navigate("Sites")}
              >
                <Text>Gestionar sitios</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.textButton}
                onPress={() => console.log("Option 3 selected")}
              >
                <Text>Gestionar grupos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.textButton}
                onPress={() => navigate.navigate("Activities")}
              >
                <Text>Actividad</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textButton}>
                <Text>Cerrar sesión</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    display: "flex",
    position: "absolute",
    top: 0, // Cambiar a 'bottom' si se desea que esté en la parte inferior
    right: 7,
    width: "100%",
    alignItems: "flex-end", // Alinea el botón a la derecha
    zIndex: 1,
  },
  menuButton: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 10,
  },
  menuButtonText: {
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end", // Alinea el contenido hacia abajo
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dropdownContent: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white",
    width: "100%",
    height: "auto", // Altura del menú desplegable
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 1,
  },
  textButton: {
    padding: 25,
    borderWidth: 0.5,
    borderRadius: 1,
  },
});

export default DropdownMenu;
