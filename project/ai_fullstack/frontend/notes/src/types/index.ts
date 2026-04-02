export interface User {
    id: number;
    name: string;
    avatar?: string;
}
export interface Post {
    id: number;
    title: string;
    brief: string; // 简介
    publishedAt: string;
    totalLikes?: number;
    totalComments?: number;
    user: User;
    tags: string[];
    thumbnail: string; // 缩略图
    pois?: string[];
}