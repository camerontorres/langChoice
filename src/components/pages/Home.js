import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import TextSection from '../TextSection';
import vector from '../images/learning2.png'
import globe from '../images/globe.png'
import { isVisible } from '@testing-library/user-event/dist/utils';


function Home () {
    const text1= 'LangChoice is the ultimate language learning app designed to help you master a new language in record time. With LangChoice, you can embark on an immersive language journey that combines cutting-edge technology and proven learning techniques. Say goodbye to slow progress and hello to rapid language acquisition. Whether you\'re a beginner or an advanced learner, LangChoice has tailored courses and interactive lessons that adapt to your skill level and learning pace. Get ready to unlock fluency and confidently communicate in your chosen language with LangChoice, the fastest way to learn a new language.'
    const text2= `Each course within LangChoice is thoughtfully designed to cater to different proficiency levels and learning styles. Whether you\'re a complete beginner taking your first steps or an advanced learner seeking to refine your skills, our adaptive learning platform will guide you on a personalized journey tailored to your unique needs and goals.\n
    Through interactive lessons, engaging exercises, and real-life conversational practice, you\'ll build a solid foundation and develop the confidence to communicate naturally in your chosen language. Our focus on practical skills ensures that you\'ll be equipped to navigate everyday conversations, travel with ease, and connect with people from diverse cultures.\n`
    const text3=`Our courses are designed to deliver measurable outcomes. We track your progress every step of the way, providing clear milestones and achievements to celebrate your accomplishments. You'll be amazed at how quickly you gain fluency and confidence in your chosen language.\n
    Choose LangChoice, the language learning app that guarantees results. Join thousands of satisfied learners who have unlocked their language potential with our comprehensive courses, intelligent platform, and unwavering commitment to your success. Start your language learning journey today and experience the LangChoice difference.`
    
    const head1= 'Welcome a New Way to Learn'
    const head2 ='Explore variety'
    const head3 = 'Results Guaranteed'

    
    return (
        <>
            <HeroSection/>
            <TextSection id='introText ' text={text1} img={globe} headText={head1}/>
            
            <TextSection   text = {text2} headText={head2} img={vector}/>
            <TextSection text = {text3} headText={head3} />
            <Footer/>
            
        </>


//<a href="https://www.freepik.com/free-vector/education-learning-concept-love-reading-people-reading-students-studying-preparing-examination-library-book-lovers-readers-modern-literature-flat-cartoon-vector-illustration_25273862.htm#query=studying&position=9&from_view=search&track=sph">Image by jcomp</a> on Freepik
//<a href="https://www.freepik.com/free-vector/education-learning-concept-love-reading-people-reading-students-studying-preparing-examination-library-book-lovers-readers-modern-literature-flat-cartoon-vector-illustration_25273862.htm#query=studying&position=9&from_view=search&track=sph">Image by jcomp</a> on Freepik
//<a href="https://www.vecteezy.com/free-vector/world">World Vectors by Vecteezy</a>
    );
}

export default Home;