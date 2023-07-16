import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Info from './layout/Info/Info';
import Post from './layout/Post/Post';
import Testimonials from './layout/Testimonials/Testimonials';
import Topics from './layout/Topics/Topics';

function App() {
    return (
        <div className=''>
            <Header />
            <Topics />
            <Info />
            <Post />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
