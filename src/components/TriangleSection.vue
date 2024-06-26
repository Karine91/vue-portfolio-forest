<template>
  <div class="triangle-wrapper">
    <div class="triangle-bg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 85"
        preserveAspectRatio="none"
        class="triangle"
      >
        <polygon class="left" points="0,0   0,86   500.8,86   500.8,75.5"></polygon>
        <polygon class="right" points="1000,0   1000,86   500,86   500,75.5"></polygon>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.triangle-wrapper {
  margin-top: -175px;
  position: relative;
  display: flex;

  z-index: 1;
}
.triangle-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 175px;
}

.triangle {
  width: 100%;
  height: 100%;
  fill: currentColor;
  flex-grow: 1;
}
</style>
