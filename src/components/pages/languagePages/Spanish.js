import React  from 'react';
import '../../../App.css'


//import {  useParams } from 'react-router-dom'
import spokenLanguages from '../../LangDB';
import Footer from '../../Footer';
import SpainHeader from '../../images/SpainCard.jpg'
import greatWall from '../../images/SpainCard.jpg'
import SignUpBanner from '../../SignupBanner';




const Spanish = () =>{
    
    const lang = spokenLanguages.find((item) => item.id === '2');
    //const hideElement = lang.param ===null ? 'hidden' : ''

    const introText =`Spanish, also known as Español, is a fascinating and widely spoken language with a rich history. As the official language of Spain and many countries in Latin America, it is spoken by hundreds of millions of people worldwide. Spanish is renowned for its melodic tones and rhythmic cadence, which adds to its beauty and expressiveness.

    Learning Spanish opens up a world of opportunities to connect with a diverse range of people and cultures. With Spanish, you can communicate with native speakers across continents, delve into the vibrant literature of authors like Gabriel García Márquez and Isabel Allende, and explore the rich traditions and customs of Spanish-speaking countries.
    
    Moreover, Spanish is an accessible language for learners. Its phonetic pronunciation and straightforward grammar make it relatively easy to pick up, especially for those already familiar with other Romance languages like French or Italian. Whether you're interested in traveling, career prospects, or simply expanding your cultural horizons, learning Spanish is a valuable and rewarding endeavor that offers both practical and personal benefits.`

    const text1 = ` One of the key features that sets us apart is our intelligent learning algorithm. It adapts to your individual progress, tailoring lessons to your specific needs and skill level. Whether you're a complete beginner or an advanced learner, our app will guide you on a personalized learning journey, ensuring maximum efficiency and effectiveness.\n 
                            Our curriculum is carefully designed by language experts and native Spanish speakers. It covers all aspects of the language, including vocabulary, grammar, pronunciation, reading, writing, and listening comprehension. With our comprehensive lessons, you'll gain a solid foundation and gradually build your proficiency step by step.\n
                    To make learning Spanish even more enjoyable, we offer gamified elements and rewards to keep you motivated and engaged. Unlock achievements, compete with friends, and track your progress as you conquer each level. Our app is available across devices, allowing you to learn anytime, anywhere, at your own pace.`
    const results =`With our language learning app, you can achieve guaranteed results in just 6 months of dedicated use. Our proven methodology, personalized lessons, and interactive exercises ensure efficient and effective language acquisition. By following our carefully designed curriculum, you'll gradually build a strong foundation in vocabulary, grammar, pronunciation, reading, writing, and listening comprehension. Our intelligent learning algorithm adapts to your progress, providing tailored lessons that address your specific needs and skill level. With consistent practice and regular use of our app, you'll witness remarkable progress, confidently communicating in the target language and experiencing the joy of language fluency within just 6 months. Start your language learning journey today and unlock the world of endless possibilities that fluency brings.`
  
   



    return (
      <>
      
      <div className='headerWrapper MandarinHeader'  style={{backgroundImage: `url(${SpainHeader})`,}  }>

      <h1 className='text-center p-0 pt-5' >{lang.name}{lang.emoji}</h1>
        

      </div>
      <div className='wrapper'>
        <div className='generalInfo seperator row mb-3 '> 
            
            <div className='col-md-12 text-center' style={{padding: 0}}>
              <p className='text-center' style={{padding: 0}}>Spoken by {lang.speakers} people in {lang.countries} and is part of the {lang.languageFamily} language Family</p>
              <p className='new-line text-start' style={{padding: 0}}>{introText}</p>
            </div>
          </div>
        <div className='mainText text-center seperator pt-4'>
          
          
          <h2>Our {lang.name} Course </h2>

          <p className='new-line text-start p-0'>
                {text1}
          </p>

        </div>
        <div className='mainText text-center pt-5'>
            <h2> Guarenteed Results</h2>
            <div className='row p-0'>
                <div className='col-md-6 p-0 pb-4'>{results}</div>
                <div className='col-md-6 p-0'><img className='sideImg' src={greatWall} alt='side image'/></div>

            </div>

        </div>



       
      </div>
      <SignUpBanner/>
      

      <Footer/>
      
      </>
  
  
      
    )
    
  
  

} 

export default Spanish 
