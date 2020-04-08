const styles = (theme) => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    width: '100%',
  },
});

export default styles;
