import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CartAddButton from "../ItemListaCarrinho/CartAddButton";

const OutlinedButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button className='bt_compra' color='success' variant="outlined"><CartAddButton />Adicionar<br></br>no Carrinho</Button>
    </Stack>
  );
}

export default OutlinedButton;