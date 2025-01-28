#Steps to add scss in project
1. create index.html and css and sass folder 
2. initialise package with npm and install sass package
3. Run the compile sass command to get updated styles 

block level inside block lever - margin 0 auto to center element

& > * to select all direct childs 

//            <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png">
src set to decide which image will display based on density that is 1x or 2x;

//art of direction 
in picture tag , source  tag is used and srcset we give url of images . then fallback url img tag .we are using src set attribute to density switching 
                <picture class="footer__logo">
                    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                            media="(max-width: 37.5em)">
                    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png">
                </picture>
s
   /////We can however use two attributes — srcset and sizes — to provide several additional source images along with hints to help the browser pick the right one.
                   <img srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                        alt="Photo 2"
                        class="composition__photo composition__photo--p2"
                        src="img/nat-2-large.jpg">             



<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />


  //flex with margin
  if  we set margin-right on child  to auto it will  automatically set the margin to that element to the available space.


  //css grid creating responsive layout 
  //autofit and minmax functin repeat(autofit, minmax(200px,1fr))