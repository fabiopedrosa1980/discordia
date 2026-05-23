import { Injectable, signal, computed } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private _posts = signal<Post[]>([
    {
      id: 1,
      name: 'Mariana Costa',
      handle: '@mcos',
      initials: 'MC',
      avatarGradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
      body: 'Acabei de descobrir que dá pra usar #CSS grid aninhado pra layouts super complexos sem precisar de nenhum JS. A web evoluiu muito 🔥',
      time: '2min',
      likes: 14,
      reposts: 3,
      liked: false,
      reposted: false,
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Rafael Torres',
      handle: '@rtorres',
      initials: 'RT',
      avatarGradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
      body: 'Hot take: dark mode não é sobre estética, é sobre respeito com quem passa 12h na frente do monitor. Tema claro em 2024 é crime.',
      time: '9min',
      likes: 87,
      reposts: 21,
      liked: false,
      reposted: false,
      createdAt: new Date(),
    },
    {
      id: 3,
      name: 'Fernanda Lima',
      handle: '@flima_dev',
      initials: 'FL',
      avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
      body: 'Lembrete: você não precisa reinventar a roda. Reutilize, refatore, descanse. Produtividade sustentável > sprint de 16h.',
      time: '27min',
      likes: 43,
      reposts: 9,
      liked: false,
      reposted: false,
      createdAt: new Date(),
    },
    {
      id: 4,
      name: 'Lucas Menezes',
      handle: '@lmenezes',
      initials: 'LM',
      avatarGradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
      body: '#Angular 19 com signals é uma mudança de paradigma real. Menos boilerplate, reatividade mais previsível. Difícil voltar para o modelo antigo depois que você se acostuma.',
      time: '1h',
      likes: 62,
      reposts: 15,
      liked: false,
      reposted: false,
      createdAt: new Date(),
    },
  ]);

  readonly posts = computed(() => this._posts());
  private nextId = 10;

  addPost(body: string): void {
    const newPost: Post = {
      id: this.nextId++,
      name: 'Você',
      handle: '@voce',
      initials: 'YO',
      avatarGradient: 'linear-gradient(135deg, #7c3aed, #2563eb)',
      body,
      time: 'agora',
      likes: 0,
      reposts: 0,
      liked: false,
      reposted: false,
      createdAt: new Date(),
    };
    this._posts.update(posts => [newPost, ...posts]);
  }

  toggleLike(id: number): void {
    this._posts.update(posts =>
      posts.map(p =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  }

  toggleRepost(id: number): void {
    this._posts.update(posts =>
      posts.map(p =>
        p.id === id
          ? { ...p, reposted: !p.reposted, reposts: p.reposted ? p.reposts - 1 : p.reposts + 1 }
          : p
      )
    );
  }
}
