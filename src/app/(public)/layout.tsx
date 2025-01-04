import { Footer } from "@/widgets/footer";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Footer /> {children}
        </div>
    );
}
