<script>
  import { spendBefore, spendAfter, margin } from '../stores.js';

  $: profitBefore = ($spendBefore * $margin);
  $: profitAfter = ($spendAfter * $margin);
  
</script>

<form>
<label for="formControlRange">Profit Without Program: </label>
  <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
     <input type="text" class="form-control" id="formControlRange" value={profitBefore.toLocaleString()}>
  </div>
</form>

<form>
<label for="formControlRange">Profit With Program: </label>
  <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
     <input type="text" class="form-control" id="formControlRange" value={profitAfter.toLocaleString()}>
  </div>
</form>