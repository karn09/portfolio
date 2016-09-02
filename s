warning: LF will be replaced by CRLF in app/components/Folder.js.
The file will have its original line endings in your working directory.
[1mdiff --git a/app/components/Folder.js b/app/components/Folder.js[m
[1mindex c90f864..d5ccd1b 100644[m
[1m--- a/app/components/Folder.js[m
[1m+++ b/app/components/Folder.js[m
[36m@@ -5,7 +5,7 @@[m [mvar FolderItem = require('./FolderItem');[m
 var styles = {[m
   folder: {[m
     textIndent: '20%',[m
[31m-    color: 'grey'[m
[32m+[m[32m    color: 'grey',[m
   }[m
 };[m
 [m
[1mdiff --git a/app/components/SidebarNav.js b/app/components/SidebarNav.js[m
[1mindex dc0b52d..5fa3460 100644[m
[1m--- a/app/components/SidebarNav.js[m
[1m+++ b/app/components/SidebarNav.js[m
[36m@@ -9,9 +9,9 @@[m [mvar SidebarNav = React.createClass({[m
 			<div id="sidebar-wrapper">[m
         <ul className="sidebar-nav">[m
           <li>[m
[31m-            Folders[m
[31m-              <Folder name='About' />[m
[31m-              <Folder name='Projects' />[m
[32m+[m[32m            <span style={styles.header}>Folders</span>[m
[32m+[m[32m            <Folder name='About' />[m
[32m+[m[32m            <Folder name='Projects' />[m
           </li>[m
         </ul>[m
 			</div>[m
[36m@@ -22,7 +22,7 @@[m [mvar SidebarNav = React.createClass({[m
 [m
 styles = {[m
   header: {[m
[31m-    fontWeight: 800,[m
[32m+[m[32m    // fontWeight: 600,[m
     color: '#40E0D0'[m
   },[m
   fileItem: {[m
warning: LF will be replaced by CRLF in app/components/SidebarNav.js.
The file will have its original line endings in your working directory.
