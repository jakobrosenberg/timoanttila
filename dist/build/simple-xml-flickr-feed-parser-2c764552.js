import{S as e,i as t,s as a,C as s,v as i,w as n,D as l,y as o,z as r,A as m,E as d,e as c,a as h,b as u,c as p,n as g,f as b}from"./main-552490a3.js";import{T as f}from"./Tutorial-42b2f2f1.js";function w(e){let t,a,s,i,n,l,o,r,m,d,f,w,x,k,y,$,v,H,S,P,F,T,C;return{c(){t=c("p"),t.textContent="I love taking pictures and I want to show my newest pictures on my website. However, there was no easy way to embed pictures from Flickr to the website if you don’t want to use slideshow and iframe. I searched and found a simple PHP script made by Mr. Haddad. He did a great job but it gave only large images as text so I had to tweak it a little bit.",a=h(),s=c("p"),s.textContent="Nowadays, it’s all about loading time and speed so I wanted to use small thumbnails. All images used _b.jpg and smaller size images had their own ending so getting the right size was very easy; search _b and replace it with whatever you want. You can use the Fancybox effect to make it look nicer.",i=h(),n=c("pre"),l=h(),o=c("h2"),o.textContent="Flickr Thumb Sizes",r=h(),m=c("ul"),m.innerHTML="<li>s: 75 x 75</li> \n<li>q: 150 x 150</li> \n<li>t: 100 x 75</li> \n<li>m: 240 x 180</li> \n<li>n: 320 x 320</li> \n<li>z: 640 x 640</li> \n<li>c: 800 x 600</li> \n<li>b: 1024 x 768</li> \n<li>o: 2400 x 1800</li>",d=h(),f=c("h2"),f.textContent="CSS",w=h(),x=c("p"),x.textContent="Everything is working just fine but for better overview little bit of CSS is needed.",k=h(),y=c("pre"),$=h(),v=c("p"),v.textContent="I like to use inline-block over float because inline-block does not need to be clear before .gallery’s closing tag. Works better most of the time. I also like to make small padding with a border around images because it makes images look better. I don’t know, maybe it’s just me.",H=h(),S=c("p"),S.textContent="For the best performance you should use. gallery a: nth-child(4n+0) where the number 4 should be the last image from the first row. So if you have three pictures in a row, then the number should be three (3). The first number represents a cycle size, and is a counter (starts at 0), and last zero (0) is an offset value.",P=h(),F=c("h3"),F.textContent="Source",T=h(),C=c("ul"),C.innerHTML='<li><a href="http://samuelhaddad.com/2010/10/21/simple-xml-parse-flickr-feed/" rel="noopener" target="_blank" title="Samuel Haddad: Simple XML Parse Flickr Feed">samuelhaddad.com</a></li> \n<li><a href="https://www.flickr.com/services/api/flickr.photos.getSizes.html" rel="noopener" target="_blank">Flickr</a></li>',u(n,"class","language-PHP"),u(o,"id","flickr-thumb-sizes"),u(f,"id","css"),u(y,"class","language-PHP"),u(F,"id","source")},m(e,c){p(e,t,c),p(e,a,c),p(e,s,c),p(e,i,c),p(e,n,c),n.innerHTML='<code class="language-PHP">&lt;?php\n/* Author: Samuel Haddad (2010), edited by Timo Anttila (2015)\n * SimpleXML Flickr Feed Parser\n */\n\n// Feed URL in RSS Format\n$url =&quot;https://api.flickr.com/services/feeds/photos_public.gne?id=136453500@N06&amp;amp;lang=en-us&amp;amp;format=rss_200&quot;;\n\n//Use simple XML to parse the feed\n$xml = simplexml_load_file($url);\n$items = $xml-&gt;xpath(&#39;/rss/channel/item&#39;);\necho &quot;&lt;div class=&#39;gallery&#39;&gt;&quot;; // Wrapper\n\nforeach($items as $item)&#123;\n    $nsmedia = $item-&gt;children(&#39;http://search.yahoo.com/mrss/&#39;);\n    $img = $nsmedia-&gt;content-&gt;attributes(); // Image URL (b)\n    $thumb = strtr($img, array (&#39;_b.jpg&#39; =&gt; &#39;_t.jpg&#39;)); // Thumb\n    echo &quot;&lt;a href=&#39;$img&#39;&gt;&lt;img src=&#39;$thumb&#39; alt=&#39;&#39;&gt;&lt;/a&gt;&quot;; // Combine them all\n&#125;\necho &quot;&lt;/div&gt;&quot;;\n?&gt;</code>',p(e,l,c),p(e,o,c),p(e,r,c),p(e,m,c),p(e,d,c),p(e,f,c),p(e,w,c),p(e,x,c),p(e,k,c),p(e,y,c),y.innerHTML='<code class="language-PHP">.gallery a &#123;\n    display: inline-block;\n    vertical-align: top;\n    padding: 5px;\n    border: 1px solid #ccc;\n    margin: 0 5px 5px 0;\n&#125;\n\n.gallery a:nth-child(4n+0)&#123;\n    margin-right: 0;\n&#125;</code>',p(e,$,c),p(e,v,c),p(e,H,c),p(e,S,c),p(e,P,c),p(e,F,c),p(e,T,c),p(e,C,c)},p:g,d(e){e&&b(t),e&&b(a),e&&b(s),e&&b(i),e&&b(n),e&&b(l),e&&b(o),e&&b(r),e&&b(m),e&&b(d),e&&b(f),e&&b(w),e&&b(x),e&&b(k),e&&b(y),e&&b($),e&&b(v),e&&b(H),e&&b(S),e&&b(P),e&&b(F),e&&b(T),e&&b(C)}}}function x(e){let t,a;const c=[k];let h={$$slots:{default:[w]},$$scope:{ctx:e}};for(let e=0;e<c.length;e+=1)h=s(h,c[e]);return t=new f({props:h}),{c(){i(t.$$.fragment)},m(e,s){n(t,e,s),a=!0},p(e,[a]){const s=0&a?l(c,[d(k)]):{};1&a&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){a||(o(t.$$.fragment,e),a=!0)},o(e){r(t.$$.fragment,e),a=!1},d(e){m(t,e)}}}const k={title:"How to parse Flickr's XML feed with PHP",pub:[24,"Oct"],published:"2015-10-24T01:58:10.000Z",modified:"2015-10-24T01:58:10.000Z",summary:"This simple XML Flickr feed parser fetch newest photos and show them with links and thumbnails.",layout:"tutorial"};export default class extends e{constructor(e){super(),t(this,e,null,x,a,{})}}export{k as metadata};
//# sourceMappingURL=simple-xml-flickr-feed-parser-2c764552.js.map