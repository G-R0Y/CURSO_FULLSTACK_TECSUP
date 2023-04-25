import React from 'react'
import { Button, Modal, Box } from "@mui/material"

function ModalPokemon() {







    return (
        <div>
            <Button variant='contained'>ver detalles</Button>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <p id="parent-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                </Box>
            </Modal>

        </div>
    )
}

export default ModalPokemon