const ListContainer = ({greeting}) => {

const styles = { 
        fontWeight: 'extra-bold',
        color: 'black',
        border: '4px solid red',
        padding: '30px',
        borderRadius: '30px',
        fontSize: '3rem',
}
  return (
    <div style={styles}>
    <h1>{greeting}</h1>
    </div>
  );
};

export default ListContainer;
