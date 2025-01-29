function generatePDF() {
    // const pdf = document.getElementsByTagName('main')[0];
    const pdf = document.body;
    
     /* Remove elements before generating pdf */
    // const svgs = document.querySelectorAll('svg');
    // svgs.forEach((svg) => svg.setAttribute('data-html2canvas-ignore','true'));

    const btn = document.querySelector('button');
    btn.setAttribute('data-html2canvas-ignore','true');

    /* Reset/Remove unprintable and incompatible styles */
    const strongTags = document.querySelectorAll('strong');
    strongTags.forEach((strong) => strong.style.backgroundImage = 'none');

    const body = document.body;
    body.style.setProperty("--before-text", null);
    body.style.backgroundColor = 'white';
    // body.style.margin = 0;

    
    
    /* Set Options */
    var opt = {
        // margin:       [0, .5, .5, .5],
        margin:       0,
        pagebreak: { mode: 'avoid-all'},        
        filename:     'myfile.pdf',
        image:        { type: 'png'},
        html2canvas:  { scale: 1, foreignObjectRendering: true},
        jsPDF:        { unit: 'px', format: [600, 1500], orientation: 'p', hotfixes: ["px_scaling"] }
      };
    
    async function convert2pdf () {
        await html2pdf().set(opt).from(pdf).save();
        body.style.backgroundColor = '#00000081';
    }
    convert2pdf();    
  } 