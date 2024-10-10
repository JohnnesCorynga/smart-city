import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function Layout(props: any) {
    return (
       

            <div className="w-full flex flex-col h-screen ">
                <Navbar />
                <div className="flex flex-1 overflow-auto">
                    {props.children}
                </div>
                <Footer />
            </div>
    )
}