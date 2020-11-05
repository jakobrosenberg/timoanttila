import{S as e,i as a,s as o,C as t,v as l,w as s,D as n,y as r,z as d,A as u,E as i,e as c,t as h,a as p,b as m,c as g,n as f,f as w}from"./main-552490a3.js";import{T as b}from"./Tutorial-42b2f2f1.js";function y(e){let a,o,t,l,s,n,r,d,u,i,b,y,S,T,k,x,L,C,H,D,M,v,_,q,E,I,$,A,R,j,U,Y,B,O,W,P,z,F,N,G,Q,Z,J,V,X,K,ee,ae,oe,te,le,se,ne,re,de,ue,ie,ce,he,pe,me,ge,fe,we,be,ye,Se,Te,ke,xe,Le,Ce,He,De,Me,ve,_e,qe,Ee,Ie,$e,Ae,Re,je,Ue,Ye,Be,Oe,We,Pe,ze,Fe,Ne,Ge,Qe,Ze,Je,Ve,Xe,Ke,ea,aa,oa,ta,la,sa,na,ra,da,ua,ia,ca,ha,pa,ma,ga,fa,wa,ba,ya,Sa,Ta,ka,xa,La,Ca,Ha,Da,Ma,va,_a,qa,Ea,Ia,$a,Aa,Ra;return{c(){a=c("a"),a.textContent="Drush",o=h(" is a command-line shell and scripting interface for "),t=c("a"),t.textContent="Drupal",l=h(". It makes my life a lot easier because I don't have to manage all the websites from Drupal's admin pages, but I can give commands to the server's command line. It helps you perform admin tasks using one or few commands in the terminal.\n"),s=c("p"),s.innerHTML='You need to <a href="https://en.wikipedia.org/wiki/Secure_Shell" rel="noopener" target="_blank" title="Wikipedia: Secure Shell">SSH access</a> to your server and write all commands to the terminal. <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/" rel="noopener" target="_blank">PuTTY</a> is very good tool for Windows and OS X / Linux got their own terminal + ssh software so you can just start by making a connection to your server. If you don’t know how to use ssh then you probably don’t want to play with drush.',n=p(),r=c("h2"),r.textContent="Install drush",d=p(),u=c("p"),u.textContent="Download latest stable release using the code below:",i=p(),b=c("pre"),y=p(),S=c("p"),S.innerHTML="No one likes to use long commands like <code>php drush.phar &lt;drush_command&gt;</code> so let’s make it work as normal commands. If you have <code>sudo</code> or <code>root</code> access to your server then copy <code>drush.phar</code> to <code>/usr/local/bin/</code>.",T=p(),k=c("pre"),x=p(),L=c("p"),L.innerHTML="If you don’t have special rights to a server, you can add <code>export PATH=$PATH:&lt;/path/to/file&gt;</code> to your <code>~/.bashrc</code> file (if your system use bash).",C=p(),H=c("h2"),H.textContent="Download, enable and uninstall modules",D=p(),M=c("p"),M.textContent="Go to your Drupal installation folder.",v=p(),_=c("pre"),q=p(),E=c("p"),E.innerHTML='You can download and enable any module from <a href="https://www.drupal.org/project/project_module" rel="noopener" target="_blank" title="Official Drupal Modules">Drupal.org</a> and you can enable multiple modules at once.',I=p(),$=c("p"),$.textContent="I use this “one liner” to activate all the necessary modules for new site (Drush download the modules automatically):",A=p(),R=c("pre"),j=p(),U=c("p"),U.innerHTML="Command <code>drush en</code> enable module. You can also only download modules without activating them by using <code>drush dl</code> (pm-download).",Y=p(),B=c("p"),B.innerHTML="<code>drush dis</code> (pm-disable) is a command to uninstall. Drush can’t delete modules so you have to do that manually (<code>rm -rf /&lt;your_drupal_folder&gt;/sites/all/modules/&lt;module&gt;</code>).",O=p(),W=c("h2"),W.textContent="Update Drupal with Drush",P=p(),z=c("p"),z.textContent="See main information and status of the site:",F=p(),N=c("pre"),G=p(),Q=c("p"),Q.textContent="Before I found Drush it was a pain in the ass upgrading Drupal core and all enabled modules. Now you can just write one simple command and watch how Drush does all the work for you.",Z=p(),J=c("p"),J.textContent="Use the command below to see all available updates. Before using the update command you should clear all the cache files from Drush and Drupal.",V=p(),X=c("pre"),K=p(),ee=c("p"),ee.innerHTML="Command update (<code>up</code>) updates all modules pending, but you can also update only one or a few modules at the time. If you’re updating a very important site, then you should first take a backup from SQL database and then update all modules one by one so if something goes wrong you know which module is the most problematic.",ae=p(),oe=c("p"),oe.innerHTML="<code>-y</code> skips the confirmation question.",te=p(),le=c("pre"),se=p(),ne=c("p"),ne.textContent="That command also updates your database if needed, but you can also do it without updating modules.",re=p(),de=c("pre"),ue=p(),ie=c("p"),ie.textContent="Drush always takes backups from modules and core before upgrading them, so if a new version is not good for you, you can always switch back to old ones.",ce=p(),he=c("h2"),he.textContent="See all the enabled modules",pe=p(),me=c("pre"),ge=p(),fe=c("p"),fe.textContent="If you want to find certain module from the list:",we=p(),be=c("pre"),ye=p(),Se=c("p"),Se.textContent="Information about certain module:",Te=p(),ke=c("pre"),xe=p(),Le=c("h2"),Le.textContent="Disable and uninstall modules",Ce=p(),He=c("p"),He.innerHTML="Command disable (<code>dis</code>) only disables the module, but does not delete anything. Can also disable all modules depending on disabled module.",De=p(),Me=c("p"),Me.textContent="Command pm-uninstall disable module and delete all information from SQL. Module is still under all/modules after pm-uninstall but all data is gone.",ve=p(),_e=c("pre"),qe=p(),Ee=c("p"),Ee.textContent="If Drupal is broken and you can’t disable modules normally:",Ie=p(),$e=c("pre"),Ae=p(),Re=c("h2"),Re.textContent="How to disable all non-core modules",je=p(),Ue=c("pre"),Ye=p(),Be=c("h2"),Be.textContent="Drush Lock: How to freeze the version of a module during ‘drush up’",Oe=p(),We=c("p"),We.textContent="Every so often I will find myself needing to update lots of Drupal modules but not one in particular.",Pe=p(),ze=c("pre"),Fe=p(),Ne=c("h2"),Ne.textContent="Backup",Ge=p(),Qe=c("p"),Qe.innerHTML="Drush can backup your database, code and files into a single file.<br/>\nCommands: <code>archive-dump</code> (ard) and <code>archive-restore</code> (arr).",Ze=p(),Je=c("pre"),Ve=p(),Xe=c("p"),Xe.textContent="You can also backup only your database:",Ke=p(),ea=c("pre"),aa=p(),oa=c("h2"),oa.textContent="Recovering the administrator password",ta=p(),la=c("pre"),sa=p(),na=c("p"),na.textContent="You can also use that command for any other user.",ra=p(),da=c("h2"),da.textContent="Unlock a locked user account",ua=p(),ia=c("p"),ia.textContent="Drupal locks the user account after five failed attempts. That is very good if someone tries to guess your password, but very bad if you tried and failed multiple times yourself. This command will unlock the user account which was locked because of flood / spam.",ca=p(),ha=c("pre"),pa=p(),ma=c("h2"),ma.textContent="Create and delete users",ga=p(),fa=c("pre"),wa=p(),ba=c("h2"),ba.textContent="Force logout",ya=p(),Sa=c("p"),Sa.textContent="Log all users out:",Ta=p(),ka=c("pre"),xa=p(),La=c("h3"),La.textContent="Log out a specific user",Ca=p(),Ha=c("pre"),Da=p(),Ma=c("h2"),Ma.textContent="Update all Drupal websites",va=p(),_a=c("p"),_a.innerHTML='I made a script which I use to update all hosted Drupal websites at once. Very simple script, but still so powerful and saves a lot of time. You can find this script at <a href="https://github.com/timoanttila/Drupal-Drush" rel="noopener" target="_blank" title="Drush script by Timo Anttila">Github</a>.',qa=p(),Ea=c("pre"),Ia=p(),$a=c("h3"),$a.textContent="Read more",Aa=p(),Ra=c("ul"),Ra.innerHTML='<li><a href="https://github.com/timoanttila/Drupal-Drush" rel="noopener" target="_blank">Update all your Drupal websites once</a></li> \n<li><a href="http://docs.drush.org/en/master/" rel="noopener" target="_blank">Drush Docs</a></li>',m(a,"href","https://www.drush.org/"),m(a,"rel","noopener"),m(a,"target","_blank"),m(t,"href","https://www.drupal.org/"),m(t,"rel","noopener"),m(t,"target","_blank"),m(r,"id","install-drush"),m(b,"class","language-Shell"),m(k,"class","language-Shell"),m(H,"id","download-enable-and-uninstall-modules"),m(_,"class","language-Shell"),m(R,"class","language-Shell"),m(W,"id","update-drupal-with-drush"),m(N,"class","language-Shell"),m(X,"class","language-Shell"),m(le,"class","language-Shell"),m(de,"class","language-Shell"),m(he,"id","see-all-the-enabled-modules"),m(me,"class","language-Shell"),m(be,"class","language-Shell"),m(ke,"class","language-Shell"),m(Le,"id","disable-and-uninstall-modules"),m(_e,"class","language-Shell"),m($e,"class","language-Shell"),m(Re,"id","how-to-disable-all-non-core-modules"),m(Ue,"class","language-Shell"),m(Be,"id","drush-lock-how-to-freeze-the-version-of-a-module-during-drush-up"),m(ze,"class","language-Shell"),m(Ne,"id","backup"),m(Je,"class","language-Shell"),m(ea,"class","language-Shell"),m(oa,"id","recovering-the-administrator-password"),m(la,"class","language-Shell"),m(da,"id","unlock-a-locked-user-account"),m(ha,"class","language-Shell"),m(ma,"id","create-and-delete-users"),m(fa,"class","language-Shell"),m(ba,"id","force-logout"),m(ka,"class","language-Shell"),m(La,"id","log-out-a-specific-user"),m(Ha,"class","language-Shell"),m(Ma,"id","update-all-drupal-websites"),m(Ea,"class","language-Bash"),m($a,"id","read-more")},m(e,c){g(e,a,c),g(e,o,c),g(e,t,c),g(e,l,c),g(e,s,c),g(e,n,c),g(e,r,c),g(e,d,c),g(e,u,c),g(e,i,c),g(e,b,c),b.innerHTML='<code class="language-Shell">wget -O drush.phar https://github.com/drush-ops/drush-launcher/releases/download/0.6.0/drush.phar</code>',g(e,y,c),g(e,S,c),g(e,T,c),g(e,k,c),k.innerHTML='<code class="language-Shell">chmod +x drush.phar\nsudo mv drush.phar /usr/local/bin/drush</code>',g(e,x,c),g(e,L,c),g(e,C,c),g(e,H,c),g(e,D,c),g(e,M,c),g(e,v,c),g(e,_,c),_.innerHTML='<code class="language-Shell">cd /&lt;your_drupal_folder&gt;/sites</code>',g(e,q,c),g(e,E,c),g(e,I,c),g(e,$,c),g(e,A,c),g(e,R,c),R.innerHTML='<code class="language-Shell">drush en pathauto ckeditor views jquery_update module_filter transliteration l10n_update admin_menu admin_menu_toolbar imce less html5_tools menu_block views_ui ctools token libraries elements field_ui overlay image contextual taxonomy</code>',g(e,j,c),g(e,U,c),g(e,Y,c),g(e,B,c),g(e,O,c),g(e,W,c),g(e,P,c),g(e,z,c),g(e,F,c),g(e,N,c),N.innerHTML='<code class="language-Shell">drush status</code>',g(e,G,c),g(e,Q,c),g(e,Z,c),g(e,J,c),g(e,V,c),g(e,X,c),X.innerHTML='<code class="language-Shell">drush rf\ndrush cc all\ndrush up</code>',g(e,K,c),g(e,ee,c),g(e,ae,c),g(e,oe,c),g(e,te,c),g(e,le,c),le.innerHTML='<code class="language-Shell">drush up drupal -y\ndrush up module1 module2 -y</code>',g(e,se,c),g(e,ne,c),g(e,re,c),g(e,de,c),de.innerHTML='<code class="language-Shell">drush updb</code>',g(e,ue,c),g(e,ie,c),g(e,ce,c),g(e,he,c),g(e,pe,c),g(e,me,c),me.innerHTML='<code class="language-Shell">drush pm-list --type=Module --no-core --status=enabled</code>',g(e,ge,c),g(e,fe,c),g(e,we,c),g(e,be,c),be.innerHTML='<code class="language-Shell">drush pm-list --type=Module --no-core --status=enabled | grep module</code>',g(e,ye,c),g(e,Se,c),g(e,Te,c),g(e,ke,c),ke.innerHTML='<code class="language-Shell">drush pm-info &lt;module_name&gt;</code>',g(e,xe,c),g(e,Le,c),g(e,Ce,c),g(e,He,c),g(e,De,c),g(e,Me,c),g(e,ve,c),g(e,_e,c),_e.innerHTML='<code class="language-Shell">drush dis module1 module2 -y\ndrush pm-uninstall module -y</code>',g(e,qe,c),g(e,Ee,c),g(e,Ie,c),g(e,$e,c),$e.innerHTML='<code class="language-Shell">drush sql-query &quot;UPDATE system SET status = &#39;0&#39; WHERE name = &#39;module_name&#39;&quot;\ndrush sql-query &quot;DELETE FROM cache_bootstrap WHERE cid = &#39;system_list&#39;&quot;</code>',g(e,Ae,c),g(e,Re,c),g(e,je,c),g(e,Ue,c),Ue.innerHTML='<code class="language-Shell">drush pml --no-core --type=module --status=enabled --pipe | xargs drush -y dis</code>',g(e,Ye,c),g(e,Be,c),g(e,Oe,c),g(e,We,c),g(e,Pe,c),g(e,ze,c),ze.innerHTML='<code class="language-Shell">drush up --lock=views_slideshow\ndrush up --unlock=views_slideshow</code>',g(e,Fe,c),g(e,Ne,c),g(e,Ge,c),g(e,Qe,c),g(e,Ze,c),g(e,Je,c),Je.innerHTML='<code class="language-Shell">drush ard default --destination=/backups/mysite.tar</code>',g(e,Ve,c),g(e,Xe,c),g(e,Ke,c),g(e,ea,c),ea.innerHTML='<code class="language-Shell">drush sql-dump &gt; /path/to/backup_dir/database-backup.sql</code>',g(e,aa,c),g(e,oa,c),g(e,ta,c),g(e,la,c),la.innerHTML='<code class="language-Shell">drush upwd --password=&quot;password1234&quot; admin</code>',g(e,sa,c),g(e,na,c),g(e,ra,c),g(e,da,c),g(e,ua,c),g(e,ia,c),g(e,ca,c),g(e,ha,c),ha.innerHTML='<code class="language-Shell">drush sql-query &quot;delete from flood&quot;</code>',g(e,pa,c),g(e,ma,c),g(e,ga,c),g(e,fa,c),fa.innerHTML='<code class="language-Shell">drush user-create username --mail=&quot;person@example.com&quot; --password=&quot;letmein&quot;\ndrush user-cancel username</code>',g(e,wa,c),g(e,ba,c),g(e,ya,c),g(e,Sa,c),g(e,Ta,c),g(e,ka,c),ka.innerHTML='<code class="language-Shell">drush sql-query &#39;TRUNCATE TABLE sessions;&#39;</code>',g(e,xa,c),g(e,La,c),g(e,Ca,c),g(e,Ha,c),Ha.innerHTML='<code class="language-Shell">drush sql-query &#39;DELETE FROM sessions WHERE uid = 2;&#39;</code>',g(e,Da,c),g(e,Ma,c),g(e,va,c),g(e,_a,c),g(e,qa,c),g(e,Ea,c),Ea.innerHTML='<code class="language-Bash">#!/bin/sh\n# Author: Timo Anttila, moro@tuspe.com\ncd /www/drupal\nfor d in ./* ; do (cd &quot;$d/www/sites&quot; &amp;amp;&amp;amp; drush up -y &amp;amp;&amp;amp; drush cc all); done\nchown -R www-data.www-data /www/drupal</code>',g(e,Ia,c),g(e,$a,c),g(e,Aa,c),g(e,Ra,c)},p:f,d(e){e&&w(a),e&&w(o),e&&w(t),e&&w(l),e&&w(s),e&&w(n),e&&w(r),e&&w(d),e&&w(u),e&&w(i),e&&w(b),e&&w(y),e&&w(S),e&&w(T),e&&w(k),e&&w(x),e&&w(L),e&&w(C),e&&w(H),e&&w(D),e&&w(M),e&&w(v),e&&w(_),e&&w(q),e&&w(E),e&&w(I),e&&w($),e&&w(A),e&&w(R),e&&w(j),e&&w(U),e&&w(Y),e&&w(B),e&&w(O),e&&w(W),e&&w(P),e&&w(z),e&&w(F),e&&w(N),e&&w(G),e&&w(Q),e&&w(Z),e&&w(J),e&&w(V),e&&w(X),e&&w(K),e&&w(ee),e&&w(ae),e&&w(oe),e&&w(te),e&&w(le),e&&w(se),e&&w(ne),e&&w(re),e&&w(de),e&&w(ue),e&&w(ie),e&&w(ce),e&&w(he),e&&w(pe),e&&w(me),e&&w(ge),e&&w(fe),e&&w(we),e&&w(be),e&&w(ye),e&&w(Se),e&&w(Te),e&&w(ke),e&&w(xe),e&&w(Le),e&&w(Ce),e&&w(He),e&&w(De),e&&w(Me),e&&w(ve),e&&w(_e),e&&w(qe),e&&w(Ee),e&&w(Ie),e&&w($e),e&&w(Ae),e&&w(Re),e&&w(je),e&&w(Ue),e&&w(Ye),e&&w(Be),e&&w(Oe),e&&w(We),e&&w(Pe),e&&w(ze),e&&w(Fe),e&&w(Ne),e&&w(Ge),e&&w(Qe),e&&w(Ze),e&&w(Je),e&&w(Ve),e&&w(Xe),e&&w(Ke),e&&w(ea),e&&w(aa),e&&w(oa),e&&w(ta),e&&w(la),e&&w(sa),e&&w(na),e&&w(ra),e&&w(da),e&&w(ua),e&&w(ia),e&&w(ca),e&&w(ha),e&&w(pa),e&&w(ma),e&&w(ga),e&&w(fa),e&&w(wa),e&&w(ba),e&&w(ya),e&&w(Sa),e&&w(Ta),e&&w(ka),e&&w(xa),e&&w(La),e&&w(Ca),e&&w(Ha),e&&w(Da),e&&w(Ma),e&&w(va),e&&w(_a),e&&w(qa),e&&w(Ea),e&&w(Ia),e&&w($a),e&&w(Aa),e&&w(Ra)}}}function S(e){let a,o;const c=[T];let h={$$slots:{default:[y]},$$scope:{ctx:e}};for(let e=0;e<c.length;e+=1)h=t(h,c[e]);return a=new b({props:h}),{c(){l(a.$$.fragment)},m(e,t){s(a,e,t),o=!0},p(e,[o]){const t=0&o?n(c,[i(T)]):{};1&o&&(t.$$scope={dirty:o,ctx:e}),a.$set(t)},i(e){o||(r(a.$$.fragment,e),o=!0)},o(e){d(a.$$.fragment,e),o=!1},d(e){u(a,e)}}}const T={title:"A beginner's guide to Drush",pub:[1,"Jan"],published:"2016-01-27T18:01:10.000Z",modified:"2020-09-10T21:43:05.000Z",summary:"Drush is a command-line shell and scripting interface for Drupal. This tutorial help you understand how Drush works and how it makes your life easier.",layout:"tutorial"};export default class extends e{constructor(e){super(),a(this,e,null,S,o,{})}}export{T as metadata};
//# sourceMappingURL=drush-d62a84d2.js.map
