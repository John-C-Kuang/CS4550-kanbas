const styles = {
  parentNavLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '75px',
    height: '65px',
    paddingTop: '3px'
  },

  additionalParentNavLink: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '150px',
    height: '60px',
    paddingTop: '3px',
    alignItems: 'start',
    paddingLeft: '20px'
  },

  subNavigation: {
    position: 'absolute',
    top: '100px',
    left: '120px',
    width: '200px'
  },

  selectedSideNavItem: {
    color: 'black',
    fontWeight: 'bold',
  },

  icIconSvgPath: {
    fill: '#C00',
  },

  neuRed: {
    color: '#C00',
  },

  icIconSvg: {
    width: '30px',
    height: 'auto',
    margin: '3px',
  },

  selectedNav: {
    backgroundColor: 'white',
  },

  moduleSubjectColor: {
    backgroundColor: '#e7e6e6',
  },

  largeProfileIcon: {
    position: 'absolute',
    top: '100px',
    left: '250px',
  },

  profileInfo: {
    position: 'absolute',
    top: '100px',
    left: '420px',
  },

  flexCardItem: {
    flexBasis: 'calc(25% - 10px)',
    margin: '5px',
  },

  card: {
    width: '100%',
  },

  moduleSubject: {
    fontSize: '18px',
    fontWeight: 'bold',
  },

  moduleTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },

  moduleItem: {
    marginLeft: '20px',
  },

  assignmentTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },

  assignmentEditPromptText: {
    fontSize: '16px',
  },

  gradeFormColName: {
    fontSize: '16px',
    marginBottom: '0px',
  },

  gradeTableCellAlignment: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },

  courseCardDescriptionText: {
    fontSize: '14px',
    color: 'black',
    margin: '0px',
  },

  courseCardAdditionalDescriptionText: {
    fontSize: '10px',
    color: 'grey',
    margin: '0px',
  }
};

export default styles