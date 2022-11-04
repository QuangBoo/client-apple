import config from 'src/config';

// Layouts
import { HeaderProduct, LayoutManager } from 'src/layouts';

// Pages
import Home from 'src/pages/Home';
import Iphone from 'src/pages/ItemsProduct/Iphone';
import Ipad from 'src/pages/ItemsProduct/Ipad';
import Mac from 'src/pages/ItemsProduct/Mac';

// Single Page
import SingleProduct from 'src/pages/SingleProduct';


//Manager
import { HomeManager } from 'src/pages/Manager/pages/Home';
import Single from 'src/pages/Manager/pages/Single';
import Write from 'src/pages/Manager/pages/Write';
import { Register, Login } from 'src/pages/Manager/pages/Register';
// import Profile from 'src/pages/Profile';
// import Upload from 'src/pages/Upload';
// import Search from 'src/pages/Search';
// import Live from 'src/pages/Live';

// Data

// Public routes
const publicRoutes = [
    // Page client
    { path: config.routes.home, component: Home },
    { path: config.routes.iphone, component: Iphone, layout: HeaderProduct },
    { path: config.routes.ipad, component: Ipad, layout: HeaderProduct },
    { path: config.routes.mac, component: Mac, layout: HeaderProduct },

    // Single Page
    { path: config.routes.profile, component: SingleProduct, layout: HeaderProduct},

    //Manager
    { path: config.routes.manager, component: HomeManager, layout: LayoutManager },
    { path: config.routes.single, component: Single, layout: LayoutManager },
    { path: config.routes.write, component: Write, layout: LayoutManager },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.login, component: Login, layout: null },


];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
