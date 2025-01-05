import { Container } from "@/shared/ui/container";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <Container className="flex-grow">{children}</Container>
            <Footer />
        </div>
    );
}
