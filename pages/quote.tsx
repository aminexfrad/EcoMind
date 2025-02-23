import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import SelectGroup from 'components/molecules/FormGroup/SelectGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const Quote = () => {
  return (
    <>
      <PageTemplate title='Envoyer un devis - EcoMind'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title="Parlez-nous de votre problème et comment nous pouvons vous aider."
                description="Nous sommes heureux de vous aider. Dites-nous quel est le problème avec votre entreprise, et nous sommes prêts à répondre à ces problèmes. Il nous faut généralement quelques minutes pour répondre."
                badge="ENVOYER UN DEVIS"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Contactez-nous"
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Nom" />
                <InputGroup label="E-mail" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Société" />
                <SelectGroup
                  label="Taille de l'entreprise"
                  options={[
                    { label: 'Petite', value: 'small' },
                    { label: 'Moyenne', value: 'medium' },
                    { label: 'Grande', value: 'large' },
                  ]}
                />
              </div>
              <TextAreaGroup label="Parlez-nous de votre problème" />
              <Button value="ENVOYER UN DEVIS" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote
