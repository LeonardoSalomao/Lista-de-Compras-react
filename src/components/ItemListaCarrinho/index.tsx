import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import OutlinedButton from "../ItemListaCarrinho/button";

const ItemListaCarrinho = () => {
    return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 1200,
              height: 90,
            },
          }}
        >
          <Paper elevation={3} >
              <div className='img'></div>
              <div className='txt'>
              Nome do Produto <br /> <br />
              Preço: R$ 0,00
              </div>
              <div className='out_bt'>
              <OutlinedButton></OutlinedButton>
              </div>
          </Paper>
        </Box>
        
      );
}

export default ItemListaCarrinho;