<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="80px"
    height="95.113px"
    viewBox="0 0 80 95.113"
    enable-background="new 0 0 80 95.113"
    xml:space="preserve"
  >
    <g>
      <path
        class="path-one"
        fill="none"
        stroke="currentColor"
        stroke-width="3.9003"
        stroke-miterlimit="10"
        d="M0,38.005c6.663,0,6.663,7.801,13.327,7.801
		c6.665,0,6.665-7.801,13.33-7.801c6.667,0,6.667,7.801,13.334,7.801c6.666,0,6.666-7.801,13.331-7.801
		c6.67,0,6.67,7.801,13.339,7.801S73.33,38.005,80,38.005"
      />
    </g>
    <g>
      <path
        fill="none"
        class="path-two"
        stroke="currentColor"
        stroke-width="3.9003"
        stroke-miterlimit="10"
        d="M0,61.684c6.663,0,6.663,7.801,13.327,7.801
		c6.665,0,6.665-7.801,13.33-7.801c6.667,0,6.667,7.801,13.334,7.801c6.666,0,6.666-7.801,13.331-7.801
		c6.67,0,6.67,7.801,13.339,7.801S73.33,61.684,80,61.684"
      />
    </g>
    <g>
      <path
        fill="none"
        class="path-three"
        stroke="currentColor"
        stroke-width="3.9003"
        stroke-miterlimit="10"
        d="M0,85.362c6.663,0,6.663,7.801,13.327,7.801
		c6.665,0,6.665-7.801,13.33-7.801c6.667,0,6.667,7.801,13.334,7.801c6.666,0,6.666-7.801,13.331-7.801
		c6.67,0,6.67,7.801,13.339,7.801S73.33,85.362,80,85.362"
      />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  color: white;
}

text {
  fill: white;
}

path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}

.path-one {
  animation: dash 1.5s infinite ease-in-out;
}

.path-two {
  animation: dash 1.35s infinite ease-in-out;
}

.path-three {
  animation: dash 2.15s infinite ease-in-out;
}
@keyframes dash {
  0% {
    stroke-dashoffset: 100;
  }

  100% {
    stroke-dashoffset: -100;
  }
}
</style>
