import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: '#3b82f6',
    marginBottom: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  headerText: {
    color: '#f8fafc',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  itemRow: {
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  itemName: {
    flex: 2,
    fontSize: 15,
    color: '#1e293b',
  },

  counter: {
    flex: 1,
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginHorizontal: 5,
  },

  addZikrButton: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    margin: 6,
    width: 90,
  },

  textInput: {
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    margin: 6,
    fontSize: 14,
    width: '45%',
    color: '#0f172a',
  },

  section: {
    backgroundColor: '#e0f2fe',
    borderRadius: 12,
    padding: 18,
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 12,
    textAlign: 'center',
  },
});
