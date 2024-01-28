import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import { useState } from "react";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeCommentCount() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar
          hasBorder={false}
          src="https://github.com/carloshenriqueg.png"
          alt=""
        />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Carlos Henrique</strong>
                <time
                  title="17 de janeiro  às 19:38"
                  dateTime="2024-01-17 19:38:30"
                >
                  Cerca de há 1h atrás
                </time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar">
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeCommentCount}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
