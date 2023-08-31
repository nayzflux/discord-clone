import { create } from 'zustand'

interface ModalStore {
    open: boolean;
    setOpen: (open: boolean) => void
}

const useCreateGuildModal = create<ModalStore>((set) => ({
    open: false,
    setOpen: (open) => set(() => ({open}))
}))

export default useCreateGuildModal;