import { IntervalTree, NullNote, JI, ETPitch, Frequency } from "../index";

let a = new NullNote();

// create "abstract" interval structure of a justly-tuned dominant-9 chord
let dom9 = new IntervalTree(a),
    b = dom9.connect(a, JI.third),
    c = dom9.connect(a, JI.fifth),
    d = dom9.connect(a, JI.seventh),
    e = dom9.connect(c, JI.fifth);

// apply transposition and inversion
let A9 = dom9.withRoot(new ETPitch(69)),
    C9 = dom9.withRoot(new Frequency(200)),
    å = dom9.inverse().withRoot(new ETPitch(69));

// create (rooted) harmonic series and its inverse
let sevenPartials = IntervalTree.harmonicSeries(7, new Frequency(100)),
    invertedSeven = sevenPartials.inverse();

// create 13-TET scale and its inverse
let thirteen = IntervalTree.ET(13, new ETPitch(0, 13)),
    thirteen2 = thirteen.inverse();

console.log(dom9);
console.log(A9);
console.log(C9);
console.log(å);
console.log(sevenPartials);
console.log(invertedSeven);
console.log(thirteen);
console.log(thirteen2);