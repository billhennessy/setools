<script>
    import { churnBefore } from '../stores.js';

    

</script>

<label for="churnSelector">What is your present churn rate?</label>
<div class="input-group">
    <input type="text" class="form-control" bind:value={$churnBefore}>
    <div class="input-group-append">
    <span class="input-group-text">%</span>
  </div>
  </div>
  
  