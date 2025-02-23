import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
//import LogoList from 'components/organisms/LogoList'
//import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="À propos">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="À propos"
            title="Nous sommes des personnes créatives, intelligentes et travailleuses"
            description={`Plusieurs personnes créatives réunies au même endroit - c'est EcoMind. Nous collaborons pour produire les meilleurs résultats, appréciés par les clients et confortables pour les utilisateurs. Ici, nous maintenons l'esprit d'équipe malgré nos différents parcours. Tous les membres de notre équipe sont des experts dans leurs domaines respectifs.`}
          />
        </aside>
      </section>
      <LineDivider />
      
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="NOTRE ÉQUIPE"
            title="encontrez l'équipe ! Tous les esprits créatifs sont ici"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/Amine.jpg"
              job="Chef d'équipe"
              name="Mohamed Amine FRAD"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-2.webp"
              job="Chief Technology Officer"
              name="Devon Lane"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-3.webp"
              job="UI Designer"
              name="Darrell Steward"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-4.webp"
              job="Software Engineer"
              name="Marvin McKinney"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-5.webp"
              job="System Analyst"
              name="Floyd Miles"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-6.webp"
              job="Project Manager"
              name="Annette Black"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
