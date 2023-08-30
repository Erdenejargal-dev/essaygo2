import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';
import * as Global from '../global/global.json';

const LOREM = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Global.product}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing</Notice>
      <Header id="top" title={Global.product}/>

      <main>
        <Hero
          title="Unlocking Insights: Unveiling the Art of Essay Reviews"
          subtitle="Revealing Excellence: Our Distinct Approach to Essay Reviews and Problem-Solving Prowess"
          illustration=""
          subscribePlaceholder="И-мэйл хаягаа бичнэ үү"
          subscribeAction="Go?"
        />

        <Benefits
          background="alternate"
          title="Bridge to Expertise: Where Essays Transform Through Peer and Pro Reviews"
          subtitle="Эсээгээ явуулах гэхээр нэг л эргэлзээд гацчихсан эсвэл ямар нэг гадны хүний өнцөг хэрэгтэй байвал Essay Go ын Counsellor уудын тусламжтайгаар эсээгээ дараагийн шатанд гаргах боломжтой."
          benefits={[
            {illustration:'', title:'Эсээ үнэн байх хэрэгтэй', text:'Brief explanation of why and how this benefit will help your customers'},
            {illustration:'', title:'Эсээ асуултандаа хариулсан байх ёстой', text:'Brief explanation of why and how this benefit will help your customers'},
            {illustration:'', title:'Эсээ таныг тодорхойлох шаардлагатай', text:'Brief explanation of why and how this benefit will help your customers'},
          ]}
        />

        <Break
          title="Risk Reduction: Essay Go on SALE 29'900₮"
          subtitle="This is an in-betwen CTA for visitors that already got convinced."
          illustration=""
          action="GO!"
          onActionClick={() => window.scrollTo({top:99999, behavior:'smooth'})}
        />

        <Highlights
          title="The process"
          subtitle="Essay Go Guide"
          highlights={[
            {illustration:'', title:'Форм бөглөж Эсээгээ явуулах', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
            {illustration:'', title:'Эсээ Counsellor руу очно', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
            {illustration:'', title:'Review хийгдсэн эсээ и-мэйл хаягаар очно', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
          ]}
        />

        

        <Epilogue
          title="Ask if your Application process lack in Essay"
          subtitle="Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take"
          illustration=""
          subscribePlaceholder="И-мэйл хаягаа бичнэ үү"
          subscribeAction="Go?"
        />
      </main>

      <Footer
        title={Global.product}
      />
    </div>
  )
}
