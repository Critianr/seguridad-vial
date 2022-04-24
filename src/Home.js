import {BannerNews} from './components/BannerNews'
import {ElementsNews} from './components/News/ElementsNews'
function Home(){
    return(
    <div className="App">
    <BannerNews className="banner-first" />
    <ElementsNews />


</div>
    );
}

export default Home;
