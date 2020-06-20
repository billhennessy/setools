<script>
	import Navbar from './components/Navbar.svelte';
	import Margin from './components/Margin.svelte';
	import SpendBefore from './components/SpendBefore.svelte';
	import SpendAfter from './components/SpendAfter.svelte';
	import ExpectedLift from './components/ExpectedLift.svelte';
	import ChurnBefore from './components/ChurnBefore.svelte';
	import FundRate from './components/FundRate.svelte';
	import Profit from './components/Profit.svelte';
	

	import { margin, spendBefore, spendAfter, churnBefore, churnAfter, programCost } from './stores.js';
	export let name = "Client";
	
	
</script>

<main>
<div class="container">
<Navbar/>
<h2>ROI Calculator <small>{name}</small></h2>

 <div class="row">
    <div class="col-sm">
      <Margin/>
	<SpendBefore/>
	<ExpectedLift/>
	<ChurnBefore/>
	<FundRate/>
	
    </div>
    <div class="col-sm">
      Results
	  <Profit/>
	  <SpendAfter/>
	  
    </div>
  </div>
	
	
	
	
	




</div>
</main>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">