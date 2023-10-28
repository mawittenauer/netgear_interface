import { Divider, List, ListItem, ListItemText, Chip, CircularProgress } from '@mui/material'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

function App() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAddresses() {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:8000/');

        setAddresses(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getAddresses();
  }, []);

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      { loading ?
        <CircularProgress size="10rem" style={{ marginTop: '200px' }} />
        :
        <List sx={style}>
          {addresses.map(a => {
            return (
              <>
                <ListItem style={{ backgroundColor: !a.name && 'lightyellow' }}>
                  <ListItemText style={{ textAlign: 'center' }}>
                    <Chip style={{ marginRight: '20px' }} label={ a.connected ? 'connected' : 'disconnected' } color={ a.connected ? 'success' : 'error' } /> {`${a.mac}: ${a.name ? a.name : "Unknown"}`}</ListItemText>
                  </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      }
    </div>
  );
}

export default App;
