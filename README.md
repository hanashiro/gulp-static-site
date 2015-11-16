# Static Site

A simple static site builder with gulp and sass


# Structure
> **dev** - directory with editable files.

> **dev/partials** - directory with partials you can reuse, like header and footer. You can pass variable to the partials.

> **dev/templates** - directory with html files. In these files you can call the partials and pass variables to them. After build, these files will be your pages.

> **prod** - this folder is the distributable..

# CSS Directory
The **dev/css** directory uses the ITCSS structure. It has a "styles.css" files to import other folders content. Don't change this file.

Each directory has a principal file to import other files from the same directory. These principal files are called on "styles.scss". Like in compass, files with a "_" as a name prefix won't be compiled to a css file, so the unique css file will be from the "styles.scss" file, with the content of all files together.

***TLDR*** - Just create files inside the folders and with "_" as prefix name


# Gulp commands
```sh
$ gulp serve
Starts a server with livereload, watch files changes and build. 
```
```sh
$ gulp build
Compiles and minify all files.
```
```sh
$ gulp clean
Cleans the prod directory.
```