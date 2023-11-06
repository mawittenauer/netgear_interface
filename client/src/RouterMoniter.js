import { Divider, List, ListItem, ListItemText, Chip, CircularProgress, Grid, Card, CardContent, Typography } from '@mui/material'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

function RouterMonitor() {
  const [addresses, setAddresses] = useState([]);
  const [connectedDevices, setConnectedDevices] = useState(0);
  const [unknownDevices, setUnknownDevices] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAddresses() {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:8000/');
        const addresses = res.data;
        const connected = addresses.filter(d => d.connected);
        const unknown = addresses.filter(d => !d.name);

        setAddresses(addresses);
        setConnectedDevices(connected.length);
        setUnknownDevices(unknown.length);
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
        <Grid container>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Devices Connected
                </Typography>
                <Typography variant='h2'>
                  { connectedDevices }
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Unknown Connected
                </Typography>
                <Typography variant='h2'>
                  { unknownDevices }
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
              <List sx={style}>
              {addresses.map(a => {
                  return (
                  <>
                    <ListItem style={{ backgroundColor: !a.name && 'lightyellow' }}>
                      <ListItemText>
                          <Chip style={{ marginRight: '20px' }} label={ a.connected ? 'connected' : 'disconnected' } color={ a.connected ? 'success' : 'error' } /> <div style={{ display: 'inline', width: '100%', textAlign: 'right' }}>{`${a.mac}: ${a.name ? a.name : "Unknown"}`}</div></ListItemText>
                      </ListItem>
                    <Divider />
                  </>
                  );
              })}
              </List>
          </Grid>
        </Grid>
      }
    </div>
  );
}

export default RouterMonitor;

