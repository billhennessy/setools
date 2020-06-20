<script>
	import { margin } from '../stores.js';
</script>

<div class="form-group">
    <label for="marginSelector">Choose approximate margin</label>
    <!-- <input class="form-control" bind:value={$margin}> -->
    <select class="form-control" id="marginSelector" bind:value="{$margin}">
      <option value=0.1>10%</option>
      <option value=0.2>20%</option>
      <option value=0.3>30%</option>
      <option value=0.4>40%</option>
      <option value=0.5>50%</option>
      <option value=0.6>60%</option>
      <option value=0.7>70%</option>
    </select> 
  </div>

 