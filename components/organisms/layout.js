import Footer from "../molecules/footer"
import Hero from "../molecules/hero"
import HeaderSection from "../molecules/header"

export default function Layout(props) {
    return (
        <main>
            <section class="w-full px-6 mb-12 antialiased bg-white select-none">
                <div class="mx-auto max-w-7xl">
                    <HeaderSection></HeaderSection>
                    {/*  Hero */}
                    { props.showHero && <Hero></Hero> }
                    {/* /Hero */}
                </div>
            </section>
                {props.children}
            <Footer></Footer>
        </main>
    )   
}