<template>
  <div class="about">
    <!-- Intro -->
	<div class="containerA top-bar text-center">
		<br> <br>
		<h2>The Most Innovative Digital Auction Platform</h2>
		<p>
			Gamma's main goal is to provide a system to manage transactions involving high-value goods in the post-geomagnetic-storm era. As a super app, Gamma can become the main platform in E-commerce and digital communication services that connects users all over the world. 
		</p>
	</div>
	<!-- /Intro-->
		
  <div class="containerA">
    
    <h3 class="text-center thin">Why Use Gamma?</h3>
    
    <div class="row">
      <div class="col-md-3 col-sm-6 highlight">
        <div class="h-caption"><h4><i class="fa fa-cogs fa-5"></i>Our vision</h4></div>
        <div class="h-body text-center">
          <p>
            With the Gamma, we hope to provide a secure, scalable and sustainable platform for accelerating world economic and trade growth.
          </p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 highlight">
        <div class="h-caption"><h4><i class="fa fa-cogs fa-5"></i>Gamma E-Auction</h4></div>
        <div class="h-body text-center">
          <p>
            Gamma's main service which accommodates auctions of luxurious and high-value goods. Users can purchase auction items by exchanging them for their GammaCoins. 
          </p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 highlight">
        <div class="h-caption"><h4><i class="fa fa-flash fa-5"></i>GammaCoin</h4></div>
        <div class="h-body text-center">
          <p>GammaCoin is a currency system used for digital transactions carried out internally and externally. Users can top-up their GammaCoin wallet by exchanging it for physical items owned. </p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 highlight">
        <div class="h-caption"><h4><i class="fa fa-heart fa-5"></i>Digital Museum</h4></div>
        <div class="h-body text-center">
          <p>Gamma presents a digital museum that is oriented towards educational services. Our Digital Museum is our commitment in creating an archive of knowledge and history in the past.</p>
        </div>
      </div>
    </div> <!-- /row  -->
  
  </div>
  </div>
</template>

<style lang="scss" scoped>
.containerA{
  min-height: 50vh;
}
.top-bar{
  background: linear-gradient(180deg, rgba(75, 24, 24, 0.58) 0%, rgba(3, 13, 52, 0.5) 68.75%, #141341 97.4%), 
  url("../assets/landing-bg.png");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-size: 100% 100%;
  margin: 0;
  min-width: 100vw;
  background-size: cover;
}
.top-bar h2, .top-bar p{
  color: white;
  font: Montserrat;
}
h2{
  font-size: 2.5rem;
  font-family: Montserrat;
  text-align: center;
  font-weight: lighter;
  padding-bottom: 2rem;
}
h3{
  font-family: Montserrat;
  font-style: normal;
  font-weight: lighter;
  text-align: center;
}
h4{
  font-size: 1.25rem;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
}
p{
}
.top-bar p{
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
}
@media (max-width: 1000px) {
  .containerA{
  min-height: 60vh;
  }
  .top-bar p{
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
