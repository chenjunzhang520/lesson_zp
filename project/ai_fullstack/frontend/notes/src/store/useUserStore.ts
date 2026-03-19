import {
    create // 创建store 实例
} from 'zustand';
import type { User } from '@/types'

interface UserStore {
    islogin:boolean;
    user: User | null; // 联合类型
    
}

export const useUserStore = create<UserStore>((set) => ({
    islogin: false,
    user: null,
}))