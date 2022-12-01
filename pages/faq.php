 <main>
    <h1 class="faq-heading">FAQ'S</h1>
    <section class="faq-container">
      <div class="faq-one">
        <!-- faq question -->
        <h1 class="faq-page">What is an FAQ Page?</h1>
        <!-- faq answer -->
        <div class="faq-body">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
            necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
            aperiam.
          Perspiciatis, porro!</p>
        </div>
      </div>
      <hr class="hr-line">
      <div class="faq-two">
        <!-- faq question -->
        <h1 class="faq-page">Why do you need an FAQ page?</h1>
        <!-- faq answer -->
        <div class="faq-body">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
            necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
            aperiam.
          Perspiciatis, porro!</p>
        </div>
      </div>
      <hr class="hr-line">
      <div class="faq-three">
        <!-- faq question -->
        <h1 class="faq-page">Does it improves the user experience of a website?</h1>
        <!-- faq answer -->
        <div class="faq-body">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
            necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
            aperiam.
          Perspiciatis, porro!</p>
        </div>
      </div>
    </section>
  </main>

  <style>
    .faq-heading{
      border-bottom: #777;
      padding: 20px 60px;
    }
    .faq-container{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .hr-line{
      width: 60%;
      margin: auto;

    }
/* Style the buttons that are used to open and close the faq-page body */
.faq-page {
  /* background-color: #eee; */
  color: #444;
  cursor: pointer;
  padding: 30px 20px;
  width: 60%;
  border: none;
  outline: none;
  transition: 0.4s;
  margin: auto;
}
.faq-body{
  margin: auto;
  /* text-align: center; */
  width: 50%; 
  padding: auto;

}
/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.faq-page:hover {
  background-color: #F9F9F9;
}
/* Style the faq-page panel. Note: hidden by default */
.faq-body {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
.faq-page:after {
  content: '\02795';
  /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}
.active:after {
  content: "\2796";
  /* Unicode character for "minus" sign (-) */
}</style>