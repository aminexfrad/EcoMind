import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              <Text
                value={`Droits d'auteur © ${new Date().getFullYear()} EcoMind`}
                textStyle="SectionParagraph"
              />
              <Text
                value={`Développé par Mohamed Amine FRAD`}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="Développement Web"
                  href="/service/detail"
                />
                   <NavLink
                  value="Développement Systèmes Embarqués & IOT"
                  href="/service/detail"
                />
                <NavLink
                  value="Développement d'Applications"
                  href="/service/detail"
                />
               
                <NavLink value="Conception d'Interface UI & UX " href="/service/detail" />
                <NavLink value="Consultation" href="/service/detail" />
                <NavLink value="Maintenance" href="/service/detail" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="ENTREPRISE" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="À propos" href="/about" />
                <NavLink value="Contact" href="/contact" />
                <NavLink value="Demander un devis" href="/quote" />
                <NavLink value="Politique de confidentialité" href="/privacy-policy" />
                <NavLink value="Conditions d'utilisation" href="/term-of-service" />
                <NavLink value="Blogs" href="/blog" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
