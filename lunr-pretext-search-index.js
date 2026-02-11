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
  "body": " Synthetic Geometry   Geometry is one of the oldest branches of mathematics — the ancient Greeks built it up from a handful of basic ideas into an extraordinary logical structure. In this section, we follow that same path. We start with a few terms so basic they cannot be defined, state a few truths so fundamental they cannot be proved, and then build everything else from there.  At Leaving Certificate Ordinary Level, you are expected to solve problems using the theory. No proofs are examinable. But understanding the logical structure — what follows from what — is what makes the difference between memorising and truly knowing geometry.       The Language of Geometry   Undefined Terms  Every system of knowledge has to start somewhere. In mathematics, we begin with ideas so primitive, so fundamental, that we cannot define them using simpler ideas — because there are no simpler ideas. These are our undefined terms .  Here are the ones you need right now. We will introduce more as we need them.   Our Starting Undefined Terms    Term  What we mean (informally)    Point  A location. It has no size, no width, no length — just position. We label points with capital letters: , , .    Line  A straight path that extends forever in both directions. It has no thickness. A line through points and is written .    Plane  A flat surface that extends forever in all directions. All our geometry takes place in one fixed plane.    Real number  The numbers on the number line. We use them to measure distances and angles.     Notice: we described these terms, but we did not define them. You will not be asked for a definition of point in an exam — it is one of our starting points (no pun intended). You can think of a point as a dot on a page, but really even a dot has size. A mathematical point is an idealisation: pure location, nothing more.  As we go further, we will meet more undefined terms — angle , degree , length , set — introduced on a need-to-know basis.    Defined Terms  Once we have our undefined terms, we can start building. A defined term is a new concept described precisely using terms we already have. For example, once we know what point and line mean, we can define what a segment is.  We will introduce defined terms as we need them throughout this section. The important ones include: segment, ray, midpoint, triangle, angle, parallel lines, perpendicular lines, parallelogram, circle, tangent, chord , and many more.    Axioms, Theorems, and the Rest  Here is the hierarchy of mathematical truth:   The Logical Hierarchy    Term  What it means    Axiom  A statement we accept as true without proof. Our starting assumptions — the rules of the game.    Theorem  A statement we prove is true, using axioms and previously-proven theorems.    Proof  A logical argument that shows a theorem must be true.    Corollary  A result that follows quickly and directly from a theorem.    Converse  The reverse of a theorem: swap the if and the then .    Implies  If the first statement is true, then the second must be true.     A word of caution about converses. Just because a theorem is true does not mean its converse is true. For example: Every square is a rectangle is true, but every rectangle is a square is false. Always check whether a converse actually holds before using it.        The Building Blocks  From our undefined terms, we immediately get our first definitions and our first axiom.   Axiom 1 — Two Points   There is exactly one line through any two given points.    This is beautifully simple. Pick any two points — there is exactly one line through them. Not zero, not two. Exactly one. We write for the line through and .   Points, lines, segments, rays, distance, and midpoint.   Diagrams showing a point, a line extending in both directions, a segment with two endpoints, a ray with one endpoint, distance notation, and a midpoint.     Segment   The line segment  is the part of line between and , including both endpoints.     Ray   The ray  starts at and passes through , extending forever beyond . The point is the endpoint of the ray.     Collinear Points   Three or more points are collinear if they all lie on a single line.     Triangle   If , , are three non-collinear points, the triangle  is the figure enclosed by the segments , , and . The segments are its sides and the points are its vertices .     Distance  We write for the distance between points and . This is also the length of segment .   Axiom 2 — Ruler   Distance has these properties:  1. (distance is never negative).  2. (same distance either way).  3. If lies on between and , then .  4. Given any ray from and any number , there is exactly one point on the ray at distance from .    Property 3 is the one you use constantly: if a point is between two others, the distances add up. Property 4 says you can always mark off a distance — essential for constructions.    Midpoint   The midpoint  of segment is the point on the segment with .         Angles  Angle is another undefined term. An angle has a vertex (a point), two arms (rays from the vertex), and an inside . We write for the angle at vertex with arms and , and for the number of degrees in the angle.   The five types of angle, and supplementary angles.   Diagrams showing acute, right, obtuse, straight, and reflex angles, plus supplementary angles that add to 180 degrees.     Types of Angle    Type  Degrees   Null angle  Acute angle Between and  Right angle Exactly  Obtuse angle Between and  Straight angle Exactly  Reflex angle Between and  Full angle     Axiom 3 — Protractor   Every angle has a degree measure between and . A straight angle is . Angles can be added: if ray is inside , then .     Supplementary Angles   Two angles are supplementary if they add to .     Perpendicular Lines   Two lines are perpendicular if they meet at a right angle ( ). We write .     Angle Bisector   The ray is the bisector of if .         Congruent Triangles  Two triangles are congruent if all six measurements match: three sides and three angles. But you do not need all six — three carefully chosen measurements are enough.   The three congruence conditions: SAS, ASA, SSS.   Three triangles showing the SAS, ASA, and SSS congruence conditions with matching sides and angles marked.     Axiom 4 — SAS, ASA, SSS   Two triangles are congruent if:  SAS: Two sides and the included angle are equal, or  ASA: Two angles and the included side are equal, or  SSS: All three sides are equal.    These are not theorems — they are axioms. We accept them as true. Everything about congruent triangles flows from here.   Types of Triangle (by sides)   A triangle is isosceles if two sides are equal, equilateral if all three sides are equal, and scalene if no two sides are equal.     Right-Angled Triangle   A triangle is right-angled if one angle is . The side opposite the right angle is the hypotenuse .         Parallel Lines   Parallel Lines   Two lines are parallel if they never meet (or are the same line). We write .     Axiom 5 — Parallels   Given any line and a point not on it, there is exactly one line through parallel to .    This is the last of our five axioms. Everything in geometry is built from Axioms 1–5 plus the definitions above.   Transversal, Alternate Angles, Corresponding Angles   A transversal is a line that crosses two other lines. Where it crosses, it creates alternate angles (on opposite sides, between the lines) and corresponding angles (on the same side, one at each crossing).     Alternate angles formed by a transversal cutting parallel lines.   Two parallel lines cut by a transversal, with alternate angles marked as equal.         The Junior Cycle Theorems (Assumed Knowledge)  These results were proved at Junior Cycle. At LC OL, they are assumed — you use them freely. We state each one with its diagram so you have a complete reference.   Theorem 1 — Vertically Opposite Angles   Vertically opposite angles are equal in measure.     Vertically opposite angles are equal.   Two lines crossing, with two pairs of vertically opposite angles marked in matching colours.     Theorem 2 — Isosceles Triangles   (1) In an isosceles triangle, the angles opposite the equal sides are equal.  (2) Conversely, if two angles of a triangle are equal, the triangle is isosceles.     Equal sides imply equal base angles.   An isosceles triangle with two sides marked equal and the base angles marked equal.     Theorem 3 — Alternate Angles   If a transversal makes equal alternate angles on two lines, then the lines are parallel. Conversely, if two lines are parallel, any transversal makes equal alternate angles.     Theorem 4 — Angle Sum in a Triangle   The three angles in any triangle add to .     The angles in a triangle sum to 180°.   A triangle with its three angles labelled alpha, beta, gamma, and the equation alpha plus beta plus gamma equals 180 degrees.     Theorem 5 — Corresponding Angles   Two lines are parallel if and only if, for any transversal, corresponding angles are equal.     Theorem 6 — Exterior Angle   Each exterior angle of a triangle equals the sum of the two interior opposite angles.     The exterior angle theorem.   A triangle with one side extended, showing the exterior angle equals the sum of the two non-adjacent interior angles.     Theorem 9 — Parallelograms   In a parallelogram, opposite sides are equal and opposite angles are equal.     Theorem 10 — Diagonals of a Parallelogram   The diagonals of a parallelogram bisect each other.     Parallelogram: opposite sides equal, diagonals bisect each other.   A parallelogram with opposite sides marked equal, diagonals drawn, and their intersection point marked.     Theorem 14 — Pythagoras   In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: .     Theorem 15 — Converse of Pythagoras   If for the sides of a triangle, then the angle opposite side is a right angle.     Pythagoras: .   A right-angled triangle with the right angle marked, sides labelled a, b, c, and the formula.     Corollary 3 — Angle in a Semicircle   An angle standing on a diameter is a right angle.     Corollary 4   If the angle standing on a chord at a point of the circle is , then the chord is a diameter.     The angle in a semicircle is 90°.   A circle with a diameter and a point on the circumference forming a right angle.         Sides and Angles in a Triangle (Theorems 7 and 8)  Now we reach new territory for LC OL. These two theorems connect the sizes of sides and angles within a single triangle.   Theorem 7 — Bigger Side, Bigger Angle   (1) In , if , then .  In words: the angle opposite the longer side is the larger angle.  (2) Conversely, the side opposite the larger angle is the longer side.     The bigger the side, the bigger the opposite angle.   A triangle with sides of different lengths, the largest angle opposite the longest side.    Proof idea: Place a point on with . Then is isosceles, and combining the Exterior Angle Theorem with the Isosceles Triangle Theorem gives .  Think of it physically: a longer side needs to push the opposite angle wider to make room.   Theorem 8 — Triangle Inequality   Any two sides of a triangle are together greater than the third: .     The shortest distance between two points is a straight line.   A triangle showing the direct path from A to B is shorter than the detour via C.    This is the geometric way of saying: the shortest path between two points is a straight line. Any detour via a third point makes the journey longer.   Ordering Angles Using Theorem 7   In , , , . List the angles from smallest to largest.    Sides: .  Angles (opposite): .     Can a Triangle Have These Sides?   (a) 4, 6, 9 (b) 2, 3, 6 (c) 5, 5, 10    (a) . Yes.  (b) . No.  (c) , not strictly greater. No.     Practice   1. In , , , . Which angle is largest?  2. Two sides of a triangle are 5 and 11. Find the range of the third side.  3. Can a triangle have sides 7, 8, 14?    1. (opposite ).  2. .  3. Yes: .         Ratio and Similarity (Theorems 11, 12, 13)  These three theorems are the foundation for similar triangles.   Theorem 11 — Three Parallel Lines   If three parallel lines cut off equal segments on one transversal, then they cut off equal segments on any other transversal.     Equal spacing on one transversal gives equal spacing on any other.   Three parallel lines cut by two transversals, with equal segments marked on both.    Think of ruled paper: equally spaced horizontal lines. Any line drawn across the page crosses them at equal intervals, regardless of angle.   Theorem 12 — Line Parallel to Base   In , if a line parallel to cuts in the ratio , then it also cuts in the ratio .     A line parallel to the base divides both sides in the same ratio.   A triangle with line DE parallel to BC cutting sides AB and AC in the ratio s to t.     Theorem 13 — Similar Triangles   If two triangles are similar (all angles equal), their sides are proportional:     Similar triangles: same shape, proportional sides.   Two triangles of different sizes with matching angles and a scale factor arrow.     Using Theorem 12   in . , , . Find .    , so .     Similar Triangles   Two similar triangles have sides 6, 8, 10 and the shortest side of the second is 9. Find the other sides.    Scale factor . Sides: 9, 12, 15.     Shadows   A 2 m pole casts a 3 m shadow. A building casts an 18 m shadow. Find the building height.    , so m.     Practice   1. in . , , . Find .  2. Two similar triangles have areas . A side of the smaller is 10. Find the corresponding side of the larger.  3. A flagpole casts an 8 m shadow. A 1.7 m person nearby casts a 2 m shadow. Find the flagpole height.    1. .  2. Side ratio , so larger side .  3. m.         Area (Theorems 16, 17, 18)   Base, Apex, Height   Choose one side of a triangle as the base . The opposite vertex is the apex . The perpendicular distance from the apex to the line containing the base is the height (or altitude ).     Theorem 16 — Base × Height Is Constant   For a triangle, base × height does not depend on which side is chosen as the base.     Area of a triangle = ½ × base × height.   A triangle with base and height marked.     Theorem 17 — Diagonal Bisects Area   A diagonal of a parallelogram bisects its area.     Theorem 18 — Area of a Parallelogram   Area of a parallelogram = base × height.     Area of a parallelogram. The diagonal splits it into two equal triangles.   A parallelogram with base and height marked and a diagonal drawn.     Two Altitudes   with height 6. . Find the height from to .    Theorem 16: , so .     Parallelogram   has , height 8. Find the area of .    Parallelogram area = . By Theorem 17: .     Practice   1. Triangle: base 15, height 8. Find area.  2. Area of triangle is 42, base is 12. Find height.  3. Parallelogram sides 20 and 13, height 12 on the side 20. Find area and the other height.    1. 60. 2. 7. 3. Area = 240; .         Circles: Tangents and Chords (Theorems 20, 21, Corollary 6)   Circle Terminology   A circle is the set of all points at a fixed distance (the radius ) from a fixed point (the centre ). A chord is a segment joining two points on the circle. A diameter is a chord through the centre. A tangent is a line that touches the circle at exactly one point — the point of contact .     Theorem 20 — Tangent ⊥ Radius   (1) A tangent is perpendicular to the radius at the point of contact.  (2) Conversely, a line perpendicular to the radius at a point on the circle is a tangent.     Tangent ⊥ radius at the point of contact.   A circle with a tangent at P and radius OP, right angle marked.    Key habit: Whenever you see a tangent, draw the radius to the point of contact and mark the right angle. This unlocks Pythagoras.   Theorem 21 — Perpendicular from Centre Bisects Chord   (1) The perpendicular from the centre to a chord bisects the chord.  (2) The perpendicular bisector of a chord passes through the centre.     Perpendicular from centre bisects the chord.   A circle with chord AB and perpendicular from centre O to midpoint M.     Corollary 6 — Common Tangent   If two circles share a common tangent at one point, the two centres and that point are collinear.     Common tangent: centres and contact point are collinear.   Two circles with a common tangent, centres and contact point on the same line.     Tangent Length   Radius 5, . Find tangent length .    . .     Chord Distance   Chord length 24, radius 13. Find distance from centre to chord.    Half-chord = 12. .     Practice   1. Radius 6, . Find tangent length.  2. Radius 10, distance to chord = 6. Find chord length.  3. Two parallel chords (lengths 12, 16) in a circle of radius 10. Find the distance between them (two cases).    1. 8. 2. 16. 3. Same side: 2. Opposite: 14.         Constructions 16–21  JC constructions (1, 2, 4, 5, 6, 8–15) are assumed and may be examined. You must also know these six.   Construction 16: Circumcentre and Circumcircle  Goal: Circle through all three vertices.  Method: Perpendicular bisector of two sides — they meet at the circumcentre . Compass from circumcentre to any vertex draws the circle.  Justification: Theorem 21(2) — perpendicular bisector of a chord passes through the centre.    Construction 17: Incentre and Incircle  Goal: Circle inside the triangle tangent to all sides.  Method: Bisect two angles — they meet at the incentre . Drop perpendicular to any side for the inradius .  Justification: A point on an angle bisector is equidistant from both arms.    Construction 18: Angle of 60° (No Protractor)  Method: Arc from cuts ray at . Same radius arc from cuts first arc at . .  Justification:  is equilateral.    Construction 19: Tangent at a Point on a Circle  Method: Draw radius . Construct perpendicular to at .  Justification: Theorem 20.    Construction 20: Parallelogram  Method: Draw . Angle at , mark . Lines from parallel to , from parallel to , meet at .  Justification: Definition of parallelogram.    Construction 21: Centroid  Method: Midpoint of each side. Median from each vertex to opposite midpoint. They meet at the centroid (ratio from vertex).        Quadrilaterals   Quadrilateral Types   A quadrilateral has four sides. A parallelogram : both pairs of opposite sides parallel. A rectangle : parallelogram with all right angles. A rhombus : parallelogram with all sides equal. A square : both a rectangle and a rhombus.    Every square is a rectangle is a parallelogram. But not every rectangle is a square.       Mixed Exam-Style Problems   Tangent and Chord   Circle with centre , radius 10. Chord has length 16. Tangent at meets line extended at . Find .   Theorem 21 first, then Theorem 20 + Pythagoras.    Half-chord = 8. Distance from centre to chord: . Using similar right triangles: .     Similar Triangles and Area   , , . Area of . Find area of .   150   . Area scales by . Area = .     Circumcentre   , , . Show it is right-angled. Find the circumcentre and circumradius.   Right angle at . Circumcentre , radius 5.   (Theorem 15). is a diameter (Corollary 4). Midpoint = , radius .     Triangle Inequality with Algebra   Sides , , . Find the range of .   (with all sides positive, i.e. , combined: )    Parallel Chords   Parallel chords of lengths 12 and 16 in a circle of radius 10. Distance between them?   Same side: 2. Opposite: 14.    Construction Description   Describe how to construct the circumcircle of a triangle. State the theorem that justifies your method.    Construct perpendicular bisectors of two sides; they meet at the circumcentre. Draw circle from circumcentre through any vertex. Justified by Theorem 21(2).     "
},
{
  "id": "par-undefined-terms-2",
  "level": "2",
  "url": "sec-synthetic-geometry.html#par-undefined-terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "undefined terms "
},
{
  "id": "table-undefined-terms",
  "level": "2",
  "url": "sec-synthetic-geometry.html#table-undefined-terms",
  "type": "Table",
  "number": "2.1.1",
  "title": "Our Starting Undefined Terms",
  "body": " Our Starting Undefined Terms    Term  What we mean (informally)    Point  A location. It has no size, no width, no length — just position. We label points with capital letters: , , .    Line  A straight path that extends forever in both directions. It has no thickness. A line through points and is written .    Plane  A flat surface that extends forever in all directions. All our geometry takes place in one fixed plane.    Real number  The numbers on the number line. We use them to measure distances and angles.    "
},
{
  "id": "par-undefined-terms-6",
  "level": "2",
  "url": "sec-synthetic-geometry.html#par-undefined-terms-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "angle degree length set "
},
{
  "id": "par-defined-terms-2",
  "level": "2",
  "url": "sec-synthetic-geometry.html#par-defined-terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "defined term "
},
{
  "id": "table-logic-hierarchy",
  "level": "2",
  "url": "sec-synthetic-geometry.html#table-logic-hierarchy",
  "type": "Table",
  "number": "2.1.2",
  "title": "The Logical Hierarchy",
  "body": " The Logical Hierarchy    Term  What it means    Axiom  A statement we accept as true without proof. Our starting assumptions — the rules of the game.    Theorem  A statement we prove is true, using axioms and previously-proven theorems.    Proof  A logical argument that shows a theorem must be true.    Corollary  A result that follows quickly and directly from a theorem.    Converse  The reverse of a theorem: swap the if and the then .    Implies  If the first statement is true, then the second must be true.    "
},
{
  "id": "axiom-1",
  "level": "2",
  "url": "sec-synthetic-geometry.html#axiom-1",
  "type": "Axiom",
  "number": "2.1.3",
  "title": "Axiom 1 — Two Points.",
  "body": " Axiom 1 — Two Points   There is exactly one line through any two given points.   "
},
{
  "id": "fig-building-blocks",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-building-blocks",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": " Points, lines, segments, rays, distance, and midpoint.   Diagrams showing a point, a line extending in both directions, a segment with two endpoints, a ray with one endpoint, distance notation, and a midpoint.   "
},
{
  "id": "def-segment",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-segment",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Segment.",
  "body": " Segment   The line segment  is the part of line between and , including both endpoints.   "
},
{
  "id": "def-ray",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-ray",
  "type": "Definition",
  "number": "2.1.6",
  "title": "Ray.",
  "body": " Ray   The ray  starts at and passes through , extending forever beyond . The point is the endpoint of the ray.   "
},
{
  "id": "def-collinear",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-collinear",
  "type": "Definition",
  "number": "2.1.7",
  "title": "Collinear Points.",
  "body": " Collinear Points   Three or more points are collinear if they all lie on a single line.   "
},
{
  "id": "def-triangle",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-triangle",
  "type": "Definition",
  "number": "2.1.8",
  "title": "Triangle.",
  "body": " Triangle   If , , are three non-collinear points, the triangle  is the figure enclosed by the segments , , and . The segments are its sides and the points are its vertices .   "
},
{
  "id": "par-distance-synth-2",
  "level": "2",
  "url": "sec-synthetic-geometry.html#par-distance-synth-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distance length "
},
{
  "id": "axiom-2",
  "level": "2",
  "url": "sec-synthetic-geometry.html#axiom-2",
  "type": "Axiom",
  "number": "2.1.9",
  "title": "Axiom 2 — Ruler.",
  "body": " Axiom 2 — Ruler   Distance has these properties:  1. (distance is never negative).  2. (same distance either way).  3. If lies on between and , then .  4. Given any ray from and any number , there is exactly one point on the ray at distance from .   "
},
{
  "id": "def-midpoint",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-midpoint",
  "type": "Definition",
  "number": "2.1.10",
  "title": "Midpoint.",
  "body": " Midpoint   The midpoint  of segment is the point on the segment with .   "
},
{
  "id": "subsec-angles-2",
  "level": "2",
  "url": "sec-synthetic-geometry.html#subsec-angles-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Angle vertex arms inside "
},
{
  "id": "fig-angle-types",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-angle-types",
  "type": "Figure",
  "number": "2.1.11",
  "title": "",
  "body": " The five types of angle, and supplementary angles.   Diagrams showing acute, right, obtuse, straight, and reflex angles, plus supplementary angles that add to 180 degrees.   "
},
{
  "id": "table-angle-types",
  "level": "2",
  "url": "sec-synthetic-geometry.html#table-angle-types",
  "type": "Table",
  "number": "2.1.12",
  "title": "Types of Angle",
  "body": " Types of Angle    Type  Degrees   Null angle  Acute angle Between and  Right angle Exactly  Obtuse angle Between and  Straight angle Exactly  Reflex angle Between and  Full angle   "
},
{
  "id": "axiom-3",
  "level": "2",
  "url": "sec-synthetic-geometry.html#axiom-3",
  "type": "Axiom",
  "number": "2.1.13",
  "title": "Axiom 3 — Protractor.",
  "body": " Axiom 3 — Protractor   Every angle has a degree measure between and . A straight angle is . Angles can be added: if ray is inside , then .   "
},
{
  "id": "def-supplementary",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-supplementary",
  "type": "Definition",
  "number": "2.1.14",
  "title": "Supplementary Angles.",
  "body": " Supplementary Angles   Two angles are supplementary if they add to .   "
},
{
  "id": "def-perpendicular",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-perpendicular",
  "type": "Definition",
  "number": "2.1.15",
  "title": "Perpendicular Lines.",
  "body": " Perpendicular Lines   Two lines are perpendicular if they meet at a right angle ( ). We write .   "
},
{
  "id": "def-angle-bisector",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-angle-bisector",
  "type": "Definition",
  "number": "2.1.16",
  "title": "Angle Bisector.",
  "body": " Angle Bisector   The ray is the bisector of if .   "
},
{
  "id": "subsec-congruence-2",
  "level": "2",
  "url": "sec-synthetic-geometry.html#subsec-congruence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "congruent "
},
{
  "id": "fig-congruence",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-congruence",
  "type": "Figure",
  "number": "2.1.17",
  "title": "",
  "body": " The three congruence conditions: SAS, ASA, SSS.   Three triangles showing the SAS, ASA, and SSS congruence conditions with matching sides and angles marked.   "
},
{
  "id": "axiom-4",
  "level": "2",
  "url": "sec-synthetic-geometry.html#axiom-4",
  "type": "Axiom",
  "number": "2.1.18",
  "title": "Axiom 4 — SAS, ASA, SSS.",
  "body": " Axiom 4 — SAS, ASA, SSS   Two triangles are congruent if:  SAS: Two sides and the included angle are equal, or  ASA: Two angles and the included side are equal, or  SSS: All three sides are equal.   "
},
{
  "id": "def-isosceles",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-isosceles",
  "type": "Definition",
  "number": "2.1.19",
  "title": "Types of Triangle (by sides).",
  "body": " Types of Triangle (by sides)   A triangle is isosceles if two sides are equal, equilateral if all three sides are equal, and scalene if no two sides are equal.   "
},
{
  "id": "def-right-triangle",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-right-triangle",
  "type": "Definition",
  "number": "2.1.20",
  "title": "Right-Angled Triangle.",
  "body": " Right-Angled Triangle   A triangle is right-angled if one angle is . The side opposite the right angle is the hypotenuse .   "
},
{
  "id": "def-parallel",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-parallel",
  "type": "Definition",
  "number": "2.1.21",
  "title": "Parallel Lines.",
  "body": " Parallel Lines   Two lines are parallel if they never meet (or are the same line). We write .   "
},
{
  "id": "axiom-5",
  "level": "2",
  "url": "sec-synthetic-geometry.html#axiom-5",
  "type": "Axiom",
  "number": "2.1.22",
  "title": "Axiom 5 — Parallels.",
  "body": " Axiom 5 — Parallels   Given any line and a point not on it, there is exactly one line through parallel to .   "
},
{
  "id": "def-transversal",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-transversal",
  "type": "Definition",
  "number": "2.1.23",
  "title": "Transversal, Alternate Angles, Corresponding Angles.",
  "body": " Transversal, Alternate Angles, Corresponding Angles   A transversal is a line that crosses two other lines. Where it crosses, it creates alternate angles (on opposite sides, between the lines) and corresponding angles (on the same side, one at each crossing).   "
},
{
  "id": "fig-alternate-angles",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-alternate-angles",
  "type": "Figure",
  "number": "2.1.24",
  "title": "",
  "body": " Alternate angles formed by a transversal cutting parallel lines.   Two parallel lines cut by a transversal, with alternate angles marked as equal.   "
},
{
  "id": "thm-1-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-1-review",
  "type": "Theorem",
  "number": "2.1.25",
  "title": "Theorem 1 — Vertically Opposite Angles.",
  "body": " Theorem 1 — Vertically Opposite Angles   Vertically opposite angles are equal in measure.   "
},
{
  "id": "fig-vert-opp",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-vert-opp",
  "type": "Figure",
  "number": "2.1.26",
  "title": "",
  "body": " Vertically opposite angles are equal.   Two lines crossing, with two pairs of vertically opposite angles marked in matching colours.   "
},
{
  "id": "thm-2-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-2-review",
  "type": "Theorem",
  "number": "2.1.27",
  "title": "Theorem 2 — Isosceles Triangles.",
  "body": " Theorem 2 — Isosceles Triangles   (1) In an isosceles triangle, the angles opposite the equal sides are equal.  (2) Conversely, if two angles of a triangle are equal, the triangle is isosceles.   "
},
{
  "id": "fig-isosceles-thm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-isosceles-thm",
  "type": "Figure",
  "number": "2.1.28",
  "title": "",
  "body": " Equal sides imply equal base angles.   An isosceles triangle with two sides marked equal and the base angles marked equal.   "
},
{
  "id": "thm-3-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-3-review",
  "type": "Theorem",
  "number": "2.1.29",
  "title": "Theorem 3 — Alternate Angles.",
  "body": " Theorem 3 — Alternate Angles   If a transversal makes equal alternate angles on two lines, then the lines are parallel. Conversely, if two lines are parallel, any transversal makes equal alternate angles.   "
},
{
  "id": "thm-4-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-4-review",
  "type": "Theorem",
  "number": "2.1.30",
  "title": "Theorem 4 — Angle Sum in a Triangle.",
  "body": " Theorem 4 — Angle Sum in a Triangle   The three angles in any triangle add to .   "
},
{
  "id": "fig-angle-sum-thm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-angle-sum-thm",
  "type": "Figure",
  "number": "2.1.31",
  "title": "",
  "body": " The angles in a triangle sum to 180°.   A triangle with its three angles labelled alpha, beta, gamma, and the equation alpha plus beta plus gamma equals 180 degrees.   "
},
{
  "id": "thm-5-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-5-review",
  "type": "Theorem",
  "number": "2.1.32",
  "title": "Theorem 5 — Corresponding Angles.",
  "body": " Theorem 5 — Corresponding Angles   Two lines are parallel if and only if, for any transversal, corresponding angles are equal.   "
},
{
  "id": "thm-6-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-6-review",
  "type": "Theorem",
  "number": "2.1.33",
  "title": "Theorem 6 — Exterior Angle.",
  "body": " Theorem 6 — Exterior Angle   Each exterior angle of a triangle equals the sum of the two interior opposite angles.   "
},
{
  "id": "fig-ext-angle-thm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-ext-angle-thm",
  "type": "Figure",
  "number": "2.1.34",
  "title": "",
  "body": " The exterior angle theorem.   A triangle with one side extended, showing the exterior angle equals the sum of the two non-adjacent interior angles.   "
},
{
  "id": "thm-9-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-9-review",
  "type": "Theorem",
  "number": "2.1.35",
  "title": "Theorem 9 — Parallelograms.",
  "body": " Theorem 9 — Parallelograms   In a parallelogram, opposite sides are equal and opposite angles are equal.   "
},
{
  "id": "thm-10-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-10-review",
  "type": "Theorem",
  "number": "2.1.36",
  "title": "Theorem 10 — Diagonals of a Parallelogram.",
  "body": " Theorem 10 — Diagonals of a Parallelogram   The diagonals of a parallelogram bisect each other.   "
},
{
  "id": "fig-parallelogram-thm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-parallelogram-thm",
  "type": "Figure",
  "number": "2.1.37",
  "title": "",
  "body": " Parallelogram: opposite sides equal, diagonals bisect each other.   A parallelogram with opposite sides marked equal, diagonals drawn, and their intersection point marked.   "
},
{
  "id": "thm-14-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-14-review",
  "type": "Theorem",
  "number": "2.1.38",
  "title": "Theorem 14 — Pythagoras.",
  "body": " Theorem 14 — Pythagoras   In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: .   "
},
{
  "id": "thm-15-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-15-review",
  "type": "Theorem",
  "number": "2.1.39",
  "title": "Theorem 15 — Converse of Pythagoras.",
  "body": " Theorem 15 — Converse of Pythagoras   If for the sides of a triangle, then the angle opposite side is a right angle.   "
},
{
  "id": "fig-pythagoras-thm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-pythagoras-thm",
  "type": "Figure",
  "number": "2.1.40",
  "title": "",
  "body": " Pythagoras: .   A right-angled triangle with the right angle marked, sides labelled a, b, c, and the formula.   "
},
{
  "id": "cor-3-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#cor-3-review",
  "type": "Corollary",
  "number": "2.1.41",
  "title": "Corollary 3 — Angle in a Semicircle.",
  "body": " Corollary 3 — Angle in a Semicircle   An angle standing on a diameter is a right angle.   "
},
{
  "id": "cor-4-review",
  "level": "2",
  "url": "sec-synthetic-geometry.html#cor-4-review",
  "type": "Corollary",
  "number": "2.1.42",
  "title": "Corollary 4.",
  "body": " Corollary 4   If the angle standing on a chord at a point of the circle is , then the chord is a diameter.   "
},
{
  "id": "fig-semicircle-thm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-semicircle-thm",
  "type": "Figure",
  "number": "2.1.43",
  "title": "",
  "body": " The angle in a semicircle is 90°.   A circle with a diameter and a point on the circumference forming a right angle.   "
},
{
  "id": "thm-7",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-7",
  "type": "Theorem",
  "number": "2.1.44",
  "title": "Theorem 7 — Bigger Side, Bigger Angle.",
  "body": " Theorem 7 — Bigger Side, Bigger Angle   (1) In , if , then .  In words: the angle opposite the longer side is the larger angle.  (2) Conversely, the side opposite the larger angle is the longer side.   "
},
{
  "id": "fig-thm7",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-thm7",
  "type": "Figure",
  "number": "2.1.45",
  "title": "",
  "body": " The bigger the side, the bigger the opposite angle.   A triangle with sides of different lengths, the largest angle opposite the longest side.   "
},
{
  "id": "thm-8",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-8",
  "type": "Theorem",
  "number": "2.1.46",
  "title": "Theorem 8 — Triangle Inequality.",
  "body": " Theorem 8 — Triangle Inequality   Any two sides of a triangle are together greater than the third: .   "
},
{
  "id": "fig-thm8",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-thm8",
  "type": "Figure",
  "number": "2.1.47",
  "title": "",
  "body": " The shortest distance between two points is a straight line.   A triangle showing the direct path from A to B is shorter than the detour via C.   "
},
{
  "id": "ex-thm7-ordering",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-thm7-ordering",
  "type": "Example",
  "number": "2.1.48",
  "title": "Ordering Angles Using Theorem 7.",
  "body": " Ordering Angles Using Theorem 7   In , , , . List the angles from smallest to largest.    Sides: .  Angles (opposite): .   "
},
{
  "id": "ex-thm8-check",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-thm8-check",
  "type": "Example",
  "number": "2.1.49",
  "title": "Can a Triangle Have These Sides?",
  "body": " Can a Triangle Have These Sides?   (a) 4, 6, 9 (b) 2, 3, 6 (c) 5, 5, 10    (a) . Yes.  (b) . No.  (c) , not strictly greater. No.   "
},
{
  "id": "ex-tri-ineq-practice",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-tri-ineq-practice",
  "type": "Checkpoint",
  "number": "2.1.50",
  "title": "Practice.",
  "body": " Practice   1. In , , , . Which angle is largest?  2. Two sides of a triangle are 5 and 11. Find the range of the third side.  3. Can a triangle have sides 7, 8, 14?    1. (opposite ).  2. .  3. Yes: .   "
},
{
  "id": "thm-11",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-11",
  "type": "Theorem",
  "number": "2.1.51",
  "title": "Theorem 11 — Three Parallel Lines.",
  "body": " Theorem 11 — Three Parallel Lines   If three parallel lines cut off equal segments on one transversal, then they cut off equal segments on any other transversal.   "
},
{
  "id": "fig-thm11",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-thm11",
  "type": "Figure",
  "number": "2.1.52",
  "title": "",
  "body": " Equal spacing on one transversal gives equal spacing on any other.   Three parallel lines cut by two transversals, with equal segments marked on both.   "
},
{
  "id": "thm-12",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-12",
  "type": "Theorem",
  "number": "2.1.53",
  "title": "Theorem 12 — Line Parallel to Base.",
  "body": " Theorem 12 — Line Parallel to Base   In , if a line parallel to cuts in the ratio , then it also cuts in the ratio .   "
},
{
  "id": "fig-thm12",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-thm12",
  "type": "Figure",
  "number": "2.1.54",
  "title": "",
  "body": " A line parallel to the base divides both sides in the same ratio.   A triangle with line DE parallel to BC cutting sides AB and AC in the ratio s to t.   "
},
{
  "id": "thm-13",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-13",
  "type": "Theorem",
  "number": "2.1.55",
  "title": "Theorem 13 — Similar Triangles.",
  "body": " Theorem 13 — Similar Triangles   If two triangles are similar (all angles equal), their sides are proportional:   "
},
{
  "id": "fig-thm13",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-thm13",
  "type": "Figure",
  "number": "2.1.56",
  "title": "",
  "body": " Similar triangles: same shape, proportional sides.   Two triangles of different sizes with matching angles and a scale factor arrow.   "
},
{
  "id": "ex-thm12-ratio",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-thm12-ratio",
  "type": "Example",
  "number": "2.1.57",
  "title": "Using Theorem 12.",
  "body": " Using Theorem 12   in . , , . Find .    , so .   "
},
{
  "id": "ex-thm13-scale",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-thm13-scale",
  "type": "Example",
  "number": "2.1.58",
  "title": "Similar Triangles.",
  "body": " Similar Triangles   Two similar triangles have sides 6, 8, 10 and the shortest side of the second is 9. Find the other sides.    Scale factor . Sides: 9, 12, 15.   "
},
{
  "id": "ex-shadows",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-shadows",
  "type": "Example",
  "number": "2.1.59",
  "title": "Shadows.",
  "body": " Shadows   A 2 m pole casts a 3 m shadow. A building casts an 18 m shadow. Find the building height.    , so m.   "
},
{
  "id": "ex-ratio-practice",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-ratio-practice",
  "type": "Checkpoint",
  "number": "2.1.60",
  "title": "Practice.",
  "body": " Practice   1. in . , , . Find .  2. Two similar triangles have areas . A side of the smaller is 10. Find the corresponding side of the larger.  3. A flagpole casts an 8 m shadow. A 1.7 m person nearby casts a 2 m shadow. Find the flagpole height.    1. .  2. Side ratio , so larger side .  3. m.   "
},
{
  "id": "def-base-height",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-base-height",
  "type": "Definition",
  "number": "2.1.61",
  "title": "Base, Apex, Height.",
  "body": " Base, Apex, Height   Choose one side of a triangle as the base . The opposite vertex is the apex . The perpendicular distance from the apex to the line containing the base is the height (or altitude ).   "
},
{
  "id": "thm-16",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-16",
  "type": "Theorem",
  "number": "2.1.62",
  "title": "Theorem 16 — Base × Height Is Constant.",
  "body": " Theorem 16 — Base × Height Is Constant   For a triangle, base × height does not depend on which side is chosen as the base.   "
},
{
  "id": "fig-area-tri",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-area-tri",
  "type": "Figure",
  "number": "2.1.63",
  "title": "",
  "body": " Area of a triangle = ½ × base × height.   A triangle with base and height marked.   "
},
{
  "id": "thm-17",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-17",
  "type": "Theorem",
  "number": "2.1.64",
  "title": "Theorem 17 — Diagonal Bisects Area.",
  "body": " Theorem 17 — Diagonal Bisects Area   A diagonal of a parallelogram bisects its area.   "
},
{
  "id": "thm-18",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-18",
  "type": "Theorem",
  "number": "2.1.65",
  "title": "Theorem 18 — Area of a Parallelogram.",
  "body": " Theorem 18 — Area of a Parallelogram   Area of a parallelogram = base × height.   "
},
{
  "id": "fig-area-pgrm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-area-pgrm",
  "type": "Figure",
  "number": "2.1.66",
  "title": "",
  "body": " Area of a parallelogram. The diagonal splits it into two equal triangles.   A parallelogram with base and height marked and a diagonal drawn.   "
},
{
  "id": "ex-area-two-altitudes",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-area-two-altitudes",
  "type": "Example",
  "number": "2.1.67",
  "title": "Two Altitudes.",
  "body": " Two Altitudes   with height 6. . Find the height from to .    Theorem 16: , so .   "
},
{
  "id": "ex-area-pgram",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-area-pgram",
  "type": "Example",
  "number": "2.1.68",
  "title": "Parallelogram.",
  "body": " Parallelogram   has , height 8. Find the area of .    Parallelogram area = . By Theorem 17: .   "
},
{
  "id": "ex-area-practice",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-area-practice",
  "type": "Checkpoint",
  "number": "2.1.69",
  "title": "Practice.",
  "body": " Practice   1. Triangle: base 15, height 8. Find area.  2. Area of triangle is 42, base is 12. Find height.  3. Parallelogram sides 20 and 13, height 12 on the side 20. Find area and the other height.    1. 60. 2. 7. 3. Area = 240; .   "
},
{
  "id": "def-circle-terms",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-circle-terms",
  "type": "Definition",
  "number": "2.1.70",
  "title": "Circle Terminology.",
  "body": " Circle Terminology   A circle is the set of all points at a fixed distance (the radius ) from a fixed point (the centre ). A chord is a segment joining two points on the circle. A diameter is a chord through the centre. A tangent is a line that touches the circle at exactly one point — the point of contact .   "
},
{
  "id": "thm-20",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-20",
  "type": "Theorem",
  "number": "2.1.71",
  "title": "Theorem 20 — Tangent ⊥ Radius.",
  "body": " Theorem 20 — Tangent ⊥ Radius   (1) A tangent is perpendicular to the radius at the point of contact.  (2) Conversely, a line perpendicular to the radius at a point on the circle is a tangent.   "
},
{
  "id": "fig-tangent-thm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-tangent-thm",
  "type": "Figure",
  "number": "2.1.72",
  "title": "",
  "body": " Tangent ⊥ radius at the point of contact.   A circle with a tangent at P and radius OP, right angle marked.   "
},
{
  "id": "thm-21",
  "level": "2",
  "url": "sec-synthetic-geometry.html#thm-21",
  "type": "Theorem",
  "number": "2.1.73",
  "title": "Theorem 21 — Perpendicular from Centre Bisects Chord.",
  "body": " Theorem 21 — Perpendicular from Centre Bisects Chord   (1) The perpendicular from the centre to a chord bisects the chord.  (2) The perpendicular bisector of a chord passes through the centre.   "
},
{
  "id": "fig-chord-thm",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-chord-thm",
  "type": "Figure",
  "number": "2.1.74",
  "title": "",
  "body": " Perpendicular from centre bisects the chord.   A circle with chord AB and perpendicular from centre O to midpoint M.   "
},
{
  "id": "cor-6",
  "level": "2",
  "url": "sec-synthetic-geometry.html#cor-6",
  "type": "Corollary",
  "number": "2.1.75",
  "title": "Corollary 6 — Common Tangent.",
  "body": " Corollary 6 — Common Tangent   If two circles share a common tangent at one point, the two centres and that point are collinear.   "
},
{
  "id": "fig-cor6",
  "level": "2",
  "url": "sec-synthetic-geometry.html#fig-cor6",
  "type": "Figure",
  "number": "2.1.76",
  "title": "",
  "body": " Common tangent: centres and contact point are collinear.   Two circles with a common tangent, centres and contact point on the same line.   "
},
{
  "id": "ex-tangent-pythag",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-tangent-pythag",
  "type": "Example",
  "number": "2.1.77",
  "title": "Tangent Length.",
  "body": " Tangent Length   Radius 5, . Find tangent length .    . .   "
},
{
  "id": "ex-chord-dist",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-chord-dist",
  "type": "Example",
  "number": "2.1.78",
  "title": "Chord Distance.",
  "body": " Chord Distance   Chord length 24, radius 13. Find distance from centre to chord.    Half-chord = 12. .   "
},
{
  "id": "ex-circles-practice",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-circles-practice",
  "type": "Checkpoint",
  "number": "2.1.79",
  "title": "Practice.",
  "body": " Practice   1. Radius 6, . Find tangent length.  2. Radius 10, distance to chord = 6. Find chord length.  3. Two parallel chords (lengths 12, 16) in a circle of radius 10. Find the distance between them (two cases).    1. 8. 2. 16. 3. Same side: 2. Opposite: 14.   "
},
{
  "id": "con-16-3",
  "level": "2",
  "url": "sec-synthetic-geometry.html#con-16-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circumcentre "
},
{
  "id": "con-17-3",
  "level": "2",
  "url": "sec-synthetic-geometry.html#con-17-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "incentre inradius "
},
{
  "id": "con-21-2",
  "level": "2",
  "url": "sec-synthetic-geometry.html#con-21-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centroid "
},
{
  "id": "def-quad-types",
  "level": "2",
  "url": "sec-synthetic-geometry.html#def-quad-types",
  "type": "Definition",
  "number": "2.1.80",
  "title": "Quadrilateral Types.",
  "body": " Quadrilateral Types   A quadrilateral has four sides. A parallelogram : both pairs of opposite sides parallel. A rectangle : parallelogram with all right angles. A rhombus : parallelogram with all sides equal. A square : both a rectangle and a rhombus.   "
},
{
  "id": "ex-mix-1",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-mix-1",
  "type": "Checkpoint",
  "number": "2.1.81",
  "title": "Tangent and Chord.",
  "body": " Tangent and Chord   Circle with centre , radius 10. Chord has length 16. Tangent at meets line extended at . Find .   Theorem 21 first, then Theorem 20 + Pythagoras.    Half-chord = 8. Distance from centre to chord: . Using similar right triangles: .   "
},
{
  "id": "ex-mix-2",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-mix-2",
  "type": "Checkpoint",
  "number": "2.1.82",
  "title": "Similar Triangles and Area.",
  "body": " Similar Triangles and Area   , , . Area of . Find area of .   150   . Area scales by . Area = .   "
},
{
  "id": "ex-mix-3",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-mix-3",
  "type": "Checkpoint",
  "number": "2.1.83",
  "title": "Circumcentre.",
  "body": " Circumcentre   , , . Show it is right-angled. Find the circumcentre and circumradius.   Right angle at . Circumcentre , radius 5.   (Theorem 15). is a diameter (Corollary 4). Midpoint = , radius .   "
},
{
  "id": "ex-mix-4",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-mix-4",
  "type": "Checkpoint",
  "number": "2.1.84",
  "title": "Triangle Inequality with Algebra.",
  "body": " Triangle Inequality with Algebra   Sides , , . Find the range of .   (with all sides positive, i.e. , combined: )  "
},
{
  "id": "ex-mix-5",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-mix-5",
  "type": "Checkpoint",
  "number": "2.1.85",
  "title": "Parallel Chords.",
  "body": " Parallel Chords   Parallel chords of lengths 12 and 16 in a circle of radius 10. Distance between them?   Same side: 2. Opposite: 14.  "
},
{
  "id": "ex-mix-6",
  "level": "2",
  "url": "sec-synthetic-geometry.html#ex-mix-6",
  "type": "Checkpoint",
  "number": "2.1.86",
  "title": "Construction Description.",
  "body": " Construction Description   Describe how to construct the circumcircle of a triangle. State the theorem that justifies your method.    Construct perpendicular bisectors of two sides; they meet at the circumcentre. Draw circle from circumcentre through any vertex. Justified by Theorem 21(2).   "
},
{
  "id": "sec-coordinate-geometry",
  "level": "1",
  "url": "sec-coordinate-geometry.html",
  "type": "Section",
  "number": "2.2",
  "title": "Co-ordinate Geometry",
  "body": " Co-ordinate Geometry   Co-ordinate geometry connects algebra and geometry. We use coordinates to describe points, and equations to describe lines and circles. The formulae on pages 17–19 of your log tables are your toolkit — but understanding the properties and anatomy of each formula is what makes them powerful.    The Line   Before we begin co-ordinate geometry, we review some essential notation and ideas from Junior Cycle. Everything in this section builds on what you already know — we are simply making it more precise and more powerful.    Notation Review (Log Tables p. 17)  In co-ordinate geometry, we work with points, lines, and segments. The notation matters — it tells us exactly what we mean.   Geometry Notation    Symbol  Meaning     The line through and     The line segment from to     The distance from to     The vector from to     Notice the difference: extends forever in both directions, has endpoints, and is a number — a length. Get comfortable reading and writing these. They appear constantly in exam questions and marking schemes.    What Is a Line?  A line is a set of points . Every point on the line satisfies the equation of that line. We call a variable point — it can be any point on the line.  By contrast, is a fixed point — a known, specific point on the line. Think of it as an anchor or reference point. Much of co-ordinate geometry is about the relationship between a fixed point and a variable point on the same line.    Slope (Log Tables p. 18)  Given two points and , the slope of line is:   Read this aloud: the slope of line — not just the slope of and . The slope belongs to the line , not to the points.    Anatomy of the Slope Formula  Let us decompose the formula. The numerator is the rise — the vertical change. The denominator is the run — the horizontal change. So slope is:   Every line segment can be decomposed into a horizontal and a vertical component — a supporting triangle . The slope measures how these two components compare.  This is a relative comparison . The subtraction means we don't care where the points are in absolute terms — only their position relative to each other . A line through and has the same slope as a line through and .    Properties of Slope  Is the slope formula commutative? Yes. It does not matter which point you call and which you call . If you swap them, both the numerator and denominator change sign, and .  However, good practice is to let the second point be the one further to the right. This way the run is positive, and the sign of the slope comes entirely from the rise. This makes it easier to see whether the line is increasing or decreasing:   Slope and Direction    Rise  Run  Slope  Line    Positive  Positive  Positive  Increasing (goes uphill left to right)    Negative  Positive  Negative  Decreasing (goes downhill left to right)    Zero  Positive  Zero  Horizontal    Any  Zero  Undefined  Vertical       Connections to Junior Cycle  The slope formula connects to several ideas from the Number strand (JC spec N.1):  Decomposition: We decompose the change between two points into a vertical part (rise) and a horizontal part (run). This is the same idea as decomposing numbers or operations into simpler parts.  Commutativity: We saw that the slope formula is commutative with respect to swapping points. This connects directly to the commutative property of multiplication and division of signed numbers (JC spec N.1b).  Relative comparison: Slope is a ratio. It uses subtraction to compare positions relatively, not absolutely (JC spec N.3a). The actual coordinates don't matter — only the differences do.    Calculating Slope   Find the slope of line where and .    With on the right ( ):   The rise is (positive — going up), the run is (positive — going right). The line is increasing.     Distance (Log Tables p. 18)  The distance from to is:   Read this as: the square root of the sum of two squares . The two squares are the rise squared and the run squared. This is Pythagoras applied to the supporting triangle.  Is this formula commutative? Yes — and for a stronger reason than slope. Subtraction is not commutative: . But squaring removes the sign : . So it genuinely does not matter which point comes first in the distance formula.    Calculating Distance   Find where and .        Midpoint (Log Tables p. 18)  The midpoint of is:   This is the mean of the -coordinates and the mean of the -coordinates. The same idea of average that you know from the Statistics strand.  Notice the crucial difference from slope and distance: midpoint uses addition , not subtraction. This is an absolute comparison — where the midpoint is depends on where the actual points are, not just on their relative position. Move both points 10 units to the right and the midpoint moves too.    Slope, Distance, Midpoint — Compared   Comparing the Three Key Formulae    Formula  Operation  Comparison Type  Commutative?    Slope  Subtraction (ratio)  Relative  Yes (sign cancels)    Distance  Subtraction (squared)  Relative  Yes (squaring removes sign)    Midpoint  Addition (mean)  Absolute  Yes (addition is commutative)       Equation of a Line (Log Tables p. 18)  Now we connect slope to the equation of a line. Start with the slope formula, but replace the second point with the variable point :   Multiply both sides by and we get:   This is the point-slope formula . It is not named on the log tables, but it is the first equation given under equation of . It says: if you know one fixed point and the slope , you can write the equation of the line.  The second equation on the log tables is:   This is the slope-intercept formula (or better: intercept-slope , because that is the order you see it). Here is the -intercept — where the line crosses the -axis. You get this form by expanding the point-slope formula and collecting terms.    Finding the Equation of a Line   Find the equation of the line through with slope .    Using the point-slope formula with and :   In slope-intercept form: , so the -intercept is .     Area of Triangle (Log Tables p. 18)  The area of a triangle with one vertex at the origin and the other two at and is:   Think of it this way: and are the areas of two rectangles — one built from the coordinates of stretched to , and the other from stretched to . The difference gives twice the area of the triangle. The is there because a triangle is half a parallelogram.    What to Ignore (HL Content)  The following formulae from the log tables (p. 19) are Higher Level only. They are NOT on the Ordinary Level course.  Cross these out on your log tables so you are not tempted to use them:  Perpendicular distance from a point to a line: — HL only .  Angle between two lines : — HL only .  Point dividing in ratio (bottom of p. 18) — HL only .  A common mistake in OL exam scripts is to attempt these formulae. If you see them, ignore them. They are not on your course and using them incorrectly will cost you marks.    Slope Practice   Find the slope of line where and .    Let be on the right since . What is the rise? What is the run?       With on the right:   The rise is (going down) and the run is (going right). The line is decreasing.     Distance Practice   Find where and .           Midpoint Practice   Find the midpoint of where and .           Equation of a Line   Find the equation of line where and . Give your answer in the form .    You already found the slope in a previous exercise. Now use the point-slope formula with either point.       Using the point-slope formula with and :       The Circle   The circle is one of the most examined topics at Ordinary Level. Every year, Paper 2 asks you to do some combination of: write down the centre and radius, write the equation, find the radius, investigate if a point is on\/inside\/outside, construct a circle on a diagram, and work out the centre from geometric clues. This section trains each skill separately, then combines them in exam-style problems.  Every worked solution follows Pólya's four-step method :  Step 1 — Understand: State the problem in your own words. Identify the unknowns, the given information, and which formulas or facts are relevant.  Step 2 — Plan: Choose a strategy — draw a diagram, write an equation, work backwards, use substitution, look for a pattern.  Step 3 — Execute: Carry out the plan step by step, showing all working.  Step 4 — Review: Check your answer is correct and reasonable. Does it make sense on the diagram? Can you verify it a different way?       The Equation of a Circle  A circle is the set of all points at a fixed distance (the radius ) from a fixed point (the centre ).  Using the distance formula, a point lies on the circle exactly when:   This is the equation you need. It is not in the log tables, but it comes directly from the distance formula (p. 18) applied to the centre and any point on the circle.    The circle with centre and radius .   A circle on a coordinate grid showing centre (h,k), radius r, and a general point (x,y) on the circle with the right triangle formed by (x-h) and (y-k).     Special Case: Centre at the Origin  When the centre is , the equation simplifies to:     The circle : centre , radius 3.   A circle centred at the origin with radius 3 on a coordinate grid.        Skill 1: \"Write down the centre and radius\"  When the equation is in the form , you read off:  Centre = . Be careful with signs — a inside the bracket means the coordinate is negative .  Radius = . The number on the right is , not .    LC 2023 Paper 2 OL — Q2(a)(i)   is the circle . Write down the centre and radius of the circle .    Step 1 — Understand: We are given an equation in the form . We need the centre and the radius.  Step 2 — Plan:  Appreciate that is the same as . Compare with the general form .  Step 3 — Execute:  , , so Centre = .  Appreciate that , so .  Radius = .  Step 4 — Review: A circle centred at the origin with radius 5 — this matches the simple form . ✓     LC 2024 Paper 2 OL — Q4(a)(i)   The circle has equation . Write down the centre and radius of .    Step 1 — Understand: The circle formula is given. Identify the values of , , and .  Step 2 — Plan:  Work backwards — compare with and read off the values. Be careful: means .  Step 3 — Execute:  , and so .  Centre = .  , so .  Step 4 — Review: The centre has a negative -coordinate because of the sign inside the bracket — a common trap. ✓     Reading the Origin Form   Write down the centre and radius of: (a) (b) (c) .    (a) Centre , radius .  (b) Centre , radius .  (c) Centre , radius .        Skill 2: \"Write down the equation\"  Given the centre and radius , substitute into the formula. Remember to square the radius on the right-hand side.    LC 2024 Paper 2 OL — Q3(a)(i)   A circle has centre and radius 2. Write down the equation of .    Step 1 — Understand:  Identify the values: , , . We need the equation of the circle.  Step 2 — Plan: Use the equation of a circle centred on with radius : substitute into .  Step 3 — Execute:    Step 4 — Review: Reading back: centre ✓, radius ✓.     Practice: Writing Equations   Write the equation of each circle:  1. Centre , radius 6.  2. Centre , radius 3.  3. Centre , radius .  4. Centre , radius 4.    1.  2.  3.  4.        Skill 3: \"Show that the point is on the circle\"  When the exam says \"show that\" , it means prove . You prove a point is on the circle by illustrating that substitution of the point into the equation gives a true number statement .    LC 2023 Paper 2 OL — Q2(a)(ii)   is the circle . Show that the point is on the circle .    Step 1 — Understand: \"Show that\" means prove . We must illustrate that substituting the point into the equation gives a true statement.  Step 2 — Plan: Substitute and into the left-hand side of and check that it equals 25.  Step 3 — Execute:  ✓  Since is a true statement, the point is on the circle.  Step 4 — Review: Notice — this is a Pythagorean triple (3, 4, 5), which confirms our answer. ✓        Skill 4: \"Write down the coordinates of other points on the circle\"  Once you know the centre and radius, you can find other integer points. The easiest method: translate  along the -axis or along the -axis from the centre. These four points are always on the circle.  Common Pythagorean triples are also useful for finding extra points: , , , .    LC 2023 Paper 2 OL — Q2(a)(iii)   is the circle . Write down the co-ordinates of two other points that are also on the circle .    Step 1 — Understand: The circle has centre and radius 5. We need two points (other than ) whose coordinates satisfy .  Step 2 — Plan: The easiest method is to translate  along the -axis from the centre . Since is a Pythagorean triple, we can also use points like , , , .  Step 3 — Execute:  and .  Check: ✓ and ✓.  Also allowed: and .  Step 4 — Review: Moving 5 units along an axis from the origin always lands on the circle — this is the simplest approach. ✓        Skill 5: \"Investigate if a point is on, inside, or outside\"  Substitute the point into the left-hand side of the equation and compare with :  Recall  compared with :  Result : the point is outside .  Result : the point is inside .  Result : the point is on the circle.    The algebraic test for a point's position relative to a circle.   A circle with three points marked: one on the circle (green), one inside (blue), one outside (red), with the substitution test shown below.     LC 2024 Paper 2 OL — Q4(a)(ii)   The circle has equation . Use algebra to investigate if the point is on, inside, or outside .    Step 1 — Understand: We have the circle equation and a point. We need to determine the point's position relative to the circle.  Step 2 — Plan:  Recall the test: substitute the point into the LHS of the equation and compare the result with .  Step 3 — Execute: Substitute :   Compare: .  Since the result is greater than  , the point is outside the circle.  Step 4 — Review: The point is further from the centre than the radius, so \"outside\" makes sense. ✓     Practice: On, Inside, or Outside?   The circle has equation .  Investigate each point:  1.  2.  3.  4.    1. → ON.  2. → INSIDE.  3. → ON.  4. → INSIDE.        Skill 6: \"Find the radius\"  If you know the centre and a point on the circle, the radius is the distance between them. Use the distance formula (log tables p. 18):     Finding the Radius from Centre and Point   The circle has centre . The point is on the circle. Find the radius.    Step 1 — Understand: We know the centre and a point on the circle. The radius is the distance from centre to any point on the circle.  Step 2 — Plan: Use the distance formula.  Step 3 — Execute:   Step 4 — Review: We see the Pythagorean triple again — this is a very common pattern in LC questions. ✓        Skill 7: Matching Circles to Equations  The 2025 paper showed three circles on a diagram and asked you to match each to its equation. The strategy:  Step 1: Read the centre from the equation. If the equation is , the centre is .  Step 2: Read the radius ( ).  Step 3: Check the diagram — which circle has that centre and roughly that size?    LC 2025 Q3(a) Style   Three circles , , are shown on a diagram. From the diagram: is a small circle at the origin, is a larger circle at the origin, and is a small circle centred near . Match each to its equation:  (A)  (B)  (C)    (A) Centre , radius 3 — the larger circle at the origin → .  (B) Centre , radius 2 — off-centre → .  (C) Centre , radius 1 — the small one at the origin → .        Skill 8: \"Central symmetry through a point\"  Recall : central symmetry through a point means is the midpoint between each point and its image. If the centre of circle is and the symmetry is through , then the image circle has centre and the same radius.    LC 2024 Paper 2 OL — Q3(a)(ii)   A circle has centre and radius 2. Circle is the image of circle by central symmetry through the point . Work out the centre and the radius of circle .    Step 1 — Understand:  Classify this as an instruction about transformations. Central symmetry through means is the midpoint between each original point and its image.  Step 2 — Plan:  Recall that central symmetry in maps to . The radius does not change under symmetry.  Step 3 — Execute: Centre of is . Image centre: .  Centre of = . Radius of = 2.  Step 4 — Review: Check: midpoint of and is ✓. Radius unchanged ✓.        Skill 9: \"Construct this circle on the co-ordinate diagram\"  To draw a circle on the co-ordinate diagram:  1. Plot the centre.  2. Use the run step to mark a point units to the left\/right of the centre (along the -direction).  3. Use the rise step to mark a point units above\/below the centre (along the -direction).  4. Place your compass point on the centre and draw through these points. In the exam, use a compass — freehand circles lose marks.    LC 2024 Paper 2 OL — Q4(b)   A different circle has centre and radius 3. Construct this circle on the co-ordinate diagram.    Step 1 — Understand: We need to draw a circle with centre and radius 3 on the grid.  Step 2 — Plan: Place the compass point on the centre . Count 3 units straight over (or back) for a horizontal guide point, and 3 units up (or down) for a vertical guide point.  Step 3 — Execute: Mark the centre .  Right: .  Left: .  Up: .  Down: .  Set compass to radius 3 and draw through these four points.  Step 4 — Review: All four guide points should sit exactly on the circle. Check each is 3 units from the centre. ✓        Skill 10: \"Work out the radius and centre\" from Geometric Clues  The hardest circle questions give you geometric information (tangent to an axis, lowest\/highest point, passes through a point) and ask you to deduce the centre and radius. Draw a picture and use these key facts:  If the circle is tangent to the x-axis , the radius equals (the absolute value of the y-coordinate of the centre).  If the circle is tangent to the y-axis , the radius equals (the absolute value of the x-coordinate of the centre).  The lowest point is directly below the centre: .  The highest point is directly above: .    A circle tangent to the y-axis: the radius equals the x-coordinate of the centre.   A circle tangent to the y-axis, showing the radius equal to the horizontal distance from centre to axis, and the lowest point directly below the centre.     LC 2024 Paper 2 OL — Q4(c)   The point is the lowest point on a circle with centre . The y-axis is a tangent to the circle. Work out the radius and centre of .    Step 1 — Understand:  Examine what we know. We have two geometric clues: is the lowest point, and the y-axis is tangent. We need both the radius and the centre.  Step 2 — Plan:  Investigate and explore until you recognise the connections. Analyse what is telling us — use visual thinking :  Since is the lowest point, the centre is directly above it: .  Since the y-axis is tangent, the radius equals the -coordinate of the centre. The centre has -coordinate 2, so .  Step 3 — Execute:  .  Centre = .  Step 4 — Review: Check tangent to y-axis: distance from to the y-axis is 2 = ✓. Lowest point: ✓.     Practice: Geometric Clues   1. A circle has centre and is tangent to the x-axis. The radius is 3. Find (two possible answers).  2. The highest point on a circle is and the circle is tangent to the x-axis. Find the centre and radius.  3. A circle is tangent to both axes and has radius 4. The centre is in the first quadrant. Write down its equation.    1. or .  2. Tangent to x-axis means . Highest point is , so and . Since : , , . Centre .  3. Centre = . Equation: .        Skill 11: \"Find the points of intersection\" of a line and a circle  Identify the system: one equation is linear (the line) and one is non-linear (the circle). This is critical:  Elimination NEVER works for a linear–non-linear system. Elimination only works for two linear equations. You must use substitution (or plotting for intersection points).  The method: rearrange the linear equation to make (or ) the subject, then substitute into the circle equation.    LC 2023 Paper 2 OL — Q2(b)   Find the points of intersection between a circle , and the line , where:  :  :    Step 1 — Understand:  Identify  as a linear equation and as a non-linear equation. We need the points where the line crosses the circle.  Step 2 — Plan:  Appreciate that substitution (or plotting) is required — elimination does not work for a linear–non-linear system. Rearrange the line for and substitute into the circle.  Step 3 — Execute: From : .  Substitute into :     Divide through by 26:    or .  When : . Point: .  When : . Point: .  Step 4 — Review: Check on the circle: ✓.  Check on the line: ✓.  Check on the circle: ✓.  Check on the line: ✓.        Skill 12: \"Find the slope of the tangent line\"  The tangent to a circle at any point is perpendicular to the radius at that point. The method is:  1. Find the slope of the radius (from centre to the point of tangency).  2. Calculate the slope of the tangent: (negative reciprocal, since perpendicular lines have slopes whose product is ).  3. Use the point and slope in the point-slope formula: .    LC 2024 Paper 2 OL — Q3(b)   The circle has centre . The point is also on the circle and is the point of contact for the tangent line . Find the slope of , and hence, work out the slope of the tangent line .    Step 1 — Understand:  Appreciate that the point of tangency is on the tangent line, and the centre is not on the tangent. The radius is perpendicular to the tangent at .  Step 2 — Plan:  Explain the method : find the slope of the radius first ( ), then calculate the slope of the tangent ( ) using the perpendicular relationship. Finally, use point and slope in the point-slope formula.  Step 3 — Execute: Slope of :   Slope of tangent (perpendicular to radius):   Equation of tangent using :      Step 4 — Review: Check the product of slopes: ✓ (perpendicular).  Check on the tangent: ✓.        Interactive: Explore the Circle Equation  Use this Desmos applet to explore how the equation changes as you drag the centre and adjust the radius. Notice how the equation updates in real time.   Try these challenges in Desmos:  1. Set the centre to and radius to 2. Check that the equation matches the LC 2024 Q3(a)(i) example above.  2. Set the centre to . Change the radius. What happens to the equation?  3. Make a circle tangent to the y-axis. What do you notice about the radius and the x-coordinate of the centre?       Exam-Style Mixed Problems  These problems combine multiple skills, just like the real exam. Attempt each one fully before checking the answer. Use Pólya's four steps on every question.    Mixed Problem 1   A circle has centre and passes through the point .  (a) Find the radius.  (b) Write the equation of the circle.  (c) Investigate whether is on, inside, or outside the circle.    (a) .  (b) .  (c) → ON the circle.     Mixed Problem 2   The circle has equation .  (a) Write down the centre and radius.  (b) Write down the coordinates of the highest and lowest points on .  (c) Is the point inside or outside ?    (a) Centre , radius 6.  (b) Highest: . Lowest: .  (c) → INSIDE.     Mixed Problem 3   A circle has its centre on the positive x-axis and is tangent to both the x-axis and the line .  (a) Find the radius and the y-coordinate of the centre.  (b) The point is on the circle. Find the x-coordinate of the centre and write the equation.    (a) If tangent to and , the centre must be halfway between them.    (a) Centre is midway between and , so and .  (b) Centre is . Substitute : , so , giving . Since centre is on the positive x-axis: . Equation: .     Mixed Problem 4   The circle has centre and passes through the origin .  (a) Find the radius.  (b) Write the equation of .  (c) Write down the coordinates of the point on that is furthest from the origin.    (c) The furthest point from the origin is on the far side of the circle from , along the line through the origin and the centre.    (a) .  (b) .  (c) Furthest point is diametrically opposite the origin through the centre: .     Mixed Problem 5 (Challenge)   A circle passes through the points , , and .  (a) Find the midpoint of .  (b) Show that the centre of the circle is the midpoint of .  (c) Find the radius and write the equation of the circle.    What type of triangle is ? What theorem tells you about the circumscribed circle of a right-angled triangle?    (a) Midpoint of = .  (b) Triangle is right-angled at (check: ). For a right-angled triangle, the circumcentre is the midpoint of the hypotenuse.  (c) . Centre . Equation: .     Mixed Problem 6 (Challenge)   Two circles have equations and .  (a) Write down the centre and radius of each circle.  (b) Find the distance between the centres.  (c) Do the circles overlap, touch, or are they separate? Explain your reasoning.    (a) Circle 1: centre , . Circle 2: centre , .  (b) Distance = 7.  (c) , so the circles overlap (two intersection points). If the distance equalled they would touch externally.     "
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
  "id": "par-circle-equation-2",
  "level": "2",
  "url": "sec-coordinate-geometry.html#par-circle-equation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "radius centre "
},
{
  "id": "fig-circle-general-cg",
  "level": "2",
  "url": "sec-coordinate-geometry.html#fig-circle-general-cg",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": " The circle with centre and radius .   A circle on a coordinate grid showing centre (h,k), radius r, and a general point (x,y) on the circle with the right triangle formed by (x-h) and (y-k).   "
},
{
  "id": "fig-circle-origin-cg",
  "level": "2",
  "url": "sec-coordinate-geometry.html#fig-circle-origin-cg",
  "type": "Figure",
  "number": "2.2.12",
  "title": "",
  "body": " The circle : centre , radius 3.   A circle centred at the origin with radius 3 on a coordinate grid.   "
},
{
  "id": "ex-lc2023-q2a-i",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2023-q2a-i",
  "type": "Example",
  "number": "2.2.13",
  "title": "LC 2023 Paper 2 OL — Q2(a)(i).",
  "body": " LC 2023 Paper 2 OL — Q2(a)(i)   is the circle . Write down the centre and radius of the circle .    Step 1 — Understand: We are given an equation in the form . We need the centre and the radius.  Step 2 — Plan:  Appreciate that is the same as . Compare with the general form .  Step 3 — Execute:  , , so Centre = .  Appreciate that , so .  Radius = .  Step 4 — Review: A circle centred at the origin with radius 5 — this matches the simple form . ✓   "
},
{
  "id": "ex-lc2024-q4a-i",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2024-q4a-i",
  "type": "Example",
  "number": "2.2.14",
  "title": "LC 2024 Paper 2 OL — Q4(a)(i).",
  "body": " LC 2024 Paper 2 OL — Q4(a)(i)   The circle has equation . Write down the centre and radius of .    Step 1 — Understand: The circle formula is given. Identify the values of , , and .  Step 2 — Plan:  Work backwards — compare with and read off the values. Be careful: means .  Step 3 — Execute:  , and so .  Centre = .  , so .  Step 4 — Review: The centre has a negative -coordinate because of the sign inside the bracket — a common trap. ✓   "
},
{
  "id": "ex-read-circle-eq-2",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-read-circle-eq-2",
  "type": "Example",
  "number": "2.2.15",
  "title": "Reading the Origin Form.",
  "body": " Reading the Origin Form   Write down the centre and radius of: (a) (b) (c) .    (a) Centre , radius .  (b) Centre , radius .  (c) Centre , radius .   "
},
{
  "id": "ex-lc2024-q3a-i",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2024-q3a-i",
  "type": "Example",
  "number": "2.2.16",
  "title": "LC 2024 Paper 2 OL — Q3(a)(i).",
  "body": " LC 2024 Paper 2 OL — Q3(a)(i)   A circle has centre and radius 2. Write down the equation of .    Step 1 — Understand:  Identify the values: , , . We need the equation of the circle.  Step 2 — Plan: Use the equation of a circle centred on with radius : substitute into .  Step 3 — Execute:    Step 4 — Review: Reading back: centre ✓, radius ✓.   "
},
{
  "id": "ex-write-equations-practice",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-write-equations-practice",
  "type": "Checkpoint",
  "number": "2.2.17",
  "title": "Practice: Writing Equations.",
  "body": " Practice: Writing Equations   Write the equation of each circle:  1. Centre , radius 6.  2. Centre , radius 3.  3. Centre , radius .  4. Centre , radius 4.    1.  2.  3.  4.   "
},
{
  "id": "ex-lc2023-q2a-ii",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2023-q2a-ii",
  "type": "Example",
  "number": "2.2.18",
  "title": "LC 2023 Paper 2 OL — Q2(a)(ii).",
  "body": " LC 2023 Paper 2 OL — Q2(a)(ii)   is the circle . Show that the point is on the circle .    Step 1 — Understand: \"Show that\" means prove . We must illustrate that substituting the point into the equation gives a true statement.  Step 2 — Plan: Substitute and into the left-hand side of and check that it equals 25.  Step 3 — Execute:  ✓  Since is a true statement, the point is on the circle.  Step 4 — Review: Notice — this is a Pythagorean triple (3, 4, 5), which confirms our answer. ✓   "
},
{
  "id": "ex-lc2023-q2a-iii",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2023-q2a-iii",
  "type": "Example",
  "number": "2.2.19",
  "title": "LC 2023 Paper 2 OL — Q2(a)(iii).",
  "body": " LC 2023 Paper 2 OL — Q2(a)(iii)   is the circle . Write down the co-ordinates of two other points that are also on the circle .    Step 1 — Understand: The circle has centre and radius 5. We need two points (other than ) whose coordinates satisfy .  Step 2 — Plan: The easiest method is to translate  along the -axis from the centre . Since is a Pythagorean triple, we can also use points like , , , .  Step 3 — Execute:  and .  Check: ✓ and ✓.  Also allowed: and .  Step 4 — Review: Moving 5 units along an axis from the origin always lands on the circle — this is the simplest approach. ✓   "
},
{
  "id": "fig-point-position-cg",
  "level": "2",
  "url": "sec-coordinate-geometry.html#fig-point-position-cg",
  "type": "Figure",
  "number": "2.2.20",
  "title": "",
  "body": " The algebraic test for a point's position relative to a circle.   A circle with three points marked: one on the circle (green), one inside (blue), one outside (red), with the substitution test shown below.   "
},
{
  "id": "ex-lc2024-q4a-ii",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2024-q4a-ii",
  "type": "Example",
  "number": "2.2.21",
  "title": "LC 2024 Paper 2 OL — Q4(a)(ii).",
  "body": " LC 2024 Paper 2 OL — Q4(a)(ii)   The circle has equation . Use algebra to investigate if the point is on, inside, or outside .    Step 1 — Understand: We have the circle equation and a point. We need to determine the point's position relative to the circle.  Step 2 — Plan:  Recall the test: substitute the point into the LHS of the equation and compare the result with .  Step 3 — Execute: Substitute :   Compare: .  Since the result is greater than  , the point is outside the circle.  Step 4 — Review: The point is further from the centre than the radius, so \"outside\" makes sense. ✓   "
},
{
  "id": "ex-investigate-practice",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-investigate-practice",
  "type": "Checkpoint",
  "number": "2.2.22",
  "title": "Practice: On, Inside, or Outside?",
  "body": " Practice: On, Inside, or Outside?   The circle has equation .  Investigate each point:  1.  2.  3.  4.    1. → ON.  2. → INSIDE.  3. → ON.  4. → INSIDE.   "
},
{
  "id": "ex-find-radius",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-find-radius",
  "type": "Example",
  "number": "2.2.23",
  "title": "Finding the Radius from Centre and Point.",
  "body": " Finding the Radius from Centre and Point   The circle has centre . The point is on the circle. Find the radius.    Step 1 — Understand: We know the centre and a point on the circle. The radius is the distance from centre to any point on the circle.  Step 2 — Plan: Use the distance formula.  Step 3 — Execute:   Step 4 — Review: We see the Pythagorean triple again — this is a very common pattern in LC questions. ✓   "
},
{
  "id": "ex-matching-circles",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-matching-circles",
  "type": "Example",
  "number": "2.2.24",
  "title": "LC 2025 Q3(a) Style.",
  "body": " LC 2025 Q3(a) Style   Three circles , , are shown on a diagram. From the diagram: is a small circle at the origin, is a larger circle at the origin, and is a small circle centred near . Match each to its equation:  (A)  (B)  (C)    (A) Centre , radius 3 — the larger circle at the origin → .  (B) Centre , radius 2 — off-centre → .  (C) Centre , radius 1 — the small one at the origin → .   "
},
{
  "id": "ex-lc2024-q3a-ii",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2024-q3a-ii",
  "type": "Example",
  "number": "2.2.25",
  "title": "LC 2024 Paper 2 OL — Q3(a)(ii).",
  "body": " LC 2024 Paper 2 OL — Q3(a)(ii)   A circle has centre and radius 2. Circle is the image of circle by central symmetry through the point . Work out the centre and the radius of circle .    Step 1 — Understand:  Classify this as an instruction about transformations. Central symmetry through means is the midpoint between each original point and its image.  Step 2 — Plan:  Recall that central symmetry in maps to . The radius does not change under symmetry.  Step 3 — Execute: Centre of is . Image centre: .  Centre of = . Radius of = 2.  Step 4 — Review: Check: midpoint of and is ✓. Radius unchanged ✓.   "
},
{
  "id": "ex-lc2024-q4b",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2024-q4b",
  "type": "Example",
  "number": "2.2.26",
  "title": "LC 2024 Paper 2 OL — Q4(b).",
  "body": " LC 2024 Paper 2 OL — Q4(b)   A different circle has centre and radius 3. Construct this circle on the co-ordinate diagram.    Step 1 — Understand: We need to draw a circle with centre and radius 3 on the grid.  Step 2 — Plan: Place the compass point on the centre . Count 3 units straight over (or back) for a horizontal guide point, and 3 units up (or down) for a vertical guide point.  Step 3 — Execute: Mark the centre .  Right: .  Left: .  Up: .  Down: .  Set compass to radius 3 and draw through these four points.  Step 4 — Review: All four guide points should sit exactly on the circle. Check each is 3 units from the centre. ✓   "
},
{
  "id": "fig-tangent-y-axis-cg",
  "level": "2",
  "url": "sec-coordinate-geometry.html#fig-tangent-y-axis-cg",
  "type": "Figure",
  "number": "2.2.27",
  "title": "",
  "body": " A circle tangent to the y-axis: the radius equals the x-coordinate of the centre.   A circle tangent to the y-axis, showing the radius equal to the horizontal distance from centre to axis, and the lowest point directly below the centre.   "
},
{
  "id": "ex-lc2024-q4c",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2024-q4c",
  "type": "Example",
  "number": "2.2.28",
  "title": "LC 2024 Paper 2 OL — Q4(c).",
  "body": " LC 2024 Paper 2 OL — Q4(c)   The point is the lowest point on a circle with centre . The y-axis is a tangent to the circle. Work out the radius and centre of .    Step 1 — Understand:  Examine what we know. We have two geometric clues: is the lowest point, and the y-axis is tangent. We need both the radius and the centre.  Step 2 — Plan:  Investigate and explore until you recognise the connections. Analyse what is telling us — use visual thinking :  Since is the lowest point, the centre is directly above it: .  Since the y-axis is tangent, the radius equals the -coordinate of the centre. The centre has -coordinate 2, so .  Step 3 — Execute:  .  Centre = .  Step 4 — Review: Check tangent to y-axis: distance from to the y-axis is 2 = ✓. Lowest point: ✓.   "
},
{
  "id": "ex-work-out-practice",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-work-out-practice",
  "type": "Checkpoint",
  "number": "2.2.29",
  "title": "Practice: Geometric Clues.",
  "body": " Practice: Geometric Clues   1. A circle has centre and is tangent to the x-axis. The radius is 3. Find (two possible answers).  2. The highest point on a circle is and the circle is tangent to the x-axis. Find the centre and radius.  3. A circle is tangent to both axes and has radius 4. The centre is in the first quadrant. Write down its equation.    1. or .  2. Tangent to x-axis means . Highest point is , so and . Since : , , . Centre .  3. Centre = . Equation: .   "
},
{
  "id": "ex-lc2023-q2b",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2023-q2b",
  "type": "Example",
  "number": "2.2.30",
  "title": "LC 2023 Paper 2 OL — Q2(b).",
  "body": " LC 2023 Paper 2 OL — Q2(b)   Find the points of intersection between a circle , and the line , where:  :  :    Step 1 — Understand:  Identify  as a linear equation and as a non-linear equation. We need the points where the line crosses the circle.  Step 2 — Plan:  Appreciate that substitution (or plotting) is required — elimination does not work for a linear–non-linear system. Rearrange the line for and substitute into the circle.  Step 3 — Execute: From : .  Substitute into :     Divide through by 26:    or .  When : . Point: .  When : . Point: .  Step 4 — Review: Check on the circle: ✓.  Check on the line: ✓.  Check on the circle: ✓.  Check on the line: ✓.   "
},
{
  "id": "ex-lc2024-q3b",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-lc2024-q3b",
  "type": "Example",
  "number": "2.2.31",
  "title": "LC 2024 Paper 2 OL — Q3(b).",
  "body": " LC 2024 Paper 2 OL — Q3(b)   The circle has centre . The point is also on the circle and is the point of contact for the tangent line . Find the slope of , and hence, work out the slope of the tangent line .    Step 1 — Understand:  Appreciate that the point of tangency is on the tangent line, and the centre is not on the tangent. The radius is perpendicular to the tangent at .  Step 2 — Plan:  Explain the method : find the slope of the radius first ( ), then calculate the slope of the tangent ( ) using the perpendicular relationship. Finally, use point and slope in the point-slope formula.  Step 3 — Execute: Slope of :   Slope of tangent (perpendicular to radius):   Equation of tangent using :      Step 4 — Review: Check the product of slopes: ✓ (perpendicular).  Check on the tangent: ✓.   "
},
{
  "id": "ex-circle-mixed-1",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-circle-mixed-1",
  "type": "Checkpoint",
  "number": "2.2.32",
  "title": "Mixed Problem 1.",
  "body": " Mixed Problem 1   A circle has centre and passes through the point .  (a) Find the radius.  (b) Write the equation of the circle.  (c) Investigate whether is on, inside, or outside the circle.    (a) .  (b) .  (c) → ON the circle.   "
},
{
  "id": "ex-circle-mixed-2",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-circle-mixed-2",
  "type": "Checkpoint",
  "number": "2.2.33",
  "title": "Mixed Problem 2.",
  "body": " Mixed Problem 2   The circle has equation .  (a) Write down the centre and radius.  (b) Write down the coordinates of the highest and lowest points on .  (c) Is the point inside or outside ?    (a) Centre , radius 6.  (b) Highest: . Lowest: .  (c) → INSIDE.   "
},
{
  "id": "ex-circle-mixed-3",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-circle-mixed-3",
  "type": "Checkpoint",
  "number": "2.2.34",
  "title": "Mixed Problem 3.",
  "body": " Mixed Problem 3   A circle has its centre on the positive x-axis and is tangent to both the x-axis and the line .  (a) Find the radius and the y-coordinate of the centre.  (b) The point is on the circle. Find the x-coordinate of the centre and write the equation.    (a) If tangent to and , the centre must be halfway between them.    (a) Centre is midway between and , so and .  (b) Centre is . Substitute : , so , giving . Since centre is on the positive x-axis: . Equation: .   "
},
{
  "id": "ex-circle-mixed-4",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-circle-mixed-4",
  "type": "Checkpoint",
  "number": "2.2.35",
  "title": "Mixed Problem 4.",
  "body": " Mixed Problem 4   The circle has centre and passes through the origin .  (a) Find the radius.  (b) Write the equation of .  (c) Write down the coordinates of the point on that is furthest from the origin.    (c) The furthest point from the origin is on the far side of the circle from , along the line through the origin and the centre.    (a) .  (b) .  (c) Furthest point is diametrically opposite the origin through the centre: .   "
},
{
  "id": "ex-circle-mixed-5",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-circle-mixed-5",
  "type": "Checkpoint",
  "number": "2.2.36",
  "title": "Mixed Problem 5 (Challenge).",
  "body": " Mixed Problem 5 (Challenge)   A circle passes through the points , , and .  (a) Find the midpoint of .  (b) Show that the centre of the circle is the midpoint of .  (c) Find the radius and write the equation of the circle.    What type of triangle is ? What theorem tells you about the circumscribed circle of a right-angled triangle?    (a) Midpoint of = .  (b) Triangle is right-angled at (check: ). For a right-angled triangle, the circumcentre is the midpoint of the hypotenuse.  (c) . Centre . Equation: .   "
},
{
  "id": "ex-circle-mixed-6",
  "level": "2",
  "url": "sec-coordinate-geometry.html#ex-circle-mixed-6",
  "type": "Checkpoint",
  "number": "2.2.37",
  "title": "Mixed Problem 6 (Challenge).",
  "body": " Mixed Problem 6 (Challenge)   Two circles have equations and .  (a) Write down the centre and radius of each circle.  (b) Find the distance between the centres.  (c) Do the circles overlap, touch, or are they separate? Explain your reasoning.    (a) Circle 1: centre , . Circle 2: centre , .  (b) Distance = 7.  (c) , so the circles overlap (two intersection points). If the distance equalled they would touch externally.   "
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
  "body": " Transformation Geometry: Enlargements   An enlargement is a transformation that changes the size of a figure while keeping its shape. At LC OL, you need to understand how enlargements affect lengths and areas, and be able to solve problems involving them.    Centre of Enlargement and Scale Factor  An enlargement is defined by two things:  1. A fixed point called the centre of enlargement .  2. A number called the scale factor , where and .  To enlarge a point about a centre with scale factor : the image lies on the ray such that .  Every point of the figure is transformed this way. Lines from the centre through corresponding points of the object and image are called rays of enlargement .   Effect of Scale Factor    Scale Factor  Effect  Example     Image is larger than the object  : every length is doubled     Image is the same size (identity)  No change     Image is smaller than the object (reduction)  : every length is one-third     Note: when , we still call it an enlargement even though the image is smaller. Some texts use the word reduction for this case.    Effect on Lengths  Under an enlargement with scale factor , every length in the image is times the corresponding length in the object:   This applies to all lengths: sides, diagonals, perimeters, heights, radii — everything.  Since the shape is preserved and only the size changes, the object and its image are similar figures . All corresponding angles are equal. All corresponding sides are in the ratio .   Lengths Under Enlargement   A triangle with sides 6, 8, 10 is enlarged with scale factor . Find the side lengths and perimeter of the image.    Each side is multiplied by :  Sides: , , .  Perimeter of object: .  Perimeter of image: .  The perimeter also scales by .      Effect on Area  This is the key result for exam questions. Under an enlargement with scale factor :   Why ? Area depends on two dimensions (e.g. base height). Each dimension is multiplied by , so the area is multiplied by .  For example, if a rectangle has base and height , its area is . After enlargement by factor , the base becomes and the height becomes , so the new area is .  This works for any shape — triangles, circles, irregular figures — because any area can be built up from triangles, and the argument applies to each one.   Summary: Effect of Scale Factor    Quantity  Multiplied by  Example ( )    Lengths (sides, perimeter, height)      Angles  1 (unchanged)  Same angles    Area        Area Under Enlargement   A triangle has area . It is enlarged with scale factor . Find the area of the image.    Image area .  Halving the lengths reduces the area to one quarter.     Finding the Scale Factor from Areas   A shape has area . After enlargement, its area is . Find the scale factor.    , so .     Enlarging a Circle   A circle with radius 4 cm is enlarged with scale factor . Find the radius and area of the image.    New radius cm.  Original area .  Image area cm .  Check: . Correct.      Problem-Solving Exercises   Side Lengths and Area   A rectangle has dimensions . It is enlarged with scale factor . Find the dimensions, perimeter, and area of the image.    Dimensions: . Perimeter: . Area: .    New dimensions: and .  Perimeter: .  Area: .  Check with : original area ; . Correct.     Finding Scale Factor from Lengths   A triangle is enlarged about a centre . The original triangle has a side of length 5. The corresponding side in the image has length 8. Find the scale factor and the ratio of the areas.    . Area ratio .     Working Backwards from Area   A shape is enlarged and its area increases from to . Find the scale factor . If a side of the original shape is 7 cm long, find the corresponding side in the image.    . Corresponding side cm.    , so .  Image side cm.     Map Scales   On a map with scale , a lake has area . Find the actual area of the lake in km .    The scale factor from map to real life is . Remember: cm km.       Real area .  Convert: , so .  Real area .     Centre of Enlargement   Triangle has vertices , , . It is enlarged with centre and scale factor 2. Find the vertices of the image and verify that the area has increased by a factor of 4.    , , .    Each coordinate is multiplied by :  , , .  Original area: .  Image area: .  Ratio: . Confirmed.     "
},
{
  "id": "sec-enlargements-2-1",
  "level": "2",
  "url": "sec-enlargements.html#sec-enlargements-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "enlargement "
},
{
  "id": "subsec-enlargement-definition-3",
  "level": "2",
  "url": "sec-enlargements.html#subsec-enlargement-definition-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centre of enlargement "
},
{
  "id": "subsec-enlargement-definition-4",
  "level": "2",
  "url": "sec-enlargements.html#subsec-enlargement-definition-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scale factor "
},
{
  "id": "subsec-enlargement-definition-6",
  "level": "2",
  "url": "sec-enlargements.html#subsec-enlargement-definition-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rays of enlargement "
},
{
  "id": "table-scale-factor",
  "level": "2",
  "url": "sec-enlargements.html#table-scale-factor",
  "type": "Table",
  "number": "2.4.1",
  "title": "Effect of Scale Factor",
  "body": " Effect of Scale Factor    Scale Factor  Effect  Example     Image is larger than the object  : every length is doubled     Image is the same size (identity)  No change     Image is smaller than the object (reduction)  : every length is one-third    "
},
{
  "id": "subsec-enlargement-lengths-5",
  "level": "2",
  "url": "sec-enlargements.html#subsec-enlargement-lengths-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "similar figures "
},
{
  "id": "ex-enlargement-length",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlargement-length",
  "type": "Example",
  "number": "2.4.2",
  "title": "Lengths Under Enlargement.",
  "body": " Lengths Under Enlargement   A triangle with sides 6, 8, 10 is enlarged with scale factor . Find the side lengths and perimeter of the image.    Each side is multiplied by :  Sides: , , .  Perimeter of object: .  Perimeter of image: .  The perimeter also scales by .   "
},
{
  "id": "table-enlargement-summary",
  "level": "2",
  "url": "sec-enlargements.html#table-enlargement-summary",
  "type": "Table",
  "number": "2.4.3",
  "title": "Summary: Effect of Scale Factor <span class=\"process-math\">\\(k\\)<\/span>",
  "body": " Summary: Effect of Scale Factor    Quantity  Multiplied by  Example ( )    Lengths (sides, perimeter, height)      Angles  1 (unchanged)  Same angles    Area      "
},
{
  "id": "ex-enlargement-area",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlargement-area",
  "type": "Example",
  "number": "2.4.4",
  "title": "Area Under Enlargement.",
  "body": " Area Under Enlargement   A triangle has area . It is enlarged with scale factor . Find the area of the image.    Image area .  Halving the lengths reduces the area to one quarter.   "
},
{
  "id": "ex-enlargement-find-k",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlargement-find-k",
  "type": "Example",
  "number": "2.4.5",
  "title": "Finding the Scale Factor from Areas.",
  "body": " Finding the Scale Factor from Areas   A shape has area . After enlargement, its area is . Find the scale factor.    , so .   "
},
{
  "id": "ex-enlargement-circle",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlargement-circle",
  "type": "Example",
  "number": "2.4.6",
  "title": "Enlarging a Circle.",
  "body": " Enlarging a Circle   A circle with radius 4 cm is enlarged with scale factor . Find the radius and area of the image.    New radius cm.  Original area .  Image area cm .  Check: . Correct.   "
},
{
  "id": "ex-enlarge-1",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlarge-1",
  "type": "Checkpoint",
  "number": "2.4.7",
  "title": "Side Lengths and Area.",
  "body": " Side Lengths and Area   A rectangle has dimensions . It is enlarged with scale factor . Find the dimensions, perimeter, and area of the image.    Dimensions: . Perimeter: . Area: .    New dimensions: and .  Perimeter: .  Area: .  Check with : original area ; . Correct.   "
},
{
  "id": "ex-enlarge-2",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlarge-2",
  "type": "Checkpoint",
  "number": "2.4.8",
  "title": "Finding Scale Factor from Lengths.",
  "body": " Finding Scale Factor from Lengths   A triangle is enlarged about a centre . The original triangle has a side of length 5. The corresponding side in the image has length 8. Find the scale factor and the ratio of the areas.    . Area ratio .   "
},
{
  "id": "ex-enlarge-3",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlarge-3",
  "type": "Checkpoint",
  "number": "2.4.9",
  "title": "Working Backwards from Area.",
  "body": " Working Backwards from Area   A shape is enlarged and its area increases from to . Find the scale factor . If a side of the original shape is 7 cm long, find the corresponding side in the image.    . Corresponding side cm.    , so .  Image side cm.   "
},
{
  "id": "ex-enlarge-4",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlarge-4",
  "type": "Checkpoint",
  "number": "2.4.10",
  "title": "Map Scales.",
  "body": " Map Scales   On a map with scale , a lake has area . Find the actual area of the lake in km .    The scale factor from map to real life is . Remember: cm km.       Real area .  Convert: , so .  Real area .   "
},
{
  "id": "ex-enlarge-5",
  "level": "2",
  "url": "sec-enlargements.html#ex-enlarge-5",
  "type": "Checkpoint",
  "number": "2.4.11",
  "title": "Centre of Enlargement.",
  "body": " Centre of Enlargement   Triangle has vertices , , . It is enlarged with centre and scale factor 2. Find the vertices of the image and verify that the area has increased by a factor of 4.    , , .    Each coordinate is multiplied by :  , , .  Original area: .  Image area: .  Ratio: . Confirmed.   "
},
{
  "id": "sec-number-systems",
  "level": "1",
  "url": "sec-number-systems.html",
  "type": "Section",
  "number": "3.1",
  "title": "Number Systems",
  "body": " Number Systems   Mathematics uses different types of numbers for different purposes. In this section, we meet the four main number sets, understand how they are related, and learn to work fluently with each one. We also cover the essential skills: prime factorisation, order of operations, and scientific notation.       The Number Sets: , , ,  Each number set is contained inside the next, like nested boxes.   The four number sets, each containing the previous.   Nested rectangles showing N inside Z inside Q inside R, with examples of each type.     Natural Numbers   The natural numbers are the counting numbers: . They go on forever — there is no largest natural number.    With natural numbers alone, we can add and multiply freely. But we cannot subtract freely — has no answer in . This motivates our next set.   Integers   The integers include all natural numbers and their negatives: . The letter comes from the German word Zahlen (numbers).    Now subtraction always works. But division doesn't — is not an integer.   Rational Numbers   The rational numbers are all numbers that can be written as a fraction where and .    Every integer is rational (just put it over 1: ). Every terminating decimal is rational ( ). Every repeating decimal is rational ( ).  But there are numbers that are not rational.   Irrational Numbers   An irrational number is a real number that cannot be written as a fraction of integers. Its decimal expansion goes on forever without ever repeating.    The most famous irrational numbers are , , and . The ancient Greeks were shocked to discover that cannot be expressed as a fraction — it broke their assumption that all quantities were ratios of whole numbers.   Real Numbers   The real numbers are all the rational and irrational numbers together. They fill the entire number line with no gaps: .    The key relationship: . Every natural number is an integer, every integer is rational, every rational number is real. But not the other way around.  Since contains numbers that are not in (the irrationals), we write .   Different types of number on the number line.   A number line showing integers, rationals like one half and negative three halves, and irrationals like root two.     Classifying Numbers   Classify each number into its smallest number set: , , , , , , , .    (natural number).  (integer, not natural).  (rational, not integer).  (it simplifies to a natural number).  (irrational — 7 is not a perfect square).  (irrational).  (repeating decimal, so rational).  (rational, not integer).     Number Classification Practice   1. Classify: , , , , ,  2. True or false? (a) Every integer is rational. (b) Every rational number is an integer. (c) is irrational. (d) is rational because is close to it.  3. Give an example of a number that is: (a) in but not , (b) in but not , (c) in but not .    1. ; ; irrational; ; ; irrational (non-repeating).  2. (a) True. (b) False. (c) False ( ). (d) False ( is rational but is not).  3. (a) . (b) . (c) .         Rational and Irrational: The Decimal Test  How do you know whether a number is rational or irrational? The decimal expansion tells you everything.   Rational decimals terminate or repeat. Irrational decimals do neither.   A table comparing rational decimals (terminating or repeating) with irrational decimals (non-terminating, non-repeating).    The rule is simple:  A decimal that terminates (stops) or repeats (a block of digits recurs forever) is rational .  A decimal that goes on forever without any repeating pattern is irrational .   Converting a Repeating Decimal to a Fraction   Show that .    Let  Then  Subtract: , so , giving .     Working with Irrational Numbers  You can do arithmetic with irrational numbers using the surd rules from algebra. For now, the key facts are:  and .  Adding irrationals does not simplify in general: cannot be written as a single surd.  Sometimes an expression that looks irrational is actually rational: .    Simplifying Surds   Simplify: (a) (b) (c)    (a) .  (b) and , so the sum is .  (c) .     Practice   1. Convert to a fraction: (a) (b) (c)  2. Simplify: (a) (b) (c)  3. Is rational or irrational? What about ?    1. (a) . (b) . (c) .  2. (a) . (b) . (c) .  3. , irrational. , rational.         Operations: , , , Across the Number Sets  Some sets are closed under certain operations — the result always stays in the set. Others are not.   Closure of Operations    Set         Closed  Not closed  Closed  Not closed     Closed  Closed  Closed  Not closed     Closed  Closed  Closed  Closed*     Closed  Closed  Closed  Closed*     *Division by zero is never allowed in any set.  Not closed means you can find examples where the operation takes you outside the set. For instance, takes you out of into . And takes you out of into .  This is essentially why each larger set was invented — to make more operations possible.   Closure Examples   For each operation, state which set the result belongs to and whether it remains in the starting set: (a) in . (b) in . (c) in . (d) in .    (a) . Stays in.  (b) . Leaves .  (c) . Stays in.  (d) . Stays in (but is irrational).         Factors, Multiples, and Primes   Factor and Multiple   If (where ), then and are factors of , and is a multiple of both and .     Prime Number   A prime number is a natural number greater than 1 whose only factors are 1 and itself. The first few primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...  Note: 1 is not prime. And 2 is the only even prime.     Composite Number   A composite number is a natural number greater than 1 that is not prime (i.e. it has factors other than 1 and itself).     Prime Factorisation  Every natural number greater than 1 can be written as a product of prime numbers in exactly one way (ignoring order). This is the Fundamental Theorem of Arithmetic .  A factor tree is a handy way to find the prime factorisation. Start with the number, split it into any two factors, then keep splitting until every leaf is prime.    Factor tree for 360.   A factor tree breaking 360 down into its prime factors: 2 cubed times 3 squared times 5.     Prime Factorisation   Express in prime factor form: (a) 180 (b) 504 (c) 2025    (a) .  (b) .  (c) .     HCF and LCM  The Highest Common Factor (HCF) of two numbers is the largest number that divides both. Take the lowest power of each common prime.  The Lowest Common Multiple (LCM) is the smallest number that both divide into. Take the highest power of each prime that appears in either factorisation.    HCF and LCM Using Prime Factors   Find the HCF and LCM of 180 and 504.    .  .  HCF: common primes at lowest powers = .  LCM: all primes at highest powers = .  Check: . ✓     Practice   1. Express in prime factor form: (a) 240 (b) 1764  2. Find the HCF and LCM of 240 and 360.  3. Two gear wheels have 36 and 48 teeth. After how many revolutions of the smaller wheel do both wheels return to their starting position?    1. (a) . (b) .  2. HCF = 120, LCM = 720.  3. LCM(36, 48) = 144. Smaller wheel: revolutions.         Order of Operations (BIMDAS)  When a calculation has multiple operations, the order matters. We follow a universal convention.   BIMDAS: the order of operations.   Six boxes spelling BIMDAS: Brackets, Indices, Multiply, Divide, Add, Subtract, with priority arrow from highest to lowest.    B rackets first. Then I ndices (powers and roots). Then M ultiply and D ivide (left to right — they have equal priority). Finally A dd and S ubtract (left to right — equal priority).   BIMDAS in Action   Evaluate:    (brackets first)  (indices)  (multiply)  (add, then subtract, left to right)     Nested Brackets   Evaluate:    (inner brackets)  (index)  (outer bracket)      Practice   Evaluate each expression:  1.  2.  3.  4.  5.    1. . 2. . 3. . 4. . 5. .         Decimals and Fractions: Two Sides of the Same Coin  Every decimal is a fraction in disguise. Understanding this connection deepens your number sense and is essential for estimation.  A decimal like is shorthand for . The denominator is always a power of 10, which is why we call it a base-10 system.   Place Value    Position  Hundreds  Tens  Units  .  Tenths  Hundredths  Thousandths    Value           Fraction  100  10  1          Converting Between Decimals and Fractions   Convert: (a) to a fraction. (b) to a decimal. (c) to a fraction.    (a) .  (b) .  (c) .         Scientific Notation  Very large and very small numbers are awkward to write in full. Scientific notation expresses any positive number in the form , where and .   The anatomy of scientific notation.   Diagram showing a times 10 to the n, with annotations: a has one non-zero digit before the decimal point, n is an integer indicating magnitude.    The exponent tells you how many places to move the decimal point. Positive : move right (big number). Negative : move left (small number).   Converting to Scientific Notation   Write in scientific notation: (a) 56,000 (b) 0.00042 (c) 7,200,000 (d) 0.091    (a) .  (b) .  (c) .  (d) .     Arithmetic in Scientific Notation   Calculate: (a) (b)    (a) and . Answer: .  (b) and . Answer: .     Adding in Scientific Notation   Calculate:    Make the powers the same first: .  .     Practice   1. Write in scientific notation: (a) 340,000 (b) 0.0062 (c) 98,700,000  2. Write as an ordinary number: (a) (b)  3. Calculate, giving your answer in scientific notation: (a) (b) (c)  4. The distance from the Earth to the Sun is approximately km. Light travels at approximately km per second. How long does it take light to reach us from the Sun?    1. (a) . (b) . (c) .  2. (a) 4500. (b) 0.000071.  3. (a) . (b) . (c) .  4. seconds ≈ 8 min 20 sec.     "
},
{
  "id": "fig-number-sets",
  "level": "2",
  "url": "sec-number-systems.html#fig-number-sets",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " The four number sets, each containing the previous.   Nested rectangles showing N inside Z inside Q inside R, with examples of each type.   "
},
{
  "id": "def-natural-numbers",
  "level": "2",
  "url": "sec-number-systems.html#def-natural-numbers",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Natural Numbers <span class=\"process-math\">\\(\\mathbb{N}\\)<\/span>.",
  "body": " Natural Numbers   The natural numbers are the counting numbers: . They go on forever — there is no largest natural number.   "
},
{
  "id": "def-integers",
  "level": "2",
  "url": "sec-number-systems.html#def-integers",
  "type": "Definition",
  "number": "3.1.3",
  "title": "Integers <span class=\"process-math\">\\(\\mathbb{Z}\\)<\/span>.",
  "body": " Integers   The integers include all natural numbers and their negatives: . The letter comes from the German word Zahlen (numbers).   "
},
{
  "id": "def-rational-numbers",
  "level": "2",
  "url": "sec-number-systems.html#def-rational-numbers",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Rational Numbers <span class=\"process-math\">\\(\\mathbb{Q}\\)<\/span>.",
  "body": " Rational Numbers   The rational numbers are all numbers that can be written as a fraction where and .   "
},
{
  "id": "def-irrational-numbers",
  "level": "2",
  "url": "sec-number-systems.html#def-irrational-numbers",
  "type": "Definition",
  "number": "3.1.5",
  "title": "Irrational Numbers.",
  "body": " Irrational Numbers   An irrational number is a real number that cannot be written as a fraction of integers. Its decimal expansion goes on forever without ever repeating.   "
},
{
  "id": "def-real-numbers",
  "level": "2",
  "url": "sec-number-systems.html#def-real-numbers",
  "type": "Definition",
  "number": "3.1.6",
  "title": "Real Numbers <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span>.",
  "body": " Real Numbers   The real numbers are all the rational and irrational numbers together. They fill the entire number line with no gaps: .   "
},
{
  "id": "fig-number-line",
  "level": "2",
  "url": "sec-number-systems.html#fig-number-line",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " Different types of number on the number line.   A number line showing integers, rationals like one half and negative three halves, and irrationals like root two.   "
},
{
  "id": "ex-classify-numbers",
  "level": "2",
  "url": "sec-number-systems.html#ex-classify-numbers",
  "type": "Example",
  "number": "3.1.8",
  "title": "Classifying Numbers.",
  "body": " Classifying Numbers   Classify each number into its smallest number set: , , , , , , , .    (natural number).  (integer, not natural).  (rational, not integer).  (it simplifies to a natural number).  (irrational — 7 is not a perfect square).  (irrational).  (repeating decimal, so rational).  (rational, not integer).   "
},
{
  "id": "ex-classify-practice",
  "level": "2",
  "url": "sec-number-systems.html#ex-classify-practice",
  "type": "Checkpoint",
  "number": "3.1.9",
  "title": "Number Classification Practice.",
  "body": " Number Classification Practice   1. Classify: , , , , ,  2. True or false? (a) Every integer is rational. (b) Every rational number is an integer. (c) is irrational. (d) is rational because is close to it.  3. Give an example of a number that is: (a) in but not , (b) in but not , (c) in but not .    1. ; ; irrational; ; ; irrational (non-repeating).  2. (a) True. (b) False. (c) False ( ). (d) False ( is rational but is not).  3. (a) . (b) . (c) .   "
},
{
  "id": "fig-decimal-patterns",
  "level": "2",
  "url": "sec-number-systems.html#fig-decimal-patterns",
  "type": "Figure",
  "number": "3.1.10",
  "title": "",
  "body": " Rational decimals terminate or repeat. Irrational decimals do neither.   A table comparing rational decimals (terminating or repeating) with irrational decimals (non-terminating, non-repeating).   "
},
{
  "id": "ex-repeating-to-fraction",
  "level": "2",
  "url": "sec-number-systems.html#ex-repeating-to-fraction",
  "type": "Example",
  "number": "3.1.11",
  "title": "Converting a Repeating Decimal to a Fraction.",
  "body": " Converting a Repeating Decimal to a Fraction   Show that .    Let  Then  Subtract: , so , giving .   "
},
{
  "id": "ex-simplify-surds",
  "level": "2",
  "url": "sec-number-systems.html#ex-simplify-surds",
  "type": "Example",
  "number": "3.1.12",
  "title": "Simplifying Surds.",
  "body": " Simplifying Surds   Simplify: (a) (b) (c)    (a) .  (b) and , so the sum is .  (c) .   "
},
{
  "id": "ex-rational-irrational-practice",
  "level": "2",
  "url": "sec-number-systems.html#ex-rational-irrational-practice",
  "type": "Checkpoint",
  "number": "3.1.13",
  "title": "Practice.",
  "body": " Practice   1. Convert to a fraction: (a) (b) (c)  2. Simplify: (a) (b) (c)  3. Is rational or irrational? What about ?    1. (a) . (b) . (c) .  2. (a) . (b) . (c) .  3. , irrational. , rational.   "
},
{
  "id": "subsec-operations-2",
  "level": "2",
  "url": "sec-number-systems.html#subsec-operations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closed "
},
{
  "id": "table-closure",
  "level": "2",
  "url": "sec-number-systems.html#table-closure",
  "type": "Table",
  "number": "3.1.14",
  "title": "Closure of Operations",
  "body": " Closure of Operations    Set         Closed  Not closed  Closed  Not closed     Closed  Closed  Closed  Not closed     Closed  Closed  Closed  Closed*     Closed  Closed  Closed  Closed*    "
},
{
  "id": "ex-closure",
  "level": "2",
  "url": "sec-number-systems.html#ex-closure",
  "type": "Example",
  "number": "3.1.15",
  "title": "Closure Examples.",
  "body": " Closure Examples   For each operation, state which set the result belongs to and whether it remains in the starting set: (a) in . (b) in . (c) in . (d) in .    (a) . Stays in.  (b) . Leaves .  (c) . Stays in.  (d) . Stays in (but is irrational).   "
},
{
  "id": "def-factor-multiple",
  "level": "2",
  "url": "sec-number-systems.html#def-factor-multiple",
  "type": "Definition",
  "number": "3.1.16",
  "title": "Factor and Multiple.",
  "body": " Factor and Multiple   If (where ), then and are factors of , and is a multiple of both and .   "
},
{
  "id": "def-prime",
  "level": "2",
  "url": "sec-number-systems.html#def-prime",
  "type": "Definition",
  "number": "3.1.17",
  "title": "Prime Number.",
  "body": " Prime Number   A prime number is a natural number greater than 1 whose only factors are 1 and itself. The first few primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...  Note: 1 is not prime. And 2 is the only even prime.   "
},
{
  "id": "def-composite",
  "level": "2",
  "url": "sec-number-systems.html#def-composite",
  "type": "Definition",
  "number": "3.1.18",
  "title": "Composite Number.",
  "body": " Composite Number   A composite number is a natural number greater than 1 that is not prime (i.e. it has factors other than 1 and itself).   "
},
{
  "id": "par-prime-factorisation-2",
  "level": "2",
  "url": "sec-number-systems.html#par-prime-factorisation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Theorem of Arithmetic "
},
{
  "id": "par-prime-factorisation-3",
  "level": "2",
  "url": "sec-number-systems.html#par-prime-factorisation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factor tree "
},
{
  "id": "fig-factor-tree",
  "level": "2",
  "url": "sec-number-systems.html#fig-factor-tree",
  "type": "Figure",
  "number": "3.1.19",
  "title": "",
  "body": " Factor tree for 360.   A factor tree breaking 360 down into its prime factors: 2 cubed times 3 squared times 5.   "
},
{
  "id": "ex-prime-factorise",
  "level": "2",
  "url": "sec-number-systems.html#ex-prime-factorise",
  "type": "Example",
  "number": "3.1.20",
  "title": "Prime Factorisation.",
  "body": " Prime Factorisation   Express in prime factor form: (a) 180 (b) 504 (c) 2025    (a) .  (b) .  (c) .   "
},
{
  "id": "par-hcf-lcm-2",
  "level": "2",
  "url": "sec-number-systems.html#par-hcf-lcm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Highest Common Factor (HCF) "
},
{
  "id": "par-hcf-lcm-3",
  "level": "2",
  "url": "sec-number-systems.html#par-hcf-lcm-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lowest Common Multiple (LCM) "
},
{
  "id": "ex-hcf-lcm",
  "level": "2",
  "url": "sec-number-systems.html#ex-hcf-lcm",
  "type": "Example",
  "number": "3.1.21",
  "title": "HCF and LCM Using Prime Factors.",
  "body": " HCF and LCM Using Prime Factors   Find the HCF and LCM of 180 and 504.    .  .  HCF: common primes at lowest powers = .  LCM: all primes at highest powers = .  Check: . ✓   "
},
{
  "id": "ex-factors-practice",
  "level": "2",
  "url": "sec-number-systems.html#ex-factors-practice",
  "type": "Checkpoint",
  "number": "3.1.22",
  "title": "Practice.",
  "body": " Practice   1. Express in prime factor form: (a) 240 (b) 1764  2. Find the HCF and LCM of 240 and 360.  3. Two gear wheels have 36 and 48 teeth. After how many revolutions of the smaller wheel do both wheels return to their starting position?    1. (a) . (b) .  2. HCF = 120, LCM = 720.  3. LCM(36, 48) = 144. Smaller wheel: revolutions.   "
},
{
  "id": "fig-bimdas",
  "level": "2",
  "url": "sec-number-systems.html#fig-bimdas",
  "type": "Figure",
  "number": "3.1.23",
  "title": "",
  "body": " BIMDAS: the order of operations.   Six boxes spelling BIMDAS: Brackets, Indices, Multiply, Divide, Add, Subtract, with priority arrow from highest to lowest.   "
},
{
  "id": "subsec-order-of-operations-4",
  "level": "2",
  "url": "sec-number-systems.html#subsec-order-of-operations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "B I M D A S "
},
{
  "id": "ex-bimdas-1",
  "level": "2",
  "url": "sec-number-systems.html#ex-bimdas-1",
  "type": "Example",
  "number": "3.1.24",
  "title": "BIMDAS in Action.",
  "body": " BIMDAS in Action   Evaluate:    (brackets first)  (indices)  (multiply)  (add, then subtract, left to right)   "
},
{
  "id": "ex-bimdas-2",
  "level": "2",
  "url": "sec-number-systems.html#ex-bimdas-2",
  "type": "Example",
  "number": "3.1.25",
  "title": "Nested Brackets.",
  "body": " Nested Brackets   Evaluate:    (inner brackets)  (index)  (outer bracket)    "
},
{
  "id": "ex-bimdas-practice",
  "level": "2",
  "url": "sec-number-systems.html#ex-bimdas-practice",
  "type": "Checkpoint",
  "number": "3.1.26",
  "title": "Practice.",
  "body": " Practice   Evaluate each expression:  1.  2.  3.  4.  5.    1. . 2. . 3. . 4. . 5. .   "
},
{
  "id": "table-place-value",
  "level": "2",
  "url": "sec-number-systems.html#table-place-value",
  "type": "Table",
  "number": "3.1.27",
  "title": "Place Value",
  "body": " Place Value    Position  Hundreds  Tens  Units  .  Tenths  Hundredths  Thousandths    Value           Fraction  100  10  1        "
},
{
  "id": "ex-decimal-fraction",
  "level": "2",
  "url": "sec-number-systems.html#ex-decimal-fraction",
  "type": "Example",
  "number": "3.1.28",
  "title": "Converting Between Decimals and Fractions.",
  "body": " Converting Between Decimals and Fractions   Convert: (a) to a fraction. (b) to a decimal. (c) to a fraction.    (a) .  (b) .  (c) .   "
},
{
  "id": "fig-sci-notation",
  "level": "2",
  "url": "sec-number-systems.html#fig-sci-notation",
  "type": "Figure",
  "number": "3.1.29",
  "title": "",
  "body": " The anatomy of scientific notation.   Diagram showing a times 10 to the n, with annotations: a has one non-zero digit before the decimal point, n is an integer indicating magnitude.   "
},
{
  "id": "ex-to-scientific",
  "level": "2",
  "url": "sec-number-systems.html#ex-to-scientific",
  "type": "Example",
  "number": "3.1.30",
  "title": "Converting to Scientific Notation.",
  "body": " Converting to Scientific Notation   Write in scientific notation: (a) 56,000 (b) 0.00042 (c) 7,200,000 (d) 0.091    (a) .  (b) .  (c) .  (d) .   "
},
{
  "id": "ex-sci-arithmetic",
  "level": "2",
  "url": "sec-number-systems.html#ex-sci-arithmetic",
  "type": "Example",
  "number": "3.1.31",
  "title": "Arithmetic in Scientific Notation.",
  "body": " Arithmetic in Scientific Notation   Calculate: (a) (b)    (a) and . Answer: .  (b) and . Answer: .   "
},
{
  "id": "ex-sci-add",
  "level": "2",
  "url": "sec-number-systems.html#ex-sci-add",
  "type": "Example",
  "number": "3.1.32",
  "title": "Adding in Scientific Notation.",
  "body": " Adding in Scientific Notation   Calculate:    Make the powers the same first: .  .   "
},
{
  "id": "ex-sci-practice",
  "level": "2",
  "url": "sec-number-systems.html#ex-sci-practice",
  "type": "Checkpoint",
  "number": "3.1.33",
  "title": "Practice.",
  "body": " Practice   1. Write in scientific notation: (a) 340,000 (b) 0.0062 (c) 98,700,000  2. Write as an ordinary number: (a) (b)  3. Calculate, giving your answer in scientific notation: (a) (b) (c)  4. The distance from the Earth to the Sun is approximately km. Light travels at approximately km per second. How long does it take light to reach us from the Sun?    1. (a) . (b) . (c) .  2. (a) 4500. (b) 0.000071.  3. (a) . (b) . (c) .  4. seconds ≈ 8 min 20 sec.   "
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
