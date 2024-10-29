import '../styles/global.scss'
export const metadata = {
  title: "Pet Shop",
  description: "Details information of Pet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
