import React, { useState } from 'react';
import '../App.css';
import { Box, styled } from '@mui/material';
import CloseFullscreen from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const Container = styled(Box)`
    flex-grow: 1;
    height: 30vh !important;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`;

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

const Editor = ({ heading, language, value, onChange, icon, color }) => {

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
      onChange(value);
  }

  return (
    <>
        <Container style={open ? null : {flexGrow: 0} }>
            <Header>
                <Heading>
                    <Box 
                        component="span"
                        style={{
                            background: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreen 
                    fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </Container>
    </>
  );
};

export default Editor