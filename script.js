/* when a user clicks on begin quiz button */
function beginQuiz() {
    $('#start').on('click', function(event){renderAQuestion();});
  }
  
  /*displays the question*/
  function renderAQuestion() {
    let question = STORE.questions[STORE.currentQuestion];
    updateQuestionAndScore();
    $(".questions-score-count").show();
    const questionHtml = $(`
    <div>
      <form id="js-questions" class="question-form">      
        <fieldset>
          <div class="topRow question">
            <div class="quizArea">
              <legend> ${question.question}</legend>
            </div>
          </div>
  
          <div class="topRow options">
            <div class="quizArea">
              <div class="js-options"> </div>
            </div>
          </div>    
  
          <div class="topRow">
            <div class="quizArea">
              <button type = "submit" id="answer" tabindex="5">Submit</button>
              <button type = "button" id="next-question" tabindex="6"> Next >></button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>`);
  $("main").html(questionHtml);
  updateOptions();
  $("#next-question").hide();
  }
  
  /* Displays question number and score obtained */
  function updateQuestionAndScore() {
    const html = $(`<ul>
        <li id="js-answered">Question Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
        <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
      </ul>`);
    $(".questions-score-count").html(html);
  }
  
  /* Displays the options for the current question */
  function updateOptions()
  {
    let question = STORE.questions[STORE.currentQuestion];
    for(let i=0; i<question.options.length; i++)
    {
      $('.js-options').append(`
          <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" tabindex ="${i+1}"> 
          <label for="option${i+1}"> ${question.options[i]}</label> <br/>
          <span id="js-r${i+1}"></span>
      `);
    }  
  }
  
  
  /* displays results and restart quiz button */
  function displayResults() {
    $(".questions-score-count").hide();
    let resultHtml = $(   
      `<div class="results">
        <form id="js-restart-quiz">
          <fieldset>
            <div class="topRow">
              <div class="quizArea">
                <legend>Final Results</legend>   
                <p> Total questions asked: ${STORE.questions.length} <br>
                Questions answered correctly: ${STORE.score} <br>
                Your Final Score is: ${STORE.score}/${STORE.questions.length}
                </p>

              </div>
            </div>
          
            <div class="topRow">
              <div class="quizArea">
                <button type="button" id="restart"> Restart Quiz...</button>
              </div>
            </div>
          </fieldset>
      </form>
      </div>`);
     
      //Reset the question number and the score to 0
      STORE.currentQuestion = 0;
      STORE.score = 0;    
    $("main").html(resultHtml);
  }
  
  /* checks whether it reached the end of questions list */
  function handleQuestions() {
    $('body').on('click','#next-question', (event) => {
      STORE.currentQuestion === STORE.questions.length?displayResults() : renderAQuestion();
    });
  }
  
  
  /*checks whether the chosen option is right or wrong and displays respective message*/ 
  function handleSelectOption() {
    $('body').on("submit",'#js-questions', function(event) {
      event.preventDefault();
      let currentQues = STORE.questions[STORE.currentQuestion];
      let selectedOption = $("input[name=options]:checked").val();
      if (!selectedOption) {
        alert("Please choose 1 of the given 4 options");
        return;
      } 
      let id_num = currentQues.options.findIndex(i => i === selectedOption);
      let id = "#js-r" + ++id_num;
      $('span').removeClass("right-answer wrong-answer");
      if(selectedOption === currentQues.answer) {
        STORE.score++; 
        $(`${id}`).append(`You got it right!"<br>${currentQues.feedback}"<br/>`);
        $(`${id}`).addClass("right-answer");
      }
      else {
        $(`${id}`).append(`Sorry wrong answer! <br/> The correct answer is - "${currentQues.answer}"<br>"${currentQues.feedback}"<br/>`);
        $(`${id}`).addClass("wrong-answer");
      }
  
      STORE.currentQuestion++;
      $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
      $('#answer').hide();
      $("input[type=radio]").attr('disabled', true);
      $('#next-question').show();
    });
  }
  
  function restartQuiz() {    
    $('body').on('click','#restart', (event) => {
      renderAQuestion();
    });
  }
  
  function handleQuizApp() {
    beginQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
  }
  
  $(handleQuizApp);