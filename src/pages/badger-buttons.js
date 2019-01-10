// @flow

import React from 'react'
import styled from 'styled-components'

import H3 from '../atoms/H3'
import H2 from '../atoms/H2'
import Container from '../components/Container'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import BadgerButton from '../atoms/BadgerButton'
import BadgerBadge from '../atoms/BadgerBadge'

const Main = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 50px;
`

const Section = styled.div`
  /* background-color: rebeccapurple; */
  display: grid;
  grid-template-areas: 'title' ' examples';
`

const SectionTitle = styled.div`
  grid-area: title;
  text-align: center;
`

const SectionExamples = styled.div`
  display: grid;
  grid-area: examples;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  grid-gap: 35px;
`

type Props = {
  location: any,
}

const currencyPrice = [
  ['USD', 0.01 / 3],
  ['CAD', 0.01 / 3],
  ['HKD', 1 / 3],
  ['JPY', 0.11],
  ['GBP', 0.01 / 3],
  ['EUR', 0.01 / 3],
  ['CNY', 0.1 / 3],
]

const PRICE_EXAMPLE = 0.01 / 3
const CURRENCY_EXAMPLE = 'USD'
const SUCCESSFN_EXAMPLE = () => alert('Thank you for the donation')

class BadgerButtonPage extends React.Component<Props> {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <SEO
          title="Badger Button Exampels"
          keywords={[`Badger wallet`, `bitcoin cash`, `BCH`, 'Badger Button']}
        />

        <Container>
          <Main>
            <H2 center>Badger Button</H2>
            <Section>
              <SectionTitle>
                <H3>Currencies</H3>
              </SectionTitle>
              <SectionExamples>
                {currencyPrice.map(item => (
                  <BadgerButton
                    key={item[0]}
                    to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                    price={item[1]}
                    currency={item[0]}
                    text="Donate to EatBCH"
                    successFn={SUCCESSFN_EXAMPLE}
                    failFn={() => console.log('Fail Fn Called')}
                  />
                ))}
              </SectionExamples>
            </Section>
            <Section>
              <SectionTitle>
                <H3>Show Satoshis</H3>
              </SectionTitle>
              <SectionExamples>
                <BadgerButton
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={false}
                  text="Donate to EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
                <BadgerButton
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={true}
                  text="Donate to EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
              </SectionExamples>
            </Section>
            <Section>
              <SectionTitle>
                <H3>Custom Colours</H3>
              </SectionTitle>
              <SectionExamples>
                <BadgerButton
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  text="Donate to EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                  color1="#222930"
                  color2="#E9E9E9"
                />
                <BadgerButton
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={true}
                  text="Donate to EatBCH"
                  color1="#DC3D24"
                  color2="#232B2B"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
                <BadgerButton
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={true}
                  text="Donate to EatBCH"
                  color1="#E9C92D"
                  color2="#FFF"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
                <BadgerButton
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={true}
                  text="Donate to EatBCH"
                  color1="#763A7A"
                  color2="#F6F3EC"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
              </SectionExamples>
            </Section>
            <H2 center>Badger Badge</H2>
            <Section>
              <SectionTitle>
                <H3>Bottom Brand</H3>
              </SectionTitle>
              <SectionExamples>
                <BadgerBadge
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showBrand={true}
                  text="Donate to EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
                <BadgerBadge
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showBrand={false}
                  text="Donate to EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
              </SectionExamples>
            </Section>
            <Section>
              <SectionTitle>
                <H3>Show Satoshis</H3>
              </SectionTitle>
              <SectionExamples>
                <BadgerBadge
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={true}
                  text="Donate to EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
                <BadgerBadge
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={false}
                  text="Donate to EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
              </SectionExamples>
            </Section>
            <Section>
              <SectionTitle>
                <H3>Change Text</H3>
              </SectionTitle>
              <SectionExamples>
                <BadgerBadge
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  tag="Send now"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={true}
                  text="Donate a bit to EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
                <BadgerBadge
                  to="bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g"
                  tag="Donate"
                  price={PRICE_EXAMPLE}
                  currency={CURRENCY_EXAMPLE}
                  showSatoshis={false}
                  text="Support EatBCH"
                  successFn={() => console.log('Success Fn Called')}
                  failFn={() => console.log('Fail Fn Called')}
                />
              </SectionExamples>
            </Section>
          </Main>
        </Container>
      </Layout>
    )
  }
}

export default BadgerButtonPage
