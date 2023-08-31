import { create } from 'zustand'

interface ModalStore {
    open: boolean;
    setOpen: (open: boolean) => void
}

const useCreateChannelModal = create<ModalStore>((set) => ({
    open: false,
    setOpen: (open) => set(() => ({open}))
}))

export default useCreateChannelModal;