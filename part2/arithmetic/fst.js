/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/fst.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Sep 17 17:23:15 2025                          */
/*    Last change :  Wed May 20 14:49:09 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    flt                                                              */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
export { fst };

/*---------------------------------------------------------------------*/
/*    fst ...                                                          */
/*---------------------------------------------------------------------*/
const fst = <impress.slide title="fst" class="oopsla25">

   <div class="title">Float <span class="important">Self</span> Tagging</div>
 
   <div step="1-" id="intro-container">
     <div id="intro-scale1" class="scale"><div>&lt;</div></div>
     <div id="intro-scale2" class="scale"><span>&nbsp;</span></div>
     <div id="intro-scale3" class="scale"><span>&nbsp;</span></div>
     <div id="intro-scale4" class="scale"><div>&gt;</div></div>
       <div id="intro-boxing-ex" class="example">
          <table>
             <tr><td><span class="fast">fast</span> objects</td></tr>
             <tr><td><span class="slow">slow</span> flonums</td></tr>
          </table>
       </div>
       <div id="intro-nan-ex" class="example">
          <table>
             <tr><td><span class="slow">slow</span> objects</td></tr>
             <tr><td><span class="fast">fast</span> flonums</td></tr>
          </table>
       </div>
     <div id="intro-engines">
       <div step="2-" id="intro-boxing" class="engine">Boxing</div>
       <div step="5-" id="intro-fst" class="engine"><span class="fst">FST</span></div>
       <div step="4-" id="intro-nun" class="engine">NuN</div>
       <div step="3-" id="intro-nan" class="engine">NaN</div>
     </div>
   </div> 
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
fst.css = <style>

.fst {
   background-color: var(--red);
   color: white;
   border-radius: 8px;
   font-size: 80%;
   padding: 0 0.2em 0 0.2em;
}
		
.fast {
   color: var(--green);
}

.ok {
   color: var(--orange);
}

.slow {
   color: var(--red);
}

#intro-container {
   position: absolute;
   bottom: 1ex;
   left: 0.5em;
   right: 0.5em;
   height: 7ex;
   background-color: white;
}

#intro-engines {
   position: absolute;
   bottom: 2.7ex;
   left: 0;
   right: 0;
   color: var(--grey);
}

.scale {
   font-size: 20%;
   position: absolute;
   bottom: 10ex;
   height: 1em;
   border: 1ex solid var(--grey);
   border-top: 0;
}

#intro-scale1 {
   left: 2em;
   width: 21em;
   border-right: 0;
   border-left: 0;
}

#intro-scale1 div {
   display: inline-box;
   position: relative;
   bottom: 0.8ex;
   left: -0.1em;
   font-size: 400%;
   color: var(--grey);
}

#intro-scale2 {
   left: 22em;
   width: 27em;
   border-right: 0;
}

#intro-scale3 {
   left: 48em;
   width: 16em;
   border-right: 0;
}

#intro-scale4 {
   left: 57em;
   right: 1em;
   border-left: 0;
   border-right: 0;
}

#intro-scale4 div {
   display: inline-box;
   position: relative;
   bottom: 0.8ex;
   right: -0.1em;
   font-size: 400%;
   color: var(--grey);
   text-align: right;
}

.engine {
   position: absolute;
   bottom: 0ex;
   font-size: 70%;
   width: 4em;
   font-weight: bold;
}

.example {
   font-size: 50%;
   width: 4em;
   position: absolute;
   bottom: 0ex;
   color: var(--greydark);
   text-align: left;
}

.example table {
   width: 100%;
   font-size: 90%;
   line-height: 2ex;
   border-collapse: collapse;
}

#intro-boxing {
   left: 0.2em;
}

#intro-boxing-ex {
   left: 0.2em;
}

#intro-fst {
   left: 5.8em;
}

#intro-fst-ex {
   left: 4.5em;
}

#intro-fst-ex table {
   text-align: center;
}

#intro-nun {
   left: 13em;
}

#intro-nun-ex {
   left: 11.5em;
}

#intro-nun-ex table {
   text-align: center;
}

#intro-nan {
   right: 0.2em;
   text-align: right;
}

#intro-nan-ex {
   right: 0.2em;
   text-align: right;
}

.hop {
   color: var(--red);
   font-weight: bold;
}

#intro-specs {
   width: 95%;
   font-size: 40%;
   margin-left: auto;
   margin-right: auto;
   margin-top: 1ex;
   color: var(--grey);
}

#intro-specs td {
   width: 30%;
   vertical-align: top;
   text-align: left;
   background-color: white;
   padding-left: 0.5em;
}

#intro-specs td span.th {
   margin-left: 1em;
   font-size: 120%;
   font-weight: bold;
   color: var(--greydark);
}

#intro-specs td span.important {
   color: var(--red);
   font-weight: bold;
}

#intro-container td span.important {
   color: var(--greydark);
   color: #7196A0;
   font-weight: bold;
}
</style>;
