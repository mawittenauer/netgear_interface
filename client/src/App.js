import { Divider, List, ListItem, ListItemText, Chip } from '@mui/material'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

function App() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    async function getAddresses() {
      const res = await axios.get('http://localhost:8000/');

      setAddresses(res.data);
    };

    getAddresses();
  }, []);

  return (
    <div style={{ margin: 'auto' }}>
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
    </div>
  );
}

export default App;
