import { createContext, useState } from "react";

interface PostContextProps {
  postId: number;
  setPostId: (id: number) => void;
}
interface Props {
  children: React.ReactNode;
}
export const PostContext = createContext<PostContextProps>({
  postId: 0,
  setPostId: () => {},
});

export const PostProvider: React.FC<Props> = ({ children }) => {
  const [postId, setPostId] = useState(0);

  return (
    <PostContext.Provider value={{ postId, setPostId }}>
      {children}
    </PostContext.Provider>
  );
};
