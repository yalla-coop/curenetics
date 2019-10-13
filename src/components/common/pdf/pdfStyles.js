import { StyleSheet } from '@react-pdf/renderer';
import { colors } from '../../../styles/globalStyles';

export const styles = StyleSheet.create({
  // general / all templates
  page: {
    padding: 48,
  },
  text: {
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 1.5,
  },
  boldText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-bold',
    fontSize: 13,
    lineHeight: 1.5,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 24,
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  // --- single pdf ---
  // header / top part
  matchTopContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 8,
  },
  nctText: {
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 1.5,
    color: colors.primary,
  },
  // table
  matchTable: {
    display: 'flex',
    height: 'auto',
    width: 'auto',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 4,
    paddingBottom: 8,
  },
  // header
  topBorder: {
    width: 'auto',
    height: 8,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  title: {
    display: 'flex',
    width: 'auto',
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-bold',
    fontSize: 18,
  },
  subtitles: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  subtitleTrial: {
    flex: 3,
    fontWeight: 'bold',
    fontFamily: 'Roboto-bold',
    fontSize: 13,
  },
  subtitlePatient: {
    flex: 2,
    fontWeight: 'bold',
    fontFamily: 'Roboto-bold',
    fontSize: 13,
  },
  // columns
  tableContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  trialColumn: {
    flex: 3,
    paddingRight: 16,
  },
  patientColumn: {
    flex: 2,
  },
});
