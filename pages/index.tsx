import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
//import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <PageTemplate title="EcoMind">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Nous concevons. Nous développons. Nous livrons."
              description="Nous nous engageons à ne pas faire attendre nos clients. Nous livrerons le travail aussi rapidement que possible, parfois même le jour même. Cela dit, nous ne réduisons en aucun cas la qualité de notre travail."
              
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Envoyer un devis" href="/quote" />
            <ButtonLink
              value="En savoir plus"
              color="white"
              style="light"
              href="/about"
            />
          </div>
          <div className="w-full h-[400px] relative" data-aos="fade-up">
            <Image
              src="/images/EcoMind.jpg" // Path to your image in the public directory
              layout="fill"
              objectFit="cover"
              alt="Banner Photo"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Concevoir"
              description="L'interface du projet sera conçue en premier, notre outil préféré est Figma."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Développer"
              description="Transformer la conception et écrire la logique métier ici. Choisissez la technologie que vous souhaitez."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Livrer"
              description="Une fois le travail terminé, nous vous enverrons le projet et tous ses éléments."
              icon={<FiBox />}
            />
          </div>
        </section>
    
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Tout est bien planifié, bien conçu et développé avec tout le cœur"
              paragraph="Une planification minutieuse nous rend confiants, développé avec les meilleures pratiques pour que le projet puisse être maintenu. Nous testons toujours les projets avant qu'ils ne soient livrés."
              badge="Comment Nous Travaillons"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="Nous sommes une équipe de designers, développeurs, gestionnaires financiers et analystes"
                paragraph="Notre équipe est composée de nombreuses personnes créatives. Nous nous engageons à maintenir un travail de qualité ainsi qu'une rapidité d'exécution. Ces personnes créatives travaillent ensemble pour obtenir des résultats maximaux."
                badge="NOTRE ÉQUIPE"
              />
              <ButtonLink
                value="Voir Notre Équipe"
                href="/teams"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.png'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Nous avons réalisé de nombreux projets incroyables que vous ne croirez pas"
              badge="PROJETS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="The Desktop App Landing Page"
                description="A landing page for desktop app"
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="The Mobile App Landing Page"
                description="A landing page for mobile app"
                bottomSquareSize="big"
              />
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="Que disent nos clients ? Nous ne les décevons jamais."
              badge="TÉMOIGNAGES"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
