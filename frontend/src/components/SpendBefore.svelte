<script>
  import { spendBefore } from '../stores.js';
</script>



<form>
<label for="formControlRange">Spend Before: </label>
  <div class="input-group">
    <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
    <input type="number" class="form-control" id="formControlRange" bind:value={$spendBefore}>
  </div>
</form>