/* HTML2PDF Generator */
function generatePDF(scales) {
     /* Tag elements that will be ignored*/
    const btn = document.querySelector('button');
    btn.setAttribute('data-html2canvas-ignore','true');

    // const copyright = document.querySelector('footer p');
    // copyright.setAttribute('data-html2canvas-ignore','true');

    // const svgs = document.querySelectorAll('section#projects svg');    
    // svgs.forEach(svg => {
    //     svg.setAttribute('data-html2canvas-ignore','true');
    // }); 

    /* Temporary Remove Elements before generating pdf */
    // svgs.forEach(svg => {
    //     svg.style.display = "none";        
    // })    

    /* Temporary set properties before generating pdf */
    const body = document.body;
    body.style.setProperty("--before-text", null);
    body.style.backgroundColor = 'white';
    body.style.overflow = 'hidden';
    body.style.width = '600px';

    const contactInfo = document.querySelector('#content > footer > ul');
    const getStyleDisplay = contactInfo.style.display;
    const getStylePaddingTop = contactInfo.style.paddingTop;
    // const getStylePaddingBottom = contactInfo.style.paddingBottom;
    contactInfo.style.display = 'block';
    contactInfo.style.paddingTop = '0';
    // contactInfo.style.paddingBottom = '0';
    

    /* Set Options */
    const width = 600; /* Preferred 600 */
    const height  = 1504; /* Preferred 1504 */
    var scale = scales; /* Preferred 1; Scale 2 (.3363); Scale 3 */    
    const compStyle = getComputedStyle(body);
    var marginRight = compStyle.getPropertyValue('margin-right');
    const documentWidth = document.documentElement.clientWidth;
    var x;
    if (parseFloat(documentWidth) <= 600 ){ x = 0;};
    switch (scale) {      
      case 1: if (x != 0) x = parseFloat(marginRight)*.50; console.log(scale); break;
      case 2: if (x != 0) x = parseFloat(marginRight)*.3355; console.log(scale); break;
      case 3: if (x != 0) x = parseFloat(marginRight)*.25; console.log(scale); break;
    }

    console.log(marginRight);

    var opt = {        
        margin:       0,
        // pagebreak: { mode: 'avoid-all'},        
        filename:     'harold.webdev.pdf',
        image:        { type: 'jpg', quality: 1},
        enableLinks: true,
        html2canvas:  { 
            scale: scale, 
            // dpi: 300,
            foreignObjectRendering: true,             
            scrollY: 0,
            scrollX: 0,
            y: 0,     
            x: x, /* Working on version 0.9.3 parseFloat(marginRight)/scale; Scale 1: marginRight Multiply by .50 ;Scale 2: marginRight Multiply by .3363; Scale 3: marginRight Multiply by .25 */
            width: width, /* Working on version 0.9.3 width/scale */
            height: height,  /* Working on version 0.9.3 height/scale */   
            logging: true,          
        },
        jsPDF: { 
            unit: 'px',             
            format: [width, height],             
            orientation: 'p', 
            hotfixes: ["px_scaling"] 
        }
      };
    
    /* Use Async Await to Restore Properties of after Generating PDF */
    async function convert2pdf () {
        await html2pdf().set(opt).from(body).save();
        body.style.backgroundColor = '#00000081';
        body.style.overflow = 'scroll';
        body.style.width = '100%';
        contactInfo.style.display = getStyleDisplay;
        contactInfo.style.paddingTop = getStylePaddingTop;
        // contactInfo.style.paddingBottom = getStylePaddingBottom;
        // svgs.forEach(svg => {
        //     svg.style.display = "inline";        
        // })    
    }
    convert2pdf();    
  } 
/* End HTML2PDF Generator */

/* Function for Current Year */
const currentYear = new Date().getFullYear();
const getYearEl = document.querySelector('.year');
getYearEl.innerHTML = currentYear;
/* End Function for Current Year */