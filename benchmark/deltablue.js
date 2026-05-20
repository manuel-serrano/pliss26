/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/benchmark/deltablue.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 28 13:13:47 2021                          */
/*    Last change :  Wed May 20 15:09:15 2026 (serrano)                */
/*    Copyright   :  2021-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    JavaScript benchmark deltablue                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";

export { deltablue };

/*---------------------------------------------------------------------*/
/*    deltablue ...                                                    */
/*---------------------------------------------------------------------*/
const deltablue = <impress.slide title="Deltablue" 
 		  class="benchmark"
                  onslideenter=~{
		     let code = document.getElementById("deltabluejs");
		     console.log("code=", code);
		     code.style.transform = "scale(1) translate(0, 0)";
		  }
                  onslideleave=~{
		     let code = document.getElementById("deltabluejs");
		     code.style.transform = "scale(1) translate(0, 0)";
		  }
  		  onstep=~{
                     let el = document.getElementById("evil-deltablue");
		     let code = document.getElementById("deltabluejs");
		     code.style.transform = `scale(2) translate(0, ${-el.offsetTop - 10}px)`;
		  }>
		  
  <div class="filename">deltablue.js @ octane</div>
  <div class="javascript code" id="deltablue-container">
    <lstinputlisting id="deltabluejs" language="javascript" src=${require.resolve("./src/deltablue.js")}/>
  </div>
   <span step="1"/>
</impress.slide>  

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
deltablue.css = <style>
#deltablue-container {
}

#deltabluejs {
   transition: 1s all;
   transform-origin: top left;
   font-size: 20%;
}

.body[data-step="1"] .evil-pattern {
   background-color: var(--greylight);
   border: 1px solid var(--red);
   padding: 2px;
}
</style>
