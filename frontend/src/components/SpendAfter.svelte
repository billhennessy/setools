<script>
  import { spendAfter, spendBefore, expectedLift } from '../stores.js';
  $: $spendAfter = $spendBefore + ($spendBefore * ($expectedLift));
</script>

<form>
<label for="formControlRange">Spend After: </label>
  <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
     <input type="text" class="form-control" id="formControlRange" value={$spendAfter.toLocaleString()}>
  </div>
</form>