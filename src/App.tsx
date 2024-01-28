import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { SideBar } from "./components/SideBar";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Falaa dev 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-19 19:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Falaa dev 👋" },
      {
        type: "paragraph",
        content:
          "Comecei as gravações do ignite, logo estará disponivel na plataforma. 🚀🚀",
      },
    ],
    publishedAt: new Date("2024-01-20 20:00"),
  },
];

export function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <SideBar />
          <main>
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </main>
        </div>
      </div>
    </>
  );
}
