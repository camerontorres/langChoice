 //Works the accordian
 const [activeSection, setActiveSection] = useState(null);  {/*use for accordian function */}
    
 const handleClick = (sectionId) => {
   setActiveSection((prevSection) => (prevSection === sectionId ? null : sectionId));
 };


 <div id="accordion" className="p-5">  {/* accoridan starts here*/}
            <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className={`btn btn-link ${activeSection === 'collapseOne' ? 'collapsed' : ''}`} data-toggle="collapse"  aria-expanded={activeSection === 'collapseOne'}aria-controls="collapseOne" onClick={() => handleClick('collapseOne')}> {/**** COLLAPSE HEADING */}
                      History
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse" className={`collapse ${activeSection === 'collapseOne' ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">  {/**** COLLAPSE INNER */}
                  <div class="card-body">
                    put stuff here
                  </div>
                </div>
            </div>
  <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button className={`btn btn-link ${activeSection === 'collapseTwo' ? 'collapsed' : ''}`} data-toggle="collapse"  aria-expanded={activeSection === 'collapseTwo'} aria-controls="collapseTwo" onClick={() => handleClick('collapseTwo')}>  
              Grammar
            </button>
          </h5>
        </div>
        <div id="collapseTwo"  className={`collapse ${activeSection === 'collapseTwo' ? 'show' : ''}`}aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
          put stuff here
          </div>
        </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
      <button className={`btn btn-link ${activeSection === 'collapseThree' ? 'collapsed' : ''}`} data-toggle="collapse"  aria-expanded={activeSection === 'collapseThree'} aria-controls="collapseThree" onClick={() => handleClick('collapseThree')}>
          Tips
        </button>
      </h5>
    </div>
    <div id="collapseThree"  className={`collapse ${activeSection === 'collapseThree' ? 'show' : ''}`}aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        <ul>
          put stuff here
        </ul>
      </div>
    </div>
  </div>
</div>   ,{/* accoridan ends here*/} 

