function generatePDF() {
    // const pdf = document.getElementsByTagName('main')[0];
    const pdf = document.body;
    var w = pdf.scrollWidth;
    var h = pdf.scrollHeight;
    var x = window.getComputedStyle(pdf).marginLeft;
    
     /* Remove elements before generating pdf */
    // const svgs = document.querySelectorAll('svg');
    // svgs.forEach((svg) => svg.setAttribute('data-html2canvas-ignore','true'));

    const btn = document.querySelector('button');
    btn.setAttribute('data-html2canvas-ignore','true');

    const copyright = document.querySelector('footer p');
    copyright.setAttribute('data-html2canvas-ignore','true');

    /* Reset/Remove unprintable and incompatible styles */
    const strongTags = document.querySelectorAll('strong');
    // strongTags.forEach((strong) => strong.style.backgroundImage = 'none');

    const body = document.body;
    body.style.setProperty("--before-text", null);
    body.style.backgroundColor = 'white';
    body.style.overflow = 'hidden';
    body.style.width = '600px';
    // body.style.margin = 0;
    

    /* Set Options */
    var opt = {
        // margin:       [0, .5, .5, .5],
        margin:       0,
        pagebreak: { mode: 'avoid-all'},        
        filename:     'myfile.pdf',
        image:        { type: 'png'},
        html2canvas:  { 
            scale: 1, 
            foreignObjectRendering: true, 
            // scrollX: -window.scrollX,
            // scrollY: -window.scrollY,
            scrollY: 0,
            y: 0,
            // x: 0,
            // windowWidth: document.documentElement.scrollWidth,
            // windowHeight: document.documentElement.scrollHeight,            
            // windowWidth: 600,
            // windowHeight: 1504,            
            // windowWidth: document.documentElement.offsetWidth,
            // windowHeight: document.documentElement.offsetHeight,            
            // width: pdf.clientWidth,
            // height: pdf.clientHeight,                
            width: 600,
            height: 1504,                
        },
        jsPDF: { 
            unit: 'px', 
            // format: [w, h], 
            format: [600, 1504], 
            orientation: 'p', 
            hotfixes: ["px_scaling"] 
        }
      };
    
    async function convert2pdf () {
        await html2pdf().set(opt).from(pdf).save();
        body.style.backgroundColor = '#00000081';
        body.style.overflow = 'scroll';
        body.style.width = '100%';
        // strongTags.forEach((strong) => strong.style.backgroundImage = 'linear-gradient(0, #ffe359, #ffe359) ');
    }
    convert2pdf();    
  } 