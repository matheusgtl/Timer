import { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../components/Style.js';


export default function Chronometer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes]= useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 59) {
                        setMinutes(prevMinutes => {
                            if (prevMinutes === 59) {
                                setHours(prevHours => prevHours + 1);
                                return 0;
                            }
                            return prevMinutes + 1;
                        });
                        return 0;
                    }
                    return prevSeconds + 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [isRunning]);

    const handleStartPause = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    };

    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    };

    const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
    };

    return (
      <View style={[
        styles.container,
        darkMode ? styles.darkContainer : styles.lightContainer
      ]}>
        {/* Botão de modo noturno no canto superior direito */}
        <View style={styles.darkModeIconContainer}>
          <TouchableOpacity
            style={[
              styles.darkModeIcon,
              darkMode ? styles.darkModeIconDark : styles.darkModeIconLight
            ]}
            onPress={toggleDarkMode}
          >
            <Text style={styles.iconText}>
              {darkMode ? '☀️' : '🌙'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Timer centralizado */}
        <View style={styles.timerContainer}>
          <Text style={[
            styles.timerText,
            darkMode ? styles.darkText : styles.lightText
          ]}>
            {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
          </Text>
        </View>

        {/* Botões abaixo do timer */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.startResetButton]}
            onPress={handleStartPause}
          >
            <Ionicons 
              name={isRunning ? "pause" : "play"} 
              size={24} 
              color="white" 
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, styles.startResetButton]}
            onPress={handleReset}
          >
            <Ionicons 
              name="reload" 
              size={24} 
              color="white" 
            />
          </TouchableOpacity>
        </View>
      </View>
    )
}