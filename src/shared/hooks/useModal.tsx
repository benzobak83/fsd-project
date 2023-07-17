import { useCallback, useState } from 'react'

export type ModalCloseFn = () => void

/**необходимо тригеру прописать дататтрибут data-modal-type=*NAME_MODAL* */
export function useModal<T extends Record<string, boolean>>(initialModals: T) {
    const [modals, setModals] = useState<T>(initialModals)

  type ModalKey = keyof typeof modals

  const closeModal: ModalCloseFn = useCallback(() => {
      Object.keys(modals).map((modal) => {
          if (modals[modal] === true) {
              setModals((prev) => ({ ...prev, [modal]: false }))
          }
      })
  }, [modals])

  const openModal = useCallback((e: React.MouseEvent) => {
      const target = e.currentTarget as HTMLButtonElement
      const type = target.dataset.modalType as ModalKey

      setModals((prev) => ({ ...prev, [type]: true }))
  }, [])

  const registerTrigger = useCallback(
      (type: ModalKey) => {
          return { 'data-modal-type': type, onClick: openModal }
      },
      [openModal]
  )

  const registerModal = useCallback(
      (modalName: ModalKey) => {
          return { onClose: closeModal, open: modals[modalName] }
      },
      [modals, closeModal]
  )

  return {
      openModal,
      closeModal,
      modals,
      setModals,
      registerTrigger,
      registerModal
  }
}
