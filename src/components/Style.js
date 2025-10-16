import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container principal da tela
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 300,
  },
  // Estilo para modo claro
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  // Estilo para modo escuro
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  // Ícone do modo escuro no topo direito
  darkModeIconContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  // Estilo do botão do modo escuro
  darkModeIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Cor do botão modo escuro no modo claro
  darkModeIconLight: {
    backgroundColor: '#f0f0f0',
  },
  // Cor do botão modo escuro no modo escuro
  darkModeIconDark: {
    backgroundColor: '#2a2a2a',
  },
  // Estilo do emoji/texto do botão modo escuro
  iconText: {
    fontSize: 24,
  },
  // Ícone de configurações no canto inferior esquerdo
  settingsIconContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    zIndex: 10,
  },
  // Estilo do botão de configurações
  settingsIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Container do timer centralizado
  timerContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  // Texto principal do timer
  timerText: {
    fontSize: 72,
    fontWeight: 'bold',
    fontFamily: 'System',
    letterSpacing: 2,
  },
  // Cor do texto no modo claro
  lightText: {
    color: '#333333',
  },
  // Cor do texto no modo escuro
  darkText: {
    color: '#ffffff',
  },
  // Container dos botões de controle
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilo base dos botões
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Cor dos botões iniciar/resetar
  startResetButton: {
    backgroundColor: '#28b07aff',
  },
  // Estilo do ícone dentro dos botões
  buttonIcon: {
    fontSize: 28,
    color: '#ffffff',
  },
  // Sidebar de configurações
  sideBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 500,
    zIndex: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Sidebar no modo claro
  lightSideBar: {
    backgroundColor: '#f5f5f5',
  },
  // Sidebar no modo escuro
  darkSideBar: {
    backgroundColor: '#2a2a2a',
  },
  // Cabeçalho da sidebar
  sideBarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  // Título da sidebar
  sideBarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Conteúdo da sidebar
  sideBarContent: {
    padding: 20,
  },
  // Label dos campos na sidebar
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    paddingBottom: 10,
  },
  // Overlay para modal/configurações
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 12,
  },
  // Container dos inputs em linha
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  // Estilo dos inputs
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor:'#28b07aff',
    borderRadius: 8,
    padding: 10,
    width: '30%',
  },
  // Input no modo claro
  inputLight: {
    color: '#333333',
  },
  // Input no modo escuro
  inputDark: {
    color: '#ffffff',
  },
  
  // ========== TOGGLE SWITCH STYLES ==========
  // Container do toggle switch
  toggleContainer: {
    marginBottom: 20,
  },
  // Botão do toggle switch
  toggleSwitch: {
    width: '100%',
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 2 
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
    borderWidth: 2,
  },
  // Toggle switch no modo claro
  toggleSwitchLight: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
  },
  // Toggle switch no modo escuro
  toggleSwitchDark: {
    backgroundColor: '#3a3a3a',
    borderColor: '#4a4a4a',
  },
  // Bolinha deslizante do toggle
  toggleSlider: {
    width: '50%',
    height: 42,
    borderRadius: 21,
    backgroundColor: '#28b07aff',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 2 
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Posição da bolinha quando está à esquerda
  toggleSliderLeft: {
    left: 4,
  },
  // Posição da bolinha quando está à direita
  toggleSliderRight: {
    right: 4,
  },
  // Container do texto do toggle
  toggleTextContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  // Texto do toggle
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Texto ativo (sobre a bolinha verde)
  toggleTextActive: {
    color: '#ffffff',
  },
  // Texto inativo no modo claro
  toggleTextInactiveLight: {
    color: '#666666',
  },
  // Texto inativo no modo escuro
  toggleTextInactiveDark: {
    color: '#666666',
  },
});