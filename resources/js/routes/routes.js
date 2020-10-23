import Home from '../pages/Home';
import Store from '../pages/Store';
import Community from '../pages/Community';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import Config from '../pages/Config';

export default {
    mode: 'history',
    linkActiveClass: 'border-r-2 border-blue-400 bg-gray-900',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/store',
            component: Store
        },
        {
            path: '/community',
            component: Community
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/chat',
            component: Chat
        },
        {
            path: '/config',
            component: Config
        }

    ]
}