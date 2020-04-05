const styles = (theme) => ({
  taskboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  shape: {
    backgroundColor: theme.color.primary,
    borderColor: '#ccc',
    padding: 20,
    margin: 10,
    borderRadius: 4,
    color: theme.shape.textColor,
  },
});

export default styles;
