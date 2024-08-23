import { useParams } from 'react-router-dom';
import Blog1 from '../pages/home-blog-page/blog_1';
import Blog2 from '../pages/home-blog-page/blog_2';
import Blog3 from '../pages/home-blog-page/blog_3';
import Blog4 from '../pages/home-blog-page/blog_4';


const HomeBlogController = () => {
    const { id } = useParams();

    switch (id) {
        case '1':
            return <Blog1 />;
        case '2':
            return <Blog2 />;
        case '3':
            return <Blog3 />;
        case '4':
            return <Blog4 />;
        default:
            return <h1>404 Not Found</h1>;
    }
}

export default HomeBlogController;
