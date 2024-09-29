import Nav from "./ui/navbar";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}