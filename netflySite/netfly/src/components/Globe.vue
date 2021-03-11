<template>
  <div>
    <img id="globeViz" src="../assets/preview.png" />
  </div>
</template>

<script>
//import Globe from "globe.gl";
// const weightColor = d3
//   .scaleSequentialSqrt(d3.interpolateYlOrRd)
//   .domain([0, 1e7]);

//const world = Globe();
console.log(document.querySelector("#globeViz"));
//world(document.getElementById("globeViz")).globeImageUrl(
//"/Users/alexkayner/Desktop/netflySite/netfly/node_modules/globe.gl/example/world-population/preview.png"
//);
// .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
// .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
// .hexBinPointWeight("pop")
// .hexAltitude(d => d.sumWeight * 6e-8)
// .hexBinResolution(4)
// //.hexTopColor(d => weightColor(d.sumWeight))
// //.hexSideColor(d => weightColor(d.sumWeight))
// .hexBinMerge(true)
// .enablePointerInteraction(false); // performance improvement

// fetch("../datasets/world_population.csv")
//   .then(res => res.text())
//   .then(csv =>
//     d3.csvParse(csv, ({ lat, lng, pop }) => ({
//       lat: +lat,
//       lng: +lng,
//       pop: +pop
//     }))
//   )
//   .then(data => world.hexBinPointsData(data));

// Add auto-rotation
// world.controls().autoRotate = true;
// world.controls().autoRotateSpeed = 0.6;
export default {
  name: "Globe"
};
</script>

<style></style>
