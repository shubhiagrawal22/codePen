import React from 'react';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Heading = styled(Box)`
  background: #1e1d22;
  display: flex;
  padding: 5px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #AAAEBC;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = () => {
  return (
    <>
        <Box>
          <Header>
            <Heading>
              <Box
               component='span'
               style={{
                background: 'red',
                height:  20,
                width: 20,
                borderRadius: 5,
                display: 'flex',
                placeContent: 'center',
                marginRight: 5,
                padding: 2,
               }}
               >
                /  
              </Box>
              HTML
            </Heading>
            <CloseFullscreenIcon />
          </Header>
        </Box>
    </>
  );
};

export default Editor