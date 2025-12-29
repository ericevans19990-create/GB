
import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import Legal from '../pages/legal/page';
import BlogArticlePage from '../pages/blog/article/page';

const Home = lazy(() => import('../pages/home/page'));
const About = lazy(() => import('../pages/about/page'));
const Services = lazy(() => import('../pages/services/page'));
const WhyChoose = lazy(() => import('../pages/why-choose/page'));
const Blog = lazy(() => import('../pages/blog/page'));
const FAQ = lazy(() => import('../pages/faq/page'));
const Privacy = lazy(() => import('../pages/privacy/page'));
const Testimonials = lazy(() => import('../pages/testimonials/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/why-choose',
    element: <WhyChoose />,
  },
  {
    path: '/testimonials',
    element: <Testimonials />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:slug',
    element: <BlogArticlePage />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/legal',
    element: <Legal />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
