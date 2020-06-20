<script>
  import { fundRate } from '../stores';

</script>

<div class="form-group">
<label for="costInput">Enter all-in cost of the program</label>
<div class="form-group">
    <label for="rateSelector">Fund Rate (% of revenue from program members invested)</label>
    <select class="form-control" id="rateSelector" bind:value={$fundRate} on:blur="{() => $fundRate = '' }">
      <option value=0.01>1%</option>
      <option value=0.015>1.5%</option>
      <option selected value=0.2>2%</option>
      <option value=0.25>2.5%</option>
      <option value=0.3>3%</option>
      <option value=0.4>4%</option>
      
    </select> 
  </div>
</div>