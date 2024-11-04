import React, { createContext, useState } from 'react'
import DialogContainer from './DialogContainer.jsx'

const DialogContext = createContext(null)

export default function DialogProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [dialogConfig, setDialogConfig] = useState({})

  const showDialog = (config) => {
    setOpen(true)
    setDialogConfig(config)
  }

  return <DialogContext.Provider value={[showDialog]}>
    {children}
    <DialogContainer open={open} onClose={() => setOpen(false)} {...dialogConfig} />
  </DialogContext.Provider>
}


export const useDialog = () => {
  const context = React.useContext(DialogContext)

  if (context === null) {
    throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}
