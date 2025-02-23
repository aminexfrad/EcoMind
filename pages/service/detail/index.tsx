import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard, {
  FeatureCardProps,
} from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FiClock,
  FiCode,
  FiFigma,
  FiLayout,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'
import randomString from 'utils/randomString'

const ServiceDetail = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `Puis-je d'abord consulter ?`,
      description: `Bien sûr, vous pouvez d'abord nous consulter. Nous serons ravis de vous aider à résoudre vos problèmes et de vous fournir nos meilleures solutions. Vous pouvez nous contacter via la page de contact.`,
    },
    {
      title: `Que faire si le projet s'arrête à mi-chemin ?`,
      description: `Nous promettons de toujours terminer le projet à temps. Si un problème survient (en raison de notre erreur), tous les paiements seront remboursés et le projet sera annulé.`,
    },
    {
      title: `Cela inclut-il les serveurs et les domaines ?`,
      description: `Vous n'avez rien d'autre à penser, tout est prêt de notre côté. Il vous suffit de vérifier votre progression et de vous assurer que les fonctionnalités que vous souhaitez sont les bonnes.`,
    },
    {
      title: `Recevrai-je le code source ?`,
      description: `Lorsque le projet sera terminé à 100 %, toutes les ressources, telles que les fichiers de conception, les diagrammes d'analyse, le code source, etc., vous seront fournies. Vous n'avez pas à vous en soucier.`,
    },
    {
      title: `Y a-t-il une garantie ?`,
      description: `Une garantie d'un an pour nos erreurs ou fautes. Si vous souhaitez ajouter une fonctionnalité qui n'est pas incluse dans la garantie, des frais supplémentaires seront appliqués par fonctionnalité, et le prix dépendra de la difficulté.`,
    },
  ]
  const features: FeatureCardProps[] = [
    {
      title: 'Code de qualité',
      description: `Le code écrit selon les bonnes pratiques est facilement maintenable.`,
      icon: <FiCode />,
    },
    {
      title: 'Design Responsive (Adaptatif)',
      description: `Accédez au site web sur n'importe quel appareil, ne limitez pas vos visiteurs.`,
      icon: <FiLayout />,
    },
    {
      title: 'Ultra-rapide',
      description:
        'Une application à grande vitesse ne décevra pas les clients potentiels.',
      icon: <FiZap />,
    },
  ]
  return (
    <PageTemplate title="Service Detail - EcoMind">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="DÉVELOPPEMENT"
            title="Résolvez les problèmes récurrents de votre entreprise en concevant des applications, en développant des applications, des systèmes IoT et des plans d'affaires."
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/development-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="IDE that connect to Desktop, Mobile and Web mean multiple platform"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`Dites-nous simplement quel est votre problème récurrent ou la méthode primitive utilisée aujourd'hui, et nous créerons une solution numérique. <br> <br> Nous pouvons vous créer un site web, une application mobile et une application de bureau. Tous types d'applications possèdent un système de sécurité robuste, sont faciles à maintenir et offrent une grande rapidité. `}
                textStyle={'SectionParagraph'}
              />
            </div>
            <ul className="list-square text-white text-base font-medium pl-5 grid gap-2.5">
              <li>Évitez les bugs potentiels grâce aux tests unitaires.</li>
              <li>Supprimer le code inutilisé accélérera l'application.</li>
              <li>Le design moderne plaît à l'utilisateur.</li>
              <li>Une bonne expérience utilisateur (UX) ne décevra pas les utilisateurs.</li>
            </ul>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FONCTIONNALITÉS"
            title="Voici ce que vous obtiendrez en achetant ce service."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            return (
              <div key={randomString(64)} data-aos="fade-up">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isNaked={true}
                />
              </div>
            )
          })}
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Questions fréquemment posées, peut-être les mêmes que les vôtres."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium">
          {`Vous n'avez pas trouvé de réponse ? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline">
            <Link href={'/quote'}>N'hésitez pas à demander !</Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default ServiceDetail
