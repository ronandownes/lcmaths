var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-counting",
  "level": "1",
  "url": "sec-counting.html",
  "type": "Section",
  "number": "1.1",
  "title": "Counting",
  "body": " Counting  Content coming soon.  "
},
{
  "id": "sec-concepts-probability",
  "level": "1",
  "url": "sec-concepts-probability.html",
  "type": "Section",
  "number": "1.2",
  "title": "Concepts of Probability",
  "body": " Concepts of Probability  Content coming soon.  "
},
{
  "id": "sec-outcomes-random",
  "level": "1",
  "url": "sec-outcomes-random.html",
  "type": "Section",
  "number": "1.3",
  "title": "Outcomes of Random Processes",
  "body": " Outcomes of Random Processes  Content coming soon.  "
},
{
  "id": "sec-statistical-reasoning",
  "level": "1",
  "url": "sec-statistical-reasoning.html",
  "type": "Section",
  "number": "1.4",
  "title": "Statistical Reasoning",
  "body": " Statistical Reasoning  Content coming soon.  "
},
{
  "id": "sec-collecting-data",
  "level": "1",
  "url": "sec-collecting-data.html",
  "type": "Section",
  "number": "1.5",
  "title": "Finding, Collecting and Organising Data",
  "body": " Finding, Collecting and Organising Data  Content coming soon.  "
},
{
  "id": "sec-representing-data",
  "level": "1",
  "url": "sec-representing-data.html",
  "type": "Section",
  "number": "1.6",
  "title": "Representing Data Graphically and Numerically",
  "body": " Representing Data Graphically and Numerically  Content coming soon.  "
},
{
  "id": "sec-analysing-data",
  "level": "1",
  "url": "sec-analysing-data.html",
  "type": "Section",
  "number": "1.7",
  "title": "Analysing, Interpreting and Drawing Inferences from Data",
  "body": " Analysing, Interpreting and Drawing Inferences from Data  Content coming soon.  "
},
{
  "id": "sec-synthetic-geometry",
  "level": "1",
  "url": "sec-synthetic-geometry.html",
  "type": "Section",
  "number": "2.1",
  "title": "Synthetic Geometry",
  "body": " Synthetic Geometry  Content coming soon.  "
},
{
  "id": "sec-coordinate-geometry",
  "level": "1",
  "url": "sec-coordinate-geometry.html",
  "type": "Section",
  "number": "2.2",
  "title": "Co-ordinate Geometry",
  "body": " Co-ordinate Geometry   Co-ordinate geometry connects algebra and geometry. We use coordinates to describe points, and equations to describe lines and circles. The formulae on pages 17–19 of your log tables are your toolkit — but understanding the properties and anatomy of each formula is what makes them powerful.    The Line   Before we begin co-ordinate geometry, we review some essential notation and ideas from Junior Cycle. Everything in this section builds on what you already know — we are simply making it more precise and more powerful.    Notation Review (Log Tables p. 17)  In co-ordinate geometry, we work with points, lines, and segments. The notation matters — it tells us exactly what we mean.   Geometry Notation    Symbol  Meaning     The line through and     The line segment from to     The distance from to     The vector from to     Notice the difference: extends forever in both directions, has endpoints, and is a number — a length. Get comfortable reading and writing these. They appear constantly in exam questions and marking schemes.    What Is a Line?  A line is a set of points . Every point on the line satisfies the equation of that line. We call a variable point — it can be any point on the line.  By contrast, is a fixed point — a known, specific point on the line. Think of it as an anchor or reference point. Much of co-ordinate geometry is about the relationship between a fixed point and a variable point on the same line.    Slope (Log Tables p. 18)  Given two points and , the slope of line is:   Read this aloud: the slope of line — not just the slope of and . The slope belongs to the line , not to the points.    Anatomy of the Slope Formula  Let us decompose the formula. The numerator is the rise — the vertical change. The denominator is the run — the horizontal change. So slope is:   Every line segment can be decomposed into a horizontal and a vertical component — a supporting triangle . The slope measures how these two components compare.  This is a relative comparison . The subtraction means we don't care where the points are in absolute terms — only their position relative to each other . A line through and has the same slope as a line through and .    Properties of Slope  Is the slope formula commutative? Yes. It does not matter which point you call and which you call . If you swap them, both the numerator and denominator change sign, and .  However, good practice is to let the second point be the one further to the right. This way the run is positive, and the sign of the slope comes entirely from the rise. This makes it easier to see whether the line is increasing or decreasing:   Slope and Direction    Rise  Run  Slope  Line    Positive  Positive  Positive  Increasing (goes uphill left to right)    Negative  Positive  Negative  Decreasing (goes downhill left to right)    Zero  Positive  Zero  Horizontal    Any  Zero  Undefined  Vertical       Connections to Junior Cycle  The slope formula connects to several ideas from the Number strand (JC spec N.1):  Decomposition: We decompose the change between two points into a vertical part (rise) and a horizontal part (run). This is the same idea as decomposing numbers or operations into simpler parts.  Commutativity: We saw that the slope formula is commutative with respect to swapping points. This connects directly to the commutative property of multiplication and division of signed numbers (JC spec N.1b).  Relative comparison: Slope is a ratio. It uses subtraction to compare positions relatively, not absolutely (JC spec N.3a). The actual coordinates don't matter — only the differences do.    Calculating Slope   Find the slope of line where and .    With on the right ( ):   The rise is (positive — going up), the run is (positive — going right). The line is increasing.     Distance (Log Tables p. 18)  The distance from to is:   Read this as: the square root of the sum of two squares . The two squares are the rise squared and the run squared. This is Pythagoras applied to the supporting triangle.  Is this formula commutative? Yes — and for a stronger reason than slope. Subtraction is not commutative: . But squaring removes the sign : . So it genuinely does not matter which point comes first in the distance formula.    Calculating Distance   Find where and .        Midpoint (Log Tables p. 18)  The midpoint of is:   This is the mean of the -coordinates and the mean of the -coordinates. The same idea of average that you know from the Statistics strand.  Notice the crucial difference from slope and distance: midpoint uses addition , not subtraction. This is an absolute comparison — where the midpoint is depends on where the actual points are, not just on their relative position. Move both points 10 units to the right and the midpoint moves too.    Slope, Distance, Midpoint — Compared   Comparing the Three Key Formulae    Formula  Operation  Comparison Type  Commutative?    Slope  Subtraction (ratio)  Relative  Yes (sign cancels)    Distance  Subtraction (squared)  Relative  Yes (squaring removes sign)    Midpoint  Addition (mean)  Absolute  Yes (addition is commutative)       Equation of a Line (Log Tables p. 18)  Now we connect slope to the equation of a line. Start with the slope formula, but replace the second point with the variable point :   Multiply both sides by and we get:   This is the point-slope formula . It is not named on the log tables, but it is the first equation given under equation of . It says: if you know one fixed point and the slope , you can write the equation of the line.  The second equation on the log tables is:   This is the slope-intercept formula (or better: intercept-slope , because that is the order you see it). Here is the -intercept — where the line crosses the -axis. You get this form by expanding the point-slope formula and collecting terms.    Finding the Equation of a Line   Find the equation of the line through with slope .    Using the point-slope formula with and :   In slope-intercept form: , so the -intercept is .     Area of Triangle (Log Tables p. 18)  The area of a triangle with one vertex at the origin and the other two at and is:   Think of it this way: and are the areas of two rectangles — one built from the coordinates of stretched to , and the other from stretched to . The difference gives twice the area of the triangle. The is there because a triangle is half a parallelogram.    What to Ignore (HL Content)  The following formulae from the log tables (p. 19) are Higher Level only. They are NOT on the Ordinary Level course.  Cross these out on your log tables so you are not tempted to use them:  Perpendicular distance from a point to a line: — HL only .  Angle between two lines : — HL only .  Point dividing in ratio (bottom of p. 18) — HL only .  A common mistake in OL exam scripts is to attempt these formulae. If you see them, ignore them. They are not on your course and using them incorrectly will cost you marks.    Slope Practice   Find the slope of line where and .    Let be on the right since . What is the rise? What is the run?       With on the right:   The rise is (going down) and the run is (going right). The line is decreasing.     Distance Practice   Find where and .           Midpoint Practice   Find the midpoint of where and .           Equation of a Line   Find the equation of line where and . Give your answer in the form .    You already found the slope in a previous exercise. Now use the point-slope formula with either point.       Using the point-slope formula with and :       The Circle  Content coming soon.   "
},
{
  "id": "table-geo-notation",
  "level": "2",
  "url": "sec-coordinate-geometry.html#table-geo-notation",
  "type": "Table",
  "number": "2.2.1",
  "title": "Geometry Notation",
  "body": " Geometry Notation    Symbol  Meaning     The line through and     The line segment from to     The distance from to     The vector from to    "
},
{
  "id": "par-what-is-a-line-2",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-what-is-a-line-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable point "
},
{
  "id": "par-what-is-a-line-3",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-what-is-a-line-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fixed point "
},
{
  "id": "par-slope-2",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-slope-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope of line "
},
{
  "id": "par-slope-anatomy-2",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-slope-anatomy-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rise run "
},
{
  "id": "par-slope-anatomy-4",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-slope-anatomy-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "supporting triangle "
},
{
  "id": "table-slope-sign",
  "level": "2",
  "url": "sec-coordinate-geometry.html#table-slope-sign",
  "type": "Table",
  "number": "2.2.2",
  "title": "Slope and Direction",
  "body": " Slope and Direction    Rise  Run  Slope  Line    Positive  Positive  Positive  Increasing (goes uphill left to right)    Negative  Positive  Negative  Decreasing (goes downhill left to right)    Zero  Positive  Zero  Horizontal    Any  Zero  Undefined  Vertical    "
},
{
  "id": "ex-slope-calc",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-slope-calc",
  "type": "Example",
  "number": "2.2.3",
  "title": "Calculating Slope.",
  "body": " Calculating Slope   Find the slope of line where and .    With on the right ( ):   The rise is (positive — going up), the run is (positive — going right). The line is increasing.   "
},
{
  "id": "ex-distance-calc",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-distance-calc",
  "type": "Example",
  "number": "2.2.4",
  "title": "Calculating Distance.",
  "body": " Calculating Distance   Find where and .      "
},
{
  "id": "par-midpoint-4",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-midpoint-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean "
},
{
  "id": "table-formulas-compared",
  "level": "2",
  "url": "sec-coordinate-geometry.html#table-formulas-compared",
  "type": "Table",
  "number": "2.2.5",
  "title": "Comparing the Three Key Formulae",
  "body": " Comparing the Three Key Formulae    Formula  Operation  Comparison Type  Commutative?    Slope  Subtraction (ratio)  Relative  Yes (sign cancels)    Distance  Subtraction (squared)  Relative  Yes (squaring removes sign)    Midpoint  Addition (mean)  Absolute  Yes (addition is commutative)    "
},
{
  "id": "par-equation-of-line-6",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-equation-of-line-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "point-slope formula "
},
{
  "id": "par-equation-of-line-9",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-equation-of-line-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope-intercept formula "
},
{
  "id": "ex-equation-of-line",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-equation-of-line",
  "type": "Example",
  "number": "2.2.6",
  "title": "Finding the Equation of a Line.",
  "body": " Finding the Equation of a Line   Find the equation of the line through with slope .    Using the point-slope formula with and :   In slope-intercept form: , so the -intercept is .   "
},
{
  "id": "ex-line-slope-practice",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-line-slope-practice",
  "type": "Checkpoint",
  "number": "2.2.7",
  "title": "Slope Practice.",
  "body": " Slope Practice   Find the slope of line where and .    Let be on the right since . What is the rise? What is the run?       With on the right:   The rise is (going down) and the run is (going right). The line is decreasing.   "
},
{
  "id": "ex-line-distance-practice",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-line-distance-practice",
  "type": "Checkpoint",
  "number": "2.2.8",
  "title": "Distance Practice.",
  "body": " Distance Practice   Find where and .         "
},
{
  "id": "ex-line-midpoint-practice",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-line-midpoint-practice",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "Midpoint Practice.",
  "body": " Midpoint Practice   Find the midpoint of where and .         "
},
{
  "id": "ex-line-equation-practice",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-line-equation-practice",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "Equation of a Line.",
  "body": " Equation of a Line   Find the equation of line where and . Give your answer in the form .    You already found the slope in a previous exercise. Now use the point-slope formula with either point.       Using the point-slope formula with and :    "
},
{
  "id": "sec-trigonometry",
  "level": "1",
  "url": "sec-trigonometry.html",
  "type": "Section",
  "number": "2.3",
  "title": "Trigonometry",
  "body": " Trigonometry  Content coming soon.  "
},
{
  "id": "sec-enlargements",
  "level": "1",
  "url": "sec-enlargements.html",
  "type": "Section",
  "number": "2.4",
  "title": "Transformation Geometry: Enlargements",
  "body": " Transformation Geometry: Enlargements  Content coming soon.  "
},
{
  "id": "sec-number-systems",
  "level": "1",
  "url": "sec-number-systems.html",
  "type": "Section",
  "number": "3.1",
  "title": "Number Systems",
  "body": " Number Systems  Content coming soon.  "
},
{
  "id": "sec-indices",
  "level": "1",
  "url": "sec-indices.html",
  "type": "Section",
  "number": "3.2",
  "title": "Indices",
  "body": " Indices  Content coming soon.  "
},
{
  "id": "sec-arithmetic",
  "level": "1",
  "url": "sec-arithmetic.html",
  "type": "Section",
  "number": "3.3",
  "title": "Arithmetic",
  "body": " Arithmetic  Content coming soon.  "
},
{
  "id": "sec-length-area-volume",
  "level": "1",
  "url": "sec-length-area-volume.html",
  "type": "Section",
  "number": "3.4",
  "title": "Length, Area and Volume",
  "body": " Length, Area and Volume  Content coming soon.  "
},
{
  "id": "sec-expressions",
  "level": "1",
  "url": "sec-expressions.html",
  "type": "Section",
  "number": "4.1",
  "title": "Expressions",
  "body": " Expressions  Content coming soon.  "
},
{
  "id": "sec-solving-equations",
  "level": "1",
  "url": "sec-solving-equations.html",
  "type": "Section",
  "number": "4.2",
  "title": "Solving Equations",
  "body": " Solving Equations  Content coming soon.  "
},
{
  "id": "sec-inequalities",
  "level": "1",
  "url": "sec-inequalities.html",
  "type": "Section",
  "number": "4.3",
  "title": "Inequalities",
  "body": " Inequalities  Content coming soon.  "
},
{
  "id": "sec-functions",
  "level": "1",
  "url": "sec-functions.html",
  "type": "Section",
  "number": "5.1",
  "title": "Functions",
  "body": " Functions  Content coming soon.  "
},
{
  "id": "sec-calculus",
  "level": "1",
  "url": "sec-calculus.html",
  "type": "Section",
  "number": "5.2",
  "title": "Calculus",
  "body": " Calculus  Content coming soon.  "
},
{
  "id": "backmatter-1",
  "level": "1",
  "url": "backmatter-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Built with PreTeXt. Learning Made as Simple as Possible.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
