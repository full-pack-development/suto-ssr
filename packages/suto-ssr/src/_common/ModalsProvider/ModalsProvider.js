import React from 'react'

import { ModalContext } from './modalContext'
import { useCreateModal } from './useCreateModal'

const ModalsProvider = ({
  children,
  modalInitialValues = {},
}) => {
  const modalHash = {}
  Object.keys(modalInitialValues).forEach((modalName) => {
    modalHash[modalName] = useCreateModal({ // eslint-disable-line react-hooks/rules-of-hooks
      initialState: modalInitialValues[modalName],
    })
  })
  return (
    <ModalContext.Provider value={modalHash}>
      {children}
    </ModalContext.Provider>
  )
}

export default React.memo(ModalsProvider)
