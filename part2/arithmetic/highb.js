/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/highb.js         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Thu Sep 18 17:03:30 2025                          */
/*    Last change :  Wed May 20 14:56:05 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    High bit encoding                                                */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { highb };

const header = [
   "tag", "range", "fft", "fib", "mbrot", "nuc", "pnp", "ray", "simplex", "sumfp", "sum1", "[42]"
];

const tags = [
   ["000", "0.0&hellip;1.3e-231", "79%", "9%", "0%", "1%", "11%", "7%", "11%", "13%", "0%", "1%"],
   ["001", "1.3e-231&hellip;1.5e-154", "-", "-", "-", "-", "-", "-", "-", "-", "-", "0%"],
   ["010", "1.5e-154&hellip;1.7e-77", "-", "-", "-", "-", "-", "-", "-", "-", "-", "1%"],
   ["011", "1.7e-77&hellip;2", "21%", "28%", "89%", "61%", "63%", "22%", "64%", "13%", "0%", "65%"],
   ["100", "2&hellip;2.3e77", "0%", "63%", "11%", "38%", "26%", "70%", "25%", "75%", "100%", "31%"],
   ["101", "2.3e77&hellip;2.7e154", "-", "-", "-", "-", "-", "-", "-", "-", "-", "0%"],
   ["110", "2.7e154&hellip;3.1e231", "-", "-", "-", "-", "-", "-", "-", "-", "-", "0%"],
   ["111", "3.1e231&hellip;Infty/NaN", "-", "-", "-", "-", "-", "-", "-", "-", "-", "0%"]
];

/*---------------------------------------------------------------------*/
/*    highb ...                                                        */
/*---------------------------------------------------------------------*/
const highb = <impress.slide title="High bit encoding" class="oopsla25">

   <div class="title">Exponent bit encoding</div>

   <div class="center" step="1-">
      <table class="center fl">
         <tr class="legend"><td>s</td><td>exponent</td><td>mantissa</td></tr>
   <tr class="encoding"><td>1</td><th><span class="tage">111</span>110100101</th><td class="mantissa">0111010010011101100001011<span class="tagm">001</span></td></tr>
      </table>
   </div>
   
   <div class="center" step="3-">
     <table class="tags">
       <tr>${header.map((h, i) => <th>${h}</th>)}</tr>
       ${tags.map(t => <tr>${t.map((e, i) => <td step=${i >= 2 ? "4-" : "0-"}>${e}</td>)}</tr>)}
     </table>
   </div>
</impress.slide>

   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
highb.css = <style>
.encoding {
   font-family: CourierMono;
   font-weight: bold;
   font-size: 90%;
}

.title {
   margin-bottom: 1ex;
}

span.important {
   color: var(--orange);
}

table.fl {
   font-size: 62%;
   border-collapse: collapse;
   margin-bottom: 1ex;
}

.fl th {
   background-color: var(--greyverylight);
   border: 4px solid black;
}

.fl td {
   background-color: var(--greylight);
   border: 4px solid black;
}

[data-step="0"] .fl span.tagm,
[data-step="1"] .fl span.tagm,
[data-step="2"] .fl span.tage,
[data-step="3"] .fl span.tage,
[data-step="4"] .fl span.tage,
[data-step="5"] .fl span.tage {
   color: var(--red);
   font-weight: bold;
   font-family: CourierMonoBold;
   transition: 0.5s all;
}

[data-step="2"] .fl span.tagm {
   color: var(--orange);
}

.legend td, .legend th {
   font-size: 70%;
   font-family: Kaffeesatz;
   color: var(--grey);
   background-color: inherit;
   border: none;
}
   
table.tags {
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   border-collapse: collapse;
   font-size: 30%;
   background-color: white;
}

table.tags th {
   color: white;
   background-color: var(--greydark);
}

table.tags td {
   font-family: CourierMono;
}

table.tags td {
   width: 3em;
}

table.tags td:nth-child(1) {
   width: 3em;
   color: red;
   font-weight: bold;
}

table.tags td:nth-child(2) {
   width: 13em;
}

pre {
   width: 92%;
}

[data-step="5"] tr:nth-child(2),
[data-step="5"] tr:nth-child(5),
[data-step="5"] tr:nth-child(6),
[data-step="4"] tr:nth-child(2),
[data-step="4"] tr:nth-child(5),
[data-step="4"] tr:nth-child(6) {
   background-color: var(--green);
}
   
</style>;
