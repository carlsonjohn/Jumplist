mw.loader.implement("jquery.client",function($){(function($){var profileCache={};$.client={profile:function(nav){if(nav===undefined){nav=window.navigator;}if(profileCache[nav.userAgent]===undefined){var uk='unknown';var x='x';var wildUserAgents=['Opera','Navigator','Minefield','KHTML','Chrome','PLAYSTATION 3'];var userAgentTranslations=[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape'],['PLAYSTATION 3','PS3']];var versionPrefixes=['camino','chrome','firefox','netscape','netscape6','opera','version','konqueror','lynx','msie','safari','ps3'];var versionSuffix='(\\/|\\;?\\s|)([a-z0-9\\.\\+]*?)(\\;|dev|rel|\\)|\\s|$)';var names=['camino','chrome','firefox','netscape','konqueror','lynx','msie','opera','safari','ipod','iphone','blackberry','ps3'];var nameTranslations=[];var layouts=['gecko','konqueror','msie','opera','webkit'];var layoutTranslations=[['konqueror','khtml'],['msie','trident'],[
'opera','presto']];var layoutVersions=['applewebkit','gecko'];var platforms=['win','mac','linux','sunos','solaris','iphone'];var platformTranslations=[['sunos','solaris']];var translate=function(source,translations){for(var i=0;i<translations.length;i++){source=source.replace(translations[i][0],translations[i][1]);}return source;};var ua=nav.userAgent,match,name=uk,layout=uk,layoutversion=uk,platform=uk,version=x;if(match=new RegExp('('+wildUserAgents.join('|')+')').exec(ua)){ua=translate(ua,userAgentTranslations);}ua=ua.toLowerCase();if(match=new RegExp('('+names.join('|')+')').exec(ua)){name=translate(match[1],nameTranslations);}if(match=new RegExp('('+layouts.join('|')+')').exec(ua)){layout=translate(match[1],layoutTranslations);}if(match=new RegExp('('+layoutVersions.join('|')+')\\\/(\\d+)').exec(ua)){layoutversion=parseInt(match[2],10);}if(match=new RegExp('('+platforms.join('|')+')').exec(nav.platform.toLowerCase())){platform=translate(match[1],platformTranslations);}if(match=new
RegExp('('+versionPrefixes.join('|')+')'+versionSuffix).exec(ua)){version=match[3];}if(name.match(/safari/)&&version>400){version='2.0';}if(name==='opera'&&version>=9.8){version=ua.match(/version\/([0-9\.]*)/i)[1]||10;}var versionNumber=parseFloat(version,10)||0.0;profileCache[nav.userAgent]={'name':name,'layout':layout,'layoutVersion':layoutversion,'platform':platform,'version':version,'versionBase':(version!==x?Math.floor(versionNumber).toString():x),'versionNumber':versionNumber};}return profileCache[nav.userAgent];},test:function(map,profile){profile=$.isPlainObject(profile)?profile:$.client.profile();var dir=$('body').is('.rtl')?'rtl':'ltr';if(typeof map[dir]!=='object'||typeof map[dir][profile.name]==='undefined'){return true;}var conditions=map[dir][profile.name];for(var i=0;i<conditions.length;i++){var op=conditions[i][0];var val=conditions[i][1];if(val===false){return false;}else if(typeof val=='string'){if(!(eval('profile.version'+op+'"'+val+'"'))){return false;}}else if(
typeof val=='number'){if(!(eval('profile.versionNumber'+op+val))){return false;}}}return true;}};})(jQuery);;},{},{});mw.loader.implement("mediawiki.page.startup",function($){(function($){$('html').addClass('client-js').removeClass('client-nojs');})(jQuery);;},{},{});

/* cache key: fwiki-fwiki:resourceloader:filter:minify-js:4:b4b179e82c26c40639f621479b89207a */