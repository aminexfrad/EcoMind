import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiArrowUp,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLayout,
  FiMonitor,
  FiRefreshCcw,
  FiSmartphone,
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
const Services = () => {
  return (
    <>
      <PageTemplate title='Service - EcoMind'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="SERVICES"
              title="Nous sommes ici pour aider à résoudre les problèmes de votre entreprise."
            />
          </div>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='UI Design'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="UI DESIGN"
                title="Ne laissez pas votre idée être reprise par d'autres, concevez un prototype pour la concrétiser."
                paragraph="Déléguez vos idées le plus rapidement possible, créez de magnifiques designs et des prototypes dynamiques."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Beau design"
                  description="Créez un design moderne pour votre idée."
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="Prototype"
                  description="Créez des prototypes dynamiques pour vos designs."
                  icon={<FiLayout />}
                />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="DÉVELOPPEMENT"
                title="Créez des solutions aux problèmes récurrents, concevez des applications et accédez-y de n'importe où !"
                paragraph="Dites-nous simplement quel est votre problème récurrent ou la méthode primitive utilisée aujourd'hui, et nous créerons une solution numérique."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiSmartphone />}
                  title="Développement d'applications mobiles"
                />
                <CardListIcon
                  icon={<FiMonitor />}
                  title="Développement d'applications de bureau"
                />
                <CardListIcon icon={<FiGlobe />} title="Développement web" />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='IDE for development'
              />
            </figure>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='server maintenance'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="MAINTENANCE"
                title="Pensez à votre serveur comme à votre propre enfant, prenez-en soin chaque jour."
                paragraph="Nous sauvegardons vos serveurs chaque jour, les nettoyons chaque semaine et les mettons à jour dès qu'une nouvelle version est disponible."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem icon={<FiDownload />} value='Sauvegarder chaque jour' />
                <IconListItem icon={<FiArrowUp />} value='Mettre à niveau' />
                <IconListItem icon={<FiRefreshCcw />} value='Nettoyage chaque semaine' />
                <IconListItem icon={<FiCheckCircle />} value='Correction erreur' />
              </aside>
              <TextArrowLink label="Détail du service" href="/service/detail" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Services
