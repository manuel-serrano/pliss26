/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/perf.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Thu Sep 18 17:03:30 2025                          */
/*    Last change :  Wed May 20 14:50:09 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Performance                                                      */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
export { perf };

/*---------------------------------------------------------------------*/
/*    perf ...                                                         */
/*---------------------------------------------------------------------*/
const perf = <impress.slide title="performance" class="oopsla25">

   <div class="title">Execution speed</div>
   
   <ul class="center" step="1-">
     <li> FST <span class="vs">vs</span> Boxing</li>
   </ul>
   <div class="center" step="1-">
     <table>
       <tr><th/><th>Non-float benchmarks</th><th>float benchmarks</th><th>float benchmarks<sup>*</sup></th></tr>
       <tr><th>Bigloo</th><td>1&times;</td><td>0.53&times;</td><td step="2-">0.53&times;</td></tr>
       <tr><th>Gambit</th><td>1&times;</td><td>1.07&times;</td><td step="2-">0.67&times;</td></tr>
     </table>
   </div>
   
   <ul class="center" step="3-">
     <li> FST <span class="vs">vs</span> NuN</li>
   </ul>
   <div class="center" step="3-">
     <table>
       <tr><th/><th>Non-float benchmarks</th><th>float benchmarks</th></tr>
       <tr><th>Bigloo</th><td>1&times;</td><td>1.13&times;</td></tr>
       <tr><th>Gambit</th><td>.96&times;</td><td>1.09&times;</td></tr>
     </table>
   </div>
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
perf.css = <style>
.title {
   margin-bottom: 0.5ex;
}

span.important {
   color: var(--orange);
}

ul {
   margin-bottom: 1ex;
}

table {
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   border-collapse: collapse;
   font-size: 40%;
   background-color: white;
   margin-bottom: 4ex;
}

th {
   width: 8em;
}

tr:nth-child(1) th {
   color: white;
   background-color: var(--greydark);
}

td {
   font-family: CourierMono;
}

td {
   width: 3em;
}

td:nth-child(1) {
   width: 3em;
   color: red;
   font-weight: bold;
}

.vs {
   color: var(--grey);
}
</style>;
