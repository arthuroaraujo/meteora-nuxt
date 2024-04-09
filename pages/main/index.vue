<script></script>

<template>
  <VContainer fluid class="fill-height">
        <VRow no-gutters align="center" justify="center" class="fill-height">
          <VCol>
            <VRow no-gutters align="center" justify="center">
              <VCol cols="12" md="6">
                <h1>Escolha qual dado acessar:</h1>
            <div class="mt-5">
              <VBtn type="submit" block min-height="44" class="gradient primary" to="/temperature"
                >Temperature</VBtn
              >
            </div>
            <div class="mt-5">
              <VBtn type="submit" block min-height="44" class="gradient primary" to="/wind"
                >Wind</VBtn
              >
            </div>
            <div class="mt-5">
              <VBtn type="submit" block min-height="44" class="gradient primary" to="/precipitation"
                >Precipitation</VBtn
              >
            </div>
          </VCol>
        </VRow>
    </VCol>
    </VRow>
  </VContainer>
</template>
