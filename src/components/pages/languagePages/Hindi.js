import React from 'react';
import '../../../App.css'


//import {  useParams } from 'react-router-dom'
import spokenLanguages from '../../LangDB';
import Footer from '../../Footer';
import HeaderImg from '../../images/HindiBanner.jpg'
import longImg from '../../images/IndiaCard.jpg'
import SignUpBanner from '../../SignupBanner';




const Hindi = () =>{
    
    const lang = spokenLanguages.find((item) => item.id === '4');
    //const hideElement = lang.param ===null ? 'hidden' : ''

    const introText =`
    Hindi, also known as Hindustani, is a captivating and culturally rich language with a long history. As one of the official languages of India, it is spoken by millions of people in India and around the world. Hindi is renowned for its beautiful script, Devanagari, which adds a unique aesthetic to the language.
    
    One of the distinguishing features of Hindi is its melodic nature and rhythmic flow. The language's musicality lends itself to poetry, songs, and storytelling, which are deeply ingrained in Indian culture. Hindi poetry, known as "Kavita," has a rich tradition dating back centuries, with renowned poets like Kabir, Mirza Ghalib, and Rabindranath Tagore leaving a lasting impact.
    
    Hindi is also known for its diverse vocabulary, borrowing words from Sanskrit, Persian, Arabic, and English. This linguistic diversity reflects the multiculturalism and historical influences that have shaped India over the centuries.
    
    Learning Hindi opens up a world of opportunities to connect with Indian culture, traditions, and people. It allows you to communicate with native speakers in India, watch Hindi films, listen to Bollywood music, and appreciate the vast array of literature and art produced in the Hindi language.`

    const text1 = ` One of the key features that sets us apart is our intelligent learning algorithm. It adapts to your individual progress, tailoring lessons to your specific needs and skill level. Whether you're a complete beginner or an advanced learner, our app will guide you on a personalized learning journey, ensuring maximum efficiency and effectiveness.\n 
                            Our curriculum is carefully designed by language experts and native Hindi speakers. It covers all aspects of the language, including vocabulary, grammar, pronunciation, reading, writing, and listening comprehension. With our comprehensive lessons, you'll gain a solid foundation and gradually build your proficiency step by step.\n
                    To make learning Hindi even more enjoyable, we offer gamified elements and rewards to keep you motivated and engaged. Unlock achievements, compete with friends, and track your progress as you conquer each level. Our app is available across devices, allowing you to learn anytime, anywhere, at your own pace.`
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

export default Hindi
