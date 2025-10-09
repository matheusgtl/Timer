import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 300,
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  darkModeIconContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
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
  darkModeIconLight: {
    backgroundColor: '#f0f0f0',
  },
  darkModeIconDark: {
    backgroundColor: '#2a2a2a',
  },
  iconText: {
    fontSize: 24,
  },
  settingsIconContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    zIndex: 10,
  },
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
  timerContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 72,
    fontWeight: 'bold',
    fontFamily: 'System',
    letterSpacing: 2,
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#ffffff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  startResetButton: {
    backgroundColor: '#28b07aff',
  },
  buttonIcon: {
    fontSize: 28,
    color: '#ffffff',
  },
});