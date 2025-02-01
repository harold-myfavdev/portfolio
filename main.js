/* HTML2PDF Generator */
function generatePDF() {
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
    var opt = {        
        margin:       0,
        pagebreak: { mode: 'avoid-all'},        
        filename:     'harold.webdev.pdf',
        image:        { type: 'jpeg', quality: 1},
        enableLinks: true,
        html2canvas:  { 
            scale: 1, 
            foreignObjectRendering: true,             
            scrollY: 0,
            y: 0,     
            width: 600,
            height: 1504,     
            logging: true,          
        },
        jsPDF: { 
            unit: 'px',             
            format: [600, 1504], 
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