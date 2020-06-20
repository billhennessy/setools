<script>
	import { expectedLift } from '../stores.js';
</script>

<div class="form-group">
    <label for="liftSelector">How much of a lift do you expect from the program?</label>
    <select class="form-control" id="liftSelector" bind:value="{$expectedLift}">
      <option value=0.05>5%</option>
      <option selected value=0.10>10%</option>
      <option value=0.15>15%</option>
      <option value=0.20>20%</option>
      <option value=0.25>25%</option>
      
    </select> 
  </div>
  