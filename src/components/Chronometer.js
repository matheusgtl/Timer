import { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Animated} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../components/Style.js';
import { TextInput } from 'react-native-web';

export default function Chronometer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes]= useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-300));
  //modo do cronômetro ('asc' = crescente, 'desc' = decrescente/timer)
  const [timerMode, setTimerMode] = useState('asc');
  // Estados separados para os inputs de configuração
  const [configHours, setConfigHours] = useState('');
  const [configMinutes, setConfigMinutes] = useState('');
  const [configSeconds, setConfigSeconds] = useState('');
  
  //inicio do useEffect para o cronometro
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (timerMode === 'asc') {
          // MODO CRESCENTE (cronômetro normal)
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
        } else {
          // MODO DECRESCENTE (timer)
          if (hours === 0 && minutes === 0 && seconds === 0) {
            setIsRunning(false);
            return;
          }
          if (seconds > 0) {
            setSeconds(seconds - 1);
          } else if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerMode, hours, minutes, seconds]);
  //fim do useEffect para o cronometro

  //funcao do botao de config
  const toggleConfig = () => {
    if (isConfigOpen) {
      // Fechar sidebar
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsConfigOpen(false));
    } else {
      // Abrir sidebar
      setIsConfigOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  
  //Toggle entre modo crescente e decrescente
  const toggleTimerMode = () => {
    setTimerMode(prevMode => prevMode === 'asc' ? 'desc' : 'asc');
    // Reseta o cronômetro ao mudar de modo
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  
  // Função para aplicar as configurações
  const applyConfig = () => {
    setHours(configHours === '' ? 0 : Number(configHours));
    setMinutes(configMinutes === '' ? 0 : Number(configMinutes));
    setSeconds(configSeconds === '' ? 0 : Number(configSeconds));
    toggleConfig();
  };
  
  //funcao dos botoes de start/pause/reset
  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };
  
  //funcao do botao reset
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  
  //funcao do botao darkmode que altera o estado
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  //funcao pra deixar o tempo com dois digitos
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
  return (
    <View style={[
      styles.container,
      darkMode ? styles.darkContainer : styles.lightContainer
    ]}>
      {/* Sidebar de configurações */}
      {isConfigOpen && (
        <Animated.View style={[
          styles.sideBar,
          darkMode ? styles.darkSideBar : styles.lightSideBar,
          { transform: [{ translateX: slideAnim }] }
        ]}>
          <View style={styles.sideBarHeader}>
            <Text style={[styles.sideBarTitle, darkMode ? styles.darkText : styles.lightText]}>
              Configurações ⚙️
            </Text>
            <TouchableOpacity onPress={toggleConfig}>
              <Ionicons 
                name="close" 
                size={28} 
                color={darkMode ? '#ffffff' : '#333333'} 
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.sideBarContent}>
            {/* definir tempo inicial */}
            <Text style={[styles.label, darkMode ? styles.darkText : styles.lightText]}>
              Definir tempo inicial
            </Text>
            <View style={styles.inputRow}>
              <TextInput
                keyboardType="numeric"
                placeholder="Horas"
                placeholderTextColor={darkMode ? '#999999' : '#666666'}
                value={configHours}
                onChangeText={setConfigHours}
                style={[styles.input, darkMode ? styles.inputDark : styles.inputLight]}
              />

              <TextInput
                keyboardType="numeric"
                placeholder="Minutos"
                placeholderTextColor={darkMode ? '#999999' : '#666666'}
                value={configMinutes}
                onChangeText={setConfigMinutes}
                style={[styles.input, darkMode ? styles.inputDark : styles.inputLight]}
              />

              <TextInput
                keyboardType="numeric"
                placeholder="Segundos"
                placeholderTextColor={darkMode ? '#999999' : '#666666'}
                value={configSeconds}
                onChangeText={setConfigSeconds}
                style={[styles.input, darkMode ? styles.inputDark : styles.inputLight]}
              />
            </View>

            {/* toggle switch de modo */}
            <View style={styles.toggleContainer}>
              <Text style={[styles.label, darkMode ? styles.darkText : styles.lightText, { marginBottom: 10 }]}>
                Modo
              </Text>
              
              <TouchableOpacity
                onPress={toggleTimerMode}
                style={[
                  styles.toggleSwitch,
                  darkMode ? styles.toggleSwitchDark : styles.toggleSwitchLight
                ]}
              >
                {/* Bolinha deslizante verde */}
                <View style={[
                  styles.toggleSlider,
                  timerMode === 'asc' ? styles.toggleSliderLeft : styles.toggleSliderRight
                ]} />
                
                {/* Textos */}
                <View style={styles.toggleTextContainer}>
                  <Text style={[
                    styles.toggleText,
                    timerMode === 'asc' 
                      ? styles.toggleTextActive 
                      : (darkMode ? styles.toggleTextInactiveDark : styles.toggleTextInactiveLight)
                  ]}>
                    Crescente
                  </Text>
                </View>
                
                <View style={styles.toggleTextContainer}>
                  <Text style={[
                    styles.toggleText,
                    timerMode === 'desc' 
                      ? styles.toggleTextActive 
                      : (darkMode ? styles.toggleTextInactiveDark : styles.toggleTextInactiveLight)
                  ]}>
                    Decrescente
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={[styles.button, styles.startResetButton, { marginTop: 40, width: '100%', height: 50 }]}
              onPress={applyConfig}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Aplicar
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}

      {/* Overlay escuro quando sidebar está aberta */}
      {isConfigOpen && (
        <TouchableOpacity 
          style={styles.overlay} 
          activeOpacity={1} 
          onPress={toggleConfig}
        />
      )}
      
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
      

      {/* Botão de configurações no canto inferior esquerdo */}
      <View style={styles.settingsIconContainer}>
        <TouchableOpacity
          style={[
            styles.settingsIcon,
            darkMode ? styles.darkModeIconDark : styles.darkModeIconLight
          ]}
          onPress={toggleConfig}
        >
          <Text style={styles.iconText}>⚙️</Text>
        </TouchableOpacity>
      </View>
      
      {/* Timer centralizado */}
      <View style={styles.timerContainer}>
        <Text style={[styles.timerText, darkMode ? styles.darkText : styles.lightText]}>
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
  );
}