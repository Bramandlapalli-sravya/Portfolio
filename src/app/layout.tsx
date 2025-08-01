import HomeLayout from "./components/HomeLayout";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <HomeLayout name={'Bramandlapalli Sravya'} email={'bsravya690@gmail.com'}>
      {children}
    </HomeLayout>
  );
}
