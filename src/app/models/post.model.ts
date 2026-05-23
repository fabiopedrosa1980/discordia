export interface Post {
  id: number;
  name: string;
  handle: string;
  initials: string;
  avatarGradient: string;
  body: string;
  time: string;
  likes: number;
  reposts: number;
  liked: boolean;
  reposted: boolean;
  createdAt: Date;
}
