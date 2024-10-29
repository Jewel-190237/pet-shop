import Navbar from '@/components/layout/Navbar';
import '../../styles/global.scss'
import Footer from '@/components/layout/Footer';
export const metadata = {
  title: "Pet Shop",
  description: "Details information of Pet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
