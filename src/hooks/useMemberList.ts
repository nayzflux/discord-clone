import { create } from 'zustand'

interface ModalStore {
    open: boolean;
    setOpen: (open: boolean) => void
}

const useMemberList = create<ModalStore>((set) => ({
    open: true,
    setOpen: (open) => set(() => ({open}))
}))

export default useMemberList;