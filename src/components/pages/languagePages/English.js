import React from 'react';
import '../../../App.css'


//import {  useParams } from 'react-router-dom'
import spokenLanguages from '../../LangDB';
import Footer from '../../Footer';
import HeaderImg from '../../images/ParisCard.jpg'
import longImg from '../../images/ParisCard.jpg'
import SignUpBanner from '../../SignupBanner';




const French = () =>{
    
    const lang = spokenLanguages.find((item) => item.id === '3');
    //const hideElement = lang.param ===null ? 'hidden' : ''

    const introText =`French is a captivating and widely spoken language with a rich cultural heritage. It is the official language of France and numerous countries worldwide, boasting over 275 million speakers. French is renowned for its elegance, beauty, and romantic allure.

    The language's melodious and expressive nature makes it truly unique. Its pronunciation and intonation capture the essence of French culture, creating a captivating flow. French is celebrated for its contributions to the arts, literature, and philosophy, with renowned works by Victor Hugo, Voltaire, and Albert Camus. Learning French immerses you in a world of literature, philosophical ideas, and cinematic tradition.
    
    French is also an official language of international organizations, making it valuable for diplomacy and business. It opens global opportunities, especially in sectors like fashion, cuisine, and luxury goods where France excels. French-speaking countries across continents offer diverse dialects and cultural nuances, enriching your understanding of the Francophone world.`

    const text1 = ` One of the key features that sets us apart is our intelligent learning algorithm. It adapts to your individual progress, tailoring lessons to your specific needs and skill level. Whether you're a complete beginner or an advanced learner, our app will guide you on a personalized learning journey, ensuring maximum efficiency and effectiveness.\n 
                            Our curriculum is carefully designed by language experts and native French speakers. It covers all aspects of the language, including vocabulary, grammar, pronunciation, reading, writing, and listening comprehension. With our comprehensive lessons, you'll gain a solid foundation and gradually build your proficiency step by step.\n
                    To make learning French even more enjoyable, we offer gamified elements and rewards to keep you motivated and engaged. Unlock achievements, compete with friends, and track your progress as you conquer each level. Our app is available across devices, allowing you to learn anytime, anywhere, at your own pace.`
    const results =`With our language learning app, you can achieve guaranteed results in just 6 months of dedicated use. Our proven methodology, personalized lessons, and interactive exercises ensure efficient and effective language acquisition. By following our carefully designed curriculum, you'll gradually build a strong foundation in vocabulary, grammar, pronunciation, reading, writing, and listening comprehension. Our intelligent learning algorithm adapts to your progress, providing tailored lessons that address your specific needs and skill level. With consistent practice and regular use of our app, you'll witness remarkable progress, confidently communicating in the target language and experiencing the joy of language fluency within just 6 months. Start your language learning journey today and unlock the world of endless possibilities that fluency brings.`
  
   



    return (
      <>
      
      <div className='headerWrapper MandarinHeader'  style={{backgroundImage: `url(${HeaderImg})`,}}>

      <h1 className='text-center p-0 pt-5 langName' >{lang.name}{lang.emoji}</h1>
        

      </div>
      <div className='wrapper'>
        <div className='generalInfo seperator row mb-3 '> 
            
            <div className='col-md-12 text-center' style={{padding: 0}}>
              <p className='text-center' style={{padding: 0}}>Spoken by {lang.speakers} people in {lang.countries} and is part of the {lang.languageFamily} language Family</p>
              <p className='new-line text-center' style={{padding: 0}}>{introText}</p>
            </div>
          </div>
        <div className='mainText text-center seperator pt-4'>
          
          
          <h2>Our {lang.name} Course </h2>

          <p className='new-line text-center p-0'>
                {text1}
          </p>

        </div>
        <div className='mainText text-center pt-5'>
            <h2> Guarenteed Results</h2>
            <div className='row p-0'>
                <div className='col-md-6 p-0 pb-4'>{results}</div>
                <div className='col-md-6 p-0'><img className='sideImg' src={longImg}/></div>

            </div>

        </div>



       
      </div>
      <SignUpBanner/>
      

      <Footer/>
      
      </>
  
  
      
    )
    
  
  

} 

export default French
