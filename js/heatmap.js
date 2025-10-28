// set the dimensions and margins of the graph
var margin = {top: 80, right: 5, bottom: 30, left: 50},
  width = 600 - margin.left - margin.right,
  height = 270 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.json("../portfolio/api/heatmap-data.php", function(data) {

  // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
  var myWeeks = d3.map(data, function(d){return d.Semaine;}).keys()
  var myDay = d3.map(data, function(d){return d.Jour;}).keys()

  // Build X scales and axis:
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(myWeeks)
    .padding(0.05);

  // Build Y scales and axis:
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(myDay)
    .padding(0.05);
  svg.append("g")
    .style("font-size", 15)
    .call(d3.axisLeft(y).tickSize(0))
    .select(".domain").remove()

  // Build color scale
  var myColor = d3.scaleSequential()
    .interpolator(d3.interpolateBuPu)
    .domain([0,4])

  // create a tooltip
  var tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "rgba(255, 255, 255, 0.7)")
    .style("border-radius", "8px")
    .style("padding", "5px")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "white")
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    tooltip
      .html(`<p style="text-decoration: underline" class="bold">${d.Date}&nbsp;:</p><ul><li>${d.Activity1}</li><li>${d.Activity2}</li><li>${d.Activity3}</li><li>${d.Activity4}</li></ul>`)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", d => {
            const [day, month, year] = d.Date.split("/");
            return new Date(year, month - 1, day).setHours(0,0,0,0) === new Date().setHours(0,0,0,0) ? "var(--neon-blue)" : "none";
            })
      .style("opacity", 0.8)
  }

  // add the squares
  svg.selectAll()
    .data(data, function(d) {return d.Semaine+':'+d.Jour;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Semaine) })
      .attr("y", function(d) { return y(d.Jour) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", 20 )
      .attr("height", 20 )
      .style("fill", function(d) { return myColor(Number(d.ActivityNb))} )
      .style("stroke-width", 4)
      .style("stroke", d => {
            const [day, month, year] = d.Date.split("/");
            return new Date(year, month - 1, day).setHours(0,0,0,0) === new Date().setHours(0,0,0,0) ? "var(--neon-blue)" : "none";
            })
      .style("opacity", 0.8)
      .style("margin", "2px")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
})

// Add title to graph
svg.append("text")
        .attr("x", 0)
        .attr("y", -50)
        .attr("text-anchor", "left")
        .style("font-size", "22px")
        .style("text-align", "center")
        .text("Day-to-day Activities");

// Add subtitle to graph
svg.append("text")
        .attr("x", 0)
        .attr("y", -20)
        .attr("text-anchor", "left")
        .style("font-size", "14px")
        .style("fill", "grey")
        .style("max-width", 400)
        .style("text-align", "center")
        .text("Hover to know on what I've been working since the beginning of the professional training.");