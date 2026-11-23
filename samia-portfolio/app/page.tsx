import SiteNav from '@/components/SiteNav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Leadership from '@/components/Leadership'
import More from '@/components/More'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { profile, sections } from '@/data/portfolio'

export default function Home() {
  return (
    <>
      <SiteNav items={sections} name={profile.name} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <More />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
