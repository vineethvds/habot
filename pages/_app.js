import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import NavbarHeader from '../components/Navbars/NavbarHeader';
=======
import Layout from '../components/Layouts/layout';
import { SSRProvider } from 'react-bootstrap';
>>>>>>> c03f2c52fbc7df37dd905bfcf88225b9508a47dc

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>

    </>
  );
}

export default MyApp;


