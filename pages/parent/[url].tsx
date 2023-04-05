import { useContext } from "react";
import { PostContext } from "@/context/PostContext";
import { Layout } from "@/layout/Layout";
import Link from "next/link";

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
interface Amenity {
  seo_friendly: string;
  id: number;
  name: string;
  property_category: number;
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    name: string;
    seo_friendly: string;
    property_category: number;
    amenity_parent: number;
  }[];
}

interface Props {
  posts: Post[];
  amenities: Amenity[];
}

const Parent = ({ posts, amenities }: Props) => {
  const { postId, setPostId } = useContext(PostContext);
  console.log(postId);
  console.log("postid", postId);
  console.log("string", posts[0].id);
  return (
    <>
      <Layout title={posts[0].name} description={posts[0].name}>
        <ul>
          {amenities
            .filter((amenity) => amenity.property_category === postId)
            .map((amenity) => (
              <li key={amenity.id}>{amenity.name}</li>
            ))}
        </ul>
      </Layout>
    </>
  );
};

export default Parent;

export async function getStaticPaths() {
  const urlPosts = await fetch(
    `${process.env.API}/cat-amenities-parents/?format=json`
  );
  const { data } = await urlPosts.json();

  const paths = data.map((post: any) => ({
    params: {
      url: post.seo_friendly,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const urls = [
    `${process.env.API}/cat-amenities-parents/?format=json`,
    `${process.env.API}/cat-amenities-childs/?format=json`,
  ];
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const [resPosts, resAmenities] = responses;
  const { data: posts } = await resPosts.json();
  const { results: amenities } = await resAmenities.json();
  return {
    props: {
      posts,
      amenities,
    },
  };
}
