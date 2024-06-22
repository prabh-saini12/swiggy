import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);



