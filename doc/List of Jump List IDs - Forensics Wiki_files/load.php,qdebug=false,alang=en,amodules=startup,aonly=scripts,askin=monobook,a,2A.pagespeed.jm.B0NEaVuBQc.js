var isCompatible=function(){if(navigator.appVersion.indexOf('MSIE')!==-1&&parseFloat(navigator.appVersion.split('MSIE')[1])<6){return false;}return true;};var startUp=function(){mw.config=new mw.Map(true);mw.loader.register([["site","1340205442",[],"site"],["noscript","1340205442",[],"noscript"],["startup","1358885985",[],"startup"],["user","1340205442",[],"user"],["user.groups","1340205442",[],"user"],["user.options","1358885985",[],"private"],["user.tokens","1340205442",[],"private"],["filepage","1340205442",[]],["skins.vector","1340205442",[]],["skins.monobook","1340205442",[]],["skins.simple","1340205442",[]],["skins.chick","1340205442",[]],["skins.modern","1340205442",[]],["skins.cologneblue","1340205442",[]],["skins.nostalgia","1340205442",[]],["skins.standard","1340205442",[]],["jquery","1340205442",[]],["jquery.async","1340205442",[]],["jquery.appear","1340205442",[]],["jquery.autoEllipsis","1340205442",["jquery.highlightText"]],["jquery.byteLength","1340205442",[]],["jquery.byteLimit","1340205442",["jquery.byteLength"]],["jquery.checkboxShiftClick","1340205442",[]],["jquery.client","1340205442",[]],["jquery.collapsibleTabs","1340205442",[]],["jquery.colorUtil","1340205442",[]],["jquery.color","1340205442",["jquery.colorUtil"]],["jquery.cookie","1340205442",[]],["jquery.delayedBind","1340205442",[]],["jquery.expandableField","1340205442",["jquery.delayedBind"]],["jquery.form","1340205442",[]],["jquery.getAttrs","1340205442",[]],["jquery.highlightText","1340205442",[]],["jquery.hoverIntent","1340205442",[]],["jquery.messageBox","1340205442",[]],["jquery.placeholder","1340205442",[]],["jquery.json","1340205442",[]],["jquery.localize","1340205442",[]],["jquery.makeCollapsible","1343662409",[]],["jquery.mwPrototypes","1340205442",[]],["jquery.qunit","1340205442",[]],["jquery.suggestions","1340205442",["jquery.autoEllipsis"]],["jquery.tabIndex","1340205442",[]],["jquery.tablesorter","1340205442",[]],["jquery.textSelection","1340205442",[]],["jquery.tipsy","1340205442",[]],["jquery.ui.core","1340205442",["jquery"],"jquery.ui"],["jquery.ui.widget","1340205442",[],"jquery.ui"],["jquery.ui.mouse","1340205442",["jquery.ui.widget"],"jquery.ui"],["jquery.ui.position","1340205442",[],"jquery.ui"],["jquery.ui.draggable","1340205442",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.droppable","1340205442",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget","jquery.ui.draggable"],"jquery.ui"],["jquery.ui.resizable","1340205442",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.selectable","1340205442",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.sortable","1340205442",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.accordion","1340205442",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.autocomplete","1340205442",["jquery.ui.core","jquery.ui.widget","jquery.ui.position"],"jquery.ui"],["jquery.ui.button","1340205442",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.datepicker","1340205442",["jquery.ui.core"],"jquery.ui"],["jquery.ui.dialog","1340205442",["jquery.ui.core","jquery.ui.widget","jquery.ui.button","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable"],"jquery.ui"],["jquery.ui.progressbar","1340205442",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.slider","1340205442",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.tabs","1340205442",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.effects.core","1340205442",["jquery"],"jquery.ui"],["jquery.effects.blind","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.bounce","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.clip","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.drop","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.explode","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fold","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.highlight","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.pulsate","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.scale","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.shake","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.slide","1340205442",["jquery.effects.core"],"jquery.ui"],["jquery.effects.transfer","1340205442",["jquery.effects.core"],"jquery.ui"],["mediawiki","1340205442",[]],["mediawiki.Title","1340205442",["mediawiki.util"]],["mediawiki.Uri","1340205442",[]],["mediawiki.htmlform","1340205442",[]],["mediawiki.user","1340205442",["jquery.cookie"]],["mediawiki.page.startup","1340205442",["jquery.client"]],["mediawiki.page.ready","1340205442",["jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.placeholder"]],["mediawiki.util","1340205442",["jquery.client","jquery.cookie","jquery.messageBox","jquery.mwPrototypes"]],["mediawiki.libs.jpegmeta","1340205442",[]],["mediawiki.action.history","1340205442",["jquery.ui.button"],"mediawiki.action.history"],["mediawiki.action.history.diff","1340205442",[],"mediawiki.action.history"],["mediawiki.action.edit","1340205442",["jquery.textSelection","jquery.byteLimit"]],["mediawiki.action.view.rightClickEdit","1340205442",[]],["mediawiki.action.view.metadata","1343665231",[]],["mediawiki.action.watch.ajax","1343677257",[]],["mediawiki.special","1340205442",[]],["mediawiki.special.preferences","1348751724",[]],["mediawiki.special.changeslist","1340205442",["jquery.makeCollapsible"]],["mediawiki.special.search","1340205442",[]],["mediawiki.special.block","1340205442",[]],["mediawiki.special.undelete","1340205442",[]],["mediawiki.special.movePage","1340205442",["jquery.byteLimit"]],["mediawiki.special.recentchanges","1340205442",["mediawiki.special"]],["mediawiki.special.upload","1345664195",["mediawiki.libs.jpegmeta"]],["mediawiki.language","1340205442",[]],["mediawiki.legacy.ajax","1340205442",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.commonPrint","1340205442",[]],["mediawiki.legacy.config","1340205442",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.IEFixes","1340205442",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.mwsuggest","1340205442",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.preview","1340205442",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.protect","1340205442",["mediawiki.legacy.wikibits","jquery.byteLimit"]],["mediawiki.legacy.shared","1340205442",[]],["mediawiki.legacy.oldshared","1340205442",[]],["mediawiki.legacy.upload","1340205442",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.wikibits","1343662409",["mediawiki.language"]],["mediawiki.legacy.wikiprintable","1340205442",[]],["ext.confirmAccount","1340205442",[]],["ext.nuke","1340205442",[]]]);mw.config.set({"wgLoadScript":"/w/load.php","debug":false,"skin":"monobook","stylepath":"/w/skins","wgUrlProtocols":"http\\:\\/\\/|https\\:\\/\\/|ftp\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|gopher\\:\\/\\/|telnet\\:\\/\\/|nntp\\:\\/\\/|worldwind\\:\\/\\/|mailto\\:|news\\:|svn\\:\\/\\/|git\\:\\/\\/|mms\\:\\/\\/|\\/\\/","wgArticlePath":"/wiki/$1","wgScriptPath":"/w","wgScriptExtension":".php","wgScript":"/w/index.php","wgVariantArticlePath":false,"wgActionPaths":[],"wgServer":"http://www.forensicswiki.org","wgUserLanguage":"en","wgContentLanguage":"en","wgVersion":"1.18.3","wgEnableAPI":true,"wgEnableWriteAPI":true,"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgSeparatorTransformTable":["",""],"wgDigitTransformTable":["",""],"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Forensics Wiki","5":"Forensics Wiki talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"forensics_wiki":4,"forensics_wiki_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgSiteName":"Forensics Wiki","wgFileExtensions":["png","jpg","jpeg","ogg","doc","xls","ppt","mp3","sxc","pdf","txt","docx","pptx","xml","xsd"],"wgDBname":"fwiki","wgFileCanRotate":true,"wgAvailableSkins":{"vector":"Vector","standard":"Standard","monobook":"MonoBook","modern":"Modern","cologneblue":"CologneBlue","nostalgia":"Nostalgia","chick":"Chick","myskin":"MySkin","simple":"Simple"},"wgExtensionAssetsPath":"/w/extensions","wgCookiePrefix":"fwiki_fwiki","wgResourceLoaderMaxQueryLength":-1,"wgLegacyJavaScriptGlobals":true,"wgCaseSensitiveNamespaces":[]});};if(isCompatible()){document.write("\x3cscript src=\"/w/load.php?debug=false\x26amp;lang=en\x26amp;modules=jquery%2Cmediawiki\x26amp;only=scripts\x26amp;skin=monobook\x26amp;version=20120425T212031Z\"\x3e\x3c/script\x3e");}delete isCompatible;;