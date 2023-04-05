import { useContext } from "react";
import { Layout } from "@/layout/Layout";
import { PostPreview } from "@/components/Parents";
import { PostContext } from "@/context/PostContext";
import Link from "next/link";
import Grid from '@mui/material/Grid';
interface Post {
  id: number;
  property_category_id: number;
  name: string;
  seo_friendly: string;
  active_record: boolean;
  created_at: string;
  updated_at: string;
  created_by: string;
}

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  const { postId, setPostId } = useContext(PostContext);

  const handleClick = (id: number) => {
    setPostId(id);
  };
  return (
    <Layout title={"Secciones"} description={""}>
      <main className="contenedor">
        <h1 className="text-6xl text-center font-extrabold py-10">Secciones</h1>
        <Grid container spacing={3}>
          {posts?.map((post: Post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Link
                href={`parent/${post.seo_friendly}`}
                onClick={() => handleClick(post.id)}
              >
                <PostPreview
                  name={post.name}
                  id={0}
                  property_category_id={post.property_category_id}
                  seo_friendly={post.seo_friendly}
                  active_record={post.active_record}
                  created_at={post.created_at}
                  updated_at={post.updated_at}
                  created_by={post.created_by}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlPosts = `${process.env.API}/cat-amenities-parents/?format=json`;

  const [resPosts] = await Promise.all([fetch(urlPosts)]);
  const { data: posts } = await resPosts.json();

  return {
    props: {
      posts,
    },
  };
}
