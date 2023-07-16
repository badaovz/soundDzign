import Underline from '../../components/Underline';
import { posts } from '../../assets/data';
import PostCard from '../../components/PostCard';

const Post = () => {
    return (
        <section className='bg-pinkLight py-[80px]' id='blog'>
            <div className='wrapper relative'>
                <h2 className='text-[40px]'>Latest Posts</h2>
                <Underline className='bg-yellowColor w-[80px]' />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[41px] mt-[40px]'>
                    {posts.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
                <button className='text-[13px] px-8 py-1 rounded-[10px] text-black mt-[30px] top-2 right-2 bg-white flex items-center justify-center ml-auto font-fontSecond'>
                    All Posts
                </button>
            </div>
        </section>
    );
};

export default Post;
