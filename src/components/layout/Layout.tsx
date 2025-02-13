import Header from "../shared/navbar/Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header />
            {children}
        </section>
    )
}
export default Layout